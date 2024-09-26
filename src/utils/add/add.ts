export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = /[,\n,\\n]/;
  const customDelimiter = numbers.match(/^\/\/(.*?)(?=[\\n,\n])/);
  if (customDelimiter) {
    const delimiterString = customDelimiter[0].slice(2, -1);
    delimiter = new RegExp(
      delimiterString.split("][").map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|")
    );
    numbers = numbers.slice(customDelimiter[0].length);
  }

  const numArray = numbers.split(delimiter).map(Number);
  const negatives = numArray.filter(n => n < 0);

  if (negatives.length) throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);

  return numArray.reduce((sum, n) => sum + (n >= 0 ? n : 0), 0);
}
