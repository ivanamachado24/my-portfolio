import mongoose, { Schema, model, models } from 'mongoose';

const contactSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ContactMessage = models.ContactMessage || model('ContactMessage', contactSchema);

export default ContactMessage;
