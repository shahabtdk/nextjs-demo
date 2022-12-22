import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #edf5fa;
  width: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 20px 4px #7c7676a8;
`;

export const ProductImage = styled.img`
  height: 50vh;
  padding: 50px;
`;

export const Grid = styled.div``;

export const Category = styled.h1`
  text-transform: capitalize;
`;

export const Heading = styled.h2``;

export const Text = styled.h4``;

export const Description = styled.p``;
