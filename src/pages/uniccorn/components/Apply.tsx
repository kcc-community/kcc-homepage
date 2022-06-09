import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'
import { FadeInUp } from '../../../utils/animation'

const applyLink = 'https://tally.so/r/3lMeXw'

const ApplyWrap = styled.div`
  padding-top: 200px;
  @media (max-width: 768px) {
    padding-top: 124px;
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
const ApplyListWrap = styled.div`
  margin-top: 75px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    margin-top: 40px;
    padding: 0 16px;
  }
`

const ApplyItem = styled.div<{ bg: string }>`
  position: relative;
  width: 520px;
  height: 714px;
  padding: 107px 40px 42px 40px;
  background: url(${({ bg }) => bg}) top center no-repeat;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-20px);
  }

  & + & {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: 714px;
    background: url(${({ bg }) => bg}) top center no-repeat;
    background-size: 100% 100%;
    padding: 80px 25px 180px 25px;
    & + & {
      margin-left: 0px;
      margin-top: 33px;
    }
  }
`
const Title = styled.div`
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 57px;
  color: #0b1013;
`
const Desc = styled.div`
  position: relative;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  margin-top: 36px;
  /* or 178% */
  padding-left: 30px;
  padding-right: 30px;
  color: #0b1013;
  &::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    background: #0b1013;
    border-radius: 50%;
    z-index: 11;
    top: 10px;
    left: 0px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const Desc1 = styled.div`
  position: relative;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  margin-top: 60px;
  /* or 178% */
  color: #fff;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ApplyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 240px;
  height: 64px;
  left: 40px;
  bottom: 42px;
  background: #0b1013;
  font-family: 'SF Pro Display Bold';
  font-weight: 900;
  font-size: 24px;
  /* identical to box height, or 133% */
  color: #ffffff;
  cursor: pointer;
  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`

const Apply = () => {
  const { isMobile } = useResponsive()

  return (
    <ApplyWrap>
      <FadeInUp delay={200}>
        <Content>
          <UnicornTitle title="How Can I Apply for the Unicorn Contest?" />
          <ApplyListWrap>
            <ApplyItem bg={require('../../../assets/images/unicorn/green.png').default}>
              <Title>For KCC’s Native Projects</Title>

              <Desc>Needs to complete a due diligence form</Desc>
              <Desc>Require KYC for at least three team members</Desc>
              <Desc>Provide audit report (if applicable)</Desc>

              <ApplyButton
                onClick={() => {
                  window.open(applyLink)
                }}
              >
                Apply Now
              </ApplyButton>
            </ApplyItem>
            <ApplyItem bg={require('../../../assets/images/unicorn/orange.png').default}>
              <Title>For Cross-chain Projects </Title>
              <Desc>
                Needs to be active and in continuous operation for more than 1 month (before application) in other
                ecologies
              </Desc>
              <Desc style={{ marginTop: '10px' }}>
                Needs to complete a due diligence form and at least three team members KYC certified
              </Desc>
              <Desc style={{ marginTop: '10px' }}>Provide audit report (if applicable based on protocol type)</Desc>
              <ApplyButton
                onClick={() => {
                  window.open(applyLink)
                }}
              >
                Apply Now
              </ApplyButton>
            </ApplyItem>
          </ApplyListWrap>
          <Desc1
            style={{
              color: '#fff',
              marginTop: isMobile ? '30px' : '60px',
              fontSize: isMobile ? '14px' : '18px',
              padding: isMobile ? '0 24px' : '0px',
            }}
          >
            *Reminder: Unicorn Contest data will only be calculated for projects operating on KCC during the contest
            period.
          </Desc1>
        </Content>
      </FadeInUp>
    </ApplyWrap>
  )
}

export default Apply
