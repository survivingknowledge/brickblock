import React from 'react';


const Fancycharts = (props) => {
  return (
    <div className="fancy-charts">
      <div className="col meh"><canvas id="donut-chart" width="125" height="125"></canvas></div>
      <div className="col lists">
        <div>Track record: <span>121:24:17</span></div>
        <div>Fees: <span>2%</span></div>
        <div>Liquidity: <span>30 days</span></div>
      </div>
      <div className="col lists">
        <div>Minimum invest: <span>0,003 euro</span></div>
        <div>Launch date: <span>25.3.2017</span></div>
        <div>Security accounts: <span>yes</span></div>
      </div>
    </div>
  );
}

export default Fancycharts;
