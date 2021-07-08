// react 최신 버전부터 import React 사용안함
import { useEffect } from 'react';
import { getTest, postTest } from '../api/apiCall';

function App() {
  useEffect(() => {
    getData();
    postData();
  });

  const getData = async () => {
    try {
      const data = await getTest();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const postData = () => {
    postTest();
  };

  return 'hi';
}

export default App;
