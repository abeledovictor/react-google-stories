import * as React from 'react'

interface AmpStoryPageProps {
  children: any,
  /** Unique id for the story */
  id: string,
}

export const AmpStoryPage: React.FC = (props: AmpStoryPageProps) => {
  const { children, ...rest } = props
  return (
  <amp-story-page {...rest}>
    {children}
  </amp-story-page>
)}
