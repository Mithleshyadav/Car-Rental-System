import React from 'react';
import yellowcar from "../../assets/caryellow1.png";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
const CarListData = [
  {
    name: "BMW UX",
    price: 100,
    image: yellowcar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 100,
    image: car1,
    aosDelay: "500",
  },
  {
    name: "BMW New UX",
    price: 100,
    image: car2,
    aosDelay: "1000",
  }
]

const CarList = () => {
  return (
    <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white'>
      <div className='container'>
        <h1
      data-aos='fade-up'
      className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>Lorem, ipsum dolor.</h1>
      <p data-aos='fade-up'
      className='text-sm pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit perspiciatis</p>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
          {CarListData.map((car) => {
            return (
            <div key={car.name}
            data-aos="fade-up"
            data-aos-delay={car.aosDelay}
             className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group'>
              <div className='w-full h-[120px] '>
                <img className='w-full h-[120] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700 ' src={car.image} alt="" />
              </div>
              <div className='space-y-2'>
                <h1 className='text-primary font-semibold'>{car.name}</h1>
              <div className='flex justify-between items-center text-xl font-semibold'>
               <p>${car.price}/Day</p> 
                <a href="#">Details</a>
              </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
      {/* {end of car listing} */}
      <div className="grid place-content-center">
        <button className='button-outline mt-8'>Get Started</button>
      </div>
      </div>
    </div>
  );
};

export default CarList;
