// src/components/PortfolioDashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import StockForm from './StockForm';
import StockList from './StockList';
import PortfolioMetrics from './PortfolioMetrics';
import { fetchStockPrice } from '../api';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const RefreshButton = styled.button`
  background-color:rgb(0, 0, 0);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 20px 0;
  &:hover {
    background-color:rgb(211, 211, 211);
  }
`;

const PortfolioDashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [currentStock, setCurrentStock] = useState(null);
  const [prices, setPrices] = useState({});

  const addStock = (stock) => {
    setStocks([...stocks, stock]);
  };

  const deleteStock = (index) => {
    const newStocks = stocks.filter((_, i) => i !== index);
    setStocks(newStocks);
  };

  const editStock = (stock) => {
    setCurrentStock(stock);
  };

  const updateStock = (updatedStock) => {
    const updatedStocks = stocks.map((stock) => (stock.ticker === updatedStock.ticker ? updatedStock : stock));
    setStocks(updatedStocks);
    setCurrentStock(null);
  };

  const fetchPrices = async () => {
    const pricePromises = stocks.map((stock) => fetchStockPrice(stock.ticker));
    const fetchedPrices = await Promise.all(pricePromises);
    const pricesObj = {};
    fetchedPrices.forEach((priceData, index) => {
      if (priceData) {
        pricesObj[stocks[index].ticker] = priceData;
      }
    });
    setPrices(pricesObj);
  };

  return (
    <DashboardContainer>
      <Header>Stock Portfolio Dashboard</Header>
      <StockForm addStock={addStock} currentStock={currentStock} updateStock={updateStock} />
      <StockList stocks={stocks} deleteStock={deleteStock} editStock={editStock} />
      <PortfolioMetrics stocks={stocks} currentPrices={prices} />
      <RefreshButton onClick={fetchPrices}>Refresh Prices</RefreshButton>
    </DashboardContainer>
  );
};

export default PortfolioDashboard;
