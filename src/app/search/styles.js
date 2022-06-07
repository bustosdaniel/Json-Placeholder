import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  margin: 90px 0 20px 0;
  padding: 10px 0 10px 0;
  border: none;
  border-bottom: #efeff4 solid 1.5px;
  align-items: center;
  & input {
    font-size: 12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 150px;
    height: 10px;
    border: none;
    &:focus {
      outline: none;
      border: none;
    }
  }
`;

export const SearchImage = styled.figure`
  width: 20px;
  height: 20px;
  margin: 0;
  margin-right: 10px;
  padding: 0;
  & img {
    width: 100%;
  }
`;