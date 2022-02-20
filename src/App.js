import React, { useState } from "react";
import "./App.css";

import styled from "styled-components";
import { FaClone } from "react-icons/fa";

export default function App() {
  // The idea in the aplication is using the react state to control the styled-component border radius

  const [topLeftRadius, setTopLeftRadius] = useState(20);
  const [topRightRadius, setTopRightRadius] = useState(20);
  const [bottomLeftRadius, setBottomLeftRadius] = useState(20);
  const [bottomRightRadius, setBottomRightRadius] = useState(20);
  const [tooltipVisibility, setTooltipVisibility] = useState("hidden");

  const tooltipText = {
    visibility: tooltipVisibility,
  };

  const Object = styled.div`
    margin-top: 50px;
    height: 350px;
    width: 350px;
    background: rgb(12, 4, 150);
    background: linear-gradient(
      120deg,
      rgba(12, 4, 150, 1) 0%,
      rgba(118, 7, 148, 1) 90%
    );
    box-shadow: 0 0 1em;
    border-radius: ${topLeftRadius}% ${topRightRadius}% ${bottomRightRadius}%
      ${bottomLeftRadius}%;
  `;

  return (
    <div className="App">
      <h1 className="title">Border Radius Previewer</h1>
      <Object />
      <div className="input-area">
        <div className="input-section">
          <label for="top-left">Top left: </label>
          <div className="input-space">
            <input
              type="number"
              id="top-left"
              value={topLeftRadius}
              onChange={(text) => {
                setTopLeftRadius(text.target.value);
              }}
            ></input>
            <p>%</p>
          </div>
        </div>
        <div className="input-section">
          <label for="top-right">Top right: </label>
          <div className="input-space">
            <input
              type="number"
              id="top-right"
              value={topRightRadius}
              onChange={(text) => {
                setTopRightRadius(text.target.value);
              }}
            ></input>
            <p>%</p>
          </div>
        </div>
        <div className="input-section">
          <label for="bottom-right">Bottom right: </label>
          <div className="input-space">
            <input
              type="number"
              id="bottom-right"
              value={bottomRightRadius}
              onChange={(text) => {
                setBottomRightRadius(text.target.value);
              }}
            ></input>
            <p>%</p>
          </div>
        </div>
        <div className="input-section">
          <label for="bottom-left">Bottom left: </label>
          <div className="input-space">
            <input
              type="number"
              id="bottom-left"
              value={bottomLeftRadius}
              onChange={(text) => {
                setBottomLeftRadius(text.target.value);
              }}
            ></input>
            <p>%</p>
          </div>
        </div>
      </div>
      <div className="copy-area">
        <code>
          <i>/*First way:*/</i>
          <br />
          <br />
          border-radius: {topLeftRadius === "" ? 0 : topLeftRadius}%{" "}
          {topRightRadius === "" ? 0 : topRightRadius}%{" "}
          {bottomRightRadius === "" ? 0 : bottomRightRadius}%{" "}
          {bottomLeftRadius === "" ? 0 : bottomLeftRadius}%;
          <br />
          <br />
          <i>/*Second way:*/</i>
          <br />
          <br />
          border-top-left-radius: {topLeftRadius === "" ? 0 : topLeftRadius}%;
          <br />
          border-top-right-radius: {topRightRadius === "" ? 0 : topRightRadius}
          %;
          <br />
          border-bottom-right-radius:{" "}
          {bottomRightRadius === "" ? 0 : bottomRightRadius}%;
          <br />
          border-bottom-left-radius:{" "}
          {bottomLeftRadius === "" ? 0 : bottomLeftRadius}% ;<br />
        </code>
        <div className="tooltip">
          <button
            id="copy-button"
            onClick={() => {
              navigator.clipboard.writeText(
                `border-radius: ${topLeftRadius === "" ? 0 : topLeftRadius}% ${
                  topRightRadius === "" ? 0 : topRightRadius
                }% ${bottomRightRadius === "" ? 0 : bottomRightRadius}% ${
                  bottomLeftRadius === "" ? 0 : bottomLeftRadius
                }%;`
              );
              setTooltipVisibility("visible");
              setTimeout(function () {
                setTooltipVisibility("hidden");
              }, 2000);
            }}
          >
            <span className="tooltip-text" style={tooltipText}>
              Code copied successfully!
            </span>
            Copy to clickboard &nbsp;&nbsp;
            <FaClone />
          </button>
        </div>
      </div>
    </div>
  );
}
