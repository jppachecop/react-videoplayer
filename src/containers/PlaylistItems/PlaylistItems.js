import React from 'react'
import PropTypes from 'prop-types'
import { PlaylistItem } from '../../components/PlaylistItem/PlaylistItem'
import { withLink } from '../../hoc/withLink'
import { StyledPlaylistItems } from '../../styles/StyledPlaylistitems'

const PlaylistItemWithLink = withLink(PlaylistItem)

export const PlaylistItems = ({ videos, active }) => (
  <StyledPlaylistItems>
    {videos.map((video) => (
      <PlaylistItemWithLink
        key={video.id}
        video={video}
        active={video.id === active.id}
        played={video.played}
      />
    ))}
  </StyledPlaylistItems>
)

PlaylistItems.propTypes = {
  videos: PropTypes.array,
  active: PropTypes.object,
}
