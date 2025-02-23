// src/components/StockList.js
import React, { useEffect, useState } from 'react';
import { fetchStockPrice } from '../api';

const StockList = ({ stocks, deleteStock, editStock }) => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const prigitcePromises = stocks.map(stock => fetchStockPrice(stock.ticker));
      const fetchedPrices = await Promise.all(pricePromises);
      const pricesObj = {};
      fetchedPrices.forEach((priceData, index) => {
        if (priceData) {
          pricesObj[stocks[index].ticker] = priceData;
        }
      });
      setPrices(pricesObj);
    };

    fetchPrices();
  }, [stocks]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Quantity</th>
          <th>Buy Price</th>
          <th>Purchase Date</th>
          <th>Transaction Type</th>
          <th>Asset Class</th> {/* New Column for Asset Class */}
          <th>Current Price</th>
          <th>Change (%)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock, index) => {
          const priceData = prices[stock.ticker];
          return (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>{stock.buyPrice}</td>
              <td>{stock.purchaseDate}</td>
              <td>{stock.transactionType}</td>
              <td>{stock.assetClass}</td> {/* Display Asset Class */}
              <td>{priceData ? `$${priceData.price.toFixed(2)}` : 'Loading...'}</td>
              <td>{priceData ? `${priceData.changePercent.toFixed(2)}%` : 'Loading...'}</td>
              <td>
                <button onClick={() => editStock(stock)}>Edit</button>
                <button onClick={() => deleteStock(index)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StockList;