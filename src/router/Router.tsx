import { Route, Routes } from "react-router-dom";
import routes from "./router";
import Layout from "../components/layout/Layout";
import Cards from "../pages/Cards/Cards";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={routes.cards} element={<Cards />} />
      </Route>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.register} element={<Register />} />
    </Routes>
  );
};

export default Router;
