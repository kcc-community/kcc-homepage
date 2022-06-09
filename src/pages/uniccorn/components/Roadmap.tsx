import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'
import { FadeInUp } from '../../../utils/animation'

const RoadmapWrap = styled.div`
  padding-top: 210px;
  @media (max-width: 768px) {
    padding-top: 100px;
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
  /* or 160% */
  text-align: center;
  color: #ffffff;
  margin-top: 78px;
  margin-bottom: 124px;

  @media (max-width: 768px) {
    margin-top: 32px;
    padding: 0 24px;
    font-size: 14px;
    line-height: 28px;
    margin-bottom: 60px;
  }
`
const RoadmapImage = styled.img`
  margin-top: 100px;
  width: 774px;
  height: auto;
  @media (max-width: 768px) {
    width: 86%;
    margin-top: 0px;
    max-width: 400px;
  }
`

const bg = require('../../../assets/images/unicorn/roadmap-bg.png').default
const mbg = require('../../../assets/images/unicorn/m-roadmap-bg.png').default

const ListWrap = styled.div`
  width: 775px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background: url(${bg}) center 50px no-repeat;
  @media (max-width: 768px) {
    background: url(${mbg}) left 50px no-repeat;
    width: 100%;
    max-width: 300px;
  }
`

const ListItem = styled.div<{ index: number }>`
  align-self: ${({ index }) => {
    if (index % 2 === 0) {
      return 'flex-start'
    }
    return 'flex-end'
  }};
  border: ${({ index }) => {
    if (index % 2 === 0) {
      return '2px solid #31E1B9'
    }
    return '2px solid #FFB547'
  }};
  border-radius: 8px;
  background: #0b1013;
  width: 320px;
  height: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding-left: 24px;
  & + & {
    margin-top: 28px;
  }
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 240px;
    height: auto;
    min-height: 106px;
    padding: 20px;
    align-self: flex-end;
    & + & {
      margin-top: 20px;
    }
  }
`
const DateText = styled.div<{ index: number }>`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */
  color: ${({ index }) => {
    if (index % 2 === 0) {
      return '#31e1b9'
    }
    return '#FFB547'
  }};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const DateSubText = styled.div<{ index: number }>`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 200% */
  color: ${({ index }) => {
    if (index % 2 === 0) {
      return '#31e1b9'
    }
    return '#FFB547'
  }};
  max-width: 265px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
const roadmapList = [
  {
    date: 'March 2nd - March 14th',
    text: 'Warm-up & Marketing',
  },
  {
    date: 'March 15th - April 17th',
    text: 'Submission & Technical integration',
  },
  {
    date: 'April 18th - May 8th',
    text: 'Project Contest',
  },
  {
    date: 'May 9th - May 12th',
    text: 'Overall Top 10 and some individual award & prize-winning projects announced',
  },
  {
    date: 'May 25th - May 27th',
    text: 'Community voting for Final Top 5 ranked projects on snapshot.eth',
  },
  {
    date: 'May 27th',
    text: 'Grant Prize Winning Projects Announced',
  },
]

const Roadmap = () => {
  const { isMobile } = useResponsive()
  return (
    <RoadmapWrap>
      <FadeInUp delay={200}>
        <Content>
          <UnicornTitle title="Roadmap" />
          <Desc>
            Unicorn Contest will start in March 2022 and end in May 2022. During this contest, we will select the
            most-outstanding projects at the end of the contest. Winners will get awarded and rewarded by KCC along with
            other sponsors of the event. For specifics, please follow the roadmap as a reference:
          </Desc>

          <ListWrap>
            {roadmapList.map((road, index) => {
              return (
                <ListItem key={index} index={index}>
                  <DateText index={index}>{road.date}</DateText>
                  <DateSubText index={index}>{road.text}</DateSubText>
                </ListItem>
              )
            })}
          </ListWrap>
        </Content>
      </FadeInUp>
    </RoadmapWrap>
  )
}

export default Roadmap
