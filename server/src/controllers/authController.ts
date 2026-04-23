import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

// POST /api/auth/register (one-time setup)
export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password, secret } = req.body;
  if (secret !== (process.env.JWT_SECRET || 'secret')) {
    res.status(403).json({ success: false, message: 'Forbidden' });
    return;
  }
  try {
    const existing = await Admin.findOne({ email: email.toLowerCase() });
    if (existing) { res.json({ success: true, message: 'Admin already exists' }); return; }
    await Admin.create({ email, password });
    res.status(201).json({ success: true, message: 'Admin created' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create admin' });
  }
};

// POST /api/auth/login
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ success: false, message: 'Email and password are required' });
    return;
  }

  try {
    const admin = await Admin.findOne({ email: email.toLowerCase() });
    if (!admin || !(await admin.comparePassword(password))) {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' } as jwt.SignOptions
    );

    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Login failed' });
  }
};
