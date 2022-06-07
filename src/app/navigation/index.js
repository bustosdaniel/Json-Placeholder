import React from 'react';
import { NavigationWrapper, NavigationImage, NavigationList, NavigationItem } from './styles';

function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationImage>
        <img src='/image.png' alt='imagen' />
      </NavigationImage>
      <NavigationList>
        <NavigationItem>
          <button>Sign Up </button>
        </NavigationItem>
        <NavigationItem rounded>
          <button> Get started </button>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
}

export { Navigation };