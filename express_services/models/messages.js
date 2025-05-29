import mongoose from 'mongoose';

const messages = new mongoose.Schema({
  //User stores first message and other stores the second
  userIds: {type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }]},
  userId1Messages: [String],
  userId2Messages: [String],
  user1Start: Boolean //If true, user1 sent the first message
});

export default mongoose.model('Messages', messages);
