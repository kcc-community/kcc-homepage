import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'
import { FadeInUp } from '../../../utils/animation'

const BenefitWrap = styled.div`
  padding-top: 110px;
  @media (max-width: 768px) {
    padding-top: 65px;
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
  margin-top: 60px;
  max-width: 900px;
  @media (max-width: 768px) {
    margin-top: 32px;
    font-size: 14px;
    line-height: 24px;
    padding: 0 24px;
  }
`
const CardList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    margin-top: 32px;
  }
`

const CardItem = styled.div`
  width: 325px;
  height: 472px;
  background: rgba(49, 225, 185, 0.1);
  border: 1px solid #31e1b9;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  & + & {
    margin-left: 40px;
  }
  &:hover {
    position: relative;
    transform: translateY(-20px);
  }
  @media (max-width: 768px) {
    & + & {
      margin-top: 16px;
      margin-left: 0px;
    }
  }
`

const CardImage = styled.img`
  margin-top: 42px;
  width: 160px;
  height: 240px;
`

const CardDesc = styled.div`
  width: 100%;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  margin-top: 19px;
  /* or 200% */
  text-align: center;
  color: #ffffff;
  height: 280px;
  padding: 0 20px;
`

const cardList = [
  {
    desc: 'Share Grand prize pools (in KCS/stable-coin) around $1M + up to around $10M in liquidity support',
    icon: require('../../../assets/images/unicorn/gift.png').default,
  },
  {
    desc: 'Opportunity to enter an accelerator/incubating process from KCC GoDAO as well as anyone of this event’s sponsors/partners',
    icon: require('../../../assets/images/unicorn/money.png').default,
  },
  {
    desc: 'Receiving marketing support from KCC and KCC GoDAO ambassadors ',
    icon: require('../../../assets/images/unicorn/support.png').default,
  },
]

const Benefit = () => {
  return (
    <BenefitWrap>
      <FadeInUp>
        <Content>
          <UnicornTitle color="#FFAC3E" title="What are the benefits to participate?" />
          <Desc>
            To support projects and facilitate their growth, the Unicorn Contest will offer massive rewards & incentives
            to the most-outstanding projects!
          </Desc>

          <CardList>
            {cardList.map((card, index) => {
              return (
                <CardItem key={index}>
                  <CardImage src={card.icon} />
                  <CardDesc>{card.desc}</CardDesc>
                </CardItem>
              )
            })}
          </CardList>
        </Content>
      </FadeInUp>
    </BenefitWrap>
  )
}

export default Benefit
