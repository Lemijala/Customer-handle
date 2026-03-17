import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Contact from '../models/Contact';
import { sendContactEmail } from '../utils/email';

// POST /api/contact
export const submitContact = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success: false, errors: errors.array() });
    return;
  }

  const { name, email, organization, inquiryType, message } = req.body;

  try {
    const contact = await Contact.create({ name, email, organization, inquiryType, message });

    // Send email (non-blocking — don't fail the request if email fails)
    sendContactEmail({ name, email, organization, inquiryType, message }).catch((err) =>
      console.error('Email send failed:', err.message)
    );

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you within 24 hours.',
      data: { id: contact._id },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to submit message' });
  }
};

// GET /api/contact (admin only)
export const getContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch contacts' });
  }
};

// PATCH /api/contact/:id/read (admin only)
export const markAsRead = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    if (!contact) {
      res.status(404).json({ success: false, message: 'Contact not found' });
      return;
    }
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update contact' });
  }
};
