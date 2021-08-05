import { s3 } from '../middleware';
import Post from '../models/Post';
import User from '../models/User';

export const resPostUpload = async (req, res) => {
  if (!req.user) {
    res.status(400).end();
    return;
  }
  const {
    body: { title, description, area },
    files,
    user,
  } = req;
  const imgURL = files.map((file) => file.location);
  try {
    // 새 포스트
    const newPost = new Post({
      title,
      description,
      area,
      imgURL,
      creator: user._id,
    });
    await newPost.save();
    // 작성자에게 포스트 주입
    req.user.post.push(newPost._id);
    await req.user.save();
    res.status(200).json({ id: newPost._id });
  } catch (err) {
    console.log('resPostUpload Error 🚫', err);
    res.status(400).end();
  }
};

export const resGetPost = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const post = await Post.findById(id).populate('creator');
    res.status(200).json({ post: post });
  } catch (err) {
    console.log('resGetPost Error 🚫 ', err);
    res.status(400).end();
  }
};

export const resGetPosts = async (req, res) => {
  const {
    query: { area, creatorID, term },
  } = req;
  let posts = null;
  try {
    if (area) {
      posts = await Post.find({ area }).populate('creator');
    } else if (creatorID) {
      posts = await Post.find({ creator: creatorID }).populate('creator');
    } else if (term) {
      posts = await Post.find({
        title: { $regex: term, $options: 'i' },
      }).populate('creator');
    } else {
      posts = await Post.find({}).populate('creator');
    }
    res.status(200).json({ posts: posts });
  } catch (err) {
    console.log('resGetPosts Error 🚫 ', err);
    res.status(400).end();
  }
};

export const resPutPostModify = async (req, res) => {
  if (!req.user) {
    res.status(400).end();
    return;
  }
  const {
    params: { id },
    body: { title, description, area },
  } = req;
  try {
    await Post.findByIdAndUpdate(id, { title, description, area });
    res.status(200).end();
  } catch (err) {
    console.log('resPutPostModify Error 🚫 ', err);
    res.status(400).end();
  }
};

export const resDelPost = async (req, res) => {
  if (!req.user) {
    res.status(400).end();
    return;
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
    res.status(200).end();
  } catch (err) {
    console.log('resDelPost Err 🚫', err);
    res.status(400).end();
  }
};
