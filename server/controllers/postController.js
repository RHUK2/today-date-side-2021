import Post from '../models/Post';

export const resPostUpload = async (req, res) => {
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
  console.log(area);
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
