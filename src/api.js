// src/api.js
import axios from 'axios';

const API_KEY = 'WEBA8Y764XI2CDUO'; // Replace with your actual API key

export const fetchStockPrice = async (ticker) => {
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = response.data['Global Quote'];
    if (data) {
      return {
        symbol: data['01. symbol'],
        price: parseFloat(data['05. price']),
        changePercent: parseFloat(data['10. change percent']),
      };
    } else {
      throw new Error('Stock data not found');
    }
  } catch (error) {
    console.error('Error fetching stock price:', error);
    return null;
  }
};