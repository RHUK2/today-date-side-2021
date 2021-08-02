import { useState } from 'react';
import { useSelector } from 'react-redux';
import { reqPostUpload } from '../api/postApi';
import PostEdit from '../pages/PostEdit';

function PostEditContainer({ history }) {
  const { isLoading, post } = useSelector((state) => state.postReducer);
  const [postInfo, setPostInfo] = useState({
    title: '',
    description: '',
    area: '',
    fileImg: '',
    previewImg: '',
  });

  console.log(isLoading, post);

  const onHandleChange = (e) => {
    if (e.target.type === 'file') {
      if (e.target.files.length > 3) {
        alert('이미지 개수가 3개를 초과했습니다.');
        e.target.value = '';
        return;
      }
      setPostInfo((prevState) => ({ ...prevState, fileImg: e.target.files }));
      const previewImg = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file),
      );
      setPostInfo((prevState) => ({ ...prevState, previewImg }));
      return;
    }
    const { name, value } = e.target;
    setPostInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', postInfo.title);
    formData.append('description', postInfo.description);
    formData.append('area', postInfo.area);
    for (const file of postInfo.fileImg) {
      formData.append('fileImg', file);
    }

    if (postInfo.previewImg) {
      postInfo.previewImg.forEach((file) => URL.revokeObjectURL(file));
      setPostInfo((prevState) => ({ ...prevState, previewImg: '' }));
    }

    try {
      const { data: _id } = await reqPostUpload(formData);
      history.push(`/post/${_id}`);
    } catch (err) {
      console.log('PostUpload Error 🚫 ', err);
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
