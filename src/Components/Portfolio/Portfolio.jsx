import React from "react";
import "./Portfolio.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import Chart from "./CircularChart/Chart";

const Portfolio = () => {
  const barData = [
    { name: "20", x: 1, y: 1, z: 1 },
    { name: "  ", x: 2, y: 2, z: 2 },
    { name: "25", x: 3, y: 3, z: 3 },
    { name: "  ", x: 4, y: 4, z: 4 },
    { name: "30", x: 5, y: 5, z: 5 },
    { name: "  ", x: 6, y: 6, z: 6 },
    { name: "35", x: 7, y: 7, z: 7 },
    { name: "  ", x: 8, y: 8, z: 8 },
    { name: "40", x: 9, y: 9, z: 9 },
    { name: "  ", x: 10, y: 10, z: 10 },
    { name: "45", x: 11, y: 11, z: 11 },
    { name: "  ", x: 12, y: 12, z: 12 },
    { name: "50", x: 13, y: 13, z: 13 },
  ];

  return (
    <div className="portfolio__container">
      <div className="portfolio__retirement">
        <h3>Retirement Income</h3>
        <h2>Starting Year 2056</h2>
        <div className="portfolio__retirement__elements">
          <div className="retirement__element">
            <h2>$300,000</h2>
            <p>My Goal</p>
            <div className="horizontal__line"></div>
          </div>
          <div className="retirement__element">
            <h2>59%</h2>
            <p>Goal Achieved</p>
            <div className="horizontal__line"></div>
          </div>
          <div className="retirement__element">
            <h2>$300</h2>
            <p>Est. Monthly Income</p>
            <div className="horizontal__line"></div>
          </div>
        </div>
      </div>

      <div className="portfolio__bargraph">
        <h3>Continuous Overtime</h3>
        <div className="bargraph__components">
          <div className="component">
            <div
              className="coloured__legend"
              style={{ background: "#0800A3" }}
            ></div>
            <p style={{ fontWeight: 700 }}>
              <span style={{ color: "#909090", fontWeight: 700 }}>
                Employer: 
              </span>
              K 73,750
            </p>
          </div>
          <div className="component">
            <div
              className="coloured__legend"
              style={{ background: "#4935FF" }}
            ></div>
            <p style={{ fontWeight: 700 }}>
              <span style={{ color: "#909090", fontWeight: 700 }}>
                Employee: 
              </span>
              K 50,700
            </p>
          </div>
          <div className="component">
            <div
              className="coloured__legend"
              style={{ background: "#85AFFF" }}
            ></div>
            <p style={{ fontWeight: 700 }}>
              <span style={{ color: "#909090", fontWeight: 700 }}>
                Total Interest:
              </span>
              K 244,313
            </p>
          </div>
        </div>
        <BarChart
          className="card"
          width={500}
          height={200}
          data={barData}
          margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
        >
          <XAxis axisLine={false} tickLine={false} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} tickCount={4} />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Bar barSize={15} dataKey="x" stackId="a" fill="#0800A3" />
          <Bar barSize={15} dataKey="y" stackId="a" fill="#4935FF" />
          <Bar barSize={15} dataKey="z" stackId="a" fill="#85AFFF" />
        </BarChart>
      </div>

      <div className="portfolio__circular">
        <div className="portfolio__circular__top">
          <h3>How do I compare to my peers?</h3>
          <p>These numbers represent current goal achievement</p>
        </div>
        <div className="portfolio__circular__bottom">
          <div className="portfolio__circular__components">
            <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              <span>Age: </span>
              <span style={{ color: "#909090" }}>Under 30 </span>
              <i className="arrow__circular down"></i>
            </p>
            <hr />
            <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              <span>Salary: </span>
              <span style={{ color: "#909090" }}>K20-K30 </span>
              <i className="arrow__circular down"></i>
            </p>
            <hr />
            <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              <span>Gender: </span>
              <span style={{ color: "#909090" }}>Male </span>
              <i className="arrow__circular down"></i>
            </p>
          </div>
          <div className="portfolio__circular__components chart">
            <Chart />
          </div>
          <div className="portfolio__circular__components chart">
            <Chart />
          </div>
          <div className="portfolio__circular__components chart">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
