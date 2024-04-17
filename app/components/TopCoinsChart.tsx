// TopCoinsChart.tsx

import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

interface TopCoinsChartProps {
  coins: any[];
}

const TopCoinsChart: React.FC<TopCoinsChartProps> = ({ coins }) => {
  const [topCoins, setTopCoins] = useState<any[]>([]);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>();

  useEffect(() => {
    // Sort the coins by market cap and get the top 10
    const sortedCoins = coins.sort(
      (a, b) => parseFloat(b.priceUsd) - parseFloat(a.priceUsd)
    );
    const top10Coins = sortedCoins.slice(0, 10);
    setTopCoins(top10Coins);
  }, [coins]);

  useEffect(() => {
    // Draw the chart when topCoins data is available
    if (topCoins.length > 0 && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy previous instance
      }

      const ctx = chartRef.current;
      const labels = topCoins.map((coin) => coin.name);
      const data = topCoins.map((coin) => parseFloat(coin.marketCapUsd));

      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [topCoins]);

  return (
    <div className="absolute h-96 right-20">
      <h2>Top 10 Coins by Market Cap</h2>
      <canvas
        ref={chartRef}
        id="topCoinsChart"
        width="400"
        height="200"></canvas>
    </div>
  );
};

export default TopCoinsChart;
