import React, { useContext } from "react"
import { Button } from "../../button/Button"
import { Table } from "../../table/Table"
import { OptionTable } from "../../table/optionTable/OptionTable"
import { BsSunFill } from "react-icons/bs"
import { CgMoon } from "react-icons/cg"
import { ThemeContext } from "../../../context/contextTheme/ThemeContext"
import "./modalChildrens.css"

export function ModalChildrenConfig() {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const handleDarkMode = () => {
    localStorage.setItem("theme", !darkMode)
    setDarkMode(!darkMode)
  }
  return (
    <div className="ModalChildrenConfig Config--modal">
      <Table title={""} className="ModalChildrenConfig__list">
        <OptionTable
          title={"Tema oscuro: "}
          className="ModalChildrenConfig__list--element"
        >
          <Button
            title=""
            handleClick={handleDarkMode}
            clase="button--Darkmode"
          >
            {darkMode ? (
              <BsSunFill className="button--darkmode-Icon" />
            ) : (
              <CgMoon className="button--darkmode-Icon" />
            )}
          </Button>
        </OptionTable>
        
      </Table>
    </div>
  )
}
