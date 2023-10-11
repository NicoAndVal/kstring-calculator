export function sumNumber(expresion: string | null) {
  if (!expresion) {
    return 0
  }

  if(expresion.startsWith('//')){
    const separator = expresion.slice('//'.length, expresion.lastIndexOf('/'))
    const tokens = expresion.slice(expresion.lastIndexOf('/') + 1).split(separator)
    return tokens.map(getNumber).reduce(sum)
  }

  const numbers = expresion.split(',')
  return numbers
    .map(num => getNumber(num))
    .reduce(sum)


}

const sum = (previusNumber: number, currentNumber: number): number => previusNumber + currentNumber

function getNumber(token: string) {
  const tokenParsed = Number(token)
  return isNaN(tokenParsed) ? 0 : tokenParsed
}