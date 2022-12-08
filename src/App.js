import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";

function App() {
  return (
    <div className="scroll-smooth">
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
