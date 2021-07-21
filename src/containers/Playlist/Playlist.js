import React from 'react'
import { PlaylistHeader } from '../../components/PlaylistHeader/PlaylistHeader'
import { PlaylistItems } from '../PlaylistItems/PlaylistItems'
import { Nightmode } from '../../components/Nightmode/Nightmode'

export const Playlist = (props) => {
  return (
    <>
      <Nightmode />
      <PlaylistHeader />
      <PlaylistItems />
    </>
  )
}
