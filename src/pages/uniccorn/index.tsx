import React from 'react'
import styled from 'styled-components'

import { useTranslation } from 'react-i18next'

import { useResponsive } from '../../utils/responsive'
import Helmet from 'react-helmet'
import Banner from './components/Banner'
import Wanted from './components/Wanted'
import Roadmap from './components/Roadmap'
import Award from './components/Award'
import Apply from './components/Apply'
import Prize from './components/Prizes'
import Jury from './components/Jury'
import ExperienceWeek from './components/ExperienceWeek'
import ActiveWeek from './components/ActiveWeek'

const UnicornPageWrap = styled.div`
  position: relative;
  background: #0b1013;
  height: auto;
  z-index: 1;
  padding-top: 80px;
`

const RankWrap = styled.div`
  padding-top: 185px;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    padding: 0 6px;
    padding-top: 47px;
  }
`

const RankImage = styled.img`
  width: 100%;
  max-width: 1200px;
`

const StartBg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`

const settings = {
  width: document.body.clientWidth /*width*/,
  height: document.body.clientHeight /*height*/,
  autoResize: false /*enable/disable autoResize*/,
  autoResizeMinWidth: null /*set autoResize min width*/,
  autoResizeMaxWidth: null /*set autoResize max width*/,
  autoResizeMinHeight: null /*set autoResize min height*/,
  autoResizeMaxHeight: null /*set autoResize max height*/,
  addMouseControls: false /*enable/disable mouse controls*/,
  addTouchControls: true /*enable/disable touch controls*/,
  hideContextMenu: true /*enable/disable canvas context menu*/,
  starCount: 666 /*count of active/moving stars*/,
  starBgCount: 0 /*count of inactive/background stars*/,
  starBgColor: { r: 255, g: 255, b: 255 } /*background stars color*/,
  starBgColorRangeMin: 10 /*background stars color range min of starBgColor*/,
  starBgColorRangeMax: 60 /*background stars color range max of starBgColor*/,
  starColor: { r: 255, g: 255, b: 255 } /*stars color*/,
  starColorRangeMin: 10 /*stars color range min of starBgColor*/,
  starColorRangeMax: 100 /*stars color range max of starBgColor*/,
  starfieldBackgroundColor: { r: 11, g: 16, b: 19 } /*background color*/,
  starDirection: 1 /*stars moving in which direction*/,
  starSpeed: 20 /*stars moving speed*/,
  starSpeedMax: 200 /*stars moving speed max*/,
  starSpeedAnimationDuration: 6 /*time in seconds from starSpeed to starSpeedMax*/,
  starFov: 300 /*field of view*/,
  starFovMin: 200 /*field of view min*/,
  starFovAnimationDuration: 2 /*time in seconds from starFov to starFovMin*/,
  starRotationPermission: true /*enable/disable rotation*/,
  starRotationDirection: 1 /*rotation direction*/,
  starRotationSpeed: 0.0 /*rotation speed*/,
  starRotationSpeedMax: 2.0 /*rotation speed max*/,
  starRotationAnimationDuration: 2 /*time in seconds from starRotationSpeed to starRotationSpeedMax*/,
  starWarpLineLength: 7.0 /*line length*/,
  starWarpTunnelDiameter: 100 /*tunnel diameter*/,
  starFollowMouseSensitivity: 0.025 /*mouse follow sensitivity*/,
  starFollowMouseXAxis: true /*enable/disable mouse follow x axis*/,
  starFollowMouseYAxis: true /*enable/disable mouse follow y axis*/,
}

const UnicornPage: React.FunctionComponent = () => {
  const { t } = useTranslation()
  const { isMobile } = useResponsive()

  React.useEffect(() => {
    // @ts-ignore
    const warpdrive = new WarpDrive(document.getElementById('start-bg'), settings)
  }, [])

  return (
    <UnicornPageWrap>
      <Helmet>
        <title>KCC Unicorn Contest</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Helmet>
      {/* banner */}
      <Banner />
      <StartBg id="start-bg"></StartBg>
      <ExperienceWeek />
      {/* <ActiveWeek /> */}
      {/* <KCCDesc /> */}
      <Wanted />
      {/* <RankWrap>
        <RankImage src={require('../../assets/images/unicorn/rank.png').default} />
      </RankWrap> */}
      <Award />
      <Prize />
      <Roadmap />
      {/* <Apply /> */}
      <Jury />
    </UnicornPageWrap>
  )
}

export default UnicornPage
