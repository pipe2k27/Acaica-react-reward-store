import React from 'react';

const Thousand = ({ num }) => {
  const theNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return <div>{theNum}</div>;
};

export default Thousand;
