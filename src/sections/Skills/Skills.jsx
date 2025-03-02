import React from "react";
import { Grid2 as Grid, Typography } from "@mui/material";
import { Link } from "react-scroll";
import Slider from "react-slick";
import { DiReact, DiNetmagazine, DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Skills = () => {
  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    autoplay: true, // Activar autoplay
    autoplaySpeed: 2000, // Tiempo en milisegundos entre cada cambio (3 segundos)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="skills">
      <Typography variant="h4" gutterBottom>
        Habilidades
      </Typography>
      
      {/* Carrusel de habilidades */}
      <Slider {...settings}>
        <div>
          <Grid container justifyContent="center" alignItems="center">
            <DiReact size={100} color="#61dafb" />
            <Typography variant="body2">React</Typography>
          </Grid>
        </div>
        <div>
          <Grid container justifyContent="center" alignItems="center">
            <DiNetmagazine size={100} color="#5b2891" />
          </Grid>
        </div>
        <div>
          <Grid container justifyContent="center" alignItems="center">
            <DiJavascript1 size={100} color="#f6df17" />
            <Typography variant="body2">Javascript</Typography>
          </Grid>
        </div>
        <div>
          <Grid container justifyContent="center" alignItems="center">
            <TbBrandCSharp size={100} color="#502ad3" />
          </Grid>
        </div>
        <div>
          <Grid container justifyContent="center" alignItems="center">
            <DiHtml5 size={100} color="#e34f26" />
            <Typography variant="body2">HTML</Typography>
          </Grid>
        </div>
        <div>
          <Grid container justifyContent="center" alignItems="center">
            <DiCss3 size={100} color="#2965f1" />
            <Typography variant="body2">CSS</Typography>
          </Grid>
        </div>
      </Slider>
    </section>
  );
};

export default Skills;
