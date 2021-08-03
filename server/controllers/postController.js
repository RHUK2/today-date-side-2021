import { s3 } from '../middleware';
import Post from '../models/Post';
import User from '../models/User';

export const resPostUpload = async (req, res) => {
  if (!req.user) {
    res.status(404);
  }
  const {
    body: { title, description, area },
    files,
    user,
  } = req;
  const imgURL = files.map((file) => file.location);
  try {
    const newPost = new Post({
      title,
      description,
      area,
      imgURL,
      creator: user._id,
    });
    await newPost.save();
    req.user.post.push(newPost._id);
    await req.user.save();
    res.send(newPost._id);
  } catch (err) {
    console.log('resPostUpload Error 🚫', err);
  }
};

export const resGetPost = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const post = await Post.findById(id).populate('creator');
    res.send(post);
  } catch (err) {
    console.log('resGetPost Error 🚫 ', err);
  }
};

export const resGetPosts = async (req, res) => {
  const {
    query: { area },
  } = req;
  let posts = null;
  try {
    if (!area) {
      posts = await Post.find({}).populate('creator');
    } else {
      posts = await Post.find({ area }).populate('creator');
    }
    res.send(posts);
  } catch (err) {
    console.log('resGetPosts Error 🚫 ', err);
  }
};

export const resPutPostModify = async (req, res) => {
  if (!req.user) {
    res.status(404);
  }
  const {
    params: { id },
    body: { title, description, area },
  } = req;
  try {
    await Post.findByIdAndUpdate(id, { title, description, area });
    res.send('Modify Success');
  } catch (err) {
    console.log('resPutPostModify Error 🚫 ', err);
  }
};

export const resDelPost = async (req, res) => {
  if (!req.user) {
    res.status(404);
  }
  const {
    params: { id },
  } = req;
  try {
    const post = await Post.findById(id);
    post.imgURL.forEach((imageUrl) => {
      const key = imageUrl.split('/image/')[1];
      s3.deleteObject(
        {
          Bucket: 'today-date-side',
          Key: `image/${key}`,
        },
        (err, data) => {
          if (err) console.log(err, err.stack);
          else console.log(data);
        },
      );
    });
    const user = await User.findById(post.creator);
    user.post = user.post.filter((elem) => elem.toString() !== id);
    await user.save();
    await Post.findByIdAndRemove(id);
    res.send('Delete Success');
  } catch (err) {
    console.log('resDelPost Err 🚫', err);
  }
};
