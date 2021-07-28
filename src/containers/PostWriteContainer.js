import { useEffect, useState } from 'react';
import { reqPostUpload } from '../api/postApi';
import PostWrite from '../pages/PostWrite';

function PostWriteContainer() {
  const [postInfo, setPostInfo] = useState({
    title: '',
    description: '',
    area: '서울',
    fileImg: '',
    previewImg: '',
  });

  useEffect(() => {
    console.log(postInfo);
  }, [postInfo]);

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

    postInfo.previewImg.forEach((file) => URL.revokeObjectURL(file));
    setPostInfo((prevState) => ({ ...prevState, previewImg: '' }));

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
