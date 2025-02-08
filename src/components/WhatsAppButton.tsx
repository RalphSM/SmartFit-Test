import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
    return (
        <Box
        component="a"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            backgroundColor: "#25D366",
            color: "#fff",
            width: 56,
            height: 56,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3,
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
            backgroundColor: "#1ebe57",
            },
        }}
        >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
        </Box>
    );
};

export default WhatsAppButton;
