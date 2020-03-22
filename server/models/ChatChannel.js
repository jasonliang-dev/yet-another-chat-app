import mongoose from 'mongoose';

const { Schema } = mongoose;

export const ChatChannelSchema = new Schema({
  name: { type: String, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  messages: {
    type: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        message: { type: String, required: true },
        sent: { type: Date, default: Date.now, required: true },
      },
    ],
    required: true,
    select: false,
  },
});

export const ChatChannel = mongoose.model('ChatChannel', ChatChannelSchema);
