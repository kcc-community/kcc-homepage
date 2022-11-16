import { relative } from 'path'
import React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader/index'

const Wrap = styled.div``

const AppContentWrap = styled.div`
  height: auto;
  min-height: calc(100vh - 360px);
`

// Not fullscreen mode
const AppBaseLayout: FunctionComponent = ({ children }) => {
  return (
    <Wrap>
      <AppHeader />
      <AppContentWrap>{children}</AppContentWrap>
      <AppFooter />
    </Wrap>
  )
}

// App layout
const AppLayout: FunctionComponent = ({ children }) => {
  const isFullScreen = localStorage.getItem('FULLSCREEN_MODE')

  if (isFullScreen) return <React.Fragment>{children}</React.Fragment>
  return <AppBaseLayout>{children}</AppBaseLayout>
}

export default AppLayout
