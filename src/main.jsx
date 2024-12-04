import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import route from "./routes";

route = createBrowserRouter(route);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route}/>);
