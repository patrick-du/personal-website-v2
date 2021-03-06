import React from 'react';
import styled from 'styled-components';

const StyledPhotoWrapper = styled.div`
  margin-top: 3rem;
`;

const StyledImage = styled.img`
  width: 100%;
  box-shadow: 0 0 5px #ccc;
`;

const StyledDescription = styled.p`
  text-align: center;
  margin-top: 0.5rem;
  font-size: 18px;
  font-family: 'SFProDisplay-Regular';
  color: #2b2b2b;
`;

const PhotoWrapper = ({ img, desc }) => {
  return (
    <StyledPhotoWrapper>
      <StyledImage src={require(`../assets/${img}`)} />
      <StyledDescription>{desc}</StyledDescription>
    </StyledPhotoWrapper>
  );
};

export default PhotoWrapper;
