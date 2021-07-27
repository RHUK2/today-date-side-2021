import { useState } from 'react';
import { reqPostUpload } from '../api/postApi';
import PostWrite from '../pages/PostWrite';

function PostWriteContainer() {
  const [postInfo, setPostInfo] = useState({
    fileImg: '',
    title: '',
    description: '',
  });

  const onHandleChange = (e) => {
    if (e.target.type === 'file') {
      // const fileImg = Array.from(e.target.files);
      setPostInfo((prevState) => ({ ...prevState, fileImg: e.target.files }));
      return;
    }
    const { name, value } = e.target;
    setPostInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const file of postInfo.fileImg) {
      formData.append('fileImg', file);
    }
    formData.append('title', postInfo.title);
    formData.append('description', postInfo.description);
    try {
      const res = await reqPostUpload(formData);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PostWrite
      postInfo={postInfo}
      onHandleChange={onHandleChange}
      onHandleSubmit={onHandleSubmit}
    />
  );
}

export default PostWriteContainer;
