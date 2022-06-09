import BN from 'bignumber.js'
export const UnconfirmOrderKey = 'UNCONFIRM_ORDER_LIST'

export function clearConfirmAndOutdateOrder() {
  console.log('starting check unconfirm order list...')
  const rawListString = window?.localStorage.getItem(UnconfirmOrderKey)
  const unconfirmOrderList = rawListString ? JSON.parse(rawListString) : []
  const now = new Date().getTime()
  const newList = []
  for (let i = 0; i < unconfirmOrderList.length; i++) {
    if (new BN(unconfirmOrderList[i]?.saveTime).plus(1000 * 60 * 10).lt(now)) {
      //outdate
      continue
    }
    newList.push(unconfirmOrderList[i])
  }
  window?.localStorage.setItem(UnconfirmOrderKey, JSON.stringify(newList))
}
