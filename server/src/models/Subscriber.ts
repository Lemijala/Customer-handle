import mongoose, { Document, Schema } from 'mongoose';

export interface ISubscriber extends Document {
  email: string;
  createdAt: Date;
}

const SubscriberSchema = new Schema<ISubscriber>(
  { email: { type: String, required: true, unique: true, trim: true, lowercase: true } },
  { timestamps: true }
);

export default mongoose.model<ISubscriber>('Subscriber', SubscriberSchema);
