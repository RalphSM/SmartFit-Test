import bghero from "../../assets/Imagens/bg-hero.webp";

const HeroSection = () => {
    const handleClick = () => {
        window.location.href = "#";
    };

    return (
        <section
        onClick={handleClick}
        style={{
            backgroundImage: `url(${bghero})`,
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
