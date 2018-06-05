import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {RouteComponentProps} from 'react-router';
import Header from "../../components/Header";
import Container from "../../components/Container";

export interface MainProps extends RouteComponentProps<any> {}
export interface MainState {}

@inject('rootStore')
@observer
export class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps, context: any) {
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
