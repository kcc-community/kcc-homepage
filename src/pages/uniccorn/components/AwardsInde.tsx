import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { useResponsive } from '../../../utils/responsive'
import { FadeInUp } from '../../../utils/animation'

const AwardWrap = styled.div`
  padding-top: 160px;
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`
const AwardImageWrap = styled.a`
  overflow: hidden;
  width: 280px;
  height: 240px;
  margin-right: 36px;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 327px;
    height: 210px;
    & + & {
      margin-left: 0px;
      margin-top: 30px;
    }
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

const AwardLogo = styled.img`
  max-width: 210px;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  @media (max-width: 768px) {
    padding: 0 40px;
    font-size: 20px;
    line-height: 24px;
  }
`

const AwardImage = styled.img`
  width: 200px;
  height: 76px;
  margin: 3px 0 40px 0;
  cursor: pointer;
  /* transition: all 0.3s ease-in-out; */
  @media (max-width: 768px) {
    height: auto;
    & + & {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`

const AwardLink = styled.a`
  text-decoration: none;
`

const NumberText = styled.div`
  display: inline-block;
  margin: 0 13px;
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
    src: require('../../../assets/images/unicorn/award4.png').default,
    text: 'Most Promising Development Award',
    logo: require('../../../assets/images/unicorn/mojito.png').default,
    name: 'MojitoSwap',
    link: 'https://app.mojitoswap.finance/',
  },
  {
    src: require('../../../assets/images/unicorn/award1.png').default,
    text: 'Most Innovative Technology Award',
    logo: require('../../../assets/images/unicorn/saffron.png').default,
    name: 'saffron',
    link: 'https://kcc.saffron.finance/#home',
  },
  {
    src: require('../../../assets/images/unicorn/award2.png').default,
    text: 'Most Popular Community Award',
    logo: require('../../../assets/images/unicorn/kuSwap.png').default,
    name: 'KuSwap',
    link: 'https://kuswap.finance/#/swap',
  },
]

const awardList2 = [
  {
    src: require('../../../assets/images/unicorn/award5.png').default,
    text: 'Best Social Contribution Award',
    logo: require('../../../assets/images/unicorn/kupay.png').default,
    name: 'KuPay',
    link: 'https://kupay.finance/',
  },
  {
    src: require('../../../assets/images/unicorn/award3.png').default,
    text: 'Best Wallet Experience Award ',
    logo: require('../../../assets/images/unicorn/tokenPocket.png').default,
    name: 'Token Pocket',
    link: 'https://www.tokenpocket.pro/',
  },
]

const UnicornTitle: FunctionComponent<{ title: string; color?: string }> = ({ title, color }) => {
  return (
    <UnicornTitleWrap>
      <Title style={{ color: color ?? '#fff' }}>{title}</Title>
    </UnicornTitleWrap>
  )
}

const AwardsInde = () => {
  const { isMobile } = useResponsive()
  return (
    <AwardWrap>
      <FadeInUp delay={200}>
        <Content>
          <UnicornTitle title="Independent Awards" />
          <Desc>
            Independent prizes are <NumberText>$20,000</NumberText> respectively
          </Desc>
          <CardList>
            {awardList1.map((avatar, index) => {
              return (
                <AwardImageWrap key={index} href={avatar.link} target="_blank">
                  <AwardImage src={avatar.src} key={index} />
                  <AwardLink href={avatar.link} target="_blank">
                    <AwardLogo src={avatar.logo}></AwardLogo>
                  </AwardLink>
                </AwardImageWrap>
              )
            })}
          </CardList>
          <CardList>
            {awardList2.map((avatar, index) => {
              return (
                <AwardImageWrap key={index} href={avatar.link} target="_blank">
                  <AwardImage src={avatar.src} key={index} />
                  <AwardLink href={avatar.link} target="_blank">
                    <AwardLogo src={avatar.logo}></AwardLogo>
                  </AwardLink>
                </AwardImageWrap>
              )
            })}
          </CardList>
        </Content>
      </FadeInUp>
    </AwardWrap>
  )
}

export default AwardsInde
