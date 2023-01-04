import React from 'react'
import styled from 'styled-components'
import BridgeTitlePanel from '../../components/BridgeTitlePanel'
import { TransferWrap } from './transfer'
import { useHistory } from 'react-router-dom'
import { CenterRow } from '../../components/Row'
import { RightOutlined } from '@ant-design/icons'
import { Pagination, Spin } from 'antd'
import { getNetworkInfo, getNetworkInfoByName, getPairInfo } from '../../utils'
import { PairInfo } from '../../state/bridge/reducer'
import { useTranslation } from 'react-i18next'
import BN from 'bignumber.js'
import { BridgeService } from '../../api/bridge'
import { useWeb3React } from '@web3-react/core'
import { Base64 } from '../../utils/base64'
import { UnconfirmOrderKey } from '../../utils/task'
import useLocalStorageState from 'react-use-localstorage'
import { UnconfirmOrderListType } from './confirm'
import { find } from 'lodash'
import moment from 'moment'
import { theme } from '../../constants/theme'
import { ColumnCenter } from '../../components/Column'
import { useInterval } from '../../hooks/useInterval'
import { useQuery } from '../../hooks/useQuery'

export interface BridgeListPageProps {}

const BridgeListWrap = styled.div`
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  min-height: calc(100vh - 400px);
  @media (max-width: 768px) {
    min-height: 100%;
  }
`

const HistoryWrap = styled(TransferWrap)`
  margin-top: 156px;
  background: linear-gradient(180deg, #f5fffc 0%, #feffff 100%);
  height: 600px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`

const HistoryListWrap = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 0px;
  margin-top: 24px;
  /* overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    background-color: #f9f9f9;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${theme.colors.bridgePrimay};
  } */
`

const Order = styled.div`
  position: relative;
  height: 110px;
  padding: 17px 10px 0px 5px;

  & + & {
    border-top: 1px solid rgba(1, 8, 30, 0.08);
  }

  &:hover {
    cursor: pointer;
    background: rgba(49, 215, 160, 0.08);
  }
`

const Number = styled.span`
  font-size: 20px;
  font-family: URWDIN-Bold, URWDIN;
  font-style: italic;
  font-weight: normal;
  color: rgba(0, 6, 33, 0.87);
  margin-right: 12px;
  /*   height: 18px;
  line-height: 22px; */
`

const NetworkWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const NetworkName = styled.span`
  font-size: 14px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #000426;
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 768px) {
    width: 100px;
  }
`
const NetworkIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 4px;
`
const NetWorkDirectionIcon = styled.img`
  width: 16px;
  height: 7px;
  margin: 8px;
`
const Title = styled.div`
  font-size: 12px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: rgba(0, 0, 58, 0.6);
`

const Content = styled.div`
  font-size: 12px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #000132;
`
const Fee = styled.div`
  font-size: 12px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #31d7a0;
`

const EmptyParentWrap = styled.div`
  background: linear-gradient(180deg, #f5fffc 0%, #feffff 100%);
  width: 100%;
  height: 380px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const EmptyWrap = styled(EmptyParentWrap)<{ loading: boolean }>`
  opacity: ${({ loading }) => {
    if (loading) {
      return 0
    }
    return 1
  }};
`

const EmptyIcon = styled.img`
  width: 84px;
  height: 71px;
`

const EmptyText = styled.div`
  font-size: 14px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: rgba(1, 8, 30, 0.6);
  margin-top: 18px;
`

const OrderDetailWrap = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const OrderDetailItem = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
`

const Right = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-flow: column nowrap;
  ${OrderDetailItem} {
    text-align: right;
    align-items: flex-end;
  }
`

const StatusRow = styled.div`
  display: flex;
  width: auto;
  align-items: center;
`

export interface History {
  createTime: string
  updateTime: string
  id: number
  orderSn: string
  pairId: number
  srcChain: string
  srcCurrency: string
  srcBlockNumber: number
  srcTxHash: string
  srcLogIndex: number
  srcAddress: string
  srcAmount: string
  srcFee: string
  srcContract: string
  dstChain: string
  dstCurrency: string
  dstBlockNumber: number
  dstTxHash: string
  dstLogIndex: number
  dstAddress: string
  dstAmount: string
  dstContract: string
  status: string
  comment: string
}

const DirectionIcon = require('../../assets/images/bridge/to.png').default

const BridgeListPage: React.FunctionComponent<BridgeListPageProps> = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  const query = useQuery()

  const [loading, setLoading] = React.useState<boolean>(false)
  const [totalPage, setTotalPage] = React.useState<number>(0)
  const [total, setTotal] = React.useState<number>(0)
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  const [historyList, setHistoryList] = React.useState<any[]>([])

  const [unconfirmOrderList, setUnconfirmOrderList] = useLocalStorageState(UnconfirmOrderKey)

  const history = useHistory()

  const getUnconfirmedFromLocal = (list: History[], localList: UnconfirmOrderListType[]) => {
    // remove confirmed list
    const unconfirmed: UnconfirmOrderListType[] = []
    for (let i = 0; i < localList.length; i++) {
      if (!find(list, { srcTxHash: localList[i].saveHash })) {
        unconfirmed.push(localList[i])
      }
    }
    return unconfirmed
  }

  const pageSize = 4

  React.useEffect(() => {
    const page = query.get('page') as string
    const current: number = page ? parseInt(page as any) : (1 as number)
    setCurrentPage(current)
  }, [])

  const getHistoryList = async (needLoading?: boolean) => {
    if (!account) return
    try {
      needLoading && setLoading(() => true)
      const res = await BridgeService.transitionList(account, currentPage, pageSize)
      const data = res.data.data
      if (data) {
        //  need merge local un-confirm list
        data.list?.map((item: any) => {
          item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')
        })
        const unconfirm = getUnconfirmedFromLocal(data.list, JSON.parse(unconfirmOrderList))
        setUnconfirmOrderList(JSON.stringify(unconfirm))

        if (unconfirm.length > 0 && currentPage === 1) {
          setHistoryList(() => [
            ...unconfirm,
            ...data.list.slice(0, pageSize - unconfirm.length <= 4 ? pageSize - unconfirm.length : 0)
          ])
        } else {
          setHistoryList(() => [...data.list])
        }
        setTotalPage(() => data.total)

        setTotal(() => data.total + unconfirm.length)
        console.log(data.total + unconfirm.length)
      }
    } finally {
      setLoading(() => false)
    }
  }

  const hasUnconfirmOrder = React.useMemo(() => {
    for (let i = 0; i < history.length; i++) {
      if (historyList[i]?.status === undefined) {
        continue
      }
      if (historyList[i]?.status !== 'SUCCESS' && historyList[i]?.status !== 'CANCELLED') {
        return true
      }
    }
    return false
  }, [historyList])

  useInterval(() => {
    if (hasUnconfirmOrder) {
      getHistoryList(true)
    }
  }, 1000 * 10)

  const pageNumberChange = (pageNumber: number) => {
    window.history.pushState(null, '', `${window.location.href.split('?')[0]}?page=${pageNumber}`)
    setCurrentPage(() => pageNumber)
  }

  React.useEffect(() => {
    getHistoryList(true)
  }, [currentPage])

  const nav2transfer = () => {
    history.push('/bridge/transfer')
  }

  const nav2detail = (transaction: History) => {
    const orderRaw = JSON.stringify(transaction)
    const order = Base64.encode(orderRaw) as any
    localStorage.setItem('DETAIL_ORDER', order)
    localStorage.setItem('DETAIL_CURRENTPAGE', `${currentPage}`)
    history.push(`/bridge/detail?page=${currentPage}`)
  }

  const list = historyList.map((transaction, index) => {
    const no = (currentPage - 1) * 4 + index + 1

    let selectedPairInfo, srcNetworkInfo, distNetworkInfo, srcNetworkInfo1, distNetworkInfo1

    if (transaction.id) {
      selectedPairInfo = getPairInfo(transaction.pairId) as PairInfo
      srcNetworkInfo = getNetworkInfo(selectedPairInfo?.srcChainInfo?.chainId)
      distNetworkInfo = getNetworkInfo(selectedPairInfo?.dstChainInfo?.chainId)

      srcNetworkInfo1 = getNetworkInfoByName(transaction.srcChain)
      distNetworkInfo1 = getNetworkInfoByName(transaction.dstChain)
    } else {
      selectedPairInfo = getPairInfo(transaction.pairId) as PairInfo
      srcNetworkInfo = getNetworkInfo(transaction.srcId)
      distNetworkInfo = getNetworkInfo(transaction.distId)
      transaction.dstAmount = new BN(transaction.receiveAmount)
        .div(Math.pow(10, selectedPairInfo.srcChainInfo.decimals))
        .toString()
      transaction.srcFee = new BN(transaction.fee).div(Math.pow(10, srcNetworkInfo.decimals)).toString()
      transaction.status = `Pending`
      transaction.srcCurrency = transaction.currency.symbol
      transaction.createTime = moment(transaction.saveTime).format('YYYY-MM-DD HH:mm:ss')
    }

    return (
      <Order onClick={nav2detail.bind(null, transaction)} key={no}>
        <CenterRow>
          <Number>{no < 10 ? `0${no}` : `${no}`}</Number>
          <NetworkIcon src={srcNetworkInfo?.logo ?? srcNetworkInfo1?.logo} />
          <NetworkName>{srcNetworkInfo?.fullName ?? srcNetworkInfo1?.fullName}</NetworkName>
          <NetWorkDirectionIcon src={DirectionIcon} />
          <NetworkIcon src={distNetworkInfo?.logo ?? distNetworkInfo1?.logo} />
          <NetworkName>{distNetworkInfo?.fullName ?? distNetworkInfo1?.fullName}</NetworkName>
        </CenterRow>
        <OrderDetailWrap>
          <Left>
            <OrderDetailItem>
              <Title>{t(`Asset`)}:</Title>

              <Fee>{transaction.srcCurrency.toUpperCase()}</Fee>
            </OrderDetailItem>
            <OrderDetailItem>
              <Title>{t(`Amount`)}:</Title>
              <Fee>{new BN(transaction.dstAmount).precision(6).toNumber()}</Fee>
            </OrderDetailItem>
            <OrderDetailItem>
              <Title>{t(`Transfer fee`)}:</Title>
              <Content style={{ color: '#999', fontWeight: 300 }}>
                {new BN(transaction.srcFee).toNumber()} {srcNetworkInfo?.symbol.toUpperCase()}
              </Content>
            </OrderDetailItem>
          </Left>
          <Right>
            <OrderDetailItem>
              <StatusRow>
                <Title>{t(`${transaction.status}`)}</Title>
                <RightOutlined style={{ color: 'rgba(0, 0, 58, 0.6)', fontSize: '10px', marginLeft: '5px' }} />
              </StatusRow>
              <Content>{transaction.createTime}</Content>
            </OrderDetailItem>
          </Right>
        </OrderDetailWrap>
      </Order>
    )
  })

  return (
    <BridgeListWrap>
      <HistoryWrap>
        <BridgeTitlePanel title={t(`Transaction History`)} iconEvent={nav2transfer} />
        <Spin spinning={loading}>
          {historyList.length ? (
            <>
              <HistoryListWrap>{list}</HistoryListWrap>
              <ColumnCenter style={{ width: '100%' }}>
                <Pagination
                  current={currentPage}
                  total={total}
                  pageSize={pageSize}
                  onChange={pageNumberChange}
                  showSizeChanger={false}
                />
              </ColumnCenter>
            </>
          ) : (
            <EmptyParentWrap>
              {account ? (
                <>
                  <EmptyIcon src={require('../../assets/images/bridge/empty.svg').default} />
                  <EmptyText>{t(`No record`)}</EmptyText>
                </>
              ) : (
                <EmptyWrap loading={loading}>
                  <EmptyIcon src={require('../../assets/images/bridge/empty.svg').default} />
                  <EmptyText>{t(`Connect wallet first`)}</EmptyText>
                </EmptyWrap>
              )}
            </EmptyParentWrap>
          )}
        </Spin>
      </HistoryWrap>
    </BridgeListWrap>
  )
}

export default BridgeListPage
