// src/components/StockForm.js
import React, { useState, useEffect } from 'react';

const StockForm = ({ addStock, currentStock, updateStock }) => {
  const [name, setName] = useState('');
  const [ticker, setTicker] = useState('');
  const [quantity, setQuantity] = useState('');
  const [buyPrice, setBuyPrice] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [transactionType, setTransactionType] = useState('buy');
  const [assetClass, setAssetClass] = useState('stocks');

  useEffect(() => {
    if (currentStock) {
      setName(currentStock.name);
      setTicker(currentStock.ticker);
      setQuantity(currentStock.quantity);
      setBuyPrice(currentStock.buyPrice);
      setPurchaseDate(currentStock.purchaseDate);
      setTransactionType(currentStock.transactionType);
      setAssetClass(currentStock.assetClass || 'stocks');
    }
  }, [currentStock]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const stock = {
      name,
      ticker,
      quantity: Number(quantity),
      buyPrice: Number(buyPrice),
      purchaseDate,
      transactionType,
      assetClass,
    };
    if (currentStock) {
      updateStock(stock);
    } else {
      addStock(stock);
    }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setTicker('');
    setQuantity('');
    setBuyPrice('');
    setPurchaseDate('');
    setTransactionType('buy');
    setAssetClass('stocks');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Stock Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Ticker" value={ticker} onChange={(e) => setTicker(e.target.value)} required />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      <input type="number" placeholder="Buy Price" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} required />
      <input type="date" placeholder="Purchase Date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} required />
      <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
        <option value="dividend">Dividend</option>
      </select>
      <select value={assetClass} onChange={(e) => setAssetClass(e.target.value)}>
        <option value="stocks">Stocks</option>
        <option value="bonds">Bonds</option>
        <option value="cash">Cash</option>
        <option value="real-estate">Real Estate</option>
      </select>
      <button type="submit">{currentStock ? 'Update Stock' : 'Add Stock'}</button>
    </form>
  );
};

export default StockForm;