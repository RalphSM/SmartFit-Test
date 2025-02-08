import { Box, Container, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Facebook, Instagram, YouTube, Twitter, Mail } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faTiktok } from "@fortawesome/free-brands-svg-icons";
import smartFitLogo from "../../assets/Imagens/logowhite.png";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: 5, mt: 5 }}>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" mb={2}>
                    <img src={smartFitLogo} alt="Smart Fit" style={{ height: 100 }} />
                </Box>

                <Divider sx={{ backgroundColor: "#444", my: 3 }} />

                <Typography align="center" sx={{ fontWeight: "bold", fontSize: 16, mb: 2 }}>
                    Siga a Smart Fit
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
                    <IconButton sx={{ color: "#fff" }}><Facebook /></IconButton>
                    <IconButton sx={{ color: "#fff" }}><Instagram /></IconButton>
                    <IconButton sx={{ color: "#fff" }}><YouTube /></IconButton>
                    <IconButton sx={{ color: "#fff" }}><FontAwesomeIcon icon={faTiktok} size="lg" /></IconButton>
                    <IconButton sx={{ color: "#fff" }}><FontAwesomeIcon icon={faSpotify} size="lg" /></IconButton>
                    <IconButton sx={{ color: "#fff" }}><Twitter /></IconButton>
                    <IconButton sx={{ color: "#fff" }}><Mail /></IconButton>
                </Stack>

                <Divider sx={{ backgroundColor: "#444", my: 3 }} />

                <Stack 
                    direction="row" 
                    justifyContent="space-around" 
                    textAlign="left" 
                    sx={{ flexWrap: "wrap", gap: { xs: 2, md: 3 } }}
                >
                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Institucional</Typography>
                        {["Sobre", "Conceito", "Investidores", "Central de Ajuda", "Fale Conosco", "Edital Smart Fit", "Aviso de Privacidade"].map((item) => (
                            <Typography key={item} variant="body2">{item}</Typography>
                        ))}
                    </Box>
                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Planos</Typography>
                        {["Planos", "Contratos", "Planos Corporativos", "Smart Fit Coach", "Smart Fit Energy", "Smart Fit Nutri", "Smart Fit Supps"].map((item) => (
                            <Typography key={item} variant="body2">{item}</Typography>
                        ))}
                    </Box>
                    <Box sx={{ minWidth: 150 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Corporativo</Typography>
                        {["Imprensa", "Quero ser um franqueado", "Divulgue sua marca", "Indique um ponto", "Trabalhe Conosco", "Transparência salarial"].map((item) => (
                            <Typography key={item} variant="body2">{item}</Typography>
                        ))}
                    </Box>
                </Stack>

                <Divider sx={{ backgroundColor: "#444", my: 3 }} />

                <Typography align="center" variant="body2" sx={{ color: "#bbb", mb: 2 }}>
                    *Consulte as condições promocionais e regulamentos na página: smartfit.com.br/contratos
                </Typography>
                <Typography align="center" variant="body2" sx={{ color: "#bbb" }}>
                    Avenida Paulista, nº1294, 2º andar, Bela Vista, CEP 01310-100
                </Typography>
                <Typography align="center" variant="body2" sx={{ color: "#bbb" }}>
                    faleconosco@smartfit.com
                </Typography>
                <Typography align="center" variant="body2" sx={{ color: "#bbb", mt: 1 }}>
                    SMART FIT ESCOLA DE GINÁSTICA E DANÇA S.A.
                </Typography>
                <Typography align="center" variant="body2" sx={{ color: "#bbb" }}>
                    CNPJ: 07.594.978/0001-78
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
