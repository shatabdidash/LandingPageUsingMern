import React from 'react';
import featured from "../img/featured.png";
import icon2 from "../icon/icon2.png";

function Featured() {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container py-24 flex items-center mx-auto">
                <div class="flex flex-wrap">
                    <img alt="feature" class="lg:w-1/2 w-5/6 lg:mx-0 mx-auto lg:h-96 h-64 object-cover object-center rounded" src={featured} />
                    <div class="lg:w-1/2 w-5/6 lg:mx-0 mx-auto px-0 lg:px-8 py-8">
                        <h2 class="text-lg font-bold text-violet-500 mb-5">FEATURED DESTINATION</h2>
                        <h1 class="text-4xl text-gray-900 font-normal mb-4">Our swiss adventure blog</h1>
                        <p class="leading-relaxed text-lg">Visiting the Swiss Alps? Want to know the requirements for traveling to Switzerland during the pandemic? Our blog might help!</p>
                        <div className="flex mt-6 mb-4">
              <img alt='icon' className='pr-2' src={icon2} />
              <a href="/CharteredAccountantList" className="text-white bg-violet-500 hover:bg-violet-600 px-4 py-2 rounded">Chartered Accountant Details</a>
            </div>
                       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
