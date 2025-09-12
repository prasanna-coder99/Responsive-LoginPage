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

function PasswordStep() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [agreeError, setAgreeError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    let valid =true;
    if (!password) {
    setPasswordError("password is required");
      valid =false;
    }
    else{
      setPasswordError("");
    }
    if (!agree) {
      setAgreeError("You must agree to the Terms & Conditions!");
      valid=false;
    }
    else{
      setAgreeError("");
    }
    if(valid){
    alert("Login Successful!");
    navigate("/dashboard");
    }
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

      <Typography
        sx={{
          mt: 2,
          height: 70,
          color: "var(--Text-Light-background-Heading, #0A1E06)",
          fontFamily: 'var(--Font-Family-Headings, "Overused Grotesk")',
          fontSize: "31px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "100%",
          letterSpacing: "0.62px",
        }}
      >
        Cloud System
      </Typography>
      <Typography
  sx={{
    mb: 2,
    color: "var(--Text-Light-background-Heading, #0A1E06)",
    fontFamily: 'var(--Font-Family-Body, "Overused Grotesk")',
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "120%", 
    letterSpacing: "0.3px",
  }}
>
  Please enter your password
</Typography>
<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
    
        <IconButton onClick={handleBack} sx={{ p: 0, mr: 1 }}>
          <Box
            component="span"
            sx={{
              width: 30,
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            dangerouslySetInnerHTML={{
              __html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect width="30" height="30" rx="15" fill="white"/>
              <path d="M8.64645 14.6464C8.45118 14.8417 8.45118 15.1583 8.64645 15.3536L11.8284 18.5355C12.0237 18.7308 12.3403 18.7308 12.5355 18.5355C12.7308 18.3403 12.7308 18.0237 12.5355 17.8284L9.70711 15L12.5355 12.1716C12.7308 11.9763 12.7308 11.6597 12.5355 11.4645C12.3403 11.2692 12.0237 11.2692 11.8284 11.4645L8.64645 14.6464ZM21 15L21 14.5L9 14.5L9 15L9 15.5L21 15.5L21 15Z" fill="#4C33DB"/>
              </svg>`
            }}
          />
        </IconButton>
<TextField
placeholder="Password"
type={showPassword ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  error={!!passwordError}
  helperText={passwordError}
  InputProps={{
    endAdornment: (
      <Box
        onClick={() => setShowPassword(!showPassword)}
        sx={{ cursor: "pointer", display: "flex", alignItems: "center", pr: 1 }}
      >
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"
            fill="#6F6F6F"
          />
        </svg>
      </Box>
    ),
  }}
 
sx={{ width: 400, mb: 1, bgcolor: "white", borderRadius: 1 }} />

</Box>
    <Typography
  variant="body2"
  sx={{
    ml: 2,
    color:"#0A1E06", 
    cursor: "pointer",
    fontFamily: 'var(--Font-Family-Body, "Overused Grotesk")',
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%", 
    letterSpacing: "0.26px",
   
  }}
>
  Forgot Password?
</Typography> 

<FormControlLabel
  control={
    <Checkbox
      checked={agree}
      onChange={(e) => setAgree(e.target.checked)}
      sx={{
        color: "white",
        "&.Mui-checked": { color: "white" },
      }}
    />
  }
  label={
    <Typography
      sx={{
        color: "var(--Text-Light-background-Heading, #0A1E06)",
        fontFamily: 'var(--Font-Family-Body, "Overused Grotesk")',
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "100%", 
        letterSpacing: "0.26px",
        display: "flex",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      I agree to{" "}
      <a
        href="#"
        style={{
          color: "var(--Text-Light-background-Heading, #0A1E06)",
          fontFamily: 'var(--Font-Family-Body, "Overused Grotesk")',
          fontSize: "13px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "0.26px",
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationSkipInk: "none",
          textDecorationThickness: "auto",
          textUnderlineOffset: "auto",
          textUnderlinePosition: "from-font",
        }}
      >
        Terms and Conditions
      </a>
      {agreeError && (
              <span style={{ color: "red", marginLeft: 5, fontSize: "12px" }}>
                {agreeError}
              </span>
            )}
    </Typography>
  }
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
