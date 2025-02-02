import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemText, MenuItem, styled, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import logo from "../../assets/Imagens/Logo.png";

const NavBar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const StyledToolbar = styled(Toolbar)({
    backgroundColor: "#fff",
    color: "#000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
    });

    const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
    };

    const menuItems = [
        "Home",
        "Academias",
        "Espaço do Cliente",
        "Seja um Franqueado",
        "Smart Fit News",
        "Planos",
        "Smart Fit Supps",
        "Sustentabilidade",
        "Nossa História"
        ];

    return (
    <>
        <AppBar position="fixed">
        <StyledToolbar>
            <Box sx={{ display: 'flex', alignItems: "center", marginTop: "10px"}}>
                <img src={logo} alt="logo" style={{ height: "93px", cursor: "pointer", marginLeft: "32px" }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'right', width: '100%', marginTop:"10px"}}>
                <MenuItem component="a" href="#" sx={{ fontSize:"14px", fontWeight: "600", display: { xs: 'none', md: 'block', borderRadius: "25px", "&:hover": { backgroundColor: "#8d8d8d" }, } }}>Academias</MenuItem>
                <MenuItem component="a" href="#" sx={{ fontSize:"14px", fontWeight: "600", display: { xs: 'none', md: 'block', borderRadius: "25px", "&:hover": { backgroundColor: "#8d8d8d" }, } }}>Espaço do Cliente</MenuItem>
                <MenuItem component="a" href="#" sx={{ fontSize:"14px", fontWeight: "600", display: { xs: 'none', md: 'block', borderRadius: "25px", "&:hover": { backgroundColor: "#8d8d8d" }, } }}>Seja um Franqueado</MenuItem>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button
                    variant="contained"
                    sx={{ 
                        display: { xs: "none", md: "block" }, 
                        backgroundColor: "#FFB416", 
                        "&:hover": { backgroundColor: "#FBBA00", opacity:"0.8" },
                        padding: "3Spx 6px",
                        paddingTop: "10px",
                        fontWeight: "bold",
                        marginLeft:"30px",
                        fontSize: "13px",
                        color: "#000",
                        boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
                        borderRadius: "25px",
                        textTransform: "none",
                        minWidth: "175px",
                        }}
                >
                Buscar academia
                </Button>
                <IconButton
                color="inherit"
                aria-label="menu"
                edge="end"
                onClick={toggleDrawer}
                sx={{ display: "block" }}
            >
            </IconButton>
            </Box>
            <IconButton
            color="inherit"
            aria-label="menu"
            edge="end"
            onClick={toggleDrawer}
            sx={{ 
                fontSize: "5rem ",
                padding: "26px",
                "& .MuiSvgIcon-root": { fontSize: "2.5rem" }, 
            }}
            >

            {/* Menu Drawer >>>*/}

                <MenuIcon />
            </IconButton>
        </StyledToolbar>
        </AppBar>
        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer} sx={{'& .MuiDrawer-paper': {borderRadius:"20px 0 0 20px"}}}>
            <Box sx={{ width: 350, padding: "20px", marginLeft:"10px", }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                        <img src={logo} alt="Logo" style={{ width: "115px" }} />
                    <IconButton onClick={toggleDrawer}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Button
                    variant="outlined"
                    sx={{ 
                        display: { xs: "none", md: "block" }, 
                        backgroundColor: "#fff", 
                        "&:hover": { backgroundColor: "#1c1c1c", color:"#fff" },
                        padding: "5px",
                        width:"65%",
                        fontWeight: "bold",
                        border: "2px solid black",
                        fontSize: "13px",
                        color: "#000",
                        borderRadius: "25px",
                        textTransform: "none",
                        minWidth: "175px",
                        }}
                >
                Buscar academia
                </Button>
                <List>
                    {menuItems.map((text, index) => (
                        <ListItem key={index} sx={{
                            display: { xs: "none", md: "block"},
                            color: "#000",
                            padding: "10px 20px",
                            transition: "color 0.3s ease",
                            "&:hover": {color: "#ffb416"},
                        }} >
                            <ListItemText primary={text} />
                        </ListItem>
                        )
                    )}
                </List>

                <Divider sx={{ my: 2 }} />

                <ListItem>
                    <img src="#" alt="BR" style={{ width: 25, marginRight: 10 }} />
                    <ListItemText primary="BR" />
                </ListItem>

                <ListItem>
                    <img src="#" alt="Suporte" style={{ width: 25, marginRight: 10 }} />
                    <ListItemText primary="Dúvidas Frequentes" />
                </ListItem>
            </Box>
        </Drawer>
    </>
    );
};

export default NavBar;
