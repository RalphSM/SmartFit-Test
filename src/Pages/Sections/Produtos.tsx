import { Box, Button, Grid, Typography } from "@mui/material";
import coachImage from "../../assets/Imagens/coach.webp";
import energyImage from "../../assets/Imagens/energy.webp";
import bodyImage from "../../assets/Imagens/body.webp";
import suppsImage from "../../assets/Imagens/supps.png";

const products = [
    { id: 1, title: "Smart Fit Coach", description: "Acompanhamento Personalizado de Treino", details: "Treino on-line personalizado criado por um treinador.", price: "R$ 39,90/mês", term: "12 meses de permanência", image: coachImage },
    { id: 2, title: "Smart Fit Energy", description: "Bebidas Esportivas e Energéticas", details: "Energia extra para seu treino com bebidas selecionadas.", price: "R$ 19,90/mês", term: "Assinatura mensal", image: energyImage },
    { id: 3, title: "Smart Fit Body", description: "Bioimpedância para Acompanhar sua Evolução", details: "Acompanhe sua composição corporal com precisão.", price: "R$ 19,90/mês", term: "Assinatura mensal", image: bodyImage },
    { id: 4, title: "Smart Fit Supps", description: "Suplementos para Acelerar seus Resultados", details: "Suplementação essencial para melhor desempenho.", price: "R$ 19,90/mês", term: "Assinatura mensal", image: suppsImage },
];

const ProductsSection = () => {
    return (
        <Box sx={{ textAlign: "center", width: "90%", maxWidth: "1200px", margin: "0 auto", padding: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                Conheça nossos produtos e serviços adicionais para você
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mb: 3 }}>
                Só na Smart há serviços e produtos para potencializar seus resultados
            </Typography>

            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} marginBottom={2}>
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: 3,
                                boxShadow: 3,
                                overflow: "hidden",
                                padding: 2,
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <Box sx={{ width: "100%", height: "200px" }}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderTopLeftRadius: "12px",
                                        borderTopRightRadius: "12px",
                                    }}
                                />
                            </Box>
                            <Box sx={{ p: 2, flexGrow: 1 }}>
                                <Typography variant="caption" sx={{ color: "#666", fontWeight: "bold" }}>
                                    {product.title}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                                    {product.description}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                                    {product.details}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000", mt: 2 }}>
                                    {product.price}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>{product.term}</Typography>
                            </Box>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#ffb416",
                                    color: "#000",
                                    fontWeight: "bold",
                                    borderRadius: "25px",
                                    mt: "auto",
                                    width: "100%",
                                    padding: "10px 0",
                                    fontSize: "14px",
                                }}
                            >
                                Saiba mais
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="body2" sx={{ color: "#666", mt: 6 }}>
                Consulte a disponibilidade dos serviços físicos na academia desejada.
            </Typography>
        </Box>
    );
};

export default ProductsSection;
