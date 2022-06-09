import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import ParticipantPro from './Participant'
import Individual from './Individual'


const ActiveWrap = styled.div`
  padding-top: 168px;
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`
const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  align-items: center;
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
  font-size: 52px;
  line-height: 62px;
  /* identical to box height */
  text-align: center;
  margin: 0 20px;
  background: linear-gradient(to right, #39d7e1, #38eabc);
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
    margin: 0 8px;
  }
`

const UnicornIcon = styled.img`
  width: 50px;
  height: 46px;
  @media (max-width: 768px) {
    width: 25px;
    height: 23px;
  }
`

const UnicornReverseIcon = styled.img`
  width: 50px;
  height: 46px;
  transform: rotateY(180deg);
  @media (max-width: 768px) {
    width: 25px;
    height: 23px;
  }
`

const UnicornTitle: FunctionComponent<{ title: string; color?: string }> = ({ title, color}) => {
  const url = color
    ? require('../../../assets/images/unicorn/blue-unicorn.png').default
    : require('../../../assets/images/unicorn/green-unicorn.png').default
  return (
    <UnicornTitleWrap>
      <UnicornReverseIcon src={url} />
      <Title>{title}</Title>
      <UnicornIcon src={url} />
    </UnicornTitleWrap>
  )
}

const ExperienceWeek = () => {
  return (
    <ActiveWrap>
      <Content>
        <UnicornTitle title="KCC Unicorn Contest Winners Revealed" />
         <Individual />
        <ParticipantPro title="Top 10 Projects" name="topTen"/>
        {/* <ParticipantPro /> */}
      </Content>
     
    </ActiveWrap>
  )
}

export default ExperienceWeek
