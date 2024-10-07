function parseNumbers(numbers: string, baseDelimter: RegExp, customDelimter: RegExp): { delimiter: RegExp, numberString: string } {
  let delimiter = baseDelimter

  const customDelimiterMatch = numbers.match(customDelimter)
  if (customDelimiterMatch) {
    const delimiterString = customDelimiterMatch[1]
    delimiter = new RegExp(
      delimiterString.split("][").map(d => escapeSpecialChars(d)).join("|")
    )
    numbers = numbers.slice(customDelimiterMatch[0].length)
  }

  return { delimiter, numberString: numbers }
}

function escapeSpecialChars(delimiter: string): string {
  return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function convertToNumbers(numberString: string, delimiter: RegExp): number[] {
  return numberString.split(delimiter).map(Number)
}

function validateNegatives(numbers: number[]) {
  const negatives = numbers.filter(n => n < 0)
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`)
  }
}

function validateCube(numArray: number[]) {
   const hashMap = new Map()
   numArray.forEach((num: number) => {
      const numFound = hashMap.get(num)
      if(numFound) {
         hashMap.set(num, numFound + 1)
      } else {
        hashMap.set(num, 1)
      }
   })

   let result = 0

   hashMap.forEach((value, key) => {
     if(value >= 3) {
       result += Math.pow(key, 3)
      } else {
        result += value*key
      }
   })

  return result
}

function sumNumbers(numbers: number[]): number {
  return numbers.reduce((sum, n) => sum + (n >= 0 ? n : 0), 0)
}

const CUSTOM_DELIMITER_REGEX = /^\/\/(.*?)(\\n|\n)/
const BASE_DELIMTER_REGEX = /[,\n,\\n]/

export function add(numbers: string): number {
  if (!numbers) return 0
  
  const { delimiter, numberString } = parseNumbers(numbers, BASE_DELIMTER_REGEX, CUSTOM_DELIMITER_REGEX)
  
  const numArray = convertToNumbers(numberString, delimiter)
  
  validateNegatives(numArray)
  
  const cubeResult = validateCube(numArray)

  if(cubeResult) {
    return cubeResult
  }

  return sumNumbers(numArray)
}