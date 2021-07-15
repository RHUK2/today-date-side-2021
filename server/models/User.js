import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  salt: String,
  hash: String,
  nickname: String,
});

const User = mongoose.model('User', userSchema);

export default User;
