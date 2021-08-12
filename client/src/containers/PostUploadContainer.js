import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reqPostUpload } from '../api/postApi';
import PostUpload from '../pages/PostUpload';
import { authAction } from '../reducers/userReducer';

function PostUploadContainer({ history }) {
  const [postInfo, setPostInfo] = useState({
    title: '',
    description: '',
    area: '',
    fileImg: '',
    previewImg: '',
  });
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    if (e.target.type === 'file') {
      if (e.target.files.length > 3) {
        alert('이미지 개수가 3개를 초과했습니다.');
        e.target.value = '';
        return;
      }
      setPostInfo((prevState) => ({
        ...prevState,
        fileImg: e.target.files,
      }));
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

    if (isClicked) {
      return;
    }
    setIsClicked(true);
    const formData = new FormData();
    formData.append('title', postInfo.title);
    formData.append('description', postInfo.description);
    formData.append('area', postInfo.area);
    for (const file of postInfo.fileImg) {
      formData.append('fileImg', file);
    }

    if (postInfo.previewImg) {
      postInfo.previewImg.forEach((file) =>
        URL.revokeObjectURL(file),
      );
      setPostInfo((prevState) => ({ ...prevState, previewImg: '' }));
    }

    try {
      const {
        data: { id },
      } = await reqPostUpload(formData);
      // user post 목록 업데이트
      dispatch(authAction());
      history.push(`/post/${id}`);
    } catch (err) {
      console.log('PostUpload Error 🚫 ', err);
      history.push('/');
    }
  };

  return (
    <PostUpload
      postInfo={postInfo}
      onHandleChange={onHandleChange}
      onHandleSubmit={onHandleSubmit}
    />
  );
}

export default PostUploadContainer;
