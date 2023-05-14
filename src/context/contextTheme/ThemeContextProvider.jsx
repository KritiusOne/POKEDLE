import { useState } from "react"
import { ThemeContext } from "./ThemeContext"

export function ThemeContextProvider({ children }) {
  const theme = localStorage.getItem("theme")
  const [darkMode, setDarkMode] = useState(theme)
  const [namePlayer, setNamePlayer] = useState("")
  const [region, setRegion] = useState(1)
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        namePlayer,
        setNamePlayer,
        region, 
        setRegion
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
