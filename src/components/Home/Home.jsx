import React from "react";
import CoffeeFlower from '../../assets/flower-cup.png'

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 order-2 sm:order-1">
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200" className="flex flex-col gap-6 justify-center pt-14 sm:pt-0 items-center sm:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold sm:text-start text-center">
              We serve the richest
              <span className="text-primary font-cursive"> Coffee</span> in the
              city
            </h1>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary border-primary rounded-full px-4 py-2 border-2 text-white/70  hover:text-white">
                Coffee and Code
              </button>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="200" className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img src={CoffeeFlower} className="w-[350px] sm:w-[450px] m-auto sm:scale-110 animate-spin"/>
            <div data-aos="fade-left" data-aos-once="true" data-aos-delay="200" className="absolute top-10 left-10 bg-gradient-to-r from-primary to-secondary border-primary rounded-full px-4 py-2 border-2 text-white/70  hover:text-white">
              <h1>Hey Coder</h1>
            </div>
            <div data-aos="fade-right" data-aos-once="true" data-aos-delay="200" className="absolute bottom-10 right-10 bg-gradient-to-r from-primary to-secondary border-primary rounded-full px-4 py-2 border-2 text-white/70  hover:text-white">
              <h1>Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
