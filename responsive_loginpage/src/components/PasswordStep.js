import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


function PasswordStep() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!password) {
      alert("Please enter your password!");
      return;
    }
    if (!agree) {
      alert("You must agree to the Terms & Conditions!");
      return;
    }
    alert("Login Successful!");
    navigate("/dashboard");
  };
  const handleBack=()=>{
    navigate("/");
  };

  return (
    <Box sx={{
        height:"100vh",
       display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage : `url("/bgimg.jpg")`,
        backgroundSize:"cover",
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

      <Typography variant="h5" sx={{ mt: 2 , height: 70 }}>Cloud System</Typography>
      <Typography variant="body2" sx={{ mb: 2,}}>Please enter your password</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <IconButton
            onClick={handleBack}
            sx={{mb: 2,bgcolor: "white",border: "1px solid #ccc","&:hover": { bgcolor: "#f0f0f0" },}}>
  <ArrowBackIcon />
</IconButton>
<TextField
  placeholder="Password"
  type={show ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  InputProps={{
    endAdornment: (
      <IconButton onClick={() => setShow(!show)}>
        {show ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    ),
  }}
  sx={{
    width: "400px",
    mb: 1,
    bgcolor: "white",
    borderRadius: "5px",
  }}
/>
</Box>
      <Typography variant="body2" color="black" sx={{ mb:1, height:10, cursor: "pointer" }}>
        Forgot Password?
      </Typography>

      <FormControlLabel
        control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} sx={{ color:"white" , "&.Mui-checked" :{ color:"white",},}} />}
        label={<Typography variant="body2">I agree to <a href="#">Terms and Conditions</a></Typography>}
      />

      <Button
        variant="contained"
        sx={{ width: "80px", margin:1 ,height:"30px", borderRadius: "20px", textTransform:"none", backgroundColor:"#664ad6ff", }}
        onClick={handleLogin}
      
      >
        Login
      </Button>
    </Box>
  );
}
export default PasswordStep;
