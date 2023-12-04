import postgres from "postgres"
import "dotenv/config"

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env
// const URL = "postgres://username:password@host:port/database"

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:5432/${PGDATABASE}`

const sql = postgres(URL)

export default sql
