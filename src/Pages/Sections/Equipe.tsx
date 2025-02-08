import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

import pessoa1Img from "../../assets/Imagens/pessoa1Img.jpeg";
import pessoa2Img from "../../assets/Imagens/pessoa2Img.jpg";
import pessoa3Img from "../../assets/Imagens/pessoa3Img.jpeg";

const equipe = [
    {
        imagem: pessoa1Img,
        nome: "Lucas Almeida",
        cargo: "Instrutor de Musculação",
        descricao: "Especialista em treinamento de força e hipertrofia, ajudando alunos a alcançarem seus objetivos com segurança.",
    },
    {
        imagem: pessoa2Img,
        nome: "Mariana Souza",
        cargo: "Personal Trainer",
        descricao: "Com mais de 8 anos de experiência, Mariana cria treinos personalizados para todos os níveis de condicionamento.",
    },
    {
        imagem: pessoa3Img,
        nome: "Rafael Mendes",
        cargo: "Professor de FitDance",
        descricao: "Apaixonado por dança e movimento, Rafael transforma cada aula em uma experiência energética e divertida.",
    },
];

export default function EquipeSection() {
    return (
        <Box sx={{ textAlign: "center", py: 6, px: 4, backgroundColor: "#f9f9f9" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000" }}>
                Nossa <span style={{ color: "#FFB416" }}>Equipe</span>
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, mt: 4 }}>
                {equipe.map((membro, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: 280,
                            borderRadius: "12px",
                            border: "1px solid transparent",
                            borderWidth: "2px",
                            "&:hover": { borderColor: "#ffb416" },
                        }}
                    >
                        <CardMedia component="img" height="220" image={membro.imagem} alt={membro.nome} />
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
                                {membro.nome}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#FFB416", mb: 1 }}>
                                {membro.cargo}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: "13px", color: "#555", textAlign: "left" }}>
                                {membro.descricao}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}
