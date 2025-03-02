import { AppBar, Toolbar, Typography, IconButton, Button, Container } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar position="fixed" sx={{ width: '100%', left: 0, right: 0 }}>
      <Container>
        <Toolbar> 
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi Portafolio
          </Typography>
          <Button component={Link} to="about" smooth offset={-120} color="inherit">
            Sobre mí
          </Button>
          <Button component={Link} to="skills" smooth offset={-80} color="inherit">
            Habilidades
          </Button>
          <Button component={Link} to="contact" smooth offset={-80} color="inherit">
            Contacto
          </Button>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
