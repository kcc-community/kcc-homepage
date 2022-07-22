import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Button, Input, message, Progress, Dropdown } from 'antd'
import axios from 'axios'
import { RightOutlined } from '@ant-design/icons'
import Helmet from 'react-helmet'

import Column from '../../components/Column/index'
import { BrowserView, MDivider, MobileView, ParagraphText, TitleText } from '../../components/Common'
import Row, { RowBetween } from '../../components/Row/index'
import SloganPicture from '../../components/SloganPicture'
import NoticeBar from '../../components/NoticeBar'

import { ColumnCenter } from '../../components/Column/index'
import { KCC } from '../../constants/index'
import { HOME_MENU_LIST } from '../../constants/menuList'
import ContactCard from '../../components/ContactCard/index'
import { CenterRow } from '../../components/Row/index'
import { theme } from '../../constants/theme'
import DotComponent from '../../components/Dot/index'
import { useResponsive } from '../../utils/responsive'

export interface HomePageProps {}

const BannerBgImage = require('../../assets/images/home/banner-bg@2x.png').default
//const BannerBgImage = require('../../assets/images/grant/grant-banner-bg@2x.png').default
// const BannerBgHover = require('../../assets/images/home/home-top-cover@2x.png').default

export const HomePageWrap = styled.div`
  position: relative;
  background: #000;
  height: auto;
  z-index: 1;
  margin: 0;
`

const BannerCoverWrap = styled.img`
  width: 100%;
  position: absolute;
`

const MHomeBanner = require('../../assets/images/home/m-banner-bg@2x.png').default

export const BannerWrap = styled.div`
  padding-top: 80px;
  height: 460px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background: url(${BannerBgImage}) top center no-repeat;
  background-size: auto 100%;
  @media (max-width: 768px) {
    padding: 0 24px;
    padding-top: 0px;
    height: auto;
    min-height: 520px;
    background: url(${MHomeBanner}) top right no-repeat;
    background-size: auto 100%;
  }
`
export const BannerContentWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  width: 1200px;
  background: transparent;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 20px;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    padding: 0 24px;
  }
`
export const BannerTitle = styled.span`
  line-height: 64px;
  font-size: 60px;
  // font-family: moon;
  font-family: URWDIN-Bold, PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: ${theme.colors.primary};
  line-height: 64px;
  @media (max-width: 768px) {
    width: 271px;
    font-size: 28px;
    font-weight: 500;
    line-height: 44px;
  }
`
export const BannerDescription = styled.span`
  font-family: URWDIN-Regular;
  font-size: 20px;
  color: #fff;
  line-height: 32px;
  margin-top: 24px;
  max-width: 640px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BaseWrap = styled(Column)`
  width: 940px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    width: 100%;
    padding: 0 24px;
  }
`

const ImageWrap = styled(Row)`
  display: flex;
  width: 360px;
  height: 238px;
  align-items: center;
  justify-content: center;
  @media (max-width: 720px) {
    padding: 20px;
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
  }
`

const Characteristics = [
  {
    description: 'KCC INTRODUCE 1',
    image: require('../../assets/images/home/introduce-1@2x.png').default,
  },
  {
    description: 'KCC INTRODUCE 2',
    image: require('../../assets/images/home/introduce-2@2x.png').default,
  },
  {
    description: 'KCC INTRODUCE 3',
    image: require('../../assets/images/home/introduce-3@2x.png').default,
  },
  {
    description: 'KCC INTRODUCE 4',
    image: require('../../assets/images/home/introduce-4@2x.png').default,
  },
]

export const MailSubText = styled.span`
  width: auto;
  height: 24px;
  font-size: 16px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #000;
  line-height: 24px;
  @media (max-width: 768px) {
    font-size: 12px;
    text-align: left;
    width: 100%;
    margin-top: 10px;
  }
`

const BaseSubText = styled.span`
  width: auto;
  height: 24px;
  font-size: 16px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #fff;
  line-height: 24px;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    align-self: flex-start;
  }
`

const PartnerListWrap = styled.div`
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(
    ${() => {
      if (KCC.PARTNER_LIST.length >= 6) {
        return 6
      }
      return KCC.PARTNER_LIST.length
    }},
    140px
  );
  grid-template-rows: auto;
  column-gap: 16px;
  row-gap: 16px;
  justify-items: center;
  align-items: center;
  @media (max-width: 1200px) {
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
`
const PartnerItemWrap = styled.div`
  display: flex;
  height: 140px;
  width: 140px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 24px;
  transition: all 0.2s ease-in-out;
  & + & {
    margin-left: 12px;
  }
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    height: 80px;
    width: 80px;
    & + & {
      margin-left: 0px;
    }
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    height: 100px;
    width: 100px;
  }
`

const SubscribeWrap = styled.div`
  &:hover {
    .sub-button {
      border: 1px solid #000 !important;
    }
    .sub-text {
      color: #000;
    }
  }
`

const Subscribe = styled.span`
  font-family: URWDIN-Regular, URWDIN;
  color: ${theme.colors.primary};
  &:hover {
    color: #000;
  }
`

export const ButtonText = styled.div`
  color: #000;
  .text {
    color: #000;
  }
  &:hover {
    .text {
      color: ${theme.colors.primary};
    }
  }
`

export const ButtonInfo = styled.div`
  .ant-btn-primary {
    background: #000;
  }
  .text {
    color: ${theme.colors.primary};
  }
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`

const IntroduceCoverImage = require('../../assets/images/home/why-top-cover.png').default

const IntroduceCoverWrap = styled.div`
  position: relative;
`

const IntroduceCoverImageWrap = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px !important;
`

const IntroduceCover1 = styled.img`
  position: absolute;
  width: 643px;
  height: auto;
  right: 0;
  top: 0px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const IntroduceCover2 = styled.img`
  position: absolute;
  width: 396px;
  height: auto;
  bottom: 0;
  left: 0px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const JoinButtonCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0px;
  z-index: 0;
  background: linear-gradient(0deg, #277453 0%, rgba(97, 223, 101, 0) 100%);
`

const MailWrap = styled(BaseWrap)`
  padding: 75px 0 100px 0;
  // background: ${theme.colors.primary};
  background: #1db07f;
  position: relative;
  top: -43px;
  @media (max-width: 768px) {
    margin: 0 24px;
    width: calc(100% - 48px);
    padding: 32px 24px 24px 24px;
  }
`
const ProgressWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
`

const TitleLeftLine = styled.div`
  width: 4px;
  height: 22px;
  background: #49ffa1;
  position: absolute;
  left: -24px;
  top: 4px;
`

const ContactWrap = styled(RowBetween)`
  margin-top: 70px;
  @media (max-width: 768px) {
    margin-top: 120px;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom: 60px;
    max-width: 340px;
  }
`

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const { isMobile, isTablet, isPC } = useResponsive()

  const CharacteristicsComponent = Characteristics.map((item, index) => {
    let dir = ''
    if (isMobile) {
      dir = index % 2 === 1 ? 'left' : 'right'
    } else {
      dir = index % 2 === 0 ? 'left' : 'right'
    }
    return (
      <SloganPicture
        key={index}
        width={isMobile ? '108px' : '240px'}
        url={item.image}
        description={item.description}
        direction={dir}
      />
    )
  })

  const ContactListComponent = KCC.CONTACT_LIST.map((item, index) => {
    let key = {}
    const coloredBorder = '1px solid rgba(255,255,255,0.1)'
    if (index === 1 && isMobile) {
      key = {
        borderLeft: coloredBorder,
        borderBottom: coloredBorder,
      }
    }
    if (index === 2 && isMobile) {
      key = {
        borderTop: coloredBorder,
        borderRight: coloredBorder,
        position: 'relative',
        top: '-1px',
        right: '-1px',
      }
    }
    // less 320px,remove
    const width = document.body.clientWidth ?? document.documentElement.clientWidth
    if (width < 374) {
      key = {}
    }
    return <ContactCard key={index} {...item} styles={key} />
  })

  const PartnerListComponent = KCC.PARTNER_LIST.map((item, index) => {
    return (
      <PartnerItemWrap
        key={index}
        onClick={() => {
          window.open(item.route, '_blank')
        }}
      >
        <img src={item.logo} width="100%" />
      </PartnerItemWrap>
    )
  })

  const { t, i18n } = useTranslation()

  const [email, setEmail] = React.useState<string>('')
  const [disable, setDisable] = React.useState<boolean>(false)
  const [subscribed, setSubscribed] = React.useState<boolean>(false)

  const subscribe = async () => {
    const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

    if (!emailReg.test(email)) {
      message.error(t(`Please provide a valid email address.`))
      return false
    }
    setDisable(true)
    try {
      const res = await axios({
        method: 'post',
        url: KCC.MAIL_SUBSCRIBE_PROXY,
        data: {
          email_address: email,
          status: 'subscribed',
        },
      })
      if (res.data.status === 400) {
        message.warning(t(`Subscription failed`))
      } else {
        message.success(t(`Thank you for subscribing`))
        setSubscribed(() => true)
      }
      setEmail('')
    } catch (e: any) {
      message.error(t(`${e?.response?.data?.detail}`))
    } finally {
      setDisable(false)
    }
  }

  const navToDocs = () => {
    window.open(KCC.DOCS_URL, '_blank')
  }

  const navToAddNetwork = () => {
    const { ethereum } = window
    if (ethereum) {
      if (ethereum?.chainId === '0x141') {
        window.scrollTo({
          top: 460,
          behavior: 'smooth',
        })
      } else {
        ethereum
          .request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x141',
                chainName: 'KCC Mainnet Network',
                nativeCurrency: {
                  name: 'KCS',
                  symbol: 'KCS',
                  decimals: 18,
                },
                rpcUrls: ['https://rpc-mainnet.kcc.network'],
                blockExplorerUrls: ['https://explorer.kcc.io'],
              },
            ],
          })
          .catch((error: any) => {
            console.log(error)
          })
      }
    } else {
      message.error(t(`Connect your wallet`))
    }
  }

  const MilestoneIconWrap = styled.div`
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 6;

    @media (max-width: 768px) {
      width: 32px;
      left: -56px;
      top: 0;
    }
  `
  const MilestoneDateText = styled.div`
    font-size: 20px;
    font-family: URWDIN-Regular, URWDIN;
    font-weight: 400;
    color: #00ff9b;
    line-height: 32px;
    min-width: 110px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  `
  const MilestoneTitle = styled(MilestoneDateText)`
    color: #ffffff;
    text-align: center;
    @media (max-width: 768px) {
      text-align: left;
      line-height: 1.4;
    }
  `

  const TwoLine = require('../../assets/images/home/four-line.png').default

  const MileStoneWrap = styled(CenterRow)`
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    margin: 60px 0px 60px 0px;
    padding: 0px 60px;
    position: relative;
    margin-bottom: 60px;
    height: 920px;
    background: url(${TwoLine}) 0px 20px no-repeat;
    background-size: 100% 85%;
    overflow: hidden;
    @media (max-width: 768px) {
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 40px;
      background: none;
      height: auto;
    }
  `

  const RightOrder = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    position: relative;
    top: -3px;
  `
  const ReverseOrder = styled.div`
    margin: 136px 0 146px 0;
    display: flex;
    width: 100%;
    max-width: 1000px;
    flex-flow: row-reverse nowrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  `

  const InfoWrapper = styled.div`
    border: 1px solid ${theme.colors.primary};
    border-radius: 5px;
    padding: 0px 10px 13px 10px;
    margin-top: 10px;
  `

  const InfoItem = styled.div`
    display: flex;
    align-items: center;
    padding-top: 13px;
    cursor: pointer;
  `

  const InfoItemText = styled.div`
    font-size: 15px;
    line-height: 16px;
    color: ${theme.colors.primary};
  `

  let milestoreId = 0

  const FourPerGroupList = []

  for (let i = 0, len = KCC.MILESTONES.length; i < len; i += 4) {
    FourPerGroupList.push(KCC.MILESTONES.slice(i, i + 4))
  }

  const PcMileStone = FourPerGroupList.map((item, index) => {
    const C = milestoreId % 2 === 0 ? RightOrder : ReverseOrder

    const list = item

    const Line = (
      <C key={index}>
        {list.map((milestore, nth) => {
          return (
            <Row
              key={nth}
              style={{
                flexFlow: 'column nowrap',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '120px',
                position: 'relative',
                width: '230px',
              }}
            >
              <MilestoneIconWrap>
                {(index === FourPerGroupList.length - 1 && nth === list.length - 1) || (index === 0 && nth === 0) ? (
                  <div style={{ height: '30px', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
                    <DotComponent shining={index === FourPerGroupList.length - 1 && nth === list.length - 1} />
                  </div>
                ) : (
                  <div style={{ height: '30px', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
                    <img src={milestore.icon} width="32px" />
                  </div>
                )}
              </MilestoneIconWrap>
              <MilestoneDateText style={{ marginTop: '10px' }}>{t(milestore.date)}</MilestoneDateText>
              <MilestoneTitle>{t(`${milestore.title}`)}</MilestoneTitle>
            </Row>
          )
        })}
      </C>
    )

    milestoreId++

    return Line
  })

  const MilestoneList = KCC.MILESTONES.map((item, index) => {
    const Icon =
      index === 0 || index === KCC.MILESTONES.length - 1 ? (
        <div
          key={index}
          style={{
            width: '26px',
            height: '30px',
            display: 'flex',
            marginLeft: '9px',
            flexFlow: 'row nowrap',
            alignItems: 'center',
          }}
        >
          <DotComponent shining={index === KCC.MILESTONES.length - 1} />
        </div>
      ) : (
        <div key={index} style={{ height: '30px', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
          <img src={item.icon} width="32px" />
        </div>
      )
    return (
      <Row
        key={index}
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '80px',
          position: 'relative',
        }}
      >
        <MilestoneIconWrap>{Icon}</MilestoneIconWrap>
        <div>
          <MilestoneDateText style={{ marginTop: '10px' }}>{item.date}</MilestoneDateText>
          <MilestoneTitle>{t(`${item.title}`)}</MilestoneTitle>
        </div>
      </Row>
    )
  })

  const menu = (
    <InfoWrapper>
      {HOME_MENU_LIST.map((item) => {
        return (
          <InfoItem
            key={item.title}
            onClick={() => {
              window.open(item.route)
            }}
          >
            <InfoItemText>{t(item.title)}</InfoItemText>
          </InfoItem>
        )
      })}
    </InfoWrapper>
  )

  return (
    <>
      <Helmet>
        <title>KCC Official Homepage - KuCoin Community Chain</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Helmet>
      <HomePageWrap>
        {/* banner */}
        {/*    <BannerCoverWrap src={BannerBgHover} /> */}
        <BannerWrap className="home-banner-container">
          <BannerContentWrap>
            <BannerTitle>{t('Mission')}</BannerTitle>
            <BannerDescription>
              {t('To accelerate the flow of value around the world without boundaries')}
            </BannerDescription>
            <ButtonWrap>
              <ButtonText>
                <Button
                  type="primary"
                  style={{
                    marginTop: '24px',
                    width: isMobile ? '160px' : '145px',
                    height: isMobile ? '48px' : '36px',
                    marginRight: '20px',
                    color: '#000',
                  }}
                  onClick={navToAddNetwork}
                >
                  <span className="text">{t(`Get Start Now`)}</span>
                  <RightOutlined className="text" style={{ fontSize: '10px', marginLeft: '10px' }} />
                </Button>
              </ButtonText>
              <ButtonInfo>
                <Dropdown overlay={menu}>
                  <Button
                    type="primary"
                    style={{
                      marginTop: '24px',
                      width: isMobile ? '160px' : '145px',
                      height: isMobile ? '48px' : '36px',
                      color: '#000',
                    }}
                    onClick={navToAddNetwork}
                  >
                    <span className="text">{t(`Info`)}</span>
                  </Button>
                </Dropdown>
              </ButtonInfo>
            </ButtonWrap>
          </BannerContentWrap>
        </BannerWrap>
      </HomePageWrap>

      {/* why */}
      {/* notice bar */}
      <HomePageWrap>
        <IntroduceCoverWrap>
          <NoticeBar />
          <IntroduceCoverImageWrap src={IntroduceCoverImage} height="400px" width="50%" />
          <BaseWrap style={{ padding: isMobile ? '30px 0' : '80px 0', position: 'relative', zIndex: 1 }}>
            <BrowserView style={{ padding: isTablet ? '0 24px' : '0px' }}>
              <RowBetween style={{ alignItems: 'center', paddingTop: '68px' }}>
                <ImageWrap>
                  <img
                    src={require('../../assets/images/home/home-why-pic@2x.png').default}
                    style={{ width: '380px', height: 'auto' }}
                  />
                </ImageWrap>
                <Column style={{ marginLeft: '50px' }} id="WhyKcc">
                  <TitleText
                    style={{
                      width: 'auto',
                      textAlign: 'left',
                      whiteSpace: 'inherit',
                      fontSize: i18n.language === 'en' ? '38px' : '40px',
                    }}
                  >
                    {t('Why KuCoin Community Chain')}
                  </TitleText>
                  <ParagraphText style={{ width: 'auto' }}>{t(`KCC First Introduction`)}</ParagraphText>
                  <ParagraphText style={{ width: 'auto' }}>{t(`KCC Second Introduction`)}</ParagraphText>
                </Column>
              </RowBetween>
            </BrowserView>

            <MobileView style={{ padding: '0 24px' }}>
              <ColumnCenter style={{ alignItems: 'center' }}>
                <ImageWrap>
                  <img
                    src={require('../../assets/images/home/home-why-pic@2x.png').default}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </ImageWrap>
                <Column style={{ marginTop: '28px', position: 'relative' }}>
                  <TitleLeftLine />
                  <TitleText
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      fontSize: '24px',
                      color: '#fff',
                      marginBottom: '12px',
                    }}
                  >
                    {t('Why KuCoin Community Chain')}
                  </TitleText>
                  <ParagraphText style={{ width: '100%' }}>{t(`KCC First Introduction`)}</ParagraphText>
                  <ParagraphText style={{ width: '100%' }}>{t(`KCC Second Introduction`)}</ParagraphText>
                </Column>
              </ColumnCenter>
            </MobileView>
          </BaseWrap>
        </IntroduceCoverWrap>
        <MobileView>
          <MDivider />
        </MobileView>
      </HomePageWrap>

      {/* CharacteristicsComponent */}
      <HomePageWrap>
        <IntroduceCover1 src={require('../../assets/images/home/introduction-right-cover@2x.png').default} />
        <BaseWrap style={{ paddingTop: isMobile ? '50px' : '88px' }}>
          <TitleText style={{ paddingLeft: isMobile ? '24px' : '0px' }}>{t('Our Characteristics')}</TitleText>
          <div style={{ padding: isMobile ? '42px 24px 0px 24px' : '70px 0 0 0' }}>{CharacteristicsComponent}</div>
          {/* <DivideLine style={{ marginTop: '80px' }} />*/}
          <MobileView>
            <MDivider />
          </MobileView>
        </BaseWrap>

        {/* MileStone */}
        <BaseWrap
          style={{
            padding: isMobile || isTablet ? '47px 24px 0px 24px' : '88px 0 0px 0',
            width: isMobile ? 'auto' : '100%',
            maxWidth: isMobile ? '100%' : '1200px',
          }}
        >
          <ColumnCenter>
            <TitleText>{t('Our Milestones')}</TitleText>
            <ParagraphText>{t('Milestone Subtitlle')}</ParagraphText>
            <MileStoneWrap gap="8px">
              <BrowserView>{PcMileStone}</BrowserView>
              {/* <BrowserView>
                <Progress
                  style={{ width: '100%', position: 'absolute', zIndex: 3, left: '0px', top: '12px' }}
                  strokeColor={{
                    '0%': '#126748',
                    '100%': '#09402A',
                  }}
                  showInfo={false}
                  strokeWidth={4}
                  percent={95}
                  status="active"
                  trailColor="#09402A"
                />
              </BrowserView> */}
              <MobileView>
                {MilestoneList}
                <Row
                  style={{
                    position: 'absolute',
                    transform: 'rotate(90deg)',
                    transformOrigin: 'top left',
                    zIndex: 3,
                    width: '1200px',
                    left: '40px',
                    top: '0px',
                  }}
                >
                  <Progress
                    style={{
                      width: '100%',
                    }}
                    strokeColor={{
                      '0%': '#126748',
                      '100%': '#09402A',
                    }}
                    showInfo={false}
                    strokeWidth={4}
                    percent={100}
                    status="active"
                    trailColor="#09402A"
                  />
                </Row>
              </MobileView>
            </MileStoneWrap>
          </ColumnCenter>
        </BaseWrap>
        <IntroduceCover2 src={require('../../assets/images/home/introduce-cover-2.png').default} />
      </HomePageWrap>

      {/* Partner */}
      <HomePageWrap>
        <BaseWrap style={{ padding: !isPC ? '0px 24px 0px 24px' : '0px 0 0 0 ', position: 'relative', zIndex: 5 }}>
          <ColumnCenter>
            <TitleText>{t('Partner')}</TitleText>
            <PartnerListWrap>{PartnerListComponent}</PartnerListWrap>
          </ColumnCenter>
        </BaseWrap>

        {/* Join the KCC Community */}
        <BaseWrap
          style={{
            padding: isMobile || isTablet ? '46px 24px 0px 24px' : '120px 0 65px 0',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <ColumnCenter>
            <TitleText>{t('Join The KCC Community')}</TitleText>
            <BaseSubText>
              {t('KCC  Community Title')}
              <br />
              {t(`Join KCC Ttile`)}
            </BaseSubText>
            <ContactWrap>{ContactListComponent}</ContactWrap>
          </ColumnCenter>
        </BaseWrap>
        <JoinButtonCover />
      </HomePageWrap>

      {/* <DivideLine style={{ marginTop: '0px', opacity: 0.24 }} /> */}

      {/* mail */}
      <HomePageWrap>
        <MailWrap>
          <ColumnCenter>
            <TitleText style={{ color: '#000', textAlign: isMobile ? 'left' : 'center' }}>
              {t('Subscribe Title')}
            </TitleText>
            <MailSubText style={{ textAlign: isMobile ? 'left' : 'center' }}>{t('Send Updaets Text')}</MailSubText>
            {subscribed ? (
              <Row style={{ width: '100%', marginTop: '16px' }}>
                <MailSubText style={{ fontSize: isMobile ? '12px' : '24px', textAlign: isMobile ? 'left' : 'center' }}>
                  {t(`Thank you for subscribing`)}
                </MailSubText>
              </Row>
            ) : (
              <Row
                style={{
                  width: isMobile ? '100%' : '400px',
                  marginTop: isMobile ? '38px' : '16px',
                  flexFlow: isMobile ? 'row wrap' : 'row nowrap',
                }}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: 'none', backgroundColor: '#fff' }}
                  placeholder={t('Enter your email address')}
                />
                <SubscribeWrap>
                  <Button
                    className="sub-button"
                    type="primary"
                    style={{
                      marginTop: isMobile ? '26px' : '0px',
                      marginLeft: isMobile ? '0px' : '20px',
                      background: '#000',
                      border: 'none',
                    }}
                    onClick={subscribe}
                    disabled={disable}
                    loading={disable}
                  >
                    <Subscribe className="sub-text">{t('Subscribe')}</Subscribe>
                  </Button>
                </SubscribeWrap>
              </Row>
            )}
          </ColumnCenter>
        </MailWrap>
      </HomePageWrap>
    </>
  )
}

export default HomePage
