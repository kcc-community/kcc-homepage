import React from 'react'
import styled from 'styled-components'
import ThreeLine from './ThreeLine'
import { useResponsive } from '../../../utils/responsive'
import { FadeInUp } from '../../../utils/animation'
import Rank from './Rank'
import Benefit from './Benefit'

const WantedWrap = styled.div`
  width: 100%;
  padding-top: 185px;
  @media (max-width: 768px) {
    padding-bottom: 54px;
    padding-top: 76px;
  }
`

const WantedBg = require('../../../assets/images/unicorn/wanted-bg.png').default

const WantedContent = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 25px 55px;
  border: 25px solid transparent;
  border-image-source: url(${WantedBg});
  border-image-slice: 30 fill;
  border-image-repeat: round;
  /* background: url(${WantedBg}) top center no-repeat;
  background-size: 100% auto; */
  // background: rgba(49, 225, 185, 0.1);
  /* border: 14px solid transparent;
  border-image-slice: 27 fill;
  border-image-repeat: round; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 25px 25px;
    width: calc(100vw - 24px);
    background: #0e2120;
    border: 15px solid transparent;
    border-image-source: url(${WantedBg});
    border-image-slice: 30 fill;
    border-image-repeat: round;
    padding: 0px 10px;
  }
`

const WantedTitle = styled.img`
  width: auto;
  height: auto;
  margin: 25px auto;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 24px;
  }
`

const WantedTitleImage = styled.img`
  width: 100%;
  height: auto;
`

const CenterBox = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`

const ColorUnicorn = styled.img`
  width: 95px;
  height: 86px;
  margin: 0 40px;
  @media (max-width: 768px) {
    width: 33px;
    height: 30px;
    margin: 0 13px 0 10px;
  }
`

const Text = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  /* or 180% */
  color: #34edbe;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`

const YellowText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 41px;
  /* identical to box height */
  text-align: left;
  letter-spacing: 1px;
  color: #ffb547;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 19px;
    color: #ffb547;
    text-align: center;
    letter-spacing: 0px;
  }
`

const TypeCardWrap = styled.div<{ index: number }>`
  width: 440px;
  height: 600px;
  display: inline-block;
  position: absolute;
  border: 2px solid #31e1b9;
  @media (max-width: 768px) {
    position: relative;
    border: 1px dashed #31e1b9;
    width: 100%;
    height: auto;
    padding: 30px 22px;
    & + & {
      margin-top: 54px;
    }
  }
`

const TypeIndex = styled.div`
  font-family: 'Superclarendon';
  font-style: normal;
  font-weight: normal;
  font-size: 80px;

  /* identical to box height */
  text-align: center;
  color: #2fd7b5;
  position: absolute;
  width: 120px;
  height: 107px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 32px;
  top: -54px;
  background: #0f2524;
  @media (max-width: 768px) {
    font-size: 42px;
    line-height: 54px;
    background: #13312b;
    width: 63px;
    height: 56px;
    z-index: 99;
    right: 32px;
    top: -30px;
  }
`

const TypeTitle = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  color: #ffb547;
  text-align: center;
  height: auto;
  @media (max-width: 768px) {
    font-size: 27px;
    line-height: 33px;
  }
`

const YellowDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2fd7b5;
`

const TypeIcon = styled.img`
  position: relative;
  width: 180px;
  height: auto;
  @media (max-width: 768px) {
    top: 0;
    width: 80px;
    height: auto;
  }
`

const TypeCenterBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

const TypeListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  :first-child {
    margin-top: 84px;
  }
`

const TypeListWrap = styled.div`
  align-self: flex-start;
  position: relative;
  padding-top: 100px;
  width: 1080px;
  height: auto;
  ::-webkit-scrollbar {
    opacity: 0;
  }
  ::-webkit-resizer {
    opacity: 0;
  }
  ::-webkit-scrollbar-corner {
    opacity: 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    padding-top: 38px;
    width: 100%;
    height: auto;
  }
`

const LeftBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const DollarImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 94px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 24px;
  }
`
const LiquidityImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 67px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`

const ContentImageWrap = styled.div`
  width: 1057px;
  margin-top: 36px;
`

const ContentImage = styled.img`
  width: 100%;
  height: auto;
`

const Desc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  margin-top: 85px;
  max-width: 900px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 32px;
    padding: 0px;
    margin-top: 32px;
    text-align: center;
    width: 100%;
  }
`
const Link = styled.a`
  color: #00c77f;
`

const TypeList = [
  {
    index: 'I',
    title: 'DeFi Projects',
    list: ['DEX', 'Lending', 'Derivatives', 'Insurance'],
    icon: require('../../../assets/images/unicorn/t0.png').default,
  },
  {
    index: 'II',
    title: 'Infrastructure Projects',
    list: ['Oracles', 'Front Ends', 'Wallets', 'Blockchain Explorers', 'Analytics'],
    icon: require('../../../assets/images/unicorn/t1.png').default,
  },
  {
    index: 'III',
    title: 'NFT',
    list: ['Collectibles', 'Artworks', 'Event Tickets', 'Music and Media'],
    icon: require('../../../assets/images/unicorn/t2.png').default,
  },
  {
    index: 'IV',
    title: 'GameFi &  Metaverse',
    list: [],
    icon: require('../../../assets/images/unicorn/t3.png').default,
  },
  {
    index: 'V',
    title: 'Others',
    list: ['SocialFi', 'DAO', 'Web3'],
    icon: require('../../../assets/images/unicorn/t5.png').default,
  },
]

interface TypeItem {
  index: string
  title: string
  list: string[]
  icon: string
}

const TypeCard: React.FunctionComponent<{ type: TypeItem; index: number }> = ({ type, index }) => {
  const { isMobile } = useResponsive()

  return (
    <TypeCardWrap index={index}>
      <TypeIndex>{type.index}</TypeIndex>
      <TypeIcon src={type.icon} />

      <LeftBox style={{ textAlign: 'left', paddingLeft: isMobile ? '0px' : '32px' }}>
        <TypeTitle style={{ marginTop: isMobile ? '20px' : '67px', textAlign: 'left' }}>{type.title}</TypeTitle>
        <>
          {type.list.map((typeName, index) => {
            return (
              <TypeListItem style={{ marginTop: index === 0 ? (isMobile ? '12px' : '60px') : '0' }}>
                <YellowDot style={{ marginRight: '20px' }} />
                <Text>{typeName}</Text>
              </TypeListItem>
            )
          })}
        </>
      </LeftBox>
    </TypeCardWrap>
  )
}

const Wanted = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { isMobile } = useResponsive()

  return (
    <WantedWrap>
      <FadeInUp delay={400}>
        <WantedContent>
          <WantedTitleImage src={require('../../../assets/images/unicorn/wanted-title.png').default} />
          <WantedTitle src={require('../../../assets/images/unicorn/wanted.png').default} />
          <CenterBox>
            <ThreeLine color="#34EABD" height={isMobile ? 30 : 74} type="dotted" />
            <ColorUnicorn src={require('../../../assets/images/unicorn/color-unicorn.png').default} />
            <ThreeLine color="#34EABD" height={isMobile ? 30 : 74} type="dotted" />
          </CenterBox>
          <Text style={{ marginTop: isMobile ? '20px' : '45px' }}>
            The Unicorn Contest aims to accelerate all DeFi projects in the KCC ecosystem, and it will hopefully take a
            big effect in driving innovation and progress within the KCC ecosystem and the whole blockchain industry.
            Consistent with the vision of KCC, Unicorn Contest welcomes many types of projects such as DeFi,
            Infrastructure, NFT, GameFi, SocialFi, Metaverse, Web3.
          </Text>
          <YellowText
            style={{
              marginTop: isMobile ? '20px' : '45px',
              textAlign: isMobile ? 'left' : 'justify',
              fontSize: isMobile ? '16px' : '40px',
            }}
          >
            The KEY categories that Unicorn Contest focuses on:
          </YellowText>
          {isMobile ? (
            <TypeListWrap ref={ref}>
              {TypeList.map((item, index) => {
                return <TypeCard index={index} type={item} key={index} />
              })}
            </TypeListWrap>
          ) : (
            <ContentImageWrap>
              <ContentImage src={require('../../../assets/images/unicorn/content.png').default} />
            </ContentImageWrap>
          )}

          {isMobile && <Rank />}
          {isMobile && (
            <Desc style={{ marginTop: '20px' }}>
              KCC community will have voting power on ranking Top 5 projects for the Unicorn Grand Prize. This will take
              place at <Link href="https://snapshot.org/#/kcc.eth">https://snapshot.org/#/kcc.eth</Link>.
            </Desc>
          )}

          <YellowText
            style={{
              fontFamily: 'SF Pro Display Bold',
              marginTop: isMobile ? '45px' : '64px',
              textAlign: 'left',
              width: '100%',
            }}
          >
            The Purpose
          </YellowText>
          <Text style={{ marginTop: isMobile ? '12px' : '30px' }}>
            Decentralization has become the zeitgeist of 2022, and as a public chain, KCC is working to build a thriving
            decentralized ecosystem. In order to thrive the crypto enterprise community and encourage more builders to
            create innovative products on KuCoin Community Chain (KCC), we are launching KuCoin Community Chain Unicorn
            Contest. The contest offers a grand prize pool of $1 million (KCS/Stablecoin) and up to $10 million in
            liquidity support to accelerate winning decentralized projects.
          </Text>
          <Benefit />

          {!isMobile && <Rank />}
          {!isMobile && (
            <Desc style={{ marginTop: '67px' }}>
              KCC community will have voting power on ranking Top 5 projects for the Unicorn Grand Prize. This will take
              place at <Link href="https://snapshot.org/#/kcc.eth">https://snapshot.org/#/kcc.eth</Link>.
            </Desc>
          )}
          <DollarImage
            src={
              isMobile
                ? require('../../../assets/images/unicorn/m-liquidity.png').default
                : require('../../../assets/images/unicorn/dollar.png').default
            }
          />
          <LiquidityImage
            src={
              isMobile
                ? require('../../../assets/images/unicorn/m-dollar.png').default
                : require('../../../assets/images/unicorn/liquidity.png').default
            }
          />
        </WantedContent>
      </FadeInUp>
    </WantedWrap>
  )
}

export default Wanted
