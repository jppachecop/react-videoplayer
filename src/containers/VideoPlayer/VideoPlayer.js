import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
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

export const VideoPlayer = ({ match, history, location }) => {
  const videos = JSON.parse(document.querySelector('[name="videos"]').value)

  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false,
  })

  useEffect(() => {
    const videoId = match.params.activeVideo
    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        (video) => video.id === videoId,
      )

      setState((prev) => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay,
      }))
    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false,
      })
    }
  }, [
    history,
    location.autoplay,
    match.params.activeVideo,
    state.activeVideo.id,
    state.videos,
  ])

  const nightModeCallback = () => {
    setState((prevState) => ({ ...prevState, nightMode: !prevState.nightMode }))
  }
  const endCallback = () => {
    const videoId = match.params.activeVideo
    const currentVideoIndex = state.videos.findIndex(
      (video) => video.id === videoId,
    )

    const nextVideo =
      currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1

    history.push({
      pathname: `/${state.videos[nextVideo].id}`,
      autoplay: false,
    })
  }
  const progressCallback = (e) => {
    if (e.playedSeconds > 10 && e.playedSeconds < 11) {
      const videosList = [...state.videos]
      const playedVideo = videosList.find(
        (video) => video.id === state.activeVideo.id,
      )
      playedVideo.played = true
      console.log(videosList)

      setState((prevState) => ({ ...prevState, videos: videosList }))
    }
  }

  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos ? (
        <StyledVideoPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          />
        </StyledVideoPlayer>
      ) : null}
    </ThemeProvider>
  )
}

VideoPlayer.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.func,
}
