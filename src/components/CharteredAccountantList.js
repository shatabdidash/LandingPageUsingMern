import React from 'react';
import { Link } from 'react-router-dom';

const CharteredAccountantList = () => {
  const charteredAccountants = require('../charteredAccountants.json');

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Chartered Accountant List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-3 py-2">Chartered Accountant ID</th>
            <th className="border border-gray-300 px-3 py-2">Chartered Accountant Name</th>
          </tr>
        </thead>
        <tbody>
          {charteredAccountants.map((accountant) => (
            <Link to={`/chartered-accountant-details/${accountant.id}`}>
            <tr key={accountant.id}>
              <td className="border border-gray-300 px-3 py-2">{accountant.id}</td>
              <td className="border border-gray-300 px-3 py-2">
                
                  {accountant.name}
                
              </td>
            </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharteredAccountantList;
