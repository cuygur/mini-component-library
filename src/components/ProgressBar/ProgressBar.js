/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    width: 370 + 'px',
    '--height': 8 + 'px',
  },
  medium: {
    width: 370 + 'px',
    '--height': 12 + 'px',
  },
  large: {
    width: 370 + 'px',
    '--height': 24 + 'px',
  },
}

const ProgressBar = ({ value, size }) => {
  return <strong>{value}</strong>
}

export default ProgressBar
