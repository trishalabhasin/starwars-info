import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as LoaderLogo } from 'src/shared/assets/icon/loader.svg';

const LoaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;

  .loader-logo {
    height: 8rem;
  }
`;

const Loader = () => (
  <LoaderStyle data-testid='loader'>
    <LoaderLogo className='loader-logo' />
  </LoaderStyle>
);

export default Loader;
