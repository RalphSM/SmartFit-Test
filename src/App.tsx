import WhatsAppButton from "./components/WhatsAppButton";
import AulasSection from "./Pages/Sections/Aulas";
import Carrossel from "./Pages/Sections/Carrossel";
import EquipeSection from "./Pages/Sections/Equipe";
import Experiencia from "./Pages/Sections/Experiences";
import Footer from "./Pages/Sections/Footer";
import HeroSection from "./Pages/Sections/HeroSection";
import NavBar from "./Pages/Sections/NavBar";
import Pricing from "./Pages/Sections/Pricing";
import ProdutosCarrossel from "./Pages/Sections/Produtos";

const App = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Carrossel/>
    <Pricing/>
    <Experiencia/>
    <AulasSection/>
    <EquipeSection/>
    <ProdutosCarrossel/>
    <Footer/>
    <WhatsAppButton />
    </>
  );
}

export default App;
