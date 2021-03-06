import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const About = () => {
  return (
    <Wrapper>
      {/* <Button onClick={openAbout}>?</Button> */}
      <AboutText data-tip data-for="about">
        ?
      </AboutText>
      <ReactTooltip id="about" effect="solid" backgroundColor="#232426">
        <Div>
          Radigue is sine waves phasing and beating, harmony or dissonance.
          Headphones are not required but recommended. The pencil will save your
          panel settings, the bolts will set parameters according to the weather
          of your geographic location. Built using React and Tone.js.
        </Div>
      </ReactTooltip>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Segoe UI Symbol";
  background: #232426;
  padding-left: 40px;
`;

const Div = styled.div`
  border-radius: 5px;
  width: 400px;
  text-align: center;
  background: #232426;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.22);
  box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.22);
`;

const AboutText = styled.p`
  color: #b5a642;
  font-size: 30px;
  margin-right: 40px;
  transform: translateY(-3px);
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export default About;
