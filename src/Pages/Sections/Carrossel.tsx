import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/Imagens/img-1.jpg";
import img2 from "../../assets/Imagens/img-2.webp";
import img3 from "../../assets/Imagens/img-3.webp";
import img4 from "../../assets/Imagens/img-4.webp";

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
