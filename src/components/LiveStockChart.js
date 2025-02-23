import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

// Register necessary Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

const LiveStockChart = ({ ticker }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            label: 'Stock Price',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        }],
    });

    // Define the function to fetch the stock price
    useEffect(() => {
    const fetchStockPrice = async () => {
        const API_KEY = 'WEBA8Y764XI2CDUO'; // Replace with your actual API key
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=${API_KEY}`;
        
        try {
            const response = await axios.get(url);
            const timeSeries = response.data['Time Series (1min)'];
            const labels = Object.keys(timeSeries).slice(0, 10).reverse(); // Get the last 10 minutes
            const prices = labels.map(time => parseFloat(timeSeries[time]['1. open'])); // Get the opening prices for those times
            setChartData({
                labels,
                datasets: [{
                    label: 'Stock Price',
                    data: prices,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                }],
            });
        } catch (error) {
            console.error('Error fetching stock price:', error);
        }
    };
        fetchStockPrice(); // Initial fetch
        const interval = setInterval(fetchStockPrice, 60000); // Refresh every minute
        return () => clearInterval(interval); // Cleanup on unmount
    }, [ticker]); // Keep ticker as a dependency

    return (
        <div>
            <h2>{ticker} Live Stock Price</h2>
            <Line data={chartData} />
        </div>
    );
};

export default LiveStockChart;