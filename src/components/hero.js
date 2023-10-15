
import icon1 from "../icon/icon1.png"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hero({charteredAccountants}) {
    const [searchName, setSearchName] = useState(''); // State to store the search query
    const navigate = useNavigate();


  const handleSearch = () => {
    const selectedAccountant = charteredAccountants.find(
        (accountant) => accountant.name === searchName
      );
    if (selectedAccountant) {
    navigate(`/chartered-accountant-details/${selectedAccountant.id}`);
  } else {
    alert('Chartered Accountant not found');
  }
  };

    return (
        <div className='w-screen h-[calc(100vh-5rem)]'>
            <div className="bg-cover bg-[url('/public/hero.png')] bg-center bg-no-repeat h-full w-full" >
                <div className="container mx-auto flex flex-col my-auto align-middle h-full" >
                    <div className='my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5'>
                        <h1 className="text-7xl mb-4"><span className='text-violet-500'>Let’s talk</span> about your next trip!</h1>
                        <p className="text-2xl mb-8">Share your favorite travel destination and we will feature it in our next blog!</p>
                        <div className='mt-4 flex items-center'>
              <input
                type="text"
                placeholder="Search Chartered Accountants by Name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className='w-3/4 rounded-l px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-violet-500'
              />
              <button
                onClick={handleSearch}
                className='w-1/4 rounded-r px-3 py-2 bg-violet-500 text-white hover:bg-violet-600 focus:outline-none'
              >
                Search
              </button>
            </div>

                    </div>
                </div >
            </div >
        </div>
    );
}

export default Hero;
