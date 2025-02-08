import { Button, Card, CardContent, Typography, Chip, Box } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

const plans = [
    {
        title: "Plano Black",
        description: "Treine em qualquer academia da Smart Fit, seja no Brasil ou na América Latina. São +1.700 unidades em 15 países!",
        price: "R$ 0,00",
        afterPrice: "R$ 149,90/mês",
        benefits: [
        { text: "Acesso ilimitado a +1.700 academias", available: true },
        { text: "Leve 5 amigos por mês para treinar com você", available: true },
        { text: "Cadeira de massagem", available: true },
        { text: "Smart Fit GO (treinos online) no app", available: true },
        { text: "Área de musculação e aeróbicos", available: true },
        { text: "Smart Fit App", available: true },
        ],
        buttonText: "Contratar agora",
        highlight: true,
    },
    {
        title: "Plano Fit",
        description: "Nosso plano mais econômico para você se exercitar quando e quanto quiser na academia que escolher!",
        price: "R$ 0,00",
        afterPrice: "R$ 99,90/mês",
        benefits: [
        { text: "Acesso ilimitado a +1.700 academias", available: false },
        { text: "Leve 5 amigos por mês para treinar com você", available: false },
        { text: "Cadeira de massagem", available: false },
        { text: "Smart Fit GO (treinos online) no app", available: true },
        { text: "Área de musculação e aeróbicos", available: true },
        { text: "Smart Fit App", available: true },
        ],
        buttonText: "Buscar academia",
    },
    {
        title: "Plano Smart",
        description: "Nosso plano mensal para você que não quer se comprometer, mas quer treinar em uma academia de alto padrão!",
        price: "R$ 0,00",
        afterPrice: "R$ 119,90/mês",
        benefits: [
        { text: "Acesso ilimitado a +1.700 academias", available: false },
        { text: "Leve 5 amigos por mês para treinar com você", available: false },
        { text: "Cadeira de massagem", available: false },
        { text: "Smart Fit GO (treinos online) no app", available: true },
        { text: "Área de musculação e aeróbicos", available: true },
        { text: "Smart Fit App", available: true },
        ],
        buttonText: "Buscar academia",
    },
];

export default function Pricing() {
    return (
        <Box sx={{ py: 6, px: 4, textAlign: "left", backgroundColor: "#fff" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000", textAlign:"center" }}>
                Venha treinar na <span style={{ color: "#FFB416" }}>maior rede de academias da América Latina</span>
            </Typography>
            <Typography sx={{ color: "#666", mt: 2, textAlign:"center" }}>
                Os melhores equipamentos e infraestrutura com mensalidades acessíveis.
            </Typography>
            <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: 280,
                            p: 4,
                            backgroundColor: plan.highlight ? "#1c1c1c" : "#fff",
                            color: plan.highlight ? "#fff" : "#000",
                            boxShadow: 4,
                            borderRadius: "16px",
                            position: "relative"
                        }}
                    >
                        {plan.highlight && (
                            <Chip
                                label={
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "0.85rem",
                                            whiteSpace: "nowrap",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <span style={{ fontWeight: "normal" }}>O mais</span> <strong>vantajoso</strong>
                                    </Typography>
                                }
                                sx={{
                                    position: "absolute",
                                    top: 5,
                                    left: "33%",
                                    transform: "translateX(-50%)",
                                    backgroundColor: "#FFB416",
                                    color: "#000",
                                    borderRadius: "20px",
                                    px: 3,
                                    py: 1,
                                    fontSize: "0.85rem",
                                    fontWeight: "bold",
                                    boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
                                    minWidth: "max-content",
                                    whiteSpace: "nowrap",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                        )}
                    <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>{plan.title}</Typography>
                            <Typography sx={{ mt: 1, fontSize: "0.9rem", color: plan.highlight ? "#ddd" : "#666" }}>
                                {plan.description}
                            </Typography>
                            <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                                {plan.price} <span style={{ fontSize: "0.875rem", fontWeight: "normal" }}>no 1º mês, depois {plan.afterPrice}</span>
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                    width: "100%",
                                    backgroundColor: "#FFB416",
                                    color: "#000",
                                    fontWeight: "bold",
                                    borderRadius: "25px",
                                    textTransform: "none",
                                    boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
                                    transition: "0.3s",
                                    "&:hover": { backgroundColor: plan.highlight ? "#FBBA00" : "#FFB416" },
                                }}
                            >
                                {plan.buttonText}
                            </Button>
                            <Box component="ul" sx={{ mt: 3, textAlign: "left", pl: 2 }}>
                                {plan.benefits.map((benefit, i) => (
                                    <Typography
                                        key={i}
                                        component="li"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            fontSize: "0.95rem",
                                            color: benefit.available ? "inherit" : "gray",
                                            textDecoration: benefit.available ? "none" : "line-through",
                                        }}
                                    >
                                        {benefit.available ? (
                                            <TaskAltIcon sx={{ color: "green", fontSize: "20px" }} />
                                        ) : (
                                            <DoNotDisturbIcon sx={{ color: "gray", fontSize: "20px" }} />
                                        )}
                                        {benefit.text}
                                    </Typography>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <Typography sx={{ color: "#666", mt: 6, fontSize: "0.875rem", textAlign:"center" }}>
                Os preços, taxas e condições promocionais podem variar de acordo com a academia escolhida.
            </Typography>
        </Box>
    );
}
