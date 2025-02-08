import { Box, IconButton, useMediaQuery, Button } from "@mui/material";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import img1 from "../../assets/Imagens/academia1.jpg";
import img2 from "../../assets/Imagens/academia2.jpg";
import img3 from "../../assets/Imagens/academia3.jpg";
import img4 from "../../assets/Imagens/academia4.jpg";

const images = [img1, img2, img3, img4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ textAlign: "center", width: "100%", maxWidth: "900px", margin: "0 auto", padding: "10px", marginTop: "-100px" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: isMobile ? "250px" : "450px",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentIndex * 100}%)`,
            width: "100%",
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          ))}
        </Box>
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          <ChevronLeft size={24} />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          <ChevronRight size={24} />
        </IconButton>
      </Box>

      {/* Botão do WhatsApp */}
      <Box sx={{ marginTop: isMobile ? 2 : 4, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffb416",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "25px",
            padding: isMobile ? "10px 20px" : "12px 32px",
            fontSize: isMobile ? "14px" : "16px",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: isMobile ? "90%" : "auto",
          }}
          href="#"
          target="_blank"
        >
          <MessageCircle size={20} /> Fale conosco pelo WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
