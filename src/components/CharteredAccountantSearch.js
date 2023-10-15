// // src/components/CharteredAccountantSearch.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function CharteredAccountantSearch() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`/api/chartered-accountants?search=${searchQuery}`);
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error('Error searching for accountants:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Find Chartered Accountants</h1>
//       <input
//         type="text"
//         placeholder="Search for accountants"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {searchResults.map((accountant, index) => (
//           <li key={index}>{accountant.name} - {accountant.location}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CharteredAccountantSearch;
