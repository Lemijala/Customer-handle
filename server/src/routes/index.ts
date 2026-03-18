import { Router } from 'express';
import contactRoutes from './contact';
import authRoutes from './auth';
import statsRoutes from './stats';

const router = Router();

router.use('/contact', contactRoutes);
router.use('/auth', authRoutes);
router.use('/stats', statsRoutes);

export default router;
