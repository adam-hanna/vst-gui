import React from 'react'
import styled from 'styled-components'

import { ScaleSelector } from '../Selectors/Scales'
import { KeySelector } from '../Selectors/Keys'
import { Bar } from '../MusicNotation/Bar'

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`

const SelectorsWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`

export type BarAndSelectorsProps = {
  musicKey: string;
  onKeyChange: (key: string) => void;

  scale: string;
  onScaleChange: (scale: string) => void;

  hasClef: boolean;
  hasRepeat: boolean;

  remove: () => void
}

export const BarAndSelectors =({
  musicKey,
  onKeyChange,
  scale,
  onScaleChange,
  hasClef,
  hasRepeat,
  remove,
}: BarAndSelectorsProps) => {
  return (
    <Wrapper>
      <SelectorsWrapper>
        <KeySelector
          value={musicKey}
          onChange={onKeyChange}
        />
        <ScaleSelector
          value={scale}
          onChange={onScaleChange}
        />
      </SelectorsWrapper>
      <Bar
        hasClef={hasClef}
        hasRepeat={hasRepeat}
        remove={remove}
      />
    </Wrapper>
  )
}
