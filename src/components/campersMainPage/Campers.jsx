// Campers.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import campersData from "../../services/camperSucess";
import styles from './styles/Campers.module.css';

const Campers = () => {
 const [slidesPerView, setSlidesPerView] = useState(6);

 useEffect(() => {
   const handleResize = () => {
     const width = window.innerWidth;
     if (width < 480) {
       setSlidesPerView(1);
     } else if (width < 768) {
       setSlidesPerView(2);
     } else if (width < 1024) {
       setSlidesPerView(3);
     } else if (width < 1600) {
       setSlidesPerView(4);
     } else {
       setSlidesPerView(6);
     }
   };

   handleResize();
   window.addEventListener('resize', handleResize);
   return () => window.removeEventListener('resize', handleResize);
 }, []);

 return (
   <div className={styles.campersContainer}>
     <div className={styles.titleCampers}>
       <h3>Campers</h3>
       <h2>exitosos</h2>
     </div>
     <div className={styles.cardsContainerWrapper}>
       <Swiper
         slidesPerView={slidesPerView}
         spaceBetween={20}
         loop={true}
         autoplay={{
           delay: 3000,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination, Autoplay]}
         className={`${styles.swiper} ${styles.customSwiper}`}
         breakpoints={{
           320: {
             slidesPerView: 1,
             spaceBetween: 10
           },
           480: {
             slidesPerView: 2,
             spaceBetween: 15
           },
           768: {
             slidesPerView: 3,
             spaceBetween: 15
           },
           1024: {
             slidesPerView: 4,
             spaceBetween: 20
           },
           1600: {
             slidesPerView: 6,
             spaceBetween: 20
           }
         }}
       >
         {campersData.map((camper, index) => (
           <SwiperSlide key={`${index}-${camper.name}`} className={styles.swiperSlide}>
             <div className={styles.card}>
               <div className={styles.perfil}>
                 <img
                   src={camper.image}
                   alt={camper.name}
                   className={styles.cardImage}
                 />
               </div>
               <div className={styles.cardContent}>
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