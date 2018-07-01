// @flow

import React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header'
import RootStore from '../../stores/RootStore'
import Container from '../../components/Container'

const Home = ({ rootStore }: { rootStore: RootStore }): React.Element<*> => (
  <>
    <Header title="Home Page" />
    <Container content="Home page content" />
    {rootStore.user.name}
  </>
)

export default inject('rootStore')(observer(Home))
