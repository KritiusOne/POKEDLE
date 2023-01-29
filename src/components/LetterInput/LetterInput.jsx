import "./letterinput.css"

export function LetterInput({ namePkm, numberContainer }) {
  console.log(namePkm)
  const arrName = [...namePkm]
  return (
    <div className={`game__letter-container`}>
      {arrName &&
        arrName.map((letter, index) => (
          <div
            className={`LetterInput ${numberContainer}`}
            key={index + letter}
          ></div>
        ))}
    </div>
  )
}
