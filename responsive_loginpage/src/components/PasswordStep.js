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
      <Typography variant="body2" sx={{ mb: 2 }}>Please enter your password</Typography>

      <TextField
        label="Password"
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
        sx={{ width: "300px", mb: 2 }}
      />

      <Typography variant="body2" color="primary" sx={{ mb: 1, cursor: "pointer" }}>
        Forgot Password?
      </Typography>

      <FormControlLabel
        control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />}
        label={<Typography variant="body2">I agree to <a href="#">Terms and Conditions</a></Typography>}
      />

      <Button
        variant="contained"
        sx={{ width: "300px", borderRadius: "20px", mt: 2 }}
        onClick={handleLogin}
      >
        Log in
      </Button>
    </Box>
  );
}

export default PasswordStep;
