import * as React from 'react'

interface AmpImgProps {
  src: string,
  width: string,
  height: string,
  layout: string,
}

export const AmpImg: React.FC<AmpImgProps> = (props) => {
  return (
  <amp-img {...props}>
  </amp-img>
)}
