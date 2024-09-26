# String Calculator

This project implements a simple string calculator that takes a string of comma-separated numbers (and supports additional features) and returns their sum. The calculator can handle various input formats, including custom delimiters and new line-separated numbers.

## Features

1. **Basic Addition**: 
   - Input: A string of comma-separated numbers.
   - Output: An integer, representing the sum of the numbers.

   **Examples**:
   - Input: `""` → Output: `0`
   - Input: `"1"` → Output: `1`
   - Input: `"1,5"` → Output: `6`

2. **Multiple Numbers**: 
   - The `add` method can handle any amount of numbers.

3. **New Line Support**: 
   - The `add` method can handle new lines between numbers. For example:
     - Input: `"1\n2,3"` → Output: `6`

4. **Custom Delimiters**: 
   - To change the delimiter, the beginning of the string will contain a separate line that looks like this: 
     - `"//[delimiter]\n[numbers…]"`
   - Example: `"//;\n1;2"` where the delimiter is `";"` should return `3`.

5. **Negative Number Handling**: 
   - Calling `add` with a negative number will throw an exception with the message: 
     - `"negative numbers not allowed <negative_number>"`
   - If there are multiple negative numbers, they will all be included in the exception message, separated by commas.

### Installation
To get started with this project, follow these steps:

#### Clone the Repository
````
git clone https://github.com/Riya267/tdd-string-calculator-assignment.git

cd string-calculator
````

#### Install Dependencies

After cloning the repository, install the necessary dependencies:

````
npm install
````

#### Start the Development Server

You can now start the development server:

````
npm start
````

The app should now be running on http://localhost:3000.