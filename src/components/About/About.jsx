import React from 'react'
import CarPng from "../../assets/caryellow2.png";

export default function About({theme}) {
  return (
    <div className='dark:bg-dark bg-slate-100  dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div  data-aos="slide-right"
          data-aos-duration="1500" >
            <img src={CarPng} alt="" className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]' />
          </div>
          <div>
            <div className='space-y-5 sm:p-16 pb-6'>
              <h1 className='text-3xl sm:text-4xl font-bold font-serif'>About us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur deserunt saepe amet, </p>
              <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur deserunt saepe amet, </p>
              <button data-aos="fade-up" className="button-outline">Get Started</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
