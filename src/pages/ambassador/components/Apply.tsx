import React from 'react'
import styled from 'styled-components'
interface Props {}

const ApplyBgImg = require('../../../assets/images/ambassador/footer-bg.png').default

const ApplyWrap = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background: url(${ApplyBgImg}) top center no-repeat;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    padding: 0 20px;
    height: 420px;
    background-size: auto 100%;
  }
`

const Title = styled.div`
  font-family: 'URWDIN-Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 30px;
  /* identical to box height, or 71% */
  text-align: center;
  color: #ffffff;
  margin-top: 110px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const Desc = styled.div`
  font-family: 'URWDIN-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  /* or 187% */
  text-align: center;
  color: #ffffff;
  margin-top: 16px;
`

const Button = styled.div`
  margin-top: 26px;
  width: 240px;
  height: 48px;
  background: #ffffff;
  border-radius: 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  /* identical to box height, or 150% */
  color: #29cd97;
  cursor: pointer;
`

const Apply = () => {
  return (
    <ApplyWrap>
      <Title>Want to being a GoDAO Ambassador ?</Title>
      <Desc>Your information will be reviewed within 7 business days.</Desc>
      <Button
        onClick={() => {
          window.open('https://forms.gle/pjo2XooRohr1wArb7', '_blank')
        }}
      >
        Apply Now
      </Button>
    </ApplyWrap>
  )
}

export default Apply
