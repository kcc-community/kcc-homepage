import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 160px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`
const ListCon = styled.div<{ name?: string }>`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ name }) => {
    return name === "topTen" ? "center" : "flex-start"
  }};
  text-align: center;
  align-items: center;
  margin-top: 74px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    margin-top: 48px;
  }
`
const ListItem = styled.a<{ name?: string }>`
  width: 273px;
  height: 142px;
  margin-bottom: 36px;
  margin-right: 36px;
  border-radius: 8px;
  text-align: center;
  background: rgba(255, 255, 255, 0.16);
  line-height: 142px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:nth-child(4n + 0) {
    margin-right: 0;
  }
  &:nth-last-child(1) {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    line-height: 142px;
  }
`

const Image = styled.img`
  max-width: 210px;
  max-height: 97px;
  object-fit: scale-down;
`

const topTenList = [
  {
    logo: require('../../../assets/images/unicorn/mojito.png').default,
    name: 'MojitoSwap',
    link: 'https://app.mojitoswap.finance/',
  },
  {
    logo: require('../../../assets/images/unicorn/openLeverage.png').default,
    name: 'OpenLeverage',
    link: 'https://openleverage.finance/',
  },

  {
    logo: require('../../../assets/images/unicorn/tokenPocket.png').default,
    name: 'Token Pocket',
    link: 'https://www.tokenpocket.pro/',
  },
  {
    logo: require('../../../assets/images/unicorn/bitkeep.png').default,
    name: 'Bitkeep',
    link: 'https://bitkeep.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/infinity.png').default,
    name: 'Infinity Wallet',
    link: 'https://infinitywallet.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/hashtag.png').default,
    name: 'XHashtag',
    link: 'https://www.xhashtag.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/nest.png').default,
    name: 'Nest',
    link: '	https://nestprotocol.org',
  },
  {
    logo: require('../../../assets/images/unicorn/bithotel.png').default,
    name: 'bitHotel',
    link: '	https://bithotel.io/#/',
  },
  {
    logo: require('../../../assets/images/unicorn/kuSwap.png').default,
    name: 'KuSwap',
    link: 'https://kuswap.finance/#/swap',
  },
  {
    logo: require('../../../assets/images/unicorn/saffron.png').default,
    name: 'saffron',
    link: 'https://kcc.saffron.finance/#home',
  },

]

const partnerList = [
  {
    logo: require('../../../assets/images/unicorn/kupay.png').default,
    name: 'KuPay',
    link: 'https://kupay.finance/',
  },
  {
    logo: require('../../../assets/images/unicorn/pikaster.png').default,
    name: 'Pikaster',
    link: 'https://www.pikaster.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/swap.png').default,
    name: 'Transit Finance',
    link: 'https://swap.transit.finance/#/',
  },
  {
    logo: require('../../../assets/images/unicorn/pencilDao.png').default,
    name: 'PencilDAO',
    link: 'https://www.pencildao.com/staking.html#lomen-staking',
  },
  {
    logo: require('../../../assets/images/unicorn/boringDao.png').default,
    name: 'BoringDAO',
    link: 'https://www.boringdao.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/ambire.png').default,
    name: 'Ambire Wallet',
    link: 'https://www.ambire.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/treasureland.png').default,
    name: 'Treasureland',
    link: 'https://treasureland.market/',
  },


  {
    logo: require('../../../assets/images/unicorn/ball.png').default,
    name: 'Crypto Elite’s Battlegrounds(CEBG)',
    link: 'https://linktr.ee/cebggames',
  },
  {
    logo: require('../../../assets/images/unicorn/coolmin.png').default,
    name: 'Coolmining',
    link: 'https://coolmining.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/poly.png').default,
    name: 'Poly Network',
    link: 'https://poly.network/#/',
  },
  {
    logo: require('../../../assets/images/unicorn/nash.png').default,
    name: 'Nash Metaverse',
    link: 'https://www.nashmetaverse.xyz/',
  },
  {
    logo: require('../../../assets/images/unicorn/stoneage.png').default,
    name: 'IdleStoneAge / SAX',
    link: 'https://www.idlestoneage.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/kuDoge.png').default,
    name: 'KuDoge',
    link: 'https://kudoge.io/home',
  },
  {
    logo: require('../../../assets/images/unicorn/killSwitch.png').default,
    name: 'KillSwitch',
    link: 'https://killswitch.finance/',
  },
  {
    logo: require('../../../assets/images/unicorn/vixen.png').default,
    name: 'VixenPunks',
    link: 'https://discord.gg/uWaW9HqjAu',
  },
  {
    logo: require('../../../assets/images/unicorn/fort.png').default,
    name: 'FORT Protocol',
    link: 'https://fortprotocol.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/guru.png').default,
    name: 'Guru Network',
    link: 'https://kcc.guru/',
  },
  {
    logo: require('../../../assets/images/unicorn/amara.png').default,
    name: 'Amara Finance',
    link: 'https://www.amara.link/',
  },
  {
    logo: require('../../../assets/images/unicorn/dexTools.png').default,
    name: 'Dextools',
    link: 'https://www.dextools.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/light.png').default,
    name: 'Light DeFi',
    link: 'https://lightdefi.org/',
  },
  {
    logo: require('../../../assets/images/unicorn/emiSwap.png').default,
    name: 'EmiSwap',
    link: 'https://emiswap.com/main',
  },
  {
    logo: require('../../../assets/images/unicorn/kuCake.png').default,
    name: 'KuCake',
    link: 'https://kucake.com/#/',
  },
  {
    logo: require('../../../assets/images/unicorn/bridge.png').default,
    name: 'Bridge',
    link: 'https://www.bridgenetwork.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/lend.png').default,
    name: 'Oxlend',
    link: 'https://www.0xlend.io/#/market',
  },
  {
    logo: require('../../../assets/images/unicorn/alend.png').default,
    name: 'Alend',
    link: 'https://app.alend.xyz/',
  },
  {
    logo: require('../../../assets/images/unicorn/organix.png').default,
    name: 'Organix',
    link: 'https://www.ogx.network/#/',
  },
  {
    logo: require('../../../assets/images/unicorn/sumer.png').default,
    name: 'Sumer.money',
    link: 'https://app.sumer.money/',
  },
  {
    logo: require('../../../assets/images/unicorn/killbox.png').default,
    name: 'The Killbox Game',
    link: 'https://www.thekillboxgame.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/dcent.png').default,
    name: "D'Cent Wallet",
    link: 'https://dcentwallet.com/MobileApp',
  },
  {
    logo: require('../../../assets/images/unicorn/nabox.png').default,
    name: 'Nabox',
    link: 'https://nabox.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/turboStarter.png').default,
    name: 'TurboStarter',
    link: 'https://app.turbostarter.io',
  },
  {
    logo: require('../../../assets/images/unicorn/coinhub.png').default,
    name: 'Coinhub Wallet',
    link: 'https://www.coinhub.org/',
  },
  {
    logo: require('../../../assets/images/unicorn/tatum.png').default,
    name: 'Tatum',
    link: 'https://tatum.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/popworld.png').default,
    name: 'Popop World',
    link: 'https://www.popop.world/',
  },
  {
    logo: require('../../../assets/images/unicorn/fabwelt.png').default,
    name: 'Fabwelt',
    link: 'http://www.fabwelt.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/rush.png').default,
    name: 'xrush',
    link: 'https://www.xrush.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/myMetaFarm.png').default,
    name: 'My Meta Farm',
    link: 'https://mymetafarm.com/',
  }
]

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

const UnicornTitle: FunctionComponent<{ title: string; color?: string }> = ({ title, color }) => {
  return (
    <UnicornTitleWrap>
      <Title style={{ color: color ?? '#fff' }}>{title}</Title>
    </UnicornTitleWrap>
  )
}


interface Props {
  title?: string,
  name?: string
}
const participantPro: React.FunctionComponent<Props> = ({ title, name }) => {
  console.log("title::", title);

  return (

    <Content>
      <UnicornTitle title={title ? title : "Participating Projects"} />
      <ListCon name={name}>
        {
          (name === "topTen" ? topTenList : partnerList).map((item, index) => {
            return (
              <ListItem name={name} key={index} href={item.link} target="_blank">
                <Image src={item.logo}></Image>
              </ListItem>
            )
          })
        }
      </ListCon>
    </Content>
  )
}

export default participantPro
