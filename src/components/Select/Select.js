import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        width: 'fit-content',
        blockSize: 'fit-content',
        margin: '0',
        padding: '0',
        backgroundColor: 'yellow',
        background: 'Arrow no-repeat right',
      }}
    >
      {children}
      {Icon}
    </select>
  )
}

export default Select
