/**
 * Run once to create the admin user:
 *   npx ts-node src/seed.ts
 */
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './utils/db';
import Admin from './models/Admin';

(async () => {
  await connectDB();

  const email = process.env.ADMIN_EMAIL || 'admin@lemitech.dev';
  const password = process.env.ADMIN_PASSWORD || 'changeme123';

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log('Admin already exists:', email);
    process.exit(0);
  }

  await Admin.create({ email, password });
  console.log('✅ Admin created:', email);
  process.exit(0);
})();
