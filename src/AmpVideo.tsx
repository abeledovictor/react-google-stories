import * as React from 'react'

interface AmpVideoProps {
  autoplay?: boolean,
  loop?: boolean,
  height: string,
  width: string,
  poster: string,
  layout: string,
}

export const AmpVideo: React.FC<AmpVideoProps> = (props) => {
  return (
  <amp-video {...props}>
  </amp-video>
)}
