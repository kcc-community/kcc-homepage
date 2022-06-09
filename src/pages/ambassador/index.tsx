import { Button } from 'antd'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BannerContentWrap, BannerDescription, BannerTitle, BannerWrap } from '../home'
import { useTranslation } from 'react-i18next'
import { BaseWrap } from '../home/index'
import { theme } from '../../constants/theme'
import { KCC } from '../../constants/index'
import { useResponsive } from '../../utils/responsive'
import Helmet from 'react-helmet'

import Benefit from './components/Benefits'
import WantList from './components/WantList'
import Apply from './components/Apply'

export interface AmbassadorPageProps {}

const MailSubText = styled.div`
  width: auto;
  height: 24px;
  font-size: 16px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #fff;
  line-height: 24px;
  @media (max-width: 768px) {
    font-size: 14px;
    align-self: flex-start;
  }
`

const AmbassadorPageWrap = styled.div`
  position: relative;
  background: #0d1113;
  height: auto;
  z-index: 1;
  padding-top: 80px;
`

const Bg = require('../../assets/images/ambassador/banner-bg.png').default

export const GrantBannerWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 657px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-size: auto 100%;
  z-index: 3;
  background: url(${Bg}) top center no-repeat;
  background-size: 100% 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 120px 24px 0 24px;
    height: 520px;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
`

const NumberText = styled.div`
  font-style: italic;
  font-size: 80px;
  font-family: URWDIN-Bold, URWDIN;
  font-weight: normal;
  color: #49ffa1;
  line-height: 96px;
`

const SubTitle = styled.div`
  height: 32px;
  font-size: 32px;
  font-family: URWDIN-Medium, URWDIN;
  font-weight: 500;
  color: ${theme.colors.primary};
  line-height: 0px;
`

const ParagraphTitle = styled.div`
  width: 610px;
  font-size: 20px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #fff;
  line-height: 32px;
  @media (max-width: 768px) {
    width: auto;
    &::before {
      content: '';
      width: 3px;
      height: 18px;
      background: ${theme.colors.primary};
      position: absolute;
      left: 0px;
      margin-top: 5px;
    }
  }
`
const ParagraphIcon = styled.img`
  margin-left: 20px;
  width: 30px;
`
const SmallText = styled.div`
  font-size: 16px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const BottomCoverImage = styled.img`
  display: absolute;
  bottom: 0;
  left: 0;
`

const AmbassadorPage: React.FunctionComponent<AmbassadorPageProps> = () => {
  const { t } = useTranslation()
  const { isMobile } = useResponsive()

  const nav2Grants = () => {
    window.open(KCC.GRANTS, '_blank')
  }

  return (
    <AmbassadorPageWrap>
      <Helmet>
        <title>KCC GoDAO Ambassador Program</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Helmet>
      {/* banner */}

      <GrantBannerWrap>
        <BannerContentWrap>
          <BannerTitle
            style={{
              fontSize: isMobile ? '36px' : '60px',
              color: '#fff',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '100%' : '630px',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            {t('KCC GoDAO Ambassador Program')}
          </BannerTitle>
          <BannerDescription
            style={{ color: '#fff', maxWidth: '482px', fontSize: '16px', fontWeight: 400, lineHeight: '28px' }}
          >
            {t(
              'KCC GoDAO Ambassadors are passionate enthusiasts who want to help increase community awareness and educate people about KuCoin Community Chain. Ambassadors are responsible to help the community and lead activities to grow the KCC ecosystem, including organizing and hosting AMAs, creating content such as videos and tutorials, translating content into different languages, and much more.'
            )}
          </BannerDescription>
        </BannerContentWrap>
      </GrantBannerWrap>

      {/* content */}

      <Benefit />
      <WantList />
      <Apply />
    </AmbassadorPageWrap>
  )
}

export default AmbassadorPage
