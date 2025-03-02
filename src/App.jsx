import { useState, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline, Card, CardContent, AppBar, Toolbar, IconButton, Grid2 } from "@mui/material";
import { Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { About, TimelineSection, Skills, Contact } from "./sections";
import "./App.css"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Crear el tema de Material UI con soporte para Glassmorphism
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: darkMode
          ? 'linear-gradient(135deg, #212121, #333333)' // Gradiente oscuro
          : 'linear-gradient(135deg, #6e7f80, #a2b9b2)', // Gradiente claro
        paper: darkMode ? '#1c1c1c' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#fff' : '#000', // Texto claro en modo oscuro y oscuro en modo claro
        secondary: darkMode ? '#fff' : '#000',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: darkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)', // Fondo translúcido
            backdropFilter: 'blur(10px)', // Desenfoque
            // boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sombra suave
            borderRadius: '12px', // Bordes redondeados
            color: darkMode ? 'white' : 'black',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: darkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)', // Fondo translúcido
            backdropFilter: 'blur(10px)', // Desenfoque
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sombra suave
            borderRadius: '12px', // Bordes redondeados
            padding: '20px',
            color: darkMode ? 'white' : 'black',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: darkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)', // Fondo translúcido
            backdropFilter: 'blur(10px)', // Desenfoque
            borderRadius: '12px', // Bordes redondeados
            color: darkMode ? 'white' : 'black',
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(0, 0, 0, 0.10)', // Ajusta la opacidad del backdrop
          },
        },
      },
    },
  });

  useEffect(() => {
    document.body.style.background = darkMode
    ? 'linear-gradient(135deg,rgb(87, 86, 86), #333333)' // Gradiente oscuro
    : 'linear-gradient(135deg,rgb(128, 174, 177), #a2b9b2)'; // Gradiente claro
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Navbar con cambio de modo claro/oscuro */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Contenedor principal de la aplicación */}
      <Container>
        <Box sx={{ my: 10 }}>
          {/* Card que envuelve todo el contenido */}
          <Card>
            <CardContent>
              <Grid2 container spacing={5} size={12}>
                <Grid2 size={12}>
                  <About />
                </Grid2>
                <Grid2 size={12}>
                  <Skills />
                </Grid2>
                <Grid2 size={12}>
                  <TimelineSection />
                </Grid2>
                <Grid2 size={12}>
                  <Contact />
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
