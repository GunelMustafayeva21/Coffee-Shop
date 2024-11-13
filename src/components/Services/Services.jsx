import React from "react";
import CoffeeFlower from "../../assets/flower-cup.png";

const ServicesData = [
  {
    id: 1,
    name: "Espresso",
    image: CoffeeFlower,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, deleniti!",
    aosDelay: "100",
  },
  {
    id: 2,
    name: "Americano",
    image: CoffeeFlower,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, deleniti!",
    aosDelay: "300",
  },
  {
    id: 3,
    name: "Cappucino",
    image: CoffeeFlower,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, deleniti!",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <div className="py-10" id="services">
      <div className="container">
        <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200" className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Best Coffee For You
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {ServicesData.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="pb-8 rounded-2xl border-black/10 border-2 bg-white hover:bg-primary hover:text-white duration-300 shadow-2xl max-w-[300px] relative group"
            >
              <div className="h-[122px">
                <img
                  src={service.image}
                  className="max-w-[200px] block m-auto transform  -translate-y-14 group-hover:scale-110 group-hover:rotate-45 duration-300 "
                />
              </div>
              <div className="px-4 text-center space-y-1">
                <h1 className="font-bold text-xl font-cursive">{service.name}</h1>
                <p className="text-gray-500 text-sm group-hover:text-white line-clamp-2 duration-300">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
