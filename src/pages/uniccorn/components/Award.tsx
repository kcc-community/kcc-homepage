import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'
import { FadeInUp } from '../../../utils/animation'

const AwardWrap = styled.div`
  padding-top: 210px;
  @media (max-width: 768px) {
    padding-top: 60px;
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
  max-width: 1100px;
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
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 48px;
    flex-flow: column nowrap;
    justify-content: center;
  }
`

const Link = styled.a`
  color: #00c77f;
`

const AwardText = styled.div`
  width: 100%;
  height: 142px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: #ffb547;
  text-align: center;
  font-size: 36px;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform: rotateY(180deg);
  border-radius: 8px;
  font-family: 'SF Pro Display Bold';
  padding: 0 10px;
  background: #0b1013;
  @media (max-width: 768px) {
    padding: 0 40px;
    font-size: 20px;
    line-height: 24px;
  }
`

const AwardImage = styled.img`
  width: 372px;
  height: 142px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 400px;
    & + & {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`

const AwardImageWrap = styled.div`
  overflow: hidden;
  & + & {
    margin-left: 40px;
  }
  width: 372px;
  height: 142px;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000;

  &:hover {
    ${AwardImage} {
      z-index: 1;
      transform-origin: 0px 0px;
      transform: rotateX(180deg);
    }
    ${AwardText} {
      z-index: 2;
      transform: translateY(-100%) rotateY(0deg);
    }
  }
  @media (max-width: 768px) {
    width: 323px;
    height: 123px;
    & + & {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`

const awardList1 = [
  {
    src: require('../../../assets/images/unicorn/award1.png').default,
    text: 'Sponsored by Conflux',
  },
  {
    src: require('../../../assets/images/unicorn/award2.png').default,
    text: 'Most Popular Community Award',
  },
  {
    src: require('../../../assets/images/unicorn/award3.png').default,
    text: 'Best Wallet Experience Award',
  },
]

const awardList2 = [
  {
    src: require('../../../assets/images/unicorn/award4.png').default,
    text: 'Most Promising Development Award',
  },
  {
    src: require('../../../assets/images/unicorn/award5.png').default,
    text: 'Best Social Contribution Award',
  },
]

const Award = () => {
  const { isMobile } = useResponsive()
  return (
    <AwardWrap>
      <FadeInUp delay={200}>
        <Content>
          <UnicornTitle title="Independent Awards" />
          <Desc>
            To promote transparency and procedural fairness for the contest, all judges for the contest will participate
            in evaluating all the projects. The applicant projects will have the opportunity to win independent awards
            and receive support from the KCC GoDAO and respective award sponsors.
          </Desc>

          <CardList>
            {awardList1.map((avatar, index) => {
              return (
                <AwardImageWrap key={index}>
                  <AwardImage src={avatar.src} key={index} />
                  <AwardText>{avatar.text}</AwardText>
                </AwardImageWrap>
              )
            })}
          </CardList>
          <CardList style={{ marginTop: isMobile ? '30px' : '70px' }}>
            {awardList2.map((avatar, index) => {
              return (
                <AwardImageWrap key={index}>
                  <AwardImage src={avatar.src} key={index} />
                  <AwardText>{avatar.text}</AwardText>
                </AwardImageWrap>
              )
            })}
          </CardList>
          <Desc style={{ maxWidth: '100%' }}>
            *All independent awards and prizes are subject to change based on collaborations with partners and sponsors
          </Desc>
        </Content>
      </FadeInUp>
    </AwardWrap>
  )
}

export default Award
