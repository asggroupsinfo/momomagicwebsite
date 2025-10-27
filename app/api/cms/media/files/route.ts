import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import fs from 'fs/promises';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder') || 'root';
    const mediaId = searchParams.get('id');
    
    if (mediaId) {
      const file = await query(
        'SELECT * FROM media_files WHERE id = ?',
        [mediaId]
      );
      
      if (file.length === 0) {
        return NextResponse.json(
          { error: 'File not found' },
          { status: 404 }
        );
      }
      
      const usage = await query(
        'SELECT * FROM media_usage WHERE media_id = ?',
        [mediaId]
      );
      
      return NextResponse.json({ 
        file: file[0],
        usage 
      });
    }
    
    const files = await query(
      'SELECT * FROM media_files WHERE folder = ? ORDER BY uploaded_at DESC',
      [folder]
    );
    
    const folders = await query(
      'SELECT DISTINCT folder FROM media_files WHERE folder != ?',
      ['root']
    );
    
    return NextResponse.json({ 
      files,
      folders: folders.map((f: any) => f.folder)
    });
  } catch (error) {
    console.error('Error fetching media files:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media files' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fileId, folder } = body;
    
    if (!fileId || !folder) {
      return NextResponse.json(
        { error: 'File ID and folder are required' },
        { status: 400 }
      );
    }
    
    await query(
      'UPDATE media_files SET folder = ? WHERE id = ?',
      [folder, fileId]
    );
    
    return NextResponse.json({ 
      success: true, 
      message: 'File moved successfully' 
    });
  } catch (error) {
    console.error('Error moving file:', error);
    return NextResponse.json(
      { error: 'Failed to move file' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fileId = searchParams.get('id');
    const fileIds = searchParams.get('ids');
    
    if (!fileId && !fileIds) {
      return NextResponse.json(
        { error: 'File ID(s) required' },
        { status: 400 }
      );
    }
    
    const idsToDelete = fileIds ? fileIds.split(',') : [fileId];
    
    for (const id of idsToDelete) {
      const file = await query(
        'SELECT filename FROM media_files WHERE id = ?',
        [id]
      );
      
      if (file.length > 0) {
        const filePath = path.join(UPLOAD_DIR, file[0].filename);
        try {
          await fs.unlink(filePath);
        } catch (err) {
          console.error(`Failed to delete file: ${filePath}`, err);
        }
        
        await query('DELETE FROM media_files WHERE id = ?', [id]);
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      message: `${idsToDelete.length} file(s) deleted successfully` 
    });
  } catch (error) {
    console.error('Error deleting files:', error);
    return NextResponse.json(
      { error: 'Failed to delete files' },
      { status: 500 }
    );
  }
}
