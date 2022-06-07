import styled from "styled-components";

export const PostWrapper = styled.section`
  background-color: white;
  & h3 {
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: left;
    border-bottom: #efeff4 solid 1.5px;
    padding-bottom: 10px;
    font-size: 12px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
  }
`; 

export const PostsArticle = styled.article`
  padding: 20px 0;
  text-align: left;
`;

export const PostUser = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const PostUserImage = styled.div`
  margin: 0;
  padding: 0;
  text-align: left;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  & img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const PostsUserData = styled.div`
  text-align: left;
  & p{
    padding: 0 0 0 0;
    margin: 0;
    color: green;
    font-size: 12px;
  } 
  & span {
    color: grey;
    font-size: 10px;
  }
`; 

export const PostsImage = styled.figure`
  width: 100%;
  height: 200px;
  margin: 0;
  padding: 0;
  margin-top: 14px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`; 

export const PostsPreview = styled.div`
  & h2 {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 0;
    font-size: 20px;
  } 
  & p {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    font-size: 14px;
  }
  & button {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    border: none;
    background-color: white;
    color: grey;
    font-size: 10px;
  }
`;
 
 export const PostsFeedback = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
 `;

 export const PostsFeedbackImage = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 25px;
  }
 `;