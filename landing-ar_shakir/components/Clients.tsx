import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import Card from "./childs/clients/Card";

const Clients: FunctionComponent = () => {
  const testimonials = [
    {
      profile: "/gal-gadot.jpg",
      clientName: "Gal Gadot",
      clientSay:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. praesentium inventore dolorem fugiat dolores voluptatum minima at soluta, nihil aut. Exercitationem.",
    },
    {
      profile: "/illenium.jpg",
      clientName: "Illenium",
      clientSay:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. praesentium inventore dolorem fugiat dolores voluptatum minima",
    },
    {
      profile: "/angelina-jolie.jpg",
      clientName: "Angelina Joulie",
      clientSay:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. praesentium inventore dolorem fugiat dolores voluptatum minima",
    },
  ];

  return (
    <div className="w-full mb-20">
      <div
        className="text-center font-poppins mb-16"
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        <h2
          className="text-4xl mb-5 font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          What our happy client say
        </h2>
        <p
          className="text-gray-400 text-sm"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Things that make it the best place to start trading
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor
        centeredSlides
        slidesPerView={3}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 20,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testi, key) => (
          <SwiperSlide key={key}>
            <Card
              profile={testi.profile}
              clientName={testi.clientName}
              clientSay={testi.clientSay}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
