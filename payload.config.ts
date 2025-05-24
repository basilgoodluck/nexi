import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';

export default buildConfig({
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI! },
  }),
  secret: process.env.PAYLOAD_SECRET!
});