import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {RouteComponentProps} from 'react-router';
import Header from "../../components/Header";

export interface MainProps extends RouteComponentProps<any> {
  /** MobX Stores will be injected via @inject() **/
}

export interface MainState {
}

@inject('rootStore')
@observer
export class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps, context: any) {
    super(props, context);
    this.state = {};
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps: MainProps, nextContext: any) {
  }

  render() {
    const rootStore = this.props['rootStore'];

    return (
      <div>
        <Header/>
        {rootStore.user.name}
      </div>
    );
  }
}
