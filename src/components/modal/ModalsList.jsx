import React, { useContext } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { Modal } from "./Modal"
import { ModalChildrenConfig } from "./modalChildrens/ModalChildrenConfig"
import { ModalChildrenWon } from "./modalChildrens/ModalChildrenWon"

export default function ModalsList() {
  const {
    mostrarModalConfig,
    mostrarModalAyuda,
    mostrarModalRanking,
    mostrarModalWon,
  } = useContext(CreatePokeContext)
  return (
    <>
      {mostrarModalConfig && (
        <Modal title={"configuracion"} visualizar="config">
          <ModalChildrenConfig />
        </Modal>
      )}
      {mostrarModalAyuda && (
        <Modal title={"Ayuda"} visualizar="ayuda">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Modal>
      )}
      {mostrarModalRanking && (
        <Modal title={"Ranking"} visualizar="Ranking">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Modal>
      )}
      {mostrarModalWon && <ModalChildrenWon />}
    </>
  )
}
