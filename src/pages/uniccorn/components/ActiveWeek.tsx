import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 138px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`
const ListCon = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: center;
  margin-top: 72px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const UnicornTitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`

const Title = styled.div`
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  margin: 0 20px;
  @media (max-width: 768px) { 
    font-size: 26px;
    margin: 0 8px;
  }
`
const ListItem = styled.a`
  width: 376px;
  height: 282px;
  align-items: center;
  margin-bottom: 48px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  margin-right: 36px;
  &:nth-child(3n + 0) {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 32px;
    width: 320px;
    height: 240px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: fill;
  transition: all 0.3s ease-in-out;
  &:hover {
    filter: brightness(140%);
    /* transform: translateY(-5px); */
  }
`

const ActiveWeekList = [
  {
    logo: require('../../../assets/images/unicorn/mjt-kcc.jpg').default,
    name: 'MojitoSwap',
    link: 'https://twitter.com/MojitoSwap/status/1524725013156605953?s=20&t=Fwgrx8mPDFyb5GiYCce4Ew',
  },
  {
    logo: require('../../../assets/images/unicorn/open-kcc.png').default,
    name: 'OpenLeverage',
    link: 'https://openleverage.medium.com/trade-vote-and-share-the-prize-in-kcc-unicorn-contest-f20758d6808c',
  },
  {
    logo: require('../../../assets/images/unicorn/tp-kcc.png').default,
    name: 'Token Pocket',
    link: 'https://www.tokenpocket.pro/',
  },
  {
    logo: require('../../../assets/images/unicorn/bitkeep-kcc.png').default,
    name: 'Bitkeep',
    link: 'https://blog.bitkeep.com/en/?p=584',
  },
 {
    logo: require('../../../assets/images/unicorn/Infinity-kcc.png').default,
    name: 'Infinity Wallet ',
    link: 'https://twitter.com/InfinityWallet/status/1524708324004012032',
  },
  {
    logo: require('../../../assets/images/unicorn/xhash-kcc.svg').default,
    name: 'XHashtag',
    link: 'https://medium.com/xhashtag/earn-free-and-a-chance-to-win-kcc-using-our-liquid-staking-vault-as-a-part-of-the-kcc-unicorn-99c3f28d74d1',
  },
  {
    logo: require('../../../assets/images/unicorn/nest-kcc.jpg').default,
    name: 'Nest',
    link: 'https://twitter.com/nest_protocol/status/1512020783098634241?s=20&t=8efbLRuokqfXPq4cf4KrUw',
  },
  {
    logo: require('../../../assets/images/unicorn/bithotel-kcc.png').default,
    name: 'BitHotel',
    link: 'https://medium.com/@bithotelnftgame/kucoin-unicorn-contest-bit-hotel-in-top-10-13d20e6275b6',
  },
  {
    logo: require('../../../assets/images/unicorn/kuSwapunic-kcc.png').default,
    name: 'KuSwap',
    link: 'https://kuswap.finance/#/unicorn',
  },
  {
    logo: require('../../../assets/images/unicorn/saffron-kcc.png').default,
    name: 'Saffron',
    link: 'https://twitter.com/saffronfinance_/status/1524731974283374592?s=20&t=JetJFfub4l1qIUdkdU6wbg',
  },



 
  // {

  // {
  //   logo: require('../../../assets/images/unicorn/pencilDao-kcc.png').default,
  //   name: 'PencilDAO',
  //   link: 'https://www.pencildao.com/carnival.html',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/kupay-kcc.png').default,
  //   name: 'KuPay',
  //   link: 'https://gleam.io/cR0v2/kupay-reversed-pyramid-donation-lottery-info-spreader',
  // },

  // {
  //   logo: require('../../../assets/images/unicorn/kuDoge-kcc.png').default,
  //   name: 'KuDoge',
  //   link: 'https://kudoge.io/unicorn',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/krc20-kcc.png').default,
  //   name: 'XHashtag',
  //   link: 'https://medium.com/xhashtag/earn-free-and-a-chance-to-win-kcc-using-our-liquid-staking-vault-as-a-part-of-the-kcc-unicorn-99c3f28d74d1',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/killSwitch-kcc.png').default,
  //   name: 'KillSwitch',
  //   link: 'https://medium.com/killswitch-finance/eggo-kcc-collection-nfts-kcc-carnival-event-ebfb07e171c6',
  // },
  // // {
  // //   logo: require('../../../assets/images/unicorn/bridge-kcc.jpg').default,
  // //   name: 'Bridge',
  // //   link: 'https://gleam.io/aDdFR/kucoin-carnival-week',
  // // },
  // {

  //   logo: require('../../../assets/images/unicorn/boringDao-kcc.jpg').default,
  //   name: 'BoringDAO',
  //   link: 'https://oportal.boringdao.com/twoway',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/nash-kcc.png').default,
  //   name: 'Nash Metaverse',
  //   link: 'https://mirror.xyz/0xCa8feE2B3185381D690Dac5CfE8CE367Bf14d1A2/jHZTosUTGN7yRQIBSaN5SMlXEsB2WrDtlyLixihZ90g',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/vixenpups-kcc.png').default,
  //   name: 'VixenPunks',
  //   link: 'https://kuswap.finance/#/vixenpups',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/idlestone-kcc.png').default,
  //   name: 'IdleStoneAge/SAX',
  //   link: 'https://gleam.io/XXfUq/airdrop-for-kcc-carnival-week-general-event',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/myfarm-kcc.jpg').default,
  //   name: 'My Meta Farm',
  //   link: 'https://gleam.io/sT1Ea/kcc-carnival-week-general-event',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/coolming-kcc.png').default,
  //   name: 'Coolmining',
  //   link: 'https://coolmininggame.medium.com/stake-cooha-share-1000-cooha-3a2a076b904b',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/pikaster-kcc.jpg').default,
  //   name: 'Pikaster',
  //   link: 'https://app.mojitoswap.finance/nfts/collections/0x420FFeA7CB9d0c06C178a1485478d4C3B29055da',
  // },
  
  // {
  //   logo: require('../../../assets/images/unicorn/armeda-kcc.png').default,
  //   name: 'Armeda',
  //   link: 'https://docs.google.com/forms/d/e/1FAIpQLSflGqMJ_I9zGq8A9pQ3FUx0IdUrejXQUoquDq8-rvBDpuagZg/viewform',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/crypto-kcc.jpg').default,
  //   name: 'Crypto Elite’s Battlegrounds (CEBG)',
  //   link: 'https://twitter.com/CEBG_GAME/status/1522189437194899456?s=20&t=8lOJB36jUXTqzb3NgdbKFA'
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/xrush-kcc.jpg').default,
  //   name: 'xrush',
  //   link: 'https://giv.gg/xrushwithkcc'

  // },
  // {
  //   logo: require('../../../assets/images/unicorn/nabox-kcc.png').default,
  //   name: 'NaBox',
  //   link: 'https://twitter.com/naboxwallet/status/1521822414661120000?s=20&t=ReipeGFJVZMm4y6_PYEOcw',
  // },

  // {
  //   logo: require('../../../assets/images/unicorn/bitkeep-kcc.png').default,
  //   name: 'Bitkeep',
  //   link: 'https://blog.bitkeep.com/en/?p=584',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/coin-kcc.png').default,
  //   name: 'Coinhub',
  //   link: 'https://coinhubwallet.zendesk.com/hc/en-001/articles/6063385176212-KCC-Unicorn-Carnival-Announcement',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/ambire-kcc.png').default,
  //   name: 'Ambire Wallet',
  //   link: 'https://blog.ambire.com/ambire-wallet-integrates-kucoin-community-chain-and-joins-unicorn-carnival-week-84abad1cea1e',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/emi-kcc.png').default,
  //   name: 'EmiSwap',
  //   link: 'https://gleam.io/swVYm/kcc-carnival-week-general-event',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/oxlend-kcc.png').default,
  //   name: '0xlend',
  //   link: 'https://twitter.com/0xLendProtocol/status/1522496583702487040',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/transit-kcc.png').default,
  //   name: 'Transit Finance',
  //   link: 'https://swap.transit.finance/#/',
  // },
  // {
  //   logo: require('../../../assets/images/unicorn/pop_kcc.png').default,
  //   name: 'Popop World',
  //   link: 'https://twitter.com/popop_world/status/1522536517012697088',
  // },
]

const UnicornTitle: FunctionComponent<{ title: string; color?: string }> = ({ title, color }) => {
  return (
    <UnicornTitleWrap>
      <Title style={{ color: color ?? '#fff' }}>{title}</Title>
    </UnicornTitleWrap>
  )
}

const ActiveWeek = () => {
  return (
    <Content>
      <UnicornTitle title="KCC Top Unicorns Week' Participating Projects" />
      <ListCon>
        {ActiveWeekList.map((item, index) => {
          return (
            <ListItem key={index} href={item.link ? item.link : ''} target="_blank">
              <Image src={item.logo}></Image>
            </ListItem>
          )
        })}
      </ListCon>
    </Content>
  )
}

export default ActiveWeek

