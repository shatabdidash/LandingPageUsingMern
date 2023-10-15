import React from 'react';

import { useParams } from 'react-router-dom';
const CharteredAccountantDetails = ({charteredAccountants}) => {
    
    const { accountantId } = useParams();

  // Your JSON data source (import or fetch the JSON data as needed)
  //const charteredAccountants = require('../charteredAccountants.json');

  // Find the Chartered Accountant with the matching ID
  const selectedAccountant = charteredAccountants.find(
    (accountant) => accountant.id === parseInt(accountantId)
  );
console.log(selectedAccountant.name);
  if (!selectedAccountant) {
    return <div>Accountant not found</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Chartered Accountant Details</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Chartered Accountant ID: {selectedAccountant.id}</h3>
        <h3 className="text-lg font-semibold mb-2">Chartered Accountant Name: {selectedAccountant.name}</h3>
        <h3 className="text-lg font-semibold mb-2">Introduction: {selectedAccountant.intro}</h3>
        <h3 className="text-lg font-semibold mb-2">Accountant Rating: {selectedAccountant.rating}</h3>
        <h3 className="text-lg font-semibold mb-2">Total Number of Review: {selectedAccountant.reviewCount}</h3>
        <h3 className="text-lg font-semibold mb-2">Task Complexity: {selectedAccountant.taskComplexity}</h3>
        <h3 className="text-lg font-semibold mb-2">Chartered Accountant Price: {selectedAccountant.price}</h3>
        <h3 className="text-lg font-semibold mb-2">Chartered Accountant Delivery Time: {selectedAccountant.deliveryTime}</h3>
        
       
      </div>
    </div>
  );
};

export default CharteredAccountantDetails;
