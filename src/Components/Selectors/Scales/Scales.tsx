import React from 'react'
import { Select } from 'semantic-ui-react'
import { Scale } from "@tonaljs/tonal"

export type ScaleSelectorProps = {
  value: string
  onChange: () => void
}

export const ScaleSelector = ({
  value,
  onChange
}: ScaleSelectorProps) => {
  const scales = Scale.names().map(name => {
    return {
      key: name, 
      value: name, 
      text: name
    }
  })

  return (
    <Select value={value} onChange={onChange} placeholder='Select your key' options={scales} />
  )
}
