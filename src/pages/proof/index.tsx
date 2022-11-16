import { Input } from 'antd'
import React from 'react'
import styled from 'styled-components'
import ProofPanel from './ProofPanel'
import list from './text.json'

const Bg = require('../../assets/images/proof-bg.png').default

const Wrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background: url(${Bg}) top center no-repeat, #000;
  height: 100%;
  min-height: calc(100vh - 360px);
`
const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 144px;
`

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  align-items: center;
  color: #ffffff;
`

const Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-top: 22px;
  color: #ffffff;
  max-width: 800px;
`

const StyledInput = styled(Input)`
  height: 40px;
  width: 371px;
  margin-top: 48px;
  border-radius: 24px;
  & {
    .ant-input-prefix,
    .ant-input {
      background-color: #000 !important;
    }
  }
`
const Icon = styled.img`
  width: 20px;
  height: 20px;
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 35px;
`

const Item = styled.div`
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
`

const mockData = {
  symbol: 'BTC',
  name: 'Bitcoin',
  icon: 'https://cdn.jsdelivr.net/gh/kcc-community/tokens-info@main/icons/btc.png',
  lockInfo: [
    {
      network: 'BTC',
      address: 'bc1qg9ura3eja58gdgat74fmnahgsuxzy9499ca62u',
      balance: '271.39',
      contract: '',
      decimal: 0,
      explorer: 'https://explorer.btc.com/btc/address/bc1qg9ura3eja58gdgat74fmnahgsuxzy9499ca62u',
    },
  ],
  wrapInfo: [
    {
      network: 'KRC20',
      address: '0xfA93C12Cd345c658bc4644D1D4E1B9615952258C',
      symbol: 'BTCK',
      supply: '271.4',
      explorer: 'https://explorer.kcc.io/en/address/0xfA93C12Cd345c658bc4644D1D4E1B9615952258C',
    },
  ],
}

export type LockInfo = typeof mockData

const Proof: React.FC = () => {
  return (
    <Wrap>
      <Content>
        <Title>Available Assets and Blockchains</Title>
        <Desc>
          You can verify the transfer records and locked assets in the list below
          <br /> Assets can be transferred between the KCC chain and other public chains, and the total amount remains
          unchanged;
        </Desc>
        <StyledInput
          prefix={<Icon src={require('../../assets/images/Icons/search.png').default} />}
          placeholder="Search Coin"
          maxLength={36}
          min={0}
          style={{ backgroundColor: '#000' }}
        />
        <ListWrap>
          {list.map((lockToken, n) => {
            return <ProofPanel {...lockToken} key={n} />
          })}
        </ListWrap>
      </Content>
    </Wrap>
  )
}

export default Proof
