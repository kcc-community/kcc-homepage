import { createReducer } from '@reduxjs/toolkit'
import { updatePairList, updateCurrentCurrency, updateCurrentPairId } from './actions'
import { ChainId } from '../../connectors/index'

export interface Currency {
  symbol: string
  name: string
  logoUrl: string
  decimals: number
}

export interface PairChainInfo {
  id: number
  chain: string
  currency: string
  name: string
  logoUrl: string
  chainId: ChainId
  contract: string
  decimals: number
  tag: number
  status: number
  comment: string
}

export interface PairInfo {
  id: number
  srcCid: number
  dstCid: number
  fee: string
  min: string
  max: string
  threshold: string
  count: number
  status: number
  comment: string
  openStatus: boolean
  limitStatus: boolean
  whiteListStatus: boolean
  srcChainInfo: PairChainInfo
  dstChainInfo: PairChainInfo
}

export interface BridgeState {
  pairList: PairInfo[]
  currentCurrency: Currency
  currentPairId: any
}

const initialState: BridgeState = {
  pairList: [],
  currentCurrency: { name: '', symbol: '', logoUrl: '', decimals: 0 },
  currentPairId: -1,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updatePairList, (state, action) => {
      const { pairList } = action.payload
      state.pairList = pairList
    })
    .addCase(updateCurrentCurrency, (state, action) => {
      const { currency } = action.payload
      state.currentCurrency = currency
    })
    .addCase(updateCurrentPairId, (state, action) => {
      const id = action.payload
      state.currentPairId = id
    })
)
