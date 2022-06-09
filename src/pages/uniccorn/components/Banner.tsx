import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { FadeInUp } from '../../../utils/animation'

const BannerBg = require('../../../assets/images/unicorn/banner.png').default
const BannerCircle = require('../../../assets/images/unicorn/dot-circle.png').default

const bnAnimation = keyframes`
  0%{
    background: url(${BannerBg}) 1500px top no-repeat;
  }
  100%{
     background: url(${BannerBg}) 620px top no-repeat;
  }
`
const bnH5Animation = keyframes`
  0%{
    background: url(${BannerBg}) 620px top no-repeat;
  }
  100%{
     background: url(${BannerBg}) 120px top no-repeat;
  }
`

const BannerWrap = styled.div<{ show: boolean }>`
  width: 100%;
  height: 863px;
  position: relative;
  z-index: 1;
  ${({ show }) =>
    show &&
    css`
      background: url(${BannerBg}) 620px top no-repeat, rgb(11, 16, 19);
    `};

  animation: ${bnAnimation} 1s ease-in-out 0.1s;
  @media (max-width: 768px) {
    height: 440px;
    background: url(${BannerBg}) 120px top no-repeat;
    background-size: auto 100%;
    animation: none;
  }
`

const TopPic = styled.img`
  width: 380px;
  height: 162px;
  @media (max-width: 768px) {
    width: 175px;
    height: 74px;
  }
`

const BannerTitle = styled.div`
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 95px;
  color: #ffffff;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-family: 'SF Pro Display Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    padding-left: 24px;
    margin-top: -20px;
  }
`

const BannerContent = styled.div`
  height: 100%;
  padding-left: 120px;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
`

const BannerDesc = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */
  color: #ffffff;
  margin-top: 32px;
  max-width: 450px;
  @media (max-width: 768px) {
    padding-left: 24px;
    font-size: 16px;
    line-height: 28px;
    max-width: 317px;
  }
`

const Banner = () => {
  const [show, setShow] = React.useState<boolean>(false)

  return (
    <BannerWrap
      show={show}
      onAnimationEnd={() => {
        setShow(() => true)
      }}
    >
      <BannerContent>
        <FadeInUp delay={200}>
          <TopPic src={BannerCircle} />
          <BannerTitle>
            KuCoin <br /> Community <br /> Chain(KCC) <br /> Unicorn Contest
          </BannerTitle>
          <BannerDesc>
            DeFi, Infrastructure, NFT, GameFi, SocialFi, Metaverse, Web3 - Building a thriving and vibrant KCC ecosystem
          </BannerDesc>
        </FadeInUp>
      </BannerContent>
    </BannerWrap>
  )
}

export default Banner
