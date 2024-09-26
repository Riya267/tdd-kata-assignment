export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/;
    const customDelimiter = numbers.match(/^\/\/(.+)\n/);
  
    if (customDelimiter) {
      delimiter = new RegExp(customDelimiter[1]);
      numbers = numbers.split("\n").slice(1).join("");
    }
  
    const numArray = numbers.split(delimiter);
    const negatives: number[] = [];
    let sum = 0;
  
    for (const num of numArray) {
      const intNum = parseInt(num);
      if (isNaN(intNum)) continue;
  
      if (intNum < 0) {
        negatives.push(intNum);
      } else {
        sum += intNum;
      }
    }
  
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return sum;
  }
  