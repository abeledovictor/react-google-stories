import * as React from 'react'

interface AmpStoryBookendProps {
  /** Path to .json config file */
  src: string,
}

export const AmpStoryBookend: React.FC<AmpStoryBookendProps> = (props: AmpStoryBookendProps) => {
  const { src } = props
  return (
  <amp-story-bookend src={src} layout="nodisplay">
  </amp-story-bookend>
)}
