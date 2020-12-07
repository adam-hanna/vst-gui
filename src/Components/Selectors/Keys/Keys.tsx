import React from 'react'
import { Select } from 'semantic-ui-react'
import { Keys } from '../../../Keys'

export type KeySelectorProps = {
  value: string
  onChange: () => void
}

export const KeySelector = ({
  value,
  onChange
}: KeySelectorProps) => {
  const keys = Keys.map(name => {
    return {
      key: name, 
      value: name, 
      text: name
    }
  })

  return (
    <Select value={value} onChange={onChange} placeholder='Select your country' options={keys} />
  )
}
