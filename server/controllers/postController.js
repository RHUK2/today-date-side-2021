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

export const resGetAllPost = async (req, res) => {
  try {
    const postAll = await Post.find({}).populate('creator');
    res.send(postAll);
  } catch (err) {
    console.log('resGetAllPost Error 🚫 ', err);
  }
};

export const resGetPostArea = async (req, res) => {
  const {
    query: { area },
  } = req;
  try {
    if (area === '전체') {
      const postArea = await Post.find({}).populate('creator');
      res.send(postArea);
    }
    const postArea = await Post.find({ area }).populate('creator');
    res.send(postArea);
  } catch (err) {
    console.log('resGetPostArea Error 🚫 ', err);
  }
};
