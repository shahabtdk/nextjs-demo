import styled from "styled-components";

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  padding: 4px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #333;
  gap: 25px;
`;

export const List = styled.ul`
  flex: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const ListItem = styled.li`
  float: left;
  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
`;
