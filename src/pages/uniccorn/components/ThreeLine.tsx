import React from 'react'
import styled from 'styled-components'
import { height } from 'styled-system'

interface Props {
  type: 'dotted' | 'solid'
  color: string
  height?: string | number
}

const ThreeLineWrap = styled.div<{ height: string | number }>`
  width: 100%;
  height: ${({ height }) => {
    if (typeof height === 'number') {
      return `${height}px`
    }
    return height
  }};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`

const Line = styled.div<{ type: string; color: string }>`
  width: 100%;
  height: 2px;
  border-top: ${({ type, color }) => `2px ${type} ${color}`};
`

const ThreeLine: React.FunctionComponent<Props> = ({ height, color, type }) => {
  return (
    <ThreeLineWrap height={height ?? '86px'}>
      <Line color={color} type={type} />
      <Line color={color} type={type === 'dotted' ? 'solid' : 'dotted'} />
      <Line color={color} type={type} />
    </ThreeLineWrap>
  )
}

export default ThreeLine
