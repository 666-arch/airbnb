import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import HeaderWrapper from "@/components/app-header";
import FooterWrapper from "./components/app-footer";
const router = createHashRouter(routes);
const App = () => {
  return (
    <div className="app">
      <HeaderWrapper/>
      <div className="app-pages">
        <RouterProvider router={router} />
      </div>
      <FooterWrapper/>
    </div>
  );
};

export default App;
