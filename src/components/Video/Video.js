import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { StyledVideo } from '../../styles/StyledVideo'
import { StyledVideoWrapper } from '../../styles/StyledVideoWrapper'

export const Video = ({ active, autoplay, endCallback, progressCallback }) => (
  <StyledVideo>
    <StyledVideoWrapper>
      <StyledVideoWrapper>
        <ReactPlayer
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: '0' }}
          playing={autoplay}
          controls
          url={active.video}
          onEnded={endCallback}
          onProgress={progressCallback}
        />
      </StyledVideoWrapper>
    </StyledVideoWrapper>
  </StyledVideo>
)

Video.propTypes = {
  active: PropTypes.object,
  autoplay: PropTypes.bool,
  endCallback: PropTypes.func,
  progressCallback: PropTypes.func,
}
