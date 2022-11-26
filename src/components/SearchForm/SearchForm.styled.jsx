import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: center;
`;

export const FormSearch = styled.form``;

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  margin-right: 10px;
  border-radius: 15px;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 35px;
  border-radius: 15px;

  :hover {
    background-color: green;
    color: white;
  }
`;
