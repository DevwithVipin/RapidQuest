import React, { useState } from "react";
import "./Options.css";

const Options = () => {
  const [upperSlider, setUpperSlider] = useState(12);
  const [lowerSlider, setLowerSlider] = useState(65);
  return (
    <div className="retirement__container">
      <div className="retirement__upper">
        <h2>Retirement Strategy</h2>
        <h3>Employee Contribution</h3>
        <div className="retirement__upper__slider slider">
          <input
            type="range"
            min="0"
            max="100"
            value={upperSlider}
            onChange={e => setUpperSlider(e.target.value)}
          />
          <p id="rangeValue">{upperSlider}%</p>
        </div>
        <h3>Retirement Age</h3>
        <div className="retirement__upper__slider slider">
          <input
            type="range"
            min="0"
            max="100"
            value={lowerSlider}
            onChange={e => setLowerSlider(e.target.value)}
          />
          <p id="rangeValue">{lowerSlider}</p>
        </div>
        <hr />
        <div className="retirement__info">
          <div className="info__component">
            <p>Employee Contribution</p>
            <p>{upperSlider}%</p>
          </div>
          <div className="info__component">
            <p>Interest Rate</p>
            <p>5%</p>
          </div>
        </div>
        <button className="update__button">Update</button>
        <a className="help__anchor" href="#">View Help Docs &gt;</a>
      </div>

      <div className="retirement__bottom">
        <div className="bottom__verticleline"></div>
        <div className="bottom__content">
          <p style={{fontSize: "1.1rem"}}>Are you considering a</p>
          <p style={{fontWeight: 700}}>Housing Advance</p>
          <p style={{fontSize: "0.9rem"}}>Limited time reduced interest.</p>
          <a className="help__anchor" style={{alignSelf: "start"}} href="#">Learn More &gt;</a>
        </div>
      </div>
    </div>
  );
};

export default Options;
