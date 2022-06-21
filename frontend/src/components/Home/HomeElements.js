import styled from 'styled-components';
import {lightbrown} from '../../components/colors';

export const HomeContainer = styled.div`
  background: ${lightbrown};
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction:row;
  padding: 0px 0px;
  margin: 0px;
`;

export const HomeImage = styled.img`
  height: auto;
  width: 70%;
`;