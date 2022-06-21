import React from 'react';
import {
  HomeContainer,
  HomeWrapper,
  HomeImage,
} from './HomeElements';
import ChildrenImage from '../../images/HomeChildren.png';

  function HomeSection() {
   
    
    return (
    <HomeContainer id='home'>
      <HomeWrapper>
        <HomeImage src={ChildrenImage}>

        </HomeImage>
      </HomeWrapper>
    </HomeContainer>
  );
}

export default HomeSection;