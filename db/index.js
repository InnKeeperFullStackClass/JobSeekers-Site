import { Pool } from "pg";

const pool = new Pool({
  user: "YOUR_POSTGRES_USER",
  host: "YOUR_POSTGRES_HOST",
  database: "YOUR_POSTGRES_DATABASE",
  password: "YOUR_POSTGRES_PASSWORD",
  port: YOUR_POSTGRES_PORT,
});

export default pool;
