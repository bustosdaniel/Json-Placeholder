import styled from "styled-components";

export const HeaderWrapper = styled.header`
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 25px;
`;

export const HeaderImage = styled.figure`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  padding: 0;
  & img {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 40px;
  margin: 0;
  padding: 0;
`;

export const HeaderParagraph = styled.p`
  margin: 0;
  padding: 0;
  color: gray;
  font-size: 20px;
  font-weight: 400;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;