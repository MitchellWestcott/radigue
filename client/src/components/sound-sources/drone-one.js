import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Tone from "tone";
import { droneOneVolume, droneOneDetune } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

import FlipCard from "./animations/flip";

// import DetuneAnimation from "./animations/detune";

const DroneOne = () => {
  const dispatch = useDispatch();
  // const [flipped, set] = useState(false);

  const initValues = useSelector((state) => {
    return state.parameterReducer.droneOne;
  });

  const [osc, setOsc] = useState((osc) => {
    const osc1 = new Tone.Oscillator().toDestination();
    return osc1;
  });

  useEffect(() => {
    osc.frequency.value = initValues.detune || 277.485;
    // console.log(initValues);
  }, [initValues.detune]);

  const [osc2, setOsc2] = useState((osc2) => {
    const oscTwo = new Tone.Oscillator().toDestination();
    return oscTwo;
  });

  // console.log(osc.frequency.value);

  osc2.frequency.value = 277.485;

  useEffect(() => {
    osc.volume.value = initValues.volume || -59;
    osc2.volume.value = initValues.volume || -59;
  }, [initValues.volume]);

  const start = () => {
    Tone.start();
    osc.start();
    osc2.start();
  };

  const stop = () => {
    osc.stop();
    osc2.stop();
  };

  const volume = (event) => {
    dispatch(
      droneOneVolume({
        volume: event.target.value,
        instrumentTitle: "droneOne",
      })
    );
  };

  const detune = (event) => {
    dispatch(
      droneOneDetune({
        detune: event.target.value,
        instrumentTitle: "droneOne",
      })
    );
  };

  return (
    <Wrapper>
      {/* <FlipButton onClick={() => set((state) => !state)}>
        &#9735;button
      </FlipButton>
      <SynthWrapper> */}
      {/* <FlipCard flipped={flipped}> */}
      <Button onClick={start}>&#9737;</Button>
      <Button onClick={stop}>&#8709;</Button>
      <InputDiv>
        <Input
          type="range"
          onChange={volume}
          value={initValues.volume}
          min="-60"
          max="-15"
          step="0.01"
        />
        <DetuneInput
          type="range"
          onChange={detune}
          value={initValues.detune}
          min="277.485"
          max="279.530"
          step="0.01"
        />
      </InputDiv>
      {/* <DetuneAnimation detuneAmount={initValues.detune} /> */}
      {/* </FlipCard>
      </SynthWrapper> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border-top: 1px solid white;
  border-bottom: 1px solid white; */
  /* position: absolute; */
  margin: 30px;
  padding: 10px;
  display: flex;
  height: 90px;
  /* justify-content: space-around; */
`;

// const FlipButton = styled.button`
// `;

const SynthWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  background: none;
  color: #b5a642;
  font-size: 40px;
  padding-right: 16px;
  padding-left: 16px;
  text-decoration: none;
  outline: none;
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  -webkit-appearance: none;
  background-color: rgb(222, 235, 255, 0.1);
  border-radius: 12px;
  border: none;
  outline: none;
  width: 60px;
  transform: rotate(270deg);
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    outline: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #b5a642;
  }
`;

const DetuneInput = styled.input`
  -webkit-appearance: none;
  background-color: rgb(222, 235, 255, 0.1);
  border-radius: 12px;
  border: none;
  outline: none;
  width: 50px;
  transform: rotate(270deg);
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    outline: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #b5a642;
  }
`;

export default DroneOne;
