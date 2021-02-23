import React from "react";
import "./App.css";
// import { stockData } from "./data";
import { stockData } from "./data/posts";

export const Stocks = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                company={key}
                ticker={data.properties.LOT_NUM}

                // ticker={data.ticker}
                // stockPrice={data.stockPrice}
                // timeElapsed={data.timeElapsed}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your Stock Tracker</h2>
    </header>
  );
};

const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
  if (!company) return <div />;
// const Stock = ({ type1 }) => {
//     if (!type) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{company}</h5>
          </td>
          <td>
            <h5>{ticker}</h5>
          </td>
          {/* <td>
            <h4>{stockPrice}</h4>
          </td>
          <td>
            <p>{timeElapsed}</p>
          </td> */}
        </tr>
      </tbody>
    </table>
  );
};
