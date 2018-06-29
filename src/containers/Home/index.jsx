// @flow

import * as React from 'react';
import {inject, observer} from 'mobx-react';
import Header from "../../components/Header";
import Container from "../../components/Container";

@inject('rootStore')
@observer
export class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header/>
        <Container/>
      </>
    );
  }
}
