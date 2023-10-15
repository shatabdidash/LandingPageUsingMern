import React from 'react'
import iceland from "../img/iceland.png"
import italy from "../img/italy.png"
import dubai from "../img/dubai.png"
import patagonia from "../img/patagonia.png"

function Discover() {
    return (
        <section class="text-gray-600 body-font" >
            <div class="container px-5 py-24 mx-auto">
                <h2 className='text-lg font-bold text-violet-500 flex justify-center'>JOIN OUR ADVENTURE</h2>
                <h1 className='flex justify-center text-4xl	text-gray-900 font-normal mb-12'>Discover the world with us</h1>
                <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/4 md:w-1/2 sm:w-5/6 mx-auto lg:mx-0 p-4">
                        <img class="h-auto rounded w-full object-cover object-center mb-6" src={iceland} alt="content" />
                        <h3 class="flex justify-center text-2xl">Iceland</h3>
                        <h2 class="flex justify-center text-base text-violet-500 mb-4">Discover</h2>
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 p-4 sm:w-5/6 mx-auto lg:mx-0 ">
                        <img class="h-auto rounded w-full object-cover object-center mb-6" src={italy} alt="content" />
                        <h3 class="flex justify-center text-2xl">Italy</h3>
                        <h2 class="flex justify-center text-base text-violet-500 mb-4">Discover</h2>
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 p-4 sm:w-5/6 mx-auto lg:mx-0 ">
                        <img class="h-auto rounded w-full object-cover object-center mb-6" src={dubai} alt="content" />
                        <h3 class="flex justify-center text-2xl">Dubai</h3>
                        <h2 class="flex justify-center text-base text-violet-500 mb-4">Discover</h2>
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 p-4 sm:w-5/6 mx-auto lg:mx-0 ">
                        <img class="h-auto rounded w-full object-cover object-center mb-6" src={patagonia} alt="content" />
                        <h3 class="flex justify-center text-2xl">Patagonia</h3>
                        <h2 class="flex justify-center text-base text-violet-500 mb-4">Discover</h2>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Discover