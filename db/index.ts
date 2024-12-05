import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from "@db/schema";
import dotenv from 'dotenv';

// 環境変数を読み込む
dotenv.config();

// Dockerコンテナ用のデフォルト接続文字列
const DATABASE_URL = process.env.DATABASE_URL || "postgres://postgres:password@localhost:5432/postgres";

// データベース接続の設定
const client = postgres(DATABASE_URL, {
  max: 1,
  ssl: false,
});

export const db = drizzle(client, { schema });