import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

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
  font-size: 52px;
  line-height: 62px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  margin: 0 20px;
  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 31px;
    margin: 0 8px;
  }
`

const UnicornIcon = styled.img`
  width: 50px;
  height: 46px;
  @media (max-width: 768px) {
    width: 25px;
    height: 23px;
  }
`

const UnicornReverseIcon = styled.img`
  width: 50px;
  height: 46px;
  transform: rotateY(180deg);
  @media (max-width: 768px) {
    width: 25px;
    height: 23px;
  }
`

const UnicornTitle: FunctionComponent<{ title: string; color?: string }> = ({ title, color}) => {
  const url = color
    ? require('../../../assets/images/unicorn/yellow-unicorn.png').default
    : require('../../../assets/images/unicorn/unicorn.png').default
  return (
    <UnicornTitleWrap>
      <UnicornReverseIcon src={url} />
      <Title style={{ color: color ?? '#fff' }}>{title}</Title>
      <UnicornIcon src={url} />
    </UnicornTitleWrap>
  )
}

export default UnicornTitle
