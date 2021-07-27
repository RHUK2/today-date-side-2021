import { Mongoose } from 'mongoose';
import Post from '../models/Post';

export const resPostUpload = async (req, res) => {
  const {
    body: { title, description },
    files,
    user,
  } = req;
  const imgURL = files.map((file) => file.location);
  try {
    const newPost = new Post({
      title,
      description,
      imgURL,
      creator: user._id,
    });
    await newPost.save();
    req.user.post.push(newPost._id);
    await req.user.save();
    res.send('Upload Success');
  } catch (err) {
    res.send('resPostUpload Error 🚫', err);
  }
};
