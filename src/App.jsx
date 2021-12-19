import React from 'react'
import { Container, Logo } from './style/App.styled'
import { ReactComponent as LogoSVG } from './Assets/logo.svg';
import Calculation from './components/Calculation';

function App() {
  return (
      <Container>
        <Logo>
          <LogoSVG />
        </Logo>

        <Calculation />
      </Container>
  );
}

export default App;
