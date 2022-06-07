import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  padding: 4em;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -70px;
`;

export const NavigationImage = styled.figure`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 0;
  padding: 0; 
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavigationItem = styled.li`
  list-style: none;
  & button {
    border: none;
    color: #0F730C;
    padding: 10px;
    font-weight: ${props => props.rounded ? "bold" : "none"};
    border-radius: ${props => props.rounded ? "50px" : 0};
    margin-left: ${props => props.rounded ? "15px" : 0};
    background-color: #fff;
    border: ${props => props.rounded ? "1px solid green" : "none"};
  }
`;


