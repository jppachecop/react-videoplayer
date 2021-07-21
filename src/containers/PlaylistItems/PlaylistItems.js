import React from 'react'
import PlaylistHeader from './PlaylistHeader'
import PlaylistItems from './PlaylistItems'
import NightMode from './NightMode'

export const VideoPlayer = (props) => {
  return (
    <>
      <NightMode />
      <PlaylistHeader />
      <PlaylistItems />
    </>
  )
}
