import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { TitleText } from '../../../components/Common'

interface Props {}

const BenifitList = [
  {
    icon: require('../../../assets/images/ambassador/1.png').default,
    desc: 'Access to private groups, and connect with ambassadors from other countries',
  },
  {
    icon: require('../../../assets/images/ambassador/2.png').default,
    desc: 'Exclusive resources to help educate and onboard more community members',
  },
  {
    icon: require('../../../assets/images/ambassador/3.png').default,
    desc: 'Early access to new features and updates, and the opportunity to provide feedback ',
  },
  {
    icon: require('../../../assets/images/ambassador/4.png').default,
    desc: 'Direct access to the core team of the KCC for questions, suggestions, etc.',
  },
  {
    icon: require('../../../assets/images/ambassador/5.png').default,
    desc: 'Getting funds as return based on contributions',
  },
  {
    icon: require('../../../assets/images/ambassador/6.png').default,
    desc: 'Tagged as one of the KCC GoDAO members and able to decide how KCC should progress ',
  },
  {
    icon: require('../../../assets/images/ambassador/7.png').default,
    desc: 'Priority support from the KCC teams',
  },
]

const BenefitWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const Img = styled.img`
  width: 110px;
  height: 144px;
`
const Line = styled.div`
  width: 360px;
  background: #fff;
  height: 1px;
  margin: 32px 0;
  opacity: 0.7;
  @media (max-width: 768px) {
    width: 100%;
    margin: 32px 0 16px 0;
  }
`
const Text = styled.div`
  font-family: 'URWDIN-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  color: #ffffff;
  max-width: 360px;
`

const ListWrap = styled.div`
  max-width: 880px;
  margin-top: 120px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`

const ListItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 80px;
  &:nth-child(even) {
    margin-left: 160px;
  }
  @media (max-width: 768px) {
    &:nth-child(even) {
      margin-left: 0px;
    }
    padding: 0 20px;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export default function Benefits() {
  return (
    <BenefitWrap>
      <TitleText
        style={{
          fontFamily: 'URWDIN-Bold',
          marginTop: '89px',
          color: '#fff',
          fontSize: isMobile ? '32px' : '52px',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        Benefits of Being a GoDAO Ambassador
      </TitleText>
      <ListWrap>
        {BenifitList.map((item, index) => {
          return (
            <ListItem key={index}>
              <Img src={item.icon} />
              <Line />
              <Text>{item.desc}</Text>
            </ListItem>
          )
        })}
      </ListWrap>
    </BenefitWrap>
  )
}
