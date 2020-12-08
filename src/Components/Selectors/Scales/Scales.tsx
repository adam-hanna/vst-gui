import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { Select } from 'semantic-ui-react'
import { Scale } from "@tonaljs/tonal"

const BoldLabel = styled.label`
  font-weight: bold;
`

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: baseline;
`

export type ScaleSelectorProps = {
  value: string;
  onChange: (key: string) => void;
}

export const ScaleSelector = ({
  value,
  onChange
}: ScaleSelectorProps) => {
  const scales = Scale.names().sort().map(name => {
    return {
      key: name, 
      value: name, 
      text: name
    }
  })

  return (
    <Wrapper>
      <BoldLabel>Scale:</BoldLabel>
      <Select 
        value={value} 
        onChange={e => { 
          onChange((e.target as HTMLDivElement).textContent || '') 
        }} 
        placeholder='Select the scale' 
        options={scales} 
      />
    </Wrapper>
  )
}
