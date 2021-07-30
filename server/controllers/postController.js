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
    console.log('reqGetPost Error 🚫 ', err);
  }
};
