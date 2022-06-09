import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { BannerContentWrap, BannerDescription, BannerTitle, BannerWrap } from '../home'
import { useTranslation } from 'react-i18next'
import { BaseWrap, ButtonText } from '../home/index'
import Row, { CenterRow } from '../../components/Row/index'
import { BrowserView, DivideLine, MobileView, ParagraphText, TitleText } from '../../components/Common'
import Column, { ColumnCenter } from '../../components/Column'
import { AutoColumn } from '../../components/Column/index'
import { theme } from '../../constants/theme'
import { KCC } from '../../constants/index'
import { useResponsive } from '../../utils/responsive'
import Helmet from 'react-helmet'
import { useEffect } from 'react'

export interface GrantsPageProps {}

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

const GrantsPageWrap = styled.div`
  position: relative;
  background: #000;
  height: auto;
  z-index: 1;
`

const GrantBgCover = styled.img`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

const CoverWrap = styled.div`
  position: relative;
  z-index: 0;
`

const CoverImgWrap = styled.div`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  heigth: 100%;
`

const BannerBgImage = require('../../assets/images/grant/grant-banner-bg@2x.png').default

export const GrantBannerWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
  height: 460px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-size: auto 100%;
  z-index: 3;
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

const GrantsPage: React.FunctionComponent<GrantsPageProps> = () => {
  const { t } = useTranslation()
  const { isMobile, isTablet } = useResponsive()

  const nav2Grants = () => {
    window.open(KCC.GRANTS, '_blank')
  }

  return (
    <GrantsPageWrap>
      <Helmet>
        <title>KCC Grant Program - Get Supports and Grants for Your Projects</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Helmet>
      {/* banner */}
      <BrowserView>
        <GrantBgCover
          src={require('../../assets/images/grant/grant-banner-bg@2x.png').default}
          width="100%"
          height="auto"
        />
      </BrowserView>
      <MobileView>
        <GrantBgCover src={require('../../assets/images/grant/m-banner-bg.png').default} width="100%" height="auto" />
      </MobileView>
      <GrantBannerWrap>
        <BannerContentWrap>
          <BannerTitle>{t('Grant Program')}</BannerTitle>
          <BannerDescription>
            {t(
              'In support of our mission, the KCS Foundation grants program funds software development and research in the field of decentralized software protocols.'
            )}
          </BannerDescription>
          <ButtonText>
            <Button
              type="primary"
              style={{
                marginTop: isMobile ? '87px' : '24px',
                width: isMobile ? '160px' : '145px',
                height: isMobile ? '48px' : '36px',
              }}
              onClick={nav2Grants}
            >
              <span className="text">{t('Apply Now')}</span>
            </Button>
          </ButtonText>
        </BannerContentWrap>
      </GrantBannerWrap>

      {/* content */}

      <CoverWrap>
        <BaseWrap style={{ paddingTop: isMobile ? '16px' : '120px', position: 'relative', zIndex: 3 }}>
          <CenterRow
            justify={isMobile ? 'center' : 'space-between'}
            style={{
              flexFlow: isMobile ? 'column wrap' : 'row nowrap',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'space-between',
              padding: isMobile ? '0 24px' : '0',
            }}
          >
            <Column
              style={{
                order: isMobile ? 1 : 0,
                marginTop: isMobile ? '50px' : '0',
                alignSelf: isMobile ? 'flex-start' : 'center',
              }}
            >
              <ParagraphText style={{ width: isMobile ? 'auto' : '480px', fontSize: isMobile ? '14px' : '20px' }}>
                {t('Grant Introduce 1')}
              </ParagraphText>
              <ParagraphText style={{ width: isMobile ? 'auto' : '480px', fontSize: isMobile ? '14px' : '20px' }}>
                {t('Grant Type 1')}
              </ParagraphText>
              <ParagraphText style={{ width: isMobile ? 'auto' : '480px', fontSize: isMobile ? '14px' : '20px' }}>
                {t('Grant Type 2')}
              </ParagraphText>
            </Column>

            <ColumnCenter
              style={{
                width: '240px',
                height: '240px',
                background: 'rgba(151, 208, 195, 0.21)',
                justifyContent: 'center',
                padding: '0px 0px',
                order: isMobile ? 0 : 1,
              }}
            >
              <NumberText>10+</NumberText>
              <SubTitle style={{ marginTop: '24px' }}>{t('Project Type')}</SubTitle>
            </ColumnCenter>
          </CenterRow>
          <CenterRow
            justify="space-between"
            style={{
              marginTop: '94px',
              alignItems: isMobile ? 'center' : 'stretch',
              justifyContent: isMobile ? 'center' : 'space-between',
              flexFlow: isMobile ? 'column wrap' : 'row nowrap',
              padding: isMobile ? '0 24px' : '0',
            }}
          >
            <ColumnCenter
              style={{
                width: '240px',
                height: isMobile ? '240px' : 'auto',
                background: 'rgba(151, 208, 195, 0.21)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ColumnCenter>
                <NumberText>2+</NumberText>
                <SubTitle style={{ marginTop: '24px' }}>{t('Directions')}</SubTitle>
              </ColumnCenter>
            </ColumnCenter>
            <AutoColumn
              style={{
                width: isMobile ? 'auto' : '610px',
                marginTop: isMobile ? '24px' : '0',
                paddingLeft: isTablet ? '24px' : '0px',
              }}
            >
              <Row>
                <ParagraphTitle>{t(`Development`)}</ParagraphTitle>
                {/*  <ParagraphIcon src={require('../../')} /> */}
              </Row>
              <ParagraphText style={{ marginTop: '10px', fontSize: isMobile ? '14px' : '20px' }}>
                {t(`Grant Introduce 2`)}
              </ParagraphText>
              <SmallText style={{ marginTop: '5px' }}>
                -{' '}
                {t(`We are particularly interested in funding projects that build out dapp on KuCoin Community Chain`)}
              </SmallText>

              <Row style={{ marginTop: isMobile ? '75px' : '44px' }}>
                <ParagraphTitle>{t(`Research`)}</ParagraphTitle>
                {/*  <ParagraphIcon src={require('../../')} /> */}
              </Row>
              <ParagraphText style={{ marginTop: '10px', fontSize: isMobile ? '14px' : '20px' }}>
                {t(
                  `KCS Foundation funds research projects that advance and explore protocols in the  Blockchain Technology Stack`
                )}

                <SmallText style={{ marginTop: '5px' }}>
                  - {t(`Analysis of existing protocols and implementations`)}
                </SmallText>
                <SmallText>- {t(`Security testing`)}</SmallText>
              </ParagraphText>
            </AutoColumn>
          </CenterRow>
        </BaseWrap>
        <DivideLine style={{ margin: isMobile ? '100px 24px 32px 24px' : '100px 0px', opacity: 0.24 }} />
        {/* mail */}
        <BaseWrap
          style={{ padding: isMobile ? '0 24px 40px 24px' : '0px 0  100px 0', position: 'relative', zIndex: 2 }}
        >
          <ColumnCenter>
            <TitleText>{t('Open Grants Program')}</TitleText>
            <MailSubText style={{ width: 'auto', textAlign: isMobile ? 'left' : 'center' }}>
              {t('Grant Payment Amount')}
              <br />
              {t('Grant Payment')}
            </MailSubText>
          </ColumnCenter>
          <CenterRow justify={isMobile ? 'flex-start' : 'center'} style={{ marginTop: isMobile ? '80px' : '42px' }}>
            <ButtonText>
              <Button
                type="primary"
                style={{ width: isMobile ? '160px' : '145px', height: isMobile ? '48px' : '36px' }}
                onClick={nav2Grants}
              >
                <span className="text"> {t('Apply Now')}</span>
              </Button>
            </ButtonText>
          </CenterRow>
        </BaseWrap>
        <CoverImgWrap>
          <BottomCoverImage
            src={require('../../assets/images/grant/bottom-cover-bg.png').default}
            width="100%"
            height="1200px"
          />
        </CoverImgWrap>
      </CoverWrap>
    </GrantsPageWrap>
  )
}

export default GrantsPage
