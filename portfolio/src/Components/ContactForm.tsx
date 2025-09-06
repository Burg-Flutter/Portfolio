"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import virtualMeet from "../../public/lottie/Virtual Meeting.json";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Sending email...");
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          user_name: formData.name,
          user_email: formData.email,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      setSnackbar({
        open: true,
        message: "Email sent! You will receive a reply shortly.",
        severity: "success",
      });

      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: "Failed to send email. Please try again later.",
        severity: "error",
      });
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={2}
      // py={6}
      sx={{
        background: "transparent",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%", maxWidth: 900 }}
      >
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, sm: 6 },
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: 4,
            borderRadius: 4,
          }}
        >
          {/* Lottie Animation */}
          <Box flex={1} display="flex" justifyContent="center">
            <Lottie
              animationData={virtualMeet}
              loop
              style={{ width: "100%", maxWidth: 300 }}
            />
          </Box>

          {/* Form Section */}
          <Box flex={1}>
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              gutterBottom
            >
              Let’s Get In Touch
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Your Name"
                name="name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Your Email"
                name="email"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 2,
                  py: 1.2,
                  fontWeight: 600,
                  background:
                    "linear-gradient(45deg, #007bff, #00c6ff)",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    background:
                      "linear-gradient(45deg, #005ecb, #00a6dd)",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Paper>
      </motion.div>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
