import { useState } from "react"
import { ThemeContext } from "./ThemeContext"

export function ThemeContextProvider({ children }) {
  const theme = localStorage.getItem("theme")
  const [darkMode, setDarkMode] = useState(theme)
  const [namePlayer, setNamePlayer] = useState("")
  const [region, setRegion] = useState(1)
  const [level, setLevel] = useState(0)
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        namePlayer,
        setNamePlayer,
        region,
        setRegion,
        level,
        setLevel,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
