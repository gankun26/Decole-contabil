import React from "react";
import { FaArrowTrendUp, FaChartColumn, FaCoins, FaCalculator, FaChartPie } from "react-icons/fa6";

const items = [
  { Icon: FaArrowTrendUp, left: "8%", size: 30, delay: 0, duration: 14 },
  { Icon: FaChartColumn, left: "85%", size: 22, delay: 3, duration: 17 },
  { Icon: FaCoins, left: "35%", size: 18, delay: 6, duration: 15 },
  { Icon: FaArrowTrendUp, left: "62%", size: 34, delay: 1.5, duration: 12 },
  { Icon: FaCalculator, left: "22%", size: 20, delay: 8, duration: 18 },
  { Icon: FaChartPie, left: "72%", size: 22, delay: 4, duration: 16 },
  { Icon: FaArrowTrendUp, left: "48%", size: 24, delay: 10, duration: 14 },
  { Icon: FaChartColumn, left: "93%", size: 18, delay: 2, duration: 19 },
];

const FloatingIcons = ({ count = items.length }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {items.slice(0, count).map(({ Icon, left, size, delay, duration }, index) => (
        <span
          key={index}
          className="float-icon"
          style={{ left, animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
        >
          <Icon style={{ width: size, height: size }} />
        </span>
      ))}
    </div>
  );
};

export default FloatingIcons;
