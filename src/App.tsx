import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
