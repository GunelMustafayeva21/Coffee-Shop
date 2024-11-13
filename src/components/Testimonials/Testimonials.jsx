import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Gunel Mustafa",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa iste assumenda itaque hic molestiae labore rerum aliquam esse accusamus!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sevinj Jafarli",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa iste assumenda itaque hic molestiae labore rerum aliquam esse accusamus!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Ali Alizada",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa iste assumenda itaque hic molestiae labore rerum aliquam esse accusamus!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Chingiz Abdullah",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa iste assumenda itaque hic molestiae labore rerum aliquam esse accusamus!",
    img: "https://picsum.photos/103/103",
  },
];
const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14" id="blog">
      <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="200" className="container">
        <div  className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>
        <div>
          <Slider {...settings}>
            {TestimonialData.map((user, index) => (
              <div key={index} className="my-4">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 border-2 bg-white  hover:bg-primary hover:text-white duration-300  rounded-xl relative">
                  <div className="mb-4">
                    <img src={user.img} className="rounded-full w-20 h-20" />
                  </div>

                
                    <div className="space-y-3">
                      <p className="text-xs text-white">{user.text}</p>
                      <h1 className="text-xl font-cursive font-build text-black/80">
                        {user.name}
                      </h1>
                    </div>
                 
                  <p className="text-9xl text-black/80 absolute bottom-48 right-4 font-serif">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
