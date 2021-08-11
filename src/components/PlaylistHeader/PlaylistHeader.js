import React from 'react'
import PropTypes from 'prop-types'
import { StyledPlaylistHeader } from '../../styles/StyledPlaylistHeader'
import { StyledJourney } from '../../styles/StyledJourney'

export const PlaylistHeader = ({ active, total }) => (
  <StyledPlaylistHeader>
    <p>{active.title}</p>
    <StyledJourney>
      {active.num}/{total}
    </StyledJourney>
  </StyledPlaylistHeader>
)

PlaylistHeader.propTypes = {
  active: PropTypes.object,
  total: PropTypes.number,
}
