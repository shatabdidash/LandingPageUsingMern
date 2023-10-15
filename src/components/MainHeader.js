import React from 'react'
import icon1 from "../icon/icon1.png"




function Hero() {
   return (
       <div className='w-screen h-[calc(100vh-5rem)]'>
           <div className="bg-cover bg-[url('/public/hero.png')] bg-center bg-no-repeat h-full w-full" >
               <div className="container mx-auto flex flex-col my-auto align-middle h-full" >
                   <div className='my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5'>
                       <h1 className="text-7xl mb-4"><span className='text-violet-500'>Let’s talk</span> about your next trip!</h1>
                       <p className="text-2xl mb-8">Share your favorite travel destination and we will feature it in our next blog!</p>
                       <div className='flex items-center'>
                           <button className='rounded px-10 py-3 text-white bg-violet-500 hover:bg-violet-600'>Share your story</button>
                           <img className='pl-4 pr-2' src={icon1} />
                           <p> Watch highlights</p>
                       </div>


                   </div>
               </div >
           </div >
       </div>
   );
}


export default Hero;