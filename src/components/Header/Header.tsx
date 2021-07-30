import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from 'src/shared/assets/icon/logo.svg';



const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13rem;

  .logo {
    width: 100%;
    max-width: 45rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Logo className='logo' />
    </HeaderStyle>
  );
}
