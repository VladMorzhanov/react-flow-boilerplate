// @flow

import React from 'react'
import styled, { type ReactComponentStyled } from 'styled-components'
import { inject, observer } from 'mobx-react'
import RootStore from '../../../stores/rootStore'

type PropsType = {
  display: string,
  height: string,
  width: string,
  color: string,
  'font-size': string,
  'font-weight': string,
  'font-family': string,
  'background-color': string,
  'align-items': string,
  'justify-content': string
}

const Wrapper: ReactComponentStyled<PropsType> = styled.div`
  display: flex;
  height: calc(100% - 64px);
  width: 100%;
  color: #348599;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const Container = ({
  rootStore,
  content
}: {
  rootStore: RootStore,
  content: string
}): React.Element<*> => (
  <Wrapper>
    {content}
    {rootStore.user.name}
  </Wrapper>
)

export default inject('rootStore')(observer(Container))
