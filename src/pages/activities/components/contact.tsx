import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Wrap = styled.div`
  margin: 0px auto;
  padding-top: 86px;
  width: 100%;
  @media (max-width: 768px) {
    padding-top: 6px;
  }
`

const Title = styled.div`
  font-family: URWDIN-Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 32px;
  /* identical to box height, or 100% */
  color: #ffffff;
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 48px;
  @media (max-width: 768px) {
    margin-top: 42px;
  }
`
const Item = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #49ffa1;
  padding-left: 60px;
  & + & {
    margin-top: 24px;
  }
  @media (max-width: 768px) {
    height: auto;
    padding-left: 0px;
    flex-flow: column nowrap;
    padding-bottom: 64px;
  }
`
const LogoWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 80px;
  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 42px;
  }
`
const Logo = styled.img`
  width: 80px;
  height: 80px;
`
const LogoText = styled.div`
  font-family: URWDIN-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  color: #49ffa1;
  margin-top: 12px;
`

const LanguageList = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 140px;
  margin-left: 150px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    height: auto;
    margin-left: 0px;
  }
`

const LanguageItem = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  height: 34px;
  width: 120px;
  margin-left: 80px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
    justify-content: center;
    margin-left: 0px;
  }
`
const LanguageText = styled.div`
  font-family: URWDIN-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
  /* identical to box height, or 229% */
  text-decoration-line: underline;
  color: #49ffa0;
`
const FireIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 6px;
`

const contactList = [
  {
    name: 'Telegram',
    icon: require('../../../assets/images/activity/telegram.png').default,
    list: [
      { language: 'Announcement', url: 'https://t.me/KCCOfficialChannel', hot: true },
      { language: 'English', url: 'https://t.me/KCCOfficialEnglishCommunity', hot: true },
      { language: 'Hindi', url: 'https://t.me/KCCOfficialIndianCommunity' },
      { language: 'Nigerian', url: 'https://t.me/KCCOfficialNigerianCommunity' },
      { language: 'Russian', url: 'https://t.me/KCCOfficialRussianCommunity' },
      { language: 'Turkish', url: 'https://t.me/KCCOfficialTurkishCommunity' },
      { language: 'Indonesian', url: 'https://t.me/KCCOfficialIndonesianCommunity' },
      { language: 'Vietnamese', url: 'https://t.me/KCCOfficialVietnameseCommunity' },
      { language: 'Spanish', url: 'https://t.me/KCCOfficialSpanishCommunity' },
      { language: 'Arabic', url: 'https://t.me/KCCOfficialArabicCommunity' },
      { language: 'Chinese', url: 'https://t.me/KCCOfficialChineseCommunity' },
      { language: 'Portuguese', url: 'https://t.me/KCCOfficialBrazil' },
    ],
  },
  {
    name: 'Discord',
    icon: require('../../../assets/images/activity/discord.png').default,
    list: [{ language: 'English', url: 'https://discord.gg/ZuV64JAveX' }],
  },
  {
    name: 'Twitter',
    icon: require('../../../assets/images/activity/twitter.png').default,
    list: [{ language: 'English', url: 'https://twitter.com/KCCOfficialTW' }],
  },
  {
    name: 'Medium',
    icon: require('../../../assets/images/activity/medium.png').default,
    list: [{ language: 'English', url: 'https://kccofficial.medium.com' }],
  },
]

function MediaList() {
  const { t } = useTranslation()
  return (
    <Wrap>
      <Title>{t(`KCC Community`)}</Title>
      <ListWrap>
        {contactList.map((media, index) => {
          return (
            <Item key={index}>
              <LogoWrap>
                <Logo src={media.icon} />
                <LogoText>{media.name}</LogoText>
              </LogoWrap>
              <LanguageList>
                {media.list.map((laguage, index1) => {
                  return (
                    <LanguageItem onClick={() => open(laguage.url, '_blank')}>
                      <LanguageText>{laguage.language}</LanguageText>
                      {laguage?.hot && <FireIcon src={require('../../../assets/images/activity/fire.png').default} />}
                    </LanguageItem>
                  )
                })}
              </LanguageList>
            </Item>
          )
        })}
      </ListWrap>
    </Wrap>
  )
}
export { MediaList }
