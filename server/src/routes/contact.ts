import { Router } from 'express';
import { body } from 'express-validator';
import { submitContact, getContacts, markAsRead } from '../controllers/contactController';
import { protect } from '../middleware/auth';

const router = Router();

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  submitContact
);

router.get('/', protect, getContacts);
router.patch('/:id/read', protect, markAsRead);

export default router;
