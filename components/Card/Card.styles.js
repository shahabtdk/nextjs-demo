import styled from "styled-components";
import Image from "next/image";

export const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media screen and (min-width: 940px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ImageWrapper = styled(Image)`
  padding: 24px;
`;
