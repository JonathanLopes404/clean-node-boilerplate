import dotenv from "dotenv"

dotenv.config()

interface Env {
  DB_HOST: string
  DB_USER: string
  DB_PASSWORD: string
  DB_PORT: number
  DB_NAME: string
  DATABASE_URL: string
}

const env: Env = {
  DB_HOST: process.env.DB_HOST ?? "",
  DB_USER: process.env.DB_USER ?? "",
  DB_PASSWORD: process.env.DB_PASSWORD ?? "",
  DB_PORT: Number(process.env.DB_PORT),
  DB_NAME: process.env.DB_NAME ?? "",
  DATABASE_URL: process.env.DATABASE_URL ?? "",
}

export default env
