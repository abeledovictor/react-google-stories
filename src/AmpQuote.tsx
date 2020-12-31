import * as React from 'react'

interface AmpQuoteProps {
  /** Text */
  text: string,
  // TODO add more props
}

export const AmpQuote: React.FC<AmpQuoteProps> = (props: AmpQuoteProps) => {
  const { text, ...rest } = props
  const bindProps = {}
  bindProps[`data-amp-bind-${text}`] = text

  return (
  <q {...bindProps} {...rest}>
    {text}
  </q>
)}
