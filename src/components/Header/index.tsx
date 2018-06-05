import * as React from 'react';
import styled from 'styled-components'

export interface HeaderProps {
}

export interface HeaderState {
}

const Wrapper = styled.header`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  width: 100%;
  height: 64px;
  background-color: rgba(78, 94, 255, .7);
  text-align: center;
  line-height: 64px;
`;

export class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <Wrapper className="main-header">
        Header
      </Wrapper>
    );
  }
}

export default Header;
