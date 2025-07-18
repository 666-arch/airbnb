import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
const router = createHashRouter(routes);
const App = () => {
  return (
    <div className="app">
      <div className="app-header">header</div>
      <div className="app-pages">
        <RouterProvider router={router} />
      </div>
      <div className="app-footer">footer</div>
    </div>
  );
};

export default App;
