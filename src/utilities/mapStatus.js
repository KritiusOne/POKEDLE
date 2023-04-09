export function mapStatus(status){
  if(typeof status == 'string'){
    switch(status){
      case 'correct': {
        return 'correct' // verde
      }
      case 'present': {
        return 'present' //amarilla
      }
      case 'none': {
        return 'none' // en blanco
      }
      default:{
        return 'edit'
      }
    }
  }
}