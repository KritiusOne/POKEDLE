import { useEffect } from "react"
import Proptypes from "prop-types"

export function useWindow(eventName, callback) {
  useEffect(() => {
    window.addEventListener(eventName, callback)
    return () => {
      window.removeEventListener(eventName, callback)
    }
  })
}

useWindow.Proptypes = {
  eventName: Proptypes.string,
  callback: Proptypes.function,
}
