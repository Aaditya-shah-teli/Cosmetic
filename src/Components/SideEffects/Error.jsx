import React from 'react';
import styled from 'styled-components';

export const Error = () => {
  return (
    <StyledWrapper>
      <div className="main_wrapper h-full w-full ">
        <div className="main">
          <Antenna />
          <TV />
          <Bottom />
        </div>
        <div className="text_404 block">
          <div className="text_4041">4</div>
          <div className="text_4042">0</div>
          <div className="text_4043">4</div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const Antenna = () => (
  <div className="antenna">
    <div className="antenna_shadow" />
    <div className="a1" />
    <div className="a1d" />
    <div className="a2" />
    <div className="a2d" />
    <div className="a_base" />
  </div>
);

const TV = () => (
  <div className="tv">
    <div className="curve">
      <svg className="curve_svg" viewBox="0 0 189.929 189.929">
        <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z" />
      </svg>
    </div>
    <div className="display_div">
      <div className="screen_out">
        <div className="screen_out1">
          <div className="screen">
            <span className="notfound_text"> NOT FOUND</span>
          </div>
          <div className="screenM">
            <span className="notfound_text">DATA NOT FOUND</span>
          </div>
        </div>
      </div>
    </div>
    <div className="lines">
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
    </div>
    <div className="buttons_div">
      <div className="b1"><div /></div>
      <div className="b2" />
      <div className="speakers">
        <div className="g1">
          <div className="g11" />
          <div className="g12" />
          <div className="g13" />
        </div>
        <div className="g" />
        <div className="g" />
      </div>
    </div>
  </div>
);

const Bottom = () => (
  <div className="bottom">
    <div className="base1" />
    <div className="base2" />
    <div className="base3" />
  </div>
);

const StyledWrapper = styled.div`
  .main_wrapper {
    width: 30em;
    height: 30em;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5em;
  }

  /* Antenna */
  .antenna {
    position: relative;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color:rgb(224, 169, 221);
    margin-bottom: -6em;
  }

  .antenna_shadow {
    position: absolute;
    background-color: transparent;
    width: 50px;
    height: 56px;
    margin-left: 1.68em;
    border-radius: 45%;
    transform: rotate(140deg);
    box-shadow: inset 0px 16pxrgb(204, 17, 157), inset 0px 16px 1px 1pxrgb(168, 3, 127);
  }

  .tv {
  display:flex;
  justify-content:center;
    width: 40em;
    height: 19em;
    margin-top: 3em;
    border-radius: 15px;
    background-color: rgb(224, 169, 221);;
    display: flex;
    justify-content: center;
    border: 2px solid #1d0e01;
    box-shadow: inset 0.2em 0.2emrgb(230, 53, 141);
  }

  /* Screen and Gradient Effects */
  .screen {
    width: 30em;
    height: 17em;
    font-family: Montserrat;
    border: 2px solid #1d0e01;
    background: repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px 2500px,
                repeating-conic-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 60% 60%/2500px 2500px;
    background-blend-mode: difference;
    animation: b 0.2s infinite alternate;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #252525;
    letter-spacing: 0.15em;
    text-align: center;
  }

  @keyframes b {
    100% {
      background-position: 50% 0, 60% 50%;
    }
  }

  .text_404 {
  text-align:center;
    font-size: 3em;
    font-weight: bold;
    color: rgb(255, 0, 0);;
  }

  .text_4041, .text_4042, .text_4043 {
    display: inline-block;
  }
  .notfound_text{
  display:flex;
  justify-content:center;
  align-item:center;
  }
`;

