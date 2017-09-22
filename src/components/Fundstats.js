import React from 'react';
import FA from 'react-fontawesome';

const Fundstats = (props) => {
  return (
    <div className="fund-stats">
      <div className="col col-3 money">
        <div>$2,059,346</div>
        <div className='sub-text'>NAV</div>
      </div>
      <div className="col col-3 supply">
        <div>10,000 <FA name='long-arrow-up' className='green'/></div>
        <div className="sub-text">Total Supply</div>
      </div>
      <div className="col col-3 trust">
        <div>
          8.5<div className="meter"><div className="fill"></div></div>
        </div>
        <div className="sub-text">Trust Level</div>
      </div>
    </div>
  );
}

export default Fundstats;
