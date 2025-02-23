// src/components/PortfolioMetrics.js
import React from 'react';
import styled from 'styled-components';

// Styled components for a polished UI
const MetricsCard = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const MetricTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #343a40;
  text-align: center;
  font-weight: bold;
`;

const MetricValue = styled.p`
  font-size: 1.4rem;
  margin: 10px 0;
  color: ${(props) => (props.gain ? '#28a745' : props.loss ? '#dc3545' : '#212529')};
  font-weight: ${(props) => (props.gain || props.loss ? 'bold' : 'normal')};
  text-align: center;
`;

// Component to display portfolio metrics
const PortfolioMetrics = ({ stocks, currentPrices }) => {
  // Calculate total investment
  const totalInvestment = stocks.reduce(
    (total, stock) => total + stock.buyPrice * stock.quantity,
    0
  );

  // Calculate current total value
  const currentTotalValue = stocks.reduce((total, stock) => {
    const currentPrice = currentPrices[stock.ticker]?.price || 0;
    return total + currentPrice * stock.quantity;
  }, 0);

  // Calculate unrealized gains or losses
  const unrealizedGainsLosses = currentTotalValue - totalInvestment;

  return (
    <MetricsCard>
      <MetricTitle>Portfolio Performance Metrics</MetricTitle>
      <MetricValue>Total Investment: ${totalInvestment.toFixed(2)}</MetricValue>
      <MetricValue>Current Total Value: ${currentTotalValue.toFixed(2)}</MetricValue>
      <MetricValue gain={unrealizedGainsLosses >= 0} loss={unrealizedGainsLosses < 0}>
        Unrealized Gains/Losses: ${unrealizedGainsLosses.toFixed(2)}
      </MetricValue>
    </MetricsCard>
  );
};

export default PortfolioMetrics;
