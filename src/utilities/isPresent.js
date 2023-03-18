/*  const RESPUESTAS_MAP = {
  incorrecta: 0,
  correcta: 1,
  presente en lugar incorrecto: 2
} */
export function isPresent(correctAnswer, entrance, AllPokemon){
  if(AllPokemon.includes(entrance)){
    if(correctAnswer === entrance) console.log('EL pokemon es correcto')
    else{
      const entranceArray = [...entrance]
      const correctAnswerArray = [...correctAnswer]
      const objectEvaluation = entranceArray.map((letter, index)=>{
        if(correctAnswerArray[index] == letter){
          return {letra: letter, value: 1}
        }else if(correctAnswerArray.includes(letter)){
          delete(correctAnswerArray[correctAnswerArray.indexOf(letter)])
          return {letra: letter, value: 2}
        }else return {letra: letter, value: 0}
      })

    }
  }else{
    console.log('no incluye')
    //llamada a un modal de notificaciones
  }
}