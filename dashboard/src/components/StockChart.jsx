import React, { useEffect, useRef } from "react";

import { createChart, CandlestickSeries } from "lightweight-charts";
import "../index.css";

const StockChart = ({ data }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 600,

      layout: {
        background: { color: "#ffffff" },
        textColor: "#333",
      },

      grid: {
        vertLines: { color: "#f0f3fa" },
        horzLines: { color: "#f0f3fa" },
      },

      rightPriceScale: {
        borderColor: "#d1d4dc",
      },

      timeScale: {
        borderColor: "#d1d4dc",
        timeVisible: true,
      },
    });

    const candleSeries = chart.addSeries(CandlestickSeries);

    const cleanedData = [...data]
      .sort((a, b) => a.time - b.time)
      .filter(
        (item, index, arr) => index === 0 || item.time > arr[index - 1].time,
      );

    candleSeries.setData(cleanedData);

    chart.timeScale().fitContent();

    // 👇 ADD THIS PART
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return (
    <div
      ref={chartContainerRef}
      style={{
        width: "100%",
        height: "600px",
      }}
    />
  );
};

export default StockChart;
