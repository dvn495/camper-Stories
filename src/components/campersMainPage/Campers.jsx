import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import campersData from "../../services/camperSucess";
import "./styles/Campers.css";

const Campers = () => {
  return (
    <div className="campers-container">
      <div className="title-campers">
        <h3>Campers</h3>
        <h2>exitosos</h2>
      </div>
      <div className="cards-container-wrapper">
        <Swiper
          slidesPerView={6} // Siempre 6 tarjetas visibles
          spaceBetween={20} // Espacio uniforme entre tarjetas
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper custom-swiper"
        >
          {campersData.map((camper, index) => (
            <SwiperSlide key={`${index}-${camper.name}`} className="custom-slide">
              <div className="card">
                <div className="perfil">
                  <img
                    src={camper.image}
                    alt={camper.name}
                    className="card-image"
                  />
                </div>
                <div className="card-content">
                  <h3>{camper.name}</h3>
                  <h4>{camper.role}</h4>
                  <p>{camper.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Campers;
