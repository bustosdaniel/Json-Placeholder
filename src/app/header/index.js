import React from 'react';
import { HeaderWrapper, HeaderImage, HeaderTitle, HeaderParagraph } from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderImage>
        <img src='/image.png' alt='imagen' />
      </HeaderImage>
      <HeaderTitle>
        Exposition
      </HeaderTitle>
      <HeaderParagraph> Articles by the Expo team and community </HeaderParagraph>
    </HeaderWrapper>
  );
}

export { Header };