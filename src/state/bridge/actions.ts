import { createAction } from '@reduxjs/toolkit'
import { Currency } from './reducer'

export const updatePairList = createAction<{
  pairList: any[]
}>('app/updatePairList')

export const updateCurrentCurrency = createAction<{
  currency: Currency
}>('app/updateCurrentCurrency')

export const updateCurrentPairId = createAction<number>('app/updateCurrentPairId')
