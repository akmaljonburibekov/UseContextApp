import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayouts from "./layouts/MainLayouts"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
function App() {
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ]
  },
])
  return  <RouterProvider router={routes}/>
}

export default App