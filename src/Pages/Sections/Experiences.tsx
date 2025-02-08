import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import imgEquipamentos from "../../assets/Imagens/equipamentos.webp";
import imgAulas from "../../assets/Imagens/aulas.webp";
import imgMusculacao from "../../assets/Imagens/areas.webp";

const experiences = [
    {
        image: imgEquipamentos,
        title: "Equipamentos de alto padrão",
    },
    {
        image: imgAulas,
        title: "Salas exclusivas de aulas coletivas",
    },
    {
        image: imgMusculacao,
        title: "Áreas de musculação e cárdio",
    },
];

export default function Experiencia() {
    return (
        <Box sx={{ textAlign: "center", py: 6, px: 4, backgroundColor: "#fff" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000" }}>
                Experiência <span style={{ color: "#FFB416" }}>Smart Fit</span>
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, mt: 4 }}>
                {experiences.map((item, index) => (
                    <Card key={index} sx={{ width: 300, borderRadius: "12px", border: "1px solid transparent", borderWidth: "2px", "&:hover": { borderColor: "#ffb416" } }}>
                        <CardMedia component="img" height="200" image={item.image} alt={item.title} />
                        <CardContent>
                            <Typography variant="body1" sx={{ fontSize:"13px" }}>{item.title}</Typography>
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
                    fontSize:"16px",
                    borderRadius: "25px",
                    px: 11,
                    py: 1.1,
                    textTransform: "none",
                    boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
                    '&:hover': { backgroundColor: "#E5A400" },
                }}
            >
                Buscar academia
            </Button>
        </Box>
    );
}
