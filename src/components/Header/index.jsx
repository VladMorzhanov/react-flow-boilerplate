// @flow

import * as React from 'react';
import styled from 'styled-components'

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

export class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        Header
      </Wrapper>
    );
  }
}

export default Header