import React from 'react'
import styled from 'styled-components'
import UnicornTitle from './UnicornTitle'

const KCCDescWrap = styled.div`
  padding-top: 200px;
  @media (max-width: 768px) {
    padding-top: 65px;
  }
`

const KCCEarthLogo = require('../../../assets/images/unicorn/kcc-earth-logo.png').default

const ContentWrap = styled.div`
  width: 100%;
  background: url(${KCCEarthLogo}) top center no-repeat;
  @media (max-width: 768px) {
    background: url(${KCCEarthLogo}) -200px 0px no-repeat;
    background-size: auto 60%;
  }
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`

const Text = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */
  color: #ffffff;
  & + & {
    margin-top: 19px;
  }
`

const TextWrap = styled.div`
  margin-top: 170px;
  max-width: 589px;
  margin-bottom: 170px;
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 76px;
  }
`

const Line = styled.div`
  width: 24px;
  height: 4px;
  background: #ffffff;
  margin-bottom: 12px;
`

const KCCDesc = () => {
  return (
    <KCCDescWrap>
      <UnicornTitle title="KuCoin Community Chain" />
      <ContentWrap>
        <Content>
          <TextWrap>
            <Line />
            <Text>
              KuCoin Community Chain is a high-performance decentralized public chain built by the fans of KuCoin and
              KCS.
            </Text>
            <Text>
              The purpose of KCC is to provide community users with a faster, more convenient, and less-costly
              experience while accelerating the free flow of digital value around the world.
            </Text>
            <Text>
              The mainnet of KCC was launched on June 16, 2021. As a developing public chain, KCC is fully compatible
              with Ethereum and ERC-20 smart contracts and has extremely low costs in migration. It contains fast
              transaction speed, each block is produced every three seconds, with accelerated transaction confirmation
              and higher chain performance. With inexpensive transaction fees, KCC adopted the consensus algorithm of
              Proof of Staked Authority (PoSA) to ensure the security and stability of user experiences.
            </Text>
          </TextWrap>
        </Content>
      </ContentWrap>
    </KCCDescWrap>
  )
}

export default KCCDesc
