import * as React from 'react'

interface AmpParagraphProps {
  /** Text */
  text: string,
  // TODO add more props
}

export const AmpParagraph: React.FC<AmpParagraphProps> = (props: AmpParagraphProps) => {
  const { text, ...rest } = props
  const bindProps = {}
  bindProps[`data-amp-bind-${text}`] = text

  return (
  <p {...bindProps} {...rest}>
    {text}
  </p>
)}
