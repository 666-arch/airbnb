import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import AppHeader from "@/components/app-header";
import AppFooter from "./components/app-footer";
const router = createHashRouter(routes);
const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <div className="app-pages">
        <RouterProvider router={router} />
      </div>
      <AppFooter/>
    </div>
  );
};

export default App;
