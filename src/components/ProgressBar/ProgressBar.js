/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    '--width': 370 + 'px',
    '--height': 8 + 'px',
    '--backgroundColor': COLORS.transparentGray15,
  },
  medium: {
    '--width': 370 + 'px',
    '--height': 12 + 'px',
    '--backgroundColor': COLORS.transparentGray15,
  },
  large: {
    '--width': 370 + 'px',
    '--height': 24 + 'px',
    '--backgroundColor': COLORS.transparentGray15,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES
  console.log(styles.small)
  const Wrapper = styled.div`
    width: 370px;
    height: 30px;
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: 4px;
    margin: 0 auto;
  `
  const LoadBar = styled.div`
    width: 250px;
    height: 30px;
    background-color: ${COLORS.primary};
    border-radius: 4px 0px 0px 4px;
  `
  return (
    <>
      <Wrapper style={styles}>
        <LoadBar>{value}</LoadBar>
      </Wrapper>
    </>
  )
}

export default ProgressBar
