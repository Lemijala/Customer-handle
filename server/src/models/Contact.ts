import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  organization?: string;
  inquiryType?: string;
  message: string;
  rating?: number;
  isRead: boolean;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    organization: { type: String, trim: true },
    inquiryType: { type: String, trim: true },
    message: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IContact>('Contact', ContactSchema);
