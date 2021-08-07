import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SearchBar from '../components/SearchBar';

function SearchBarContainer({ history }) {
  const [termInput, setTermInput] = useState('');

  const onChange = (e) => {
    const { value } = e.target;
    setTermInput(value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    history.push(`/search?term=${termInput}`);
  };

  return (
    <SearchBar termInput={termInput} onChange={onChange} onSearch={onSearch} />
  );
}

export default withRouter(SearchBarContainer);
