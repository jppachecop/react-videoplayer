import React from 'react'
import PropTypes from 'prop-types'
import { StyledNightmode } from '../../styles/StyledNightmode'

export const Nightmode = ({ nightMode, nightModeCallback }) => (
  <StyledNightmode>
    <span>NightMode!!</span>
    <label className="switch">
      <input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
      <span className="slider round" />
    </label>
  </StyledNightmode>
)

Nightmode.propTypes = {
  nightMode: PropTypes.bool,
  nightModeCallback: PropTypes.func,
}
