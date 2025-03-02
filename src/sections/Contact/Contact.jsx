import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Snackbar, Alert } from "@mui/material";
import emailjs from "emailjs-com"; // Importar emailjs

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Enviar el correo usando emailjs
    emailjs
      .sendForm(
        "service_j9zzsoe", // ID del servicio (obtenido en EmailJS)
        "template_eyd2l28", // ID del template (obtenido en EmailJS)
        e.target, // Pasamos el formulario al sendForm
        "z50HFYovymIVF5Way" // ID del usuario (obtenido en EmailJS)
      )
      .then(
        (result) => {
          setSnackbarMessage("¡Formulario enviado exitosamente!");
          setSnackbarSeverity("success");
          setOpenSnackbar(true); // Mostrar el Snackbar
          setForm({
            name: "",
            email: "",
            message: ""
          });
          setLoading(false);
        },
        (error) => {
          setSnackbarMessage("Hubo un problema al enviar el formulario.");
          setSnackbarSeverity("error");
          setOpenSnackbar(true); // Mostrar el Snackbar
          setLoading(false);
        }
      );
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <section id="contact">
      <Card sx={{ boxShadow: "none", padding: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Contacto
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              label="Nombre"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={form.name}
              onChange={handleChange}
            />
            <TextField
              required
              label="Correo electrónico"
              name="email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <TextField
              required
              label="Mensaje"
              name="message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit" loading={loading} sx={{ marginTop: 2 }}>
              Enviar
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Snackbar para mostrar el mensaje de éxito o error */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
