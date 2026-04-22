import { Router } from 'express';
import { subscribe, getSubscribers } from '../controllers/subscribeController';
import { protect } from '../middleware/auth';

const router = Router();

router.post('/', subscribe);
router.get('/', protect, getSubscribers);

export default router;
