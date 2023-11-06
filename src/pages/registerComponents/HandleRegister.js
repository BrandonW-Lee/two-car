import { Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

function HandleRegister() {
  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    fetch("http://localhost:4000/Register", {
      method: "POST",
      body: {
        email,
        password,
      },
    })
      .then((res) => res.json())
      .then((data) => responseMessage(data))
      .catch((err) => errorMessage(err));
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      autoComplete='off'
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        mt: "170px",
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: "fontWeightMedium", fontSize: "18px" }}>
          Get Started
        </Typography>
        <Typography>Create your account now</Typography>
      </Box>
      <Box sx={{ mt: "20px" }}>
        <Typography sx={{ fontWeight: "fontWeightMedium", fontSize: "18px" }}>
          Email *
        </Typography>
        <Typography>
          We will send a confirmation email once your reservation is complete.
        </Typography>
        <TextField
          required
          id='registerEmail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
      </Box>
      <Box>
        <Typography>Password *</Typography>
        <TextField
          required
          id='registerPassword'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography>Re-enter Password *</Typography>
        <TextField
          required
          id='reEnterPassword'
          type='password'
          onChange={(e) => setReEnterPassword(e.target.value)}
        ></TextField>
      </Box>
      <Button
        type='submit'
        variant='contained'
      >
        {" "}
        Continue{" "}
      </Button>
    </Box>
  );
}

export default HandleRegister;
