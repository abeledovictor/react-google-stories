import * as React from 'react'

interface AmpSourceProps {
  src: string,
  type: string,

}

export const AmpSource: React.FC<AmpSourceProps> = (props) => {
  return (
  <source {...props} />
)}
