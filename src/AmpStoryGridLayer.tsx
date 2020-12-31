import * as React from 'react'

interface AmpStoryGridLayerProps {
  children: any,
  template: string,
  // TODO add all props
}

export const AmpStoryGridLayer: React.FC = (props: AmpStoryGridLayerProps) => {
  const { children, ...rest } = props
  return (
  <amp-story-grid-layer {...rest}>
    {children}
  </amp-story-grid-layer>
)}
