import { AppBar, Toolbar, Typography, IconButton, Button, Container, Box, Drawer, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { Brightness4, Brightness7, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-scroll";
import { useState } from "react";

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'background.default', color: 'text.primary', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Mi Portafolio
      </Typography>
      <List>
        <ListItemButton component={Link} to="about" smooth={true} offset={-120}>
          <ListItemText primary="Sobre mí" />
        </ListItemButton>
        <ListItemButton component={Link} to="skills" smooth={true} offset={-80}>
          <ListItemText primary="Habilidades" />
        </ListItemButton>
        <ListItemButton component={Link} to="contact" smooth={true} offset={-80}>
          <ListItemText primary="Contacto" />
        </ListItemButton>
        <ListItemButton onClick={() => setDarkMode(!darkMode)}>
          <ListItemText primary={darkMode ? "Modo Claro" : "Modo Oscuro"} />
          <IconButton color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ width: '100%', left: 0, right: 0 }}>
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Mi Portafolio
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button component={Link} to="about" smooth={true} offset={-120} color="inherit">
                Sobre mí
              </Button>
              <Button component={Link} to="skills" smooth={true} offset={-80} color="inherit">
                Habilidades
              </Button>
              <Button component={Link} to="contact" smooth={true} offset={-80} color="inherit">
                Contacto
              </Button>
              <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: 'background.default',
            color: 'text.primary',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;