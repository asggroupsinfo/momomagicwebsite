import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    let sql = 'SELECT * FROM jobs';
    
    if (status && status !== 'all') {
      sql += ` WHERE status = ?`;
    }
    
    sql += ' ORDER BY created_at DESC';
    
    const jobs = await query(sql, status && status !== 'all' ? [status] : []);
    
    return NextResponse.json({ jobs });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { job } = body;
    
    if (!job) {
      return NextResponse.json(
        { error: 'Job data is required' },
        { status: 400 }
      );
    }
    
    if (job.id) {
      const sql = `
        UPDATE jobs 
        SET title = ?, department = ?, location = ?, type = ?, 
            salary_range = ?, description = ?, requirements = ?, status = ?
        WHERE id = ?
      `;
      
      await query(sql, [
        job.title,
        job.department,
        job.location,
        job.type,
        job.salaryRange,
        job.description,
        job.requirements,
        job.status,
        job.id,
      ]);
    } else {
      const jobId = `JOB-${Date.now()}`;
      const sql = `
        INSERT INTO jobs (id, title, department, location, type, salary_range, description, requirements, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      
      await query(sql, [
        jobId,
        job.title,
        job.department,
        job.location,
        job.type,
        job.salaryRange,
        job.description,
        job.requirements,
        job.status || 'draft',
      ]);
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Job saved successfully' 
    });
  } catch (error) {
    console.error('Error saving job:', error);
    return NextResponse.json(
      { error: 'Failed to save job' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('id');
    
    if (!jobId) {
      return NextResponse.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }
    
    await query('DELETE FROM jobs WHERE id = ?', [jobId]);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Job deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting job:', error);
    return NextResponse.json(
      { error: 'Failed to delete job' },
      { status: 500 }
    );
  }
}
