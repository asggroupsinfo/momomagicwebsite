import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { query } from '@/lib/db';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

async function ensureUploadDir() {
  try {
    await fs.access(UPLOAD_DIR);
  } catch {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureUploadDir();
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'root';
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }
    
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }
    
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }
    
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const timestamp = Date.now();
    const originalName = file.name.replace(/\.[^/.]+$/, '');
    const webpFilename = `${originalName}-${timestamp}.webp`;
    const webpPath = path.join(UPLOAD_DIR, webpFilename);
    
    const metadata = await sharp(buffer).metadata();
    
    await sharp(buffer)
      .webp({ quality: 85 })
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .toFile(webpPath);
    
    const thumbnailSizes = [400, 800, 1200];
    const thumbnails: Record<string, string> = {};
    
    for (const size of thumbnailSizes) {
      const thumbFilename = `${originalName}-${timestamp}-${size}w.webp`;
      const thumbPath = path.join(UPLOAD_DIR, thumbFilename);
      
      await sharp(buffer)
        .webp({ quality: 85 })
        .resize(size, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .toFile(thumbPath);
      
      thumbnails[`${size}w`] = `/uploads/${thumbFilename}`;
    }
    
    const stats = await fs.stat(webpPath);
    
    const mediaId = `MEDIA-${timestamp}`;
    await query(
      `INSERT INTO media_files (id, filename, original_name, file_size, mime_type, width, height, folder)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        mediaId,
        webpFilename,
        file.name,
        stats.size,
        'image/webp',
        metadata.width || null,
        metadata.height || null,
        folder,
      ]
    );
    
    return NextResponse.json({
      success: true,
      message: 'Image uploaded and optimized successfully',
      data: {
        id: mediaId,
        url: `/uploads/${webpFilename}`,
        thumbnails,
        originalSize: file.size,
        optimizedSize: stats.size,
        compressionRatio: ((1 - stats.size / file.size) * 100).toFixed(2) + '%',
      },
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
