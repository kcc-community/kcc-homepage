import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import AwardsIndi from './AwardsIndi'
import AwardsInde from './AwardsInde'
import GrandPrize from './GrandPrize'

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
  margin-top: 98px;
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

const awardsList = [
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

const Desc = styled.div`
font-family: 'SF Pro Text';
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 32px;
margin-top: 59px;
max-width: 1152px;
text-align: center;
/* or 178% */
@media (max-width: 768px) {
  margin-top: 30px;
  padding: 0 33px;
  font-size: 14px;
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
const Individual: React.FunctionComponent<Props> = ({ title, name }) => {
  console.log("title::", title);

  return (
    <Content>
      <UnicornTitle title={title ? title : "Grand Prize Awards "} />
      <GrandPrize/>
      <AwardsInde/>
      <AwardsIndi/>
    </Content>
  )
}

export default Individual
