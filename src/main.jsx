import ReactDOM from "react-dom/client"
import { PokeContextProvider } from "./context/PokeContextProvider"
import { MyRoutes } from "./routes/MyRoutes"
import { BrowserRouter } from "react-router-dom"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <PokeContextProvider>
    <BrowserRouter>
      <MyRoutes></MyRoutes>
    </BrowserRouter>
  </PokeContextProvider>
)
