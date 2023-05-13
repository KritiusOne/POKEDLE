import { useState } from "react"
import { ThemeContext } from "./ThemeContext"

export function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const [namePlayer, setNamePlayer] = useState("")
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        namePlayer,
        setNamePlayer,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
