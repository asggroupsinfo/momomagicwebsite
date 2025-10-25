import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'momomagic',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

let pool: mysql.Pool | null = null;

export function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
}

export async function query<T = any>(
  sql: string,
  params?: any[]
): Promise<T[]> {
  const connection = await getPool().getConnection();
  try {
    const [rows] = await connection.execute(sql, params);
    return rows as T[];
  } finally {
    connection.release();
  }
}

export async function queryOne<T = any>(
  sql: string,
  params?: any[]
): Promise<T | null> {
  const rows = await query<T>(sql, params);
  return rows.length > 0 ? rows[0] : null;
}

export async function insert(
  sql: string,
  params?: any[]
): Promise<number> {
  const connection = await getPool().getConnection();
  try {
    const [result] = await connection.execute(sql, params);
    return (result as any).insertId;
  } finally {
    connection.release();
  }
}

export async function update(
  sql: string,
  params?: any[]
): Promise<number> {
  const connection = await getPool().getConnection();
  try {
    const [result] = await connection.execute(sql, params);
    return (result as any).affectedRows;
  } finally {
    connection.release();
  }
}

export async function deleteQuery(
  sql: string,
  params?: any[]
): Promise<number> {
  const connection = await getPool().getConnection();
  try {
    const [result] = await connection.execute(sql, params);
    return (result as any).affectedRows;
  } finally {
    connection.release();
  }
}

export async function testConnection(): Promise<boolean> {
  try {
    const connection = await getPool().getConnection();
    connection.release();
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
