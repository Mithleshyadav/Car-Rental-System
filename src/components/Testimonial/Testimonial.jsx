import React from 'react'

const TestimonialsData = [
  {
    name: "Mithlesh",
    image: "",
    description: "Lorem ipsum dolor sit amet abbreviation consectetur adipicing",
    aosDelay: "0",
  },
  
  {
    name: "Sanjay",
    image: "",
    description: "Lorem ipsum dolor sit amet abbreviation consectetur adipicing",
    aosDelay: "500",
  },
  {
    name: "Sushan",
    image: "",
    description: "Lorem ipsum dolor sit amet abbreviation consectetur adipicing",
    aosDelay: "1000",
  }
]
const Testimonial = () => {
  return (
    <div className='dark:bg-black dark:text-white py-14 sm:pb-24'>
     <div className="container">
      <div className="space-y-4 pb-12">
        <p  data-aos="fade-up"
         className='text-3xl font-semibold text-center sm:text-4xl font-serif'>What Our Clients Say About Us</p>
        <p
        data-aos="fade-up" className='text-center sm:px-44'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-8 text-black dark:text-white">
        {TestimonialsData.map((data) =>{
          return (
            <div 
            data-aos="fade-up"
            data-aos-delay={data.aosDelay} key={data.name} className='card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg'>
              <div className="grid place-items-center">
              <img src="https://picsum.photos/200" alt="" className='h-20 w-20 rounded-full'/>

              </div>
              <div className="text-2xl">🌟🌟🌟🌟🌟</div>
              <p>{data.description}</p>
              <p className='font-semibold text-center'>{data.name}</p>
            </div>
          )
        })}
      </div>
     </div>
    </div>
  )
}

export default Testimonial;
