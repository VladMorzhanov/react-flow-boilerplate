// @flow

import React from 'react'
import { inject, observer } from 'mobx-react'
import RootStore from '../../stores/rootStore'
import Header from '../shared/Header/Header'
import Container from '../shared/Container/Container'

const Home = ({ rootStore }: { rootStore: RootStore }): React.Element<*> => (
  <>
    <Header title="Home Page" />
    <Container content="Home page content" />
    {rootStore.user.name}
  </>
)

export default inject('rootStore')(observer(Home))
