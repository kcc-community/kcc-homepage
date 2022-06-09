import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { BaseWrap, HomePageWrap } from '../home/index'
import Card from '../../components/ActivityCard'
import Helmet from 'react-helmet'
import { MediaList } from './components/contact'

export interface GrantsPageProps {}

const ActivitiesPageWrap = styled(HomePageWrap)`
  padding-top: 40px;
  padding-bottom: 40px;
  height: auto;
  min-height: calc(100vh - 320px);
  background: rgba(0, 0, 0, 1);
`
const ContentWrap = styled(BaseWrap)`
  margin-top: 68px;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`

const ListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  margin-top: 24px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(
      ${() => {
        const width = document.body.clientWidth
        return Math.floor(width / 300)
      }},
      1fr
    );
    justify-items: center;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(
      ${() => {
        const width = document.body.clientWidth
        return Math.floor(width / 300)
      }},
      1fr
    );
    justify-items: center;
  }
`

const Title = styled.div`
  height: 32px;
  font-size: 32px;
  font-family: URWDIN-Medium, URWDIN;
  font-weight: 500;
  color: #fff;
  line-height: 38px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
const SubTitle = styled.div`
  height: 32px;
  font-size: 20px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: #fff;
  line-height: 32px;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const ActivityWrap = styled.div`
  width: 280px;
  height: 208px;
  background: #f1f4f7;
  border-radius: 6px;
`

const ActivityImaga = styled.img`
  width: 280px;
  height: 208px;
  background: #f1f4f7;
  border-radius: 6px;
`

const ActivitiesPage: React.FunctionComponent<GrantsPageProps> = () => {
  const alwaysShow: any[] = [
    {
      thumbnail_ch: require('../../assets/images/activity/activity-1-ch.png').default,
      thumbnail_en: require('../../assets/images/activity/activity-1-en.png').default,
      deadline: '2023/07/07 10:57:33',
      url_ch: '/ambassador',
      url_en: '/ambassador',
    },
  ]

  const activities: any[] = [
    // super kcs week
    {
      thumbnail_ch: require('../../assets/images/activity/g-mojitoswap-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/g-mojitoswap-en.png').default,
      deadline: '2022/04/03 10:00:00',
      url_ch: 'https://gleam.io/xsZY6/kcc-special-event-mojitoswap-giveaway',
      url_en: 'https://gleam.io/xsZY6/kcc-special-event-mojitoswap-giveaway',
    },

    {
      thumbnail_ch: require('../../assets/images/activity/g-multi-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/g-multi-en.png').default,
      deadline: '2022/04/03 10:00:00',
      url_ch: 'https://gleam.io/Mdzq6/kcc-special-event-multichain-giveaway',
      url_en: 'https://gleam.io/Mdzq6/kcc-special-event-multichain-giveaway',
    },

    {
      thumbnail_ch: require('../../assets/images/activity/g-kuswap-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/g-kuswap-en.png').default,
      deadline: '2022/04/03 10:00:00',
      url_ch: 'https://gleam.io/Lzr2j/kcc-special-event-kuswap-giveaway',
      url_en: 'https://gleam.io/Lzr2j/kcc-special-event-kuswap-giveaway',
    },

    {
      thumbnail_ch: require('../../assets/images/activity/g-umbrella-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/g-umbrella-en.png').default,
      deadline: '2022/04/03 10:00:00',
      url_ch: 'https://gleam.io/6GDWZ/kcc-special-event-umbrella-giveaway',
      url_en: 'https://gleam.io/6GDWZ/kcc-special-event-umbrella-giveaway',
    },

    {
      thumbnail_ch: require('../../assets/images/activity/g-dextools-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/g-dextools-en.png').default,
      deadline: '2022/04/03 10:00:00',
      url_ch: 'https://gleam.io/uovXT/kcc-special-event-dextools-giveaway',
      url_en: 'https://gleam.io/uovXT/kcc-special-event-dextools-giveaway',
    },

    // kcs kcc telegram

    {
      thumbnail_ch: require('../../assets/images/activity/kcs-kcc-tele-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/kcs-kcc-tele-en.png').default,
      deadline: '2022/04/03 10:00:00',
      url_ch: 'https://t.me/KCCOfficialEnglishCommunity',
      url_en: 'https://t.me/KCCOfficialEnglishCommunity',
    },

    {
      thumbnail_ch: require('../../assets/images/activity/kcs-new-address-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/kcs-new-address-en.png').default,
      deadline: '2022/04/03 10:00:00',
      url_ch:
        'https://kccofficial.medium.com/kcc-special-events-is-coming-get-lottery-tickets-to-win-21-000-kcs-92c6f022963',
      url_en:
        'https://kccofficial.medium.com/kcc-special-events-is-coming-get-lottery-tickets-to-win-21-000-kcs-92c6f022963',
    },

    {
      thumbnail_ch: require('../../assets/images/activity/kcs-free-gas-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/kcs-free-gas-en.png').default,
      deadline: '2022/04/03 10:00:00',
      url_ch:
        'https://kccofficial.medium.com/kcc-special-events-is-coming-get-lottery-tickets-to-win-21-000-kcs-92c6f022963',
      url_en:
        'https://kccofficial.medium.com/kcc-special-events-is-coming-get-lottery-tickets-to-win-21-000-kcs-92c6f022963',
    },

    {
      thumbnail_ch: require('../../assets/images/activity/kcs-cross-chain-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/kcs-cross-chain-en.png').default,
      deadline: '2022/04/03 10:00:00',
      url_ch:
        'https://multichainorg.medium.com/join-the-cross-chain-mega-event-multichain-x-kcc-x-mojitoswap-x-coolmining-e7b403dba5c4',
      url_en:
        'https://multichainorg.medium.com/join-the-cross-chain-mega-event-multichain-x-kcc-x-mojitoswap-x-coolmining-e7b403dba5c4',
    },
    {
      thumbnail_ch: require('../../assets/images/activity/KCC-AMA-CN.png').default,
      thumbnail_en: require('../../assets/images/activity/KCC-AMA-EN.png').default,
      deadline: '2021/08/09 10:57:33',
      url_ch: 'https://kccofficial.medium.com/kcc-ama-series-episode-1-whats-done-and-what-s-next-in-2021-4f50685a350c',
      url_en: 'https://kccofficial.medium.com/kcc-ama-series-episode-1-whats-done-and-what-s-next-in-2021-4f50685a350c',
    },
    {
      thumbnail_ch: require('../../assets/images/activity/kuswap-cn.jpg').default,
      thumbnail_en: require('../../assets/images/activity/kuswap-en.jpg').default,
      deadline: '2021/08/09 10:57:33',
      url_ch: 'https://kccofficial.medium.com/kcc-ama-series-episode2-kuswap-safety-and-security-c642a46015f8',
      url_en: 'https://kccofficial.medium.com/kcc-ama-series-episode2-kuswap-safety-and-security-c642a46015f8',
    },
    {
      thumbnail_ch: require('../../assets/images/activity/nft-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/nft-en.png').default,
      deadline: '2021/09/10 10:57:33',
      url_ch: 'https://kccofficial.medium.com/kcc-ama-series-episode3-nfts-realm-nft-and-kcc-321d661d00f4',
      url_en: 'https://kccofficial.medium.com/kcc-ama-series-episode3-nfts-realm-nft-and-kcc-321d661d00f4',
    },
    {
      thumbnail_ch: require('../../assets/images/activity/stable-coin-cn.jpg').default,
      thumbnail_en: require('../../assets/images/activity/stable-coin-en.jpg').default,
      deadline: '2021/09/10 10:57:33',
      url_ch: 'https://kccofficial.medium.com/kcc-ama-series-episode4-paprprintr-stablecoin-and-kcc-63ce6c7401ce',
      url_en: 'https://kccofficial.medium.com/kcc-ama-series-episode4-paprprintr-stablecoin-and-kcc-63ce6c7401ce',
    },
    {
      thumbnail_ch: require('../../assets/images/activity/pentonium-en.png').default,
      thumbnail_en: require('../../assets/images/activity/pentonium-cn.png').default,
      deadline: '2021/09/10 10:57:33',
      url_ch: 'https://pentonium.medium.com/ama-with-kcc-recap-de308a6e29c5',
      url_en: 'https://pentonium.medium.com/ama-with-kcc-recap-de308a6e29c5',
    },
    {
      thumbnail_ch: require('../../assets/images/activity/padd-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/padd-en.png').default,
      deadline: '2021/09/10 10:57:33',
      url_ch:
        'https://kccofficial.medium.com/kcc-ama-series-episode-5-padd-finance-next-generation-launchpad-and-kcc-d4f432719a74',
      url_en:
        'https://kccofficial.medium.com/kcc-ama-series-episode-5-padd-finance-next-generation-launchpad-and-kcc-d4f432719a74',
    },
    {
      thumbnail_ch: require('../../assets/images/activity/mojitoswap-cn.png').default,
      thumbnail_en: require('../../assets/images/activity/mojitoswap-en.png').default,
      deadline: '2021/09/10 10:57:33',
      url_ch: 'https://medium.com/@mojitoswap/ama-recap-mojitoswap-growth-and-plans-1e676361df85',
      url_en: 'https://medium.com/@mojitoswap/ama-recap-mojitoswap-growth-and-plans-1e676361df85',
    },
  ]

  const [endedList, setEndedList] = React.useState([])
  const [onGoingList, setOnGoingList] = React.useState([])

  // group handle
  React.useEffect(() => {
    const end: any = []
    const ongoing: any = []
    for (let i = 0; i < activities.length; i++) {
      const activity = { ...activities[i], valid: false }
      const timestamp = new Date().getTime()
      const activityTimestamp = new Date(activity.deadline.replace('-', '/')).getTime()
      if (timestamp >= activityTimestamp) {
        end.push(activity)
      } else {
        ongoing.push({ ...activity, valid: true })
      }
    }
    setEndedList(() => end)
    setOnGoingList(() => ongoing)
  }, [])

  const { t } = useTranslation()

  const alwaysListCard = alwaysShow.map((item, index) => {
    return <Card key={index} {...item} />
  })

  const ActivityList = onGoingList.map((item, index) => {
    return <Card key={index} {...item} />
  })

  const overList = endedList.map((item, index) => {
    return <Card key={index} {...item} />
  })

  return (
    <ActivitiesPageWrap>
      <Helmet>
        <title>KCC Activities</title>
        <meta name="description" content="Join exciting KCC activities, including hackathon, meet-up and more." />
      </Helmet>
      {/* banner */}
      {/* <ContentWrap>
        <Title>{t(`KCC Activity Center`)}</Title>
        <SubTitle>{t(`KCS Super Week`)}</SubTitle>
        <ListWrap>{ActivityList}</ListWrap>
      </ContentWrap> */}
      <ContentWrap>
        <SubTitle>{t(`In Progress`)}</SubTitle>
        <ListWrap>{alwaysListCard}</ListWrap>
      </ContentWrap>
      {endedList.length ? (
        <ContentWrap>
          <SubTitle>{t(`The Event Is Over`)}</SubTitle>
          <ListWrap>{overList}</ListWrap>
        </ContentWrap>
      ) : null}
      <ContentWrap>
        <MediaList />
      </ContentWrap>
    </ActivitiesPageWrap>
  )
}

export default ActivitiesPage
