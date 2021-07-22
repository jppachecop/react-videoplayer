import React from 'react'
import { PlaylistHeader } from '../../components/PlaylistHeader/PlaylistHeader'
import { PlaylistItems } from '../PlaylistItems/PlaylistItems'
import { Nightmode } from '../../components/Nightmode/Nightmode'
import { StyledPlaylist } from '../../styles/StyledPlaylist'

export const Playlist = (props) => (
  <StyledPlaylist>
    <Nightmode />
    <PlaylistHeader />
    <PlaylistItems />
  </StyledPlaylist>
)
