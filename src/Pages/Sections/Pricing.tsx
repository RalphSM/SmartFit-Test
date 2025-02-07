import { Button, Card, CardContent, Typography, Chip, Box } from "@mui/material";

const plans = [
    {
        title: "Plano Black",
        price: "R$ 0,00",
        afterPrice: "R$ 149,90/mês",
        benefits: [
        "Acesso ilimitado a +1.700 academias",
        "Leve 5 amigos por mês para treinar com você",
        "Cadeira de massagem",
        "Smart Fit GO (treinos online) no app",
        "Área de musculação e aeróbicos",
        "Smart Fit App",
        ],
        buttonText: "Contratar agora",
        highlight: true,
    },
    {
        title: "Plano Fit",
        price: "R$ 0,00",
        afterPrice: "R$ 99,90/mês",
        benefits: [
        "Smart Fit GO (treinos online) no app",
        "Área de musculação e aeróbicos",
        "Smart Fit App",
        ],
        buttonText: "Buscar academia",
    },
    {
        title: "Plano Smart",
        price: "R$ 0,00",
        afterPrice: "R$ 119,90/mês",
        benefits: [
        "Smart Fit GO (treinos online) no app",
        "Área de musculação e aeróbicos",
        "Smart Fit App",
        ],
        buttonText: "Buscar academia",
    },
    ];

    export default function Pricing() {
    return (
        <Box sx={{ py: 12, px: 4, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000" }}>
            Venha treinar na <span style={{ color: "#FFB416" }}>maior rede de academias da América Latina</span>
        </Typography>
        <Typography sx={{ color: "#666", mt: 2 }}>
            Os melhores equipamentos e infraestrutura com mensalidades acessíveis.
        </Typography>
        <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
            {plans.map((plan, index) => (
            <Card
                key={index}
                sx={{ width: 300, p: 4, backgroundColor: plan.highlight ? "#1c1c1c" : "#fff", color: plan.highlight ? "#fff" : "#000", boxShadow: 3 }}
            >
                {plan.highlight && <Chip label="O mais vantajoso" color="warning" sx={{ mb: 2 }} />}
                <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{plan.title}</Typography>
                <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                    {plan.price} <span style={{ fontSize: "0.875rem", fontWeight: "normal" }}>no 1º mês, depois {plan.afterPrice}</span>
                </Typography>
                <ul style={{ marginTop: "1rem", textAlign: "left", paddingLeft: "1rem" }}>
                    {plan.benefits.map((benefit, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        ✅ {benefit}
                    </li>
                    ))}
                </ul>
                <Button
                    variant="contained"
                    sx={{ mt: 4, width: "100%", backgroundColor: plan.highlight ? "#FFB416" : "#1c1c1c", color: "#000", fontWeight: "bold", borderRadius: "25px", textTransform: "none", boxShadow: "4px 4px 10px rgba(0,0,0,0.2)", '&:hover': { backgroundColor: plan.highlight ? "#FBBA00" : "#333" } }}
                >
                    {plan.buttonText}
                </Button>
                </CardContent>
            </Card>
            ))}
        </Box>
        <Typography sx={{ color: "#666", mt: 6, fontSize: "0.875rem" }}>
            Os preços, taxas e condições promocionais podem variar de acordo com a academia escolhida.
        </Typography>
        </Box>
    );
    }
