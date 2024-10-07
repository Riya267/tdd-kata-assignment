import '@testing-library/jest-dom';
import { add } from "./add";

describe("add function", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  
  test("should return the sum of comma-separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  test("should handle newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support custom delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  test("should throw an error when negative numbers are present", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  test("should throw an error for multiple negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "Negative numbers not allowed: -2, -4"
    );
  });

  test("should add cube of the number if its appearing more than 3 times", () => {
    expect(add("1,2,2,2,3,3")).toBe(15);
    expect(add("//;\n1;2;2;2;3;3")).toBe(15);
  });
});