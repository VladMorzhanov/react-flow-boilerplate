// @flow

import React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import RootStore from '../../stores/RootStore'

const Profile = ({ rootStore }: { rootStore: RootStore }): React.Element<*> => (
  <>
    <Header title="Profile page" />
    <Container content={rootStore.user} />
  </>
)

export default inject('rootStore')(observer(Profile))
