import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Video } from '../../components/Video/Video'
import { Playlist } from '../Playlist/Playlist'
import { StyledVideoPlayer } from '../../styles/StyledVideoPlayer'

const theme = {
  bgColor: '#353535',
  bgColorItem: '#414141',
  bgColorItemActive: '#405c63',
  bgColorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff',
}

const themeLight = {
  bgColor: '#fff',
  bgColorItem: '#fff',
  bgColorItemActive: '#80a7b1',
  bgColorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayed: 'none',
  color: '#353535',
}

export const VideoPlayer = (props) => {
  const [nightMode, setNightMode] = useState(theme)

  return (
    <ThemeProvider theme={nightMode}>
      <StyledVideoPlayer>
        <Video />
        <Playlist />
      </StyledVideoPlayer>
    </ThemeProvider>
  )
}
