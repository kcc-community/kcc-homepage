import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
export interface ConfirmItemProps {
  title: string
  content?: string
}

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  &&& .ant-popover-inner {
    background: #fff !important;
  }
`

const Title = styled.div`
  height: 22px;
  font-size: 14px;
  font-family: URWDIN-Regular, URWDIN;
  font-weight: 400;
  color: rgba(1, 8, 30, 0.6);
  line-height: 22px;
`

const Content = styled.div`
  height: 22px;
  font-size: 14px;
  font-family: URWDIN-Medium, URWDIN;
  font-weight: 500;
  color: #01081e;
  line-height: 22px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const ConfirmItem: React.FunctionComponent<ConfirmItemProps> = ({ title, content, children }) => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Title>{t(`${title}`)}</Title>
      <Content>{content ? t(`${content}`) : children}</Content>
    </Wrapper>
  )
}

export default ConfirmItem
