import React from "react";
import { Typography, Avatar, Box, useTheme } from "@mui/material";

export const About = () => {
  const theme = useTheme();

  return (
    <section id="about">
      <Box display="flex" alignItems="center" gap={2}>
        {/* Avatar */}
        <Avatar
          alt="Federico Ariel Waicen"
          src="src\assets\profile.jpeg"  // Aquí puedes colocar la URL de tu imagen
          sx={{ width: 200, height: 200 }}
        />
        {/* Información sobre mí */}
        <div>
          <Typography variant="h3" sx={{ 
                fontWeight: 700,
                mb: 1,
                [theme.breakpoints.down("sm")]: {
                  fontSize: "2rem"
                }
              }}>Federico Ariel Waicen</Typography>
          <Typography 
              variant="h5" 
              color="textSecondary"
              sx={{ 
                mb: 2,
                fontStyle: "italic",
                color: theme.palette.text.secondary
              }}
            >
              Application Development Senior Analyst
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 2,
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1.5rem"
                }
              }}
            >
              Sobre mí
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.6,
                fontSize: "1.1rem",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1rem"
                }
              }}
            >
              Apasionado por la programación y la tecnología, busco constantemente oportunidades para aplicar mis conocimientos y crecer profesionalmente.
              Me motiva trabajar en entornos dinámicos donde pueda aportar soluciones innovadoras, aprender de manera continua y colaborar en equipo.
              Me apodan "Lemon", según dicen tengo olor a limón. Me encanta la tecnología, el anime, videojuegos y tocar el piano.
            </Typography>
        </div>
        
      </Box>
    </section>
  );
};

export default About;
