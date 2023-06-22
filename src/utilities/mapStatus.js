export function mapStatus(status) {
  // estados de las letras
  if (typeof status == "string") {
    switch (status.toLowerCase()) {
      case "correct": {
        return "correct" // verde
      }
      case "present": {
        return "present" //amarilla
      }
      case "none": {
        return "none" // en blanco
      }
      default: {
        return "edit"
      }
    }
  }
  return "edit"
}
