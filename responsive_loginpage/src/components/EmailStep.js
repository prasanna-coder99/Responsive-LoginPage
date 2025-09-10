import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function EmailStep() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!email) {
      alert("Please enter your email!");
      return;
    }
    localStorage.setItem("email", email);
    navigate("/password");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #ffecd2, #fcb69f, #a1c4fd, #c2e9fb)",
      }}
    >
      
      <Typography variant="h5" sx={{ mt: 2 }}>Cloud System</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>Please enter your registered Email to Log in</Typography>

      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{ endAdornment: <MailOutlineIcon /> }}
        sx={{ width: "300px", mb: 2 }}
      />

      <Button
        variant="contained"
        sx={{ width: "300px", borderRadius: "20px" }}
        onClick={handleNext}
      >
        Next →
      </Button>
    </Box>
  );
}

export default EmailStep;
