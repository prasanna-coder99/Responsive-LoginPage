import React, { useState } from "react";
import { TextField, Button, Typography, Box , InputAdornment, } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EmailStep() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  
  const handleNext = () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Enter a valid email address");
      return;
    }
    setError("");
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
        px:{xs:2,sm:4,md:0},
      }}
    >
  <Box
  sx={{
    display: "flex",
    flexDirection: "column",   
    alignItems: "center",
    justifyContent:"center",
      mb: { xs: 2, sm: 3 },
      mt:2,
      pt:{xs:5, md:10},    
  }}
></Box>
   <Box
        component="img"
        src="/logo.png"
        alt="Logo"
        sx={{
          width:{xs:"40px", md:"50px"},
          height: {xs:"50px",md:"50px"},
          borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            top: 80,   
            left: "50%", 
            transform: "translateX(-50%)",
           marginBottom:"20px",
          
          
         }}
      />
  <Typography 
   sx={{
          mt: 2,
          height: 70,
          color: "var(--Text-Light-background-Heading, #0A1E06)",
          fontFamily: 'var(--Font-Family-Headings, "Overused Grotesk")',
          fontSize: {xs:"28px",md:"31px"},
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "100%",
          letterSpacing: "0.62px",
        }}
  >Cloud System</Typography>
  <Typography
   sx={{
    mb: 2,
    color: "var(--Text-Light-background-Heading, #0A1E06)",
    fontFamily: 'var(--Font-Family-Body, "Overused Grotesk")',
    fontSize: {xs:"32px",md:"15px"},
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "120%", 
    letterSpacing: "0.3px",
  }}
>
Please enter your registered Email to Log in
      </Typography>

      <TextField
      fullWidth
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
         setError("");}}
         error={!!error}
        helperText={error}
        InputProps={{
          endAdornment: (
         <InputAdornment position="end">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
            stroke="#525252"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
            stroke="#525252"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> 
            </InputAdornment>
          ),
        }}
        
      sx={{ width: {xs:"100%", md:400}, mb: 1, bgcolor: "white", borderRadius: 1 }} 

        variant="outlined"
      />
     <Button
        variant="contained"
        sx={{
          mt: 1,
          width: "100px",
          height: "36px",
          borderRadius: "20px",
          textTransform: "none",
          backgroundColor: "#664ad6ff",
          fontFamily: 'var(--Font-Family-Body, "Overused Grotesk")',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
        onClick={handleNext}
        endIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M10.8225 4.44751L15.375 9.00001L10.8225 13.5525"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.625 9H15.2475"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        Next
      </Button>
    </Box>
  );
}

export default EmailStep;
