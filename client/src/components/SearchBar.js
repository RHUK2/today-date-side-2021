import styled from 'styled-components';

const S = {};

S.SearchForm = styled.form`
  width: 100%;
  position: relative;
  i {
    position: absolute;
    top: 1.3rem;
    left: 1.2rem;
    font-size: 1.6rem;
    color: white;
  }
`;

S.Input = styled.input`
  padding: 1rem 4rem 0.8rem;
  width: 100%;
  font-size: 1.8rem;
  color: white;
  background-color: #222021;
`;

function SearchBar({ termInput, onChange, onSearch }) {
  return (
    <S.SearchForm onSubmit={onSearch}>
      <i className="fas fa-search"></i>
      <S.Input
        name="term"
        value={termInput}
        type="title"
        placeholder="장소 검색"
        onChange={onChange}
        autoComplete="off"
      />
    </S.SearchForm>
  );
}

export default SearchBar;
