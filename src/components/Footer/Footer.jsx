import React from "react";
import FooterBg from "../../assets/coffee-footer.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FootertLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const BgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={BgImage} className="text-white">
      <div className="bg-secondary/70 min-h-[400px]" >
        <div className="container grid md:grid-cols-3 pb-20 pt-5" data-aos="slide-right" data-aos-once="true" data-aos-duration="800">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-2xl sm:text-3xl font-semibold font-cursive tracking-widest"
            >
              Coffee Cafe
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments - Your Perfect
              Espresso Escape
            </p>
            <a
              href="#"
              className="text-sm bg-[#32170E] px-4 py-2 rounded-full inline-block mt-5"
            >
              Visit our YouTube Channel
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">

            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Footer Links
              </h1>
              <ul className="space-y-3">
                {FootertLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="inline-block w-7 h-7 hover:font-cursive">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FootertLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="inline-block w-7 h-7 hover:font-cursive">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Baku, Azerbaijan</p>
                <p>+994 50 888 77 66</p>
                <div className="space-x-3 mt-6">
                    <a href="#"><FaFacebook className="inline-block text-3xl hover:scale-110 duration-300"/></a>
                    <a href="#"><FaLinkedin className="inline-block text-3xl hover:scale-110 duration-300"/></a>
                    <a href="#"><FaInstagram className="inline-block text-3xl hover:scale-110 duration-300"/></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
