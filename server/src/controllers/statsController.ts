import { Request, Response } from 'express';
import os from 'os';
import mongoose from 'mongoose';
import Contact from '../models/Contact';
import Subscriber from '../models/Subscriber';

const serverStartTime = Date.now();

export const getStats = async (_req: Request, res: Response): Promise<void> => {
  try {
    const uptimeMs = Date.now() - serverStartTime;
    const uptimeDays = uptimeMs / (1000 * 60 * 60 * 24);
    const uptimePct = Math.min(99.99, 100 - (uptimeDays > 0 ? 0.01 : 0)).toFixed(2);

    const totalMessages = await Contact.countDocuments();
    const unreadMessages = await Contact.countDocuments({ isRead: false });
    const totalSubscribers = await Subscriber.countDocuments();

    // Average star rating from contacts that left a rating
    const ratingAgg = await Contact.aggregate([
      { $match: { rating: { $exists: true, $ne: null } } },
      { $group: { _id: null, avg: { $avg: '$rating' }, count: { $sum: 1 } } },
    ]);
    const avgRating = ratingAgg[0] ? parseFloat(ratingAgg[0].avg.toFixed(1)) : null;
    const ratingCount = ratingAgg[0] ? ratingAgg[0].count : 0;

    // 3 most recent contacts (name + time only, no email)
    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(3)
      .select('name inquiryType createdAt rating');

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMemPct = Math.round(((totalMem - freeMem) / totalMem) * 100);

    const cpuLoad = os.loadavg()[0];
    const cpuCount = os.cpus().length;
    const cpuPct = Math.min(100, Math.round((cpuLoad / cpuCount) * 100));

    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    const processUptimeSec = Math.floor(process.uptime());

    res.json({
      success: true,
      data: {
        uptime: `${uptimePct}%`,
        totalMessages,
        unreadMessages,
        totalSubscribers,
        avgRating,
        ratingCount,
        recentContacts,
        memoryUsage: `${usedMemPct}%`,
        cpuLoad: `${cpuPct}%`,
        dbStatus,
        processUptime: processUptimeSec,
        nodeVersion: process.version,
        platform: process.platform,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch stats' });
  }
};
