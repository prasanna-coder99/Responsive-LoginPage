import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { purple } from "@mui/material/colors";

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
        backgroundImage :`url("/bgimg.jpg")`,
        backgroundSize : "cover",
      }}
    >
   <Box
        component="img"
        src="/logo.png"
        alt="Logo"
        sx={{
          width:40,
          height:40,
          borderRadius: "50%",
          objectFit: "cover",
          position: "absolute",
          top: 80,   
          left: "50%", 
          transform: "translateX(-50%)", 
        }}
      />
      <Typography variant="h5" sx={{ mt: 2, height:60,}}>Cloud System</Typography>
      <Typography variant="body2" sx={{ mb: 2,  margin:1,}}>Please enter your registered Email to Log in</Typography>

      <TextField
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{ endAdornment: <MailOutlineIcon /> }}
        sx={{ width: "400px", height:"55px",mt:1, mb: 2,backgroundColor:"white", borderRadius:2, }}
      />

      <Button
        variant="contained"
        sx={{ width: "80px", height:"30px", borderRadius: "20px", textTransform:"none",backgroundColor:"#664ad6ff", }}
        onClick={handleNext}
        endIcon={<ArrowForwardIcon/>}
      >
        Next
      </Button>
    </Box>
  );
}

export default EmailStep;
