import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";
register();
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/Imagens/academia1.jpg";
import img2 from "../../assets/Imagens/academia2.jpg";
import img3 from "../../assets/Imagens/academia3.jpg";
import img4 from "../../assets/Imagens/academia4.jpg";

const Carrossel = () => {
  const imagens = [img1, img2, img3, img4];

  return (
    <div className="carrossel-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {imagens.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Imagem ${index + 1}`} className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;
