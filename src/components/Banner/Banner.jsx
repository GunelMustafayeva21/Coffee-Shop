import React from "react";
import CoffeeHeart from "../../assets/heart-cup.png";
import BgTexture from "../../assets/coffee-texture.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const BgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <div style={BgImage} className=" sm:pb-0 pb-8"id="about">
      <div className="container min-h-[550px] flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="200">
            <img
              src={CoffeeHeart}
              className="max-w-[430px] w-full m-auto animate-spin drop-shadow-xl"
            />
          </div>
          <div data-aos="fade-up" data-aos-once="true" className="flex flex-col justify-center gap-6 items-center sm:items-start">
            <h1 className="sm:text-4xl text-3xl font-bold font-cursive">
              Premium Blend Coffee
            </h1>
            <p  className="text-sem text-gray-500 tracking-wide leading-5 sm:text-start text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nisi alias rerum ea commodi voluptates? Nulla quo
              dolorum eveniet.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-5">
                <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300" className="flex items-center gap-3">
                  <GrSecure className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-primary/40" />
                  <span>Premium Coffee</span>
                </div>
                <div data-aos="fade-up" data-aos-once="true" data-aos-delay="500" className="flex items-center gap-3">
                  <IoFastFood className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-orange-300" />
                  <span>Hot Coffee</span>
                </div>
                <div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" className="flex items-center gap-3">
                  <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-blue-300" />
                  <span>Cold Coffee</span>
                </div>
              </div>
              <div className="space-y-3 border-primary border-l-4 pl-6">
                <h1 className="text-2xl font-semibold font-cursive">Tea Lover</h1>
                <p className="text-gray-500 text-sm">
                  Like writing code, brewing the perfect cup of tea
                  requires patience, precision and a dash of passion to create a
                  comforting blend of flavors!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
