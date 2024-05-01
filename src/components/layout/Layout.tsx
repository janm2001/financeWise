import { Box } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box minHeight="100vh">
      <Header />
      <Box py={8} px={16}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
