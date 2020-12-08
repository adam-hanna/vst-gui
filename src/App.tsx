import React, { useState, useReducer } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Input } from 'semantic-ui-react'
import styled from 'styled-components'

import './App.css';
import { BarAndSelectors } from './Components/BarAndSelectors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BarsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  max-width: 1200px;
`

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 15px 0px;
`

type BarState = {
  musicKey: string;
  scale: string;
}

const initialBars: BarState[] = [
  {
    musicKey: "C",
    scale: "major",
  }
]

type Action = {
  idx: number;
  type: string;
  data: string;
}

type BarReducerFn = (state: BarState[], action: Action) => BarState[];

const barReducer: BarReducerFn = (state, action) => {
  switch (action.type) {
    case "CHANGE_KEY":
      return state.map((bar, idx) => {
        if (idx === action.idx) {
          return { ...bar, musicKey: action.data }
        }

        return bar
      })

    case "CHANGE_SCALE":
      return state.map((bar, idx) => {
        if (idx === action.idx) {
          return { ...bar, scale: action.data }
        }

        return bar
      })

    case "ADD_BAR":
      return [...state, { musicKey: "C", scale: "major" }]

    case "REMOVE_BAR":
    return [...state].filter((bar, idx) => {
      return idx !== action.idx
    });

    default:
      return state;
  }
}

function App() {
  const [bars, dispatch] = useReducer(
    barReducer,
    initialBars,
  );
  const [tempo, setTempo] = useState(108)
  const [beatsPerBar, setBeatsPerBar] = useState(4)

  const handleKeyChange = (idx: number, data: string) => {
    dispatch({ idx, type: 'CHANGE_KEY', data });
  };
  const handleScaleChange = (idx: number, data: string) => {
    dispatch({ idx, type: 'CHANGE_SCALE', data });
  };

  return (
    <Wrapper className="App">
      <InputsWrapper>
        <Input
          label='Tempo (BPM)'
          value={tempo}
          onChange={e => {
            setTempo(Number(e.currentTarget.value))
          }}
        />
        <Input
          label='Beats per Bar'
          value={beatsPerBar}
          onChange={e => {
            setBeatsPerBar(Number(e.currentTarget.value))
          }}
        />
      </InputsWrapper>
      <BarsWrapper>
        {(bars as BarState[]).map((bar, idx) => (
          <BarAndSelectors
            key={idx}

            musicKey={bar.musicKey}
            onKeyChange={(key: string) => { handleKeyChange(idx, key) }}

            scale={bar.scale}
            onScaleChange={(scale: string) => { handleScaleChange(idx, scale) }}

            hasClef={idx % 4 === 0}
            hasRepeat={idx === bars.length - 1}

            remove={() => { dispatch({ idx, type: 'REMOVE_BAR', data: '' }) }}
          />
        ))}
      </BarsWrapper>
      <div>
        <Button
          primary
          onClick={() => { dispatch({ idx: -1, type: 'ADD_BAR', data: '' }) }}
        >
          Add Bar
        </Button>
      </div>
    </Wrapper>
  );
}

export default App;
