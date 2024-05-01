import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Link, Typography } from "@mui/material";

// Define your dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark", // Switch to dark mode
    primary: {
      main: "#90caf9", // Example primary color
    },
    secondary: {
      main: "#f48fb1", // Example secondary color
    },
  },
});

function Login() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Apply global styles for dark mode */}
      <Container maxWidth="xs">
        {" "}
        {/* Adjust container width as needed */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          height="100vh"
        >
          <h2>Welcome Back!</h2>
          <form>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>

          <Typography my={1}>
            Don't have an account? <Link href="/register">Register</Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
