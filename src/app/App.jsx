import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AppStateProvider } from "./providers/AppStateProvider";
import "../styles/app.css";
export default function App() {
  return <AppStateProvider>
      <RouterProvider router={router} />
    </AppStateProvider>;
}
