import { useEffect, useState } from 'react';
import { reqGetPost, reqPutPostModify } from '../api/postApi';
import PostEdit from '../pages/PostEdit';

function PostEditContainer({ history, match }) {
  const {
    params: { id },
  } = match;
  const [postInfo, setPostInfo] = useState({
    title: '',
    description: '',
    area: '',
  });

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPost = async () => {
    const {
      data: { post },
    } = await reqGetPost(id);
    setPostInfo((prevState) => ({
      ...prevState,
      title: post.title,
      description: post.description,
      area: post.area,
    }));
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setPostInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      await reqPutPostModify(id, postInfo);
      history.push(`/post/${id}`);
    } catch (err) {
      console.log('PostUpload Error 🚫 ', err);
      alert('업로드에 실패했습니다.');
    }
  };

  return (
    <PostEdit
      postInfo={postInfo}
      onHandleChange={onHandleChange}
      onHandleSubmit={onHandleSubmit}
    />
  );
}

export default PostEditContainer;
