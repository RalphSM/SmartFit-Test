import { Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


import img1 from "../../assets/Imagens/img-1.jpg";
import img2 from "../../assets/Imagens/img-2.webp";
import img3 from "../../assets/Imagens/img-3.webp";


const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      backgroundColor: "#FFB416",
      borderRadius: "50%",
      "&:hover": { backgroundColor: "#FBBA00" },
    }}
  >
    <FaChevronLeft size={24} color="white" />
  </IconButton>
);

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      backgroundColor: "#FFB416",
      borderRadius: "50%",
      "&:hover": { backgroundColor: "#FBBA00" },
    }}
  >
    <FaChevronRight size={24} color="white" />
  </IconButton>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
  };

  return (
    <Box
    sx={{
        width: { xs: "100%", sm: "80%" },  
        maxWidth: "600px",
        height: { xs: "200px", sm: "300px" },
        margin: "auto",
        position: "relative",
      }}
    >
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="Slide 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Slide 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Slide 3"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      </Slider>
    </Box>
  );
};

export default Carousel;
