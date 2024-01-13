import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useState } from "react";

const Chart = () => {
  const data = [
    { name: "Group A", value: 78 },
    { name: "Group B", value: 22 },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const COLORS = ["#22D6AA", "#D3F7EE", "#FFBB28", "#FF8042"];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      percent,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    return (
      <g stroke="none" style={{ outline: "none" }}>
        <text
          stroke="none"
          style={{ outline: "none" }}
          x={cx}
          y={"50%"}
          dy={8}
          textAnchor="middle"
          fontSize="15px"
          fill={fill}
          fontWeight={700}
        >
          {percent * 100}%
        </text>
        <Sector
          style={{ outline: "none", userSelect: "none" }}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          stroke="none"
          outline="none"
        />
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart style={{ outline: "none", margin: "auto" }} stroke="none">
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          style={{ outline: "none" }}
          data={data}
          cx={"50%"}
          cy={"50%"}
          innerRadius={32}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={0}
          startAngle={0}
          endAngle={360}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell
              style={{ outline: "none", userSelect: "none" }}
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
