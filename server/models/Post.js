import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  imgURL: Array,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
