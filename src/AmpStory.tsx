import * as React from 'react'

interface AmpStoryProps {
  title: string,
  publisher: string,
  'publisher-logo-src': string,
  'poster-portrait-src': string,
  children: any,
  // optional
  'poster-square-src'?: string,
  // TODO add all optional https://amp.dev/documentation/components/amp-story/?format=stories#attributes
}


// TODO reasearch https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/discovery/?format=stories#integrate-with-third-party-platforms-through-additional-metadata
export const AmpStory: React.FC<AmpStoryProps> = (props: AmpStoryProps) => {
  const { children, ...rest } = props
  return (
  <amp-story standalone {...rest}>
    {children}
  </amp-story>
)}
