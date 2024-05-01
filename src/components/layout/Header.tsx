import { Button, Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <Grid
      container
      spacing={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h2">FinanceWise</Typography>
      <Button color="inherit">Login</Button>
    </Grid>
  );
};

export default Header;
