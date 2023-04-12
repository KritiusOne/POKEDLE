export function isPresent(letra, pos, solution) {
  if (solution.includes(letra)) {
    return solution[pos] == letra ? "correct" : "present"
  } else return "none"
}
