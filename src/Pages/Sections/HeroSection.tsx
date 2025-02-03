import { useMediaQuery } from "@mui/material";
import bghero from "../../assets/Imagens/bg-hero.webp";
import bgmobile from "../../assets/Imagens/bgmobile-1.webp"

const HeroSection = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const handleClick = () => {
        window.location.href = "#";
    };

    return (
        <section
        onClick={handleClick}
        style={{
            backgroundImage: `url(${isMobile ? bgmobile : bghero})`, 
            backgroundSize: "100%",
            paddingTop: "50px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
        }}
    >
    </section>
    );
};

export default HeroSection;
