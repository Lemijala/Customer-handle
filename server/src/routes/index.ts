import { Router } from 'express';
import contactRoutes from './contact';
import authRoutes from './auth';

const router = Router();

router.use('/contact', contactRoutes);
router.use('/auth', authRoutes);

export default router;
