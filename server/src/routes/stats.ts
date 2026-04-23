import { Router } from 'express';
import { getStats } from '../controllers/statsController';
import { protect } from '../middleware/auth';
import Contact from '../models/Contact';
import Subscriber from '../models/Subscriber';

const router = Router();

router.get('/', protect, getStats);

// Public: just counts + recent initials for social proof
router.get('/public', async (_req, res) => {
  try {
    const [totalContacts, totalSubscribers, recentContacts] = await Promise.all([
      Contact.countDocuments(),
      Subscriber.countDocuments(),
      Contact.find().sort({ createdAt: -1 }).limit(5).select('name'),
    ]);
    res.json({
      success: true,
      data: {
        totalClients: totalContacts + totalSubscribers,
        recentInitials: recentContacts.map((c: { name: string }) => c.name.charAt(0).toUpperCase()),
      },
    });
  } catch {
    res.json({ success: true, data: { totalClients: 0, recentInitials: [] } });
  }
});

export default router;
