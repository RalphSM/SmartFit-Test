import { Box, Typography, Button, Card, CardMedia, CardContent, Divider } from "@mui/material";
import fitdanceImg from "../../assets/Imagens/fitdance.webp";
import smartcrossImg from "../../assets/Imagens/smartcross.webp";
import bodycombatImg from "../../assets/Imagens/bodycombat.webp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const aulas = [
    {
        imagem: fitdanceImg,
        titulo: "FITDANCE",
        duracao: "45/60 min",
        intensidade: "Alta",
        descricao:
            "Pra você manjar de todos os passinhos, as aulas de dança da Smart Fit são ministradas por professores licenciados pela FitDance.",
    },
    {
        imagem: smartcrossImg,
        titulo: "SMART CROSS",
        duracao: "30 min",
        intensidade: "Alta",
        descricao:
            "Emagrecimento com ganho de condicionamento físico em apenas 30 minutos? Esse é o Smart Cross, nosso treino funcional coletivo de alta intensidade.",
    },
    {
        imagem: bodycombatImg,
        titulo: "BODY COMBAT",
        duracao: "30/45 min",
        intensidade: "Alta",
        descricao:
            "Karatê, Jiu-jitsu, Capoeira, Kung Fu e Taekwondo são algumas das inspirações para a aula de BodyCombat. Esse treino ainda trabalha todo o corpo.",
    },
];

export default function AulasSection() {
    return (
        <Box sx={{ textAlign: "center", py: 6, px: 4, backgroundColor: "#fff" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000" }}>
                Aulas e treinos <span style={{ color: "#FFB416" }}>exclusivos!</span>
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, mt: 4 }}>
                {aulas.map((aula, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: 300,
                            borderRadius: "12px",
                            border: "1px solid transparent",
                            borderWidth: "2px",
                            "&:hover": { borderColor: "#ffb416" },
                        }}
                    >
                        <CardMedia component="img" height="200" image={aula.imagem} alt={aula.titulo} />
                        <Box sx={{ backgroundColor: "#FFB416", textAlign: "center", py: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
                                {aula.titulo}
                            </Typography>
                        </Box>
                        <CardContent>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 2 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <AccessTimeIcon sx={{ color: "#FFB416", fontSize: 30 }} />
                                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>Duração</Typography>
                                    <Typography variant="body2">{aula.duracao}</Typography>
                                </Box>
                                <Box sx={{ textAlign: "center" }}>
                                    <FlashOnIcon sx={{ color: "#FFB416", fontSize: 30 }} />
                                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>Intensidade</Typography>
                                    <Typography variant="body2">{aula.intensidade}</Typography>
                                </Box>
                            </Box>
                            <Divider sx={{ my: 2, backgroundColor: "#ddd" }} />
                            <Typography variant="body2" sx={{ fontSize: "13px", color: "#555", textAlign: "left" }}>
                                {aula.descricao}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: "bold", textAlign: "center", mt: 2, cursor: "pointer" }}
                            >
                                Saiba Mais
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <Button
                variant="contained"
                sx={{
                    mt: 4,
                    backgroundColor: "#FFB416",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderRadius: "25px",
                    px: 6,
                    py: 1.1,
                    textTransform: "none",
                    boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
                    '&:hover': { backgroundColor: "#E5A400" },
                }}
            >
                Ver todas as aulas e treinos
            </Button>
        </Box>
    );
}
