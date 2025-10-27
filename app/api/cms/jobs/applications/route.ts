import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('jobId');
    const status = searchParams.get('status');
    
    let sql = `
      SELECT ja.*, j.title as job_title
      FROM job_applications ja
      LEFT JOIN jobs j ON ja.job_id = j.id
      WHERE 1=1
    `;
    
    const params: any[] = [];
    
    if (jobId) {
      sql += ' AND ja.job_id = ?';
      params.push(jobId);
    }
    
    if (status && status !== 'all') {
      sql += ' AND ja.status = ?';
      params.push(status);
    }
    
    sql += ' ORDER BY ja.created_at DESC';
    
    const applications = await query(sql, params);
    
    return NextResponse.json({ applications });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { application } = body;
    
    if (!application) {
      return NextResponse.json(
        { error: 'Application data is required' },
        { status: 400 }
      );
    }
    
    const applicationId = `APP-${Date.now()}`;
    const sql = `
      INSERT INTO job_applications (id, job_id, name, email, phone, resume_url, cover_letter, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    await query(sql, [
      applicationId,
      application.jobId,
      application.name,
      application.email,
      application.phone,
      application.resumeUrl || null,
      application.coverLetter || null,
      application.status || 'new',
    ]);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      applicationId 
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { applicationId, status } = body;
    
    if (!applicationId || !status) {
      return NextResponse.json(
        { error: 'Application ID and status are required' },
        { status: 400 }
      );
    }
    
    await query(
      'UPDATE job_applications SET status = ? WHERE id = ?',
      [status, applicationId]
    );
    
    return NextResponse.json({ 
      success: true, 
      message: 'Application status updated successfully' 
    });
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json(
      { error: 'Failed to update application' },
      { status: 500 }
    );
  }
}
