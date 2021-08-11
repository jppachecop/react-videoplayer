import React from 'react'
import PropTypes from 'prop-types'
import { PlaylistHeader } from '../../components/PlaylistHeader/PlaylistHeader'
import { PlaylistItems } from '../PlaylistItems/PlaylistItems'
import { Nightmode } from '../../components/Nightmode/Nightmode'
import { StyledPlaylist } from '../../styles/StyledPlaylist'

export const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
  <StyledPlaylist>
    <Nightmode nightModeCallback={nightModeCallback} nightMode={nightMode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
)

Playlist.propTypes = {
  videos: PropTypes.array,
  active: PropTypes.bool,
  nightModeCallback: PropTypes.func,
  nightMode: PropTypes.bool,
}
