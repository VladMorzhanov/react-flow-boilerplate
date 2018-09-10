// @flow

import React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../shared/Header/Header'
import Container from '../shared/Container/Container'
import RootStore from '../../stores/rootStore'

const Profile = ({ rootStore }: { rootStore: RootStore }): React.Element<*> => (
  <>
    <Header title="Profile page" />
    <Container content={rootStore.user.name} />
  </>
)

export default inject('rootStore')(observer(Profile))
