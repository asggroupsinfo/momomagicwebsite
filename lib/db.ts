import mysql from 'mysql2/promise';
import { Pool as PgPool } from 'pg';

function getDatabaseConfig() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (databaseUrl) {
    try {
      const url = new URL(databaseUrl);
      return {
        type: url.protocol.startsWith('postgres') ? 'postgres' : 'mysql',
        host: url.hostname,
        port: parseInt(url.port || (url.protocol.startsWith('postgres') ? '5432' : '3306')),
        user: url.username,
        password: url.password,
        database: url.pathname.slice(1),
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      };
    } catch (error) {
      console.error('Failed to parse DATABASE_URL:', error);
    }
  }
  
  return {
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'momomagic',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  };
}

const dbConfig = getDatabaseConfig();

let pool: mysql.Pool | PgPool | null = null;

export function getPool(): mysql.Pool | PgPool {
  if (!pool) {
    if (dbConfig.type === 'postgres') {
      pool = new PgPool({
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        max: dbConfig.connectionLimit,
      });
    } else {
      pool = mysql.createPool(dbConfig);
    }
  }
  return pool;
}

function convertMySQLToPostgres(sql: string): string {
  let index = 1;
  return sql.replace(/\?/g, () => `$${index++}`);
}

export async function query<T = any>(
  sql: string,
  params?: any[]
): Promise<T[]> {
  if (dbConfig.type === 'postgres') {
    const pgPool = getPool() as PgPool;
    const client = await pgPool.connect();
    try {
      const pgSql = convertMySQLToPostgres(sql);
      const result = await client.query(pgSql, params);
      return result.rows as T[];
    } finally {
      client.release();
    }
  } else {
    const mysqlPool = getPool() as mysql.Pool;
    const connection = await mysqlPool.getConnection();
    try {
      const [rows] = await connection.execute(sql, params);
      return rows as T[];
    } finally {
      connection.release();
    }
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
  if (dbConfig.type === 'postgres') {
    const pgPool = getPool() as PgPool;
    const client = await pgPool.connect();
    try {
      const pgSql = convertMySQLToPostgres(sql);
      const result = await client.query(pgSql, params);
      return result.rows[0]?.id || 0;
    } finally {
      client.release();
    }
  } else {
    const mysqlPool = getPool() as mysql.Pool;
    const connection = await mysqlPool.getConnection();
    try {
      const [result] = await connection.execute(sql, params);
      return (result as any).insertId;
    } finally {
      connection.release();
    }
  }
}

export async function update(
  sql: string,
  params?: any[]
): Promise<number> {
  if (dbConfig.type === 'postgres') {
    const pgPool = getPool() as PgPool;
    const client = await pgPool.connect();
    try {
      const pgSql = convertMySQLToPostgres(sql);
      const result = await client.query(pgSql, params);
      return result.rowCount || 0;
    } finally {
      client.release();
    }
  } else {
    const mysqlPool = getPool() as mysql.Pool;
    const connection = await mysqlPool.getConnection();
    try {
      const [result] = await connection.execute(sql, params);
      return (result as any).affectedRows;
    } finally {
      connection.release();
    }
  }
}

export async function deleteQuery(
  sql: string,
  params?: any[]
): Promise<number> {
  if (dbConfig.type === 'postgres') {
    const pgPool = getPool() as PgPool;
    const client = await pgPool.connect();
    try {
      const pgSql = convertMySQLToPostgres(sql);
      const result = await client.query(pgSql, params);
      return result.rowCount || 0;
    } finally {
      client.release();
    }
  } else {
    const mysqlPool = getPool() as mysql.Pool;
    const connection = await mysqlPool.getConnection();
    try {
      const [result] = await connection.execute(sql, params);
      return (result as any).affectedRows;
    } finally {
      connection.release();
    }
  }
}

export async function testConnection(): Promise<boolean> {
  try {
    if (dbConfig.type === 'postgres') {
      const pgPool = getPool() as PgPool;
      const client = await pgPool.connect();
      client.release();
      return true;
    } else {
      const mysqlPool = getPool() as mysql.Pool;
      const connection = await mysqlPool.getConnection();
      connection.release();
      return true;
    }
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

export async function closePool(): Promise<void> {
  if (pool) {
    if (dbConfig.type === 'postgres') {
      await (pool as PgPool).end();
    } else {
      await (pool as mysql.Pool).end();
    }
    pool = null;
  }
}
