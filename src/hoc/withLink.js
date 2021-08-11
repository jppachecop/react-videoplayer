import React from 'react'
import { Link } from 'react-router-dom'

export const withLink = (WrappedComponent) => (props) => {
  const newProps = {
    ...props,
    video: {
      // eslint-disable-next-line react/prop-types
      ...props.video,
      title: (
        // eslint-disable-next-line react/prop-types
        <Link to={{ pathname: `/${props.video.id}`, autoplay: true }}>
          {/* eslint-disable-next-line react/prop-types */}
          {props.video.title}
        </Link>
      ),
    },
  }

  return <WrappedComponent {...newProps} />
}
