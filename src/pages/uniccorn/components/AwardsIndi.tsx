import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { useResponsive } from '../../../utils/responsive'

const PrizeWrap = styled.div`
  padding-top: 160px;
  @media (max-width: 768px) {
    padding-top: 100px;
    padding-right: 20px;
    padding-left: 20px;
  }
`

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`
const Desc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  max-width: 900px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 32px;
    padding: 0 24px;
    margin-top: 32px;
    text-align: center;
    width: 90%;
  }
`
const CardList = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 64px;

  @media (max-width: 768px) {
    margin-top: 48px;
    flex-flow: column nowrap;
    justify-content: center;
  }
`

const Link = styled.a`
  color: #00c77f;
`

const PrizeText = styled.div`
  width: 100%;
  color: #ffb547;
  text-align: left;
  font-size: 24px;
  position: relative;
  line-height: 64px;
  font-family: 'SF Pro Text';
  @media (max-width: 768px) {
    margin: 24px auto;
    font-size: 20px;
    text-align: center;
    max-width: 250px;
    line-height: 20px;
  }
`

const CardItem = styled.a`
  width: 920px;
  height: 140px;
  padding-left: 34px;
  border: 2px solid #31e1b9;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  & + & {
    margin-top: 24px;
  }
  @media (min-width: 768px) {
    &:hover {
      background: rgba(49, 225, 185, 0.1);
      transform: translateX(-30px);
    }
  }
  @media (max-width: 768px) {
    width: 335px;
    height: 320px;
    justify-content: space-around;
    flex-flow: column;
    padding: 36px 22px;
    & + & {
      margin-top: 16px;
    }
  }
`

const PrizeImage = styled.img`
  width: 80px;
  height: 80px;
`

const TextWrap = styled.div`
  height: 64px;
  width: 100%;
  max-width: 400px;
  margin-right: 100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-left: 66px;
  @media (max-width: 768px) {
    margin: 0 auto;
    height: auto;
  }
`
const NumberText = styled.div`
  display: inline-block;
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 32px;
  /* identical to box height, or 53% */
  text-align: center;
  color: #2fd7b5;
  @media (max-width: 768px) {
    margin: 0 5px;
    font-size: 20px;
  }
`
const AwardLink = styled.a`
  text-decoration: none;
`

const AwardLogo = styled.img`
  max-width: 210px;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  object-fit: fill;
  @media (max-width: 768px) {
    padding: 0 40px;
    font-size: 20px;
    line-height: 24px;
  }
`

const DescText = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 48px;
  /* identical to box height, or 171% */
  color: #2fd7b5;
  text-align: left;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 48px;
    text-align: center;
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

const awardList1 = [
  {
    icon: require('../../../assets/images/unicorn/p-3.png').default,
    title: 'Top SocialFi/DAO/Web3 Project',
    logo: require('../../../assets/images/unicorn/hashtag.png').default,
    name: 'XHashtag',
    link: 'https://www.xhashtag.io/',
  },
  {
    icon: require('../../../assets/images/unicorn/p-1.png').default,
    title: 'Top GameFi/Metaverse Project',
    desc: 'Sponsored by Skyman Ventures',
    logo: require('../../../assets/images/unicorn/pikaster.png').default,
    name: 'pikaster',
    link: 'https://www.pikaster.com/',
  },
  {
    icon: require('../../../assets/images/unicorn/p-4.png').default,
    title: 'Top Infrastructural Project',
    logo: require('../../../assets/images/unicorn/nest.png').default,
    name: 'Nest',
    link: '	https://nestprotocol.org',
  },
  {
    icon: require('../../../assets/images/unicorn/p-2.png').default,
    title: 'Top NFT Project',
    logo: require('../../../assets/images/unicorn/pencilDao.png').default,
    name: 'PencilDAO',
    link: 'https://www.pencildao.com/staking.html#lomen-staking',
  },
]

const UnicornTitle: FunctionComponent<{ title: string; color?: string }> = ({ title, color }) => {
  return (
    <UnicornTitleWrap>
      <Title style={{ color: color ?? '#fff' }}>{title}</Title>
    </UnicornTitleWrap>
  )
}

const AwardsIndi = () => {
  const { isMobile } = useResponsive()
  return (
    <PrizeWrap>
      <Content>
        <UnicornTitle title="Individual Awards" />
        <Desc>
          Individual prizes are<NumberText>$30,000</NumberText> respectively
        </Desc>

        <CardList>
          {awardList1.map((avatar, index) => {
            return (
              <CardItem key={index} href={avatar.link} target="_blank">
                <PrizeImage src={avatar.icon} key={index} />
                <TextWrap>
                  <PrizeText>{avatar.title}</PrizeText>
                </TextWrap>
                <AwardLink href={avatar.link} target="_blank">
                  <AwardLogo src={avatar.logo}></AwardLogo>
                </AwardLink>
              </CardItem>
            )
          })}
        </CardList>
      </Content>
    </PrizeWrap>
  )
}

export default AwardsIndi
