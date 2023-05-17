export function keys(region){
  const KEY_NATIONAL__POKEDEX = "https://pokeapi.co/api/v2/pokedex/1/"
  const KEY_REGIONAL__POKEDEX = `https://pokeapi.co/api/v2/pokedex/${region}`
  console.log(region)
  return region == 1 ? KEY_NATIONAL__POKEDEX : KEY_REGIONAL__POKEDEX
}