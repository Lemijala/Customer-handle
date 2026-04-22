import { Request, Response } from 'express';
import Subscriber from '../models/Subscriber';

export const subscribe = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;
  if (!email) { res.status(400).json({ success: false, message: 'Email is required' }); return; }
  try {
    await Subscriber.create({ email });
    res.status(201).json({ success: true, message: 'Subscribed successfully!' });
  } catch (err: any) {
    if (err.code === 11000) {
      res.status(200).json({ success: true, message: 'Already subscribed!' });
    } else {
      res.status(500).json({ success: false, message: 'Failed to subscribe' });
    }
  }
};

export const getSubscribers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json({ success: true, count: subscribers.length, data: subscribers });
  } catch {
    res.status(500).json({ success: false, message: 'Failed to fetch subscribers' });
  }
};
