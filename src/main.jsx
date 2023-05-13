import ReactDOM from "react-dom/client"
import { PokeContextProvider } from "./context/PokeContextProvider"
import { MyRoutes } from "./routes/MyRoutes"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { ThemeContextProvider } from "./context/contextTheme/ThemeContextProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <PokeContextProvider>
    <ThemeContextProvider>
      <BrowserRouter>
        <MyRoutes></MyRoutes>
      </BrowserRouter>
    </ThemeContextProvider>
  </PokeContextProvider>
)
