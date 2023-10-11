import { sumNumber } from './calculator';



describe('The string calculator', () => {
    it('does not increment the total in case is null or empty expresion', () =>{
      expect(sumNumber(null)).toBe(0)
      expect(sumNumber("0")).toBe(0)
    })
    it('return number in string to number type', () =>{
      expect(sumNumber('1')).toBe(1)
    })
    it('sum number separated by , in case all to number type',  () =>{
      expect(sumNumber('1,2')).toBe(3)
      expect(sumNumber('1,2,3,4')).toBe(10)
    })
    it('in case not a number not acumulate', () =>{
      expect(sumNumber('a')).toBe(0)
      expect(sumNumber('a,1')).toBe(1)
      expect(sumNumber('a,1,2')).toBe(3)
    })
    it('accumulate all number separated by custom separetor', () =>{
      expect(sumNumber('//%/3%2')).toBe(5)
      expect(sumNumber('//#/3,2')).toBe(0)
      expect(sumNumber('//%/1%2%3')).toBe(6)
    })
})