import React from 'react'
import PropTypes from 'prop-types'
import { StyledPlaylistItem } from '../../styles/StyledPlaylistItem'

export const PlaylistItem = ({ video, active, played }) => (
  <StyledPlaylistItem active={active} played={played}>
    <div className="wbn-player__video-nr">{video.num}</div>
    <div className="wbn-player__video-name">{video.title}</div>
    <div className="wbn-player__video-time">{video.duration}</div>
  </StyledPlaylistItem>
)

PlaylistItem.propTypes = {
  active: PropTypes.bool,
  played: PropTypes.bool,
  video: PropTypes.object,
}
