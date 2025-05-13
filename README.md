## Stock Portfolio Tracker  

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) 
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)

A modern dashboard for tracking stock portfolios with real-time data visualization and performance metrics.

# Features
-------------------------------------------------------------------------------------------
- **Interactive Portfolio Dashboard**
- **Live Stock Charts**
- **Performance Metrics**
- **Stock Management (Add/Edit/Remove)**
- **Responsive Design (Tailwind CSS)**
----------------------------------------------------------------------------------------
# Tech Stack
| Category          | Technologies Used                  |
|-------------------|-----------------------------------|
| Frontend          | React, Tailwind CSS               |
| Visualization     | Custom Chart Components           |
| State Management  | React Hooks                      |
| Build Tool        | Vite                             |

UI Components
------------------------------------------------------------------------------------------
LiveStockChart.js - Interactive price charts

PortfolioDashboard.js - Main dashboard layout

PortfolioMetrics.js - Performance statistics

StockForm.js - Add/edit stock form

StockList.js - Tabular stock display

# Project Structure
---------------------------------------------------------------------------------------

```bash
stock-portfolio-tracker/
├── node_modules/          # Project dependencies
├── public/                # Static assets (favicon, index.html)
│
├── src/                   # Application source code
│   ├── components/        # React components
│   │   ├── LiveStockChart.js     # Interactive stock charts
│   │   ├── PortfolioDashboard.js # Main dashboard layout
│   │   ├── PortfolioMetrics.js   # Performance analytics
│   │   ├── StockForm.js          # Stock input form
│   │   └── StockList.js          # Stock data table
│   │
│   ├── api.js            # Stock data API service
│   ├── App.js            # Root application component
│   ├── index.css         # Global styles
│   └── index.js          # Application entry point
│
├── .gitignore            # Git ignore rules
├── package.json          # Project configuration
├── README.md            # Project documentation
└── tailwind.config.js    # Tailwind CSS configuration

```

------------------------------------------------------------------------------
# Installation  

Clone repository :

                    git clone https://github.com/your-username/stock-portfolio-tracker.git
                    cd stock-portfolio-tracker

Install dependencies :
                    
                    npm install

# Start development server:

                    npm run dev
