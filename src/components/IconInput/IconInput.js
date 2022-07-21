import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <input
      type='search'
      placeHolder={placeholder}
      label={label}
      icon={icon}
      size={size}
      style={{ border: 'none', textDecorationLine: 'underline', width: width }}
    ></input>
  )
}

export default IconInput
