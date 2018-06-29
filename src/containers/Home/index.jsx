// @flow

import React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header'
import Container from '../../components/Container'

const Main = ({ rootStore }) => (
  <>
    <Header />
    <Container />
  </>
)

export default inject('rootStore')(observer(Main))
