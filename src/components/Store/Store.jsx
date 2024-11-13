import React from "react";
import AppStore from "../../assets/app-store.png";
import Playstore from "../../assets/play-store.png";
import CoffeeBeans from "../../assets/coffee-beans-bg.png";
const BgImage = {
  backgroundImage: `url(${CoffeeBeans})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Store = () => {
  return (
    <div className="py-14" style={BgImage}>
      <div className="container">
        <div data-aos="slide-left" data-aos-once="true" data-aos-duration="800" data-aos-delay="400" className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-4">
          <div className="space-y-6 mx-auto max-w-xl">
            <h1 className="sm:text-4xl text-2xl sm:text-left text-center font-semibold pl-3 text-white/90 ">Coffee Cafe is available for Android and IOS</h1>
            <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="">
                    <img src={AppStore} className="max-w-[150px] md:max-w-[200px] sm:max-w-[120px]" />
                </a>
                <a href="">
                    <img src={Playstore} className="max-w-[150px] md:max-w-[200px] sm:max-w-[120px]" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
