// Import necessary components
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

// Define the routes
const routes = [
  {
    path: "/",                // Root path
    element: <Home />,        // Component to render
    errorElement: <ErrorPage /> // Component to render in case of error
  },
  {
    path: "/directors",       // Path for directors page
    element: <Directors />    // Component to render
  },
  {
    path: "/actors",          // Path for actors page
    element: <Actors />       // Component to render
  },
  {
    path: "/movie/:id",       // Path for individual movie page with dynamic ID
    element: <Movie />        // Component to render
  }
];

export default routes;
