import styled from "styled-components";

export const Image = styled.img`
  flex: 1;
  expo: contain;
  max-width: 200px;
  max-height:250px;
  transition: all cubic-bezier(0.4, 0, 1, 1) 200ms;
  margin 0 auto;
  float:left
`;

export const Data = styled.div`
  width:30%;
  font-family: 'PT Sans', sans-serif;
  color: Black;
  position: relative;
  float: left;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  width: 33%;
  height: 300px;
  transition: all ease 200ms;
  &:hover {
    ${Image} {
      transform: translateY(-20px) scale(1.1);
    }
  }
`;
