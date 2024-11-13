import React from "react";
import CoffeeLogo from "../../assets/coffee-logo.png";
import { FaCoffee } from "react-icons/fa";
 const Menus=[
    {
        id:1,
        name:"Home",
        link:"/#"
    },
    {
        id:2,
        name:"Services",
        link:"/#services"
    },
    {
        id:3,
        name:"About",
        link:"/#about"
    }
 ]
const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex items-center justify-between">
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="200">
            <a
              href="#"
              className="font-bold sm:text-3xl text-2xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={CoffeeLogo} className="w-14" />
              Coffee Cafe
            </a>
          </div>
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="flex items-center justify-center gap-4">
            <ul className="hidden sm:flex items-center justify-center gap-4">
                { 
                Menus.map((menu, index)=>(
                    <li key={index}>
                        <a href={menu.link} className="inline-block text-lg py-4 px-4 text-white/70 hover:text-white duration-300">{menu.name}</a>
                    </li>
                ))
                }
            </ul>
            <button className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-lg text-white/70  hover:text-white duration-300 cursor-pointer flex justify-center items-center gap-2">Order <FaCoffee className="text-xl" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
