import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'
import { FadeInUp } from '../../../utils/animation'

const PrizeWrap = styled.div`
  padding-top: 210px;
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
  margin-top: 85px;
  max-width: 900px;
  @media (max-width: 768px) {
    margin-top: 58px;
    font-size: 20px;
    line-height: 32px;
    padding: 0 24px;
    margin-top: 32px;
    text-align: center;
    width: 100%;
  }
`
const CardList = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 85px;

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
  font-size: 36px;
  position: relative;
  font-family: 'SF Pro Display Bold';
  @media (max-width: 768px) {
    margin-top: 33px;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    max-width: 250px;
  }
`

const CardItem = styled.div`
  width: 960px;
  height: 180px;
  border: 2px solid #31e1b9;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  & + & {
    margin-top: 24px;
  }
  &:hover {
    background: rgba(49, 225, 185, 0.1);
    transform: translateX(-30px);
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
    height: auto;
    flex-flow: column nowrap;
    padding: 48px 22px;
    & + & {
      margin-top: 16px;
    }
    &:hover {
      background: rgba(49, 225, 185, 0.1);
      transform: translateX(0px);
    }
  }
`

const PrizeImage = styled.img`
  width: 100px;
  height: 100px;
`

const TextWrap = styled.div`
  height: 100px;
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-left: 66px;
  @media (max-width: 768px) {
    margin-left: 0px;
    height: auto;
  }
`
const NumberText = styled.div`
  display: inline-block;
  margin: 0 13px;
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 32px;
  /* identical to box height, or 53% */
  text-align: center;
  color: #2fd7b5;
  @media (max-width: 768px) {
    margin: 16px 60px;
    font-size: 40px;
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

const awardList1 = [
  {
    icon: require('../../../assets/images/unicorn/p-1.png').default,
    title: 'Top GameFi/Metaverse Project',
    desc: '– Sponsored by Skyman Ventures',
  },
  {
    icon: require('../../../assets/images/unicorn/p-2.png').default,
    title: 'Top NFT Project',
  },
  {
    icon: require('../../../assets/images/unicorn/p-3.png').default,
    title: 'Top SocialFi/DAO/Web3 Project',
  },
  {
    icon: require('../../../assets/images/unicorn/p-4.png').default,
    title: 'Top Infrastructural Project',
  },
]

const Prize = () => {
  const { isMobile } = useResponsive()
  return (
    <PrizeWrap>
      <FadeInUp delay={200}>
        <Content>
          <UnicornTitle title="Individual Prizes" />
          <Desc>
            Individual prizes are <NumberText>$30,000</NumberText> respectively
          </Desc>

          <CardList>
            {awardList1.map((avatar, index) => {
              return (
                <CardItem key={index}>
                  <PrizeImage src={avatar.icon} key={index} />

                  <TextWrap>
                    <PrizeText>{avatar.title}</PrizeText>
                    {avatar?.desc && <DescText>{avatar.desc}</DescText>}
                  </TextWrap>
                </CardItem>
              )
            })}
          </CardList>
        </Content>
      </FadeInUp>
    </PrizeWrap>
  )
}

export default Prize
