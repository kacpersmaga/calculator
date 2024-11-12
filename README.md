# Calculator Project

## Overview

This is a simple, responsive calculator application built using **HTML**, **CSS**, and **JavaScript**. The calculator provides a user-friendly interface and supports basic arithmetic operations. It features smooth animations and a clean design, making it an ideal project for learning JavaScript event handling and DOM manipulation.

## Features

- **Basic Arithmetic Operations**: Supports addition, subtraction, multiplication, division, and remainder calculations.
- **Clear and Reset Functions**: Includes "AC" (All Clear) to reset the entire input and "C" to clear the last character.
- **Real-Time Display**: Updates the input and result display as you type.
- **Keyboard Support**: Allows input using both on-screen buttons and the keyboard.
- **Responsive Design**: Adapts to different screen sizes, providing a consistent experience across devices.
- **Interactive Animations**: Button hover effects and click animations for enhanced UX.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling and animations.
- **JavaScript**: Core logic and DOM manipulation.

## Project Structure

```
.
├── index.html     # Main HTML file
├── style.css      # CSS file for styling
└── script.js      # JavaScript file for calculator logic
```

## How to Use

1. **Launch the Calculator**:
   - Open `index.html` in your browser.
2. **Input Numbers and Operations**:
   - Click the number buttons or use your keyboard to enter numbers.
   - Click the operator buttons or use your keyboard for operations (`+`, `-`, `*`, `/`, `%`).
3. **Get the Result**:
   - Press `=` or the "Enter" key to evaluate the expression.
4. **Clear Input**:
   - Press "AC" to clear all input or "C" to delete the last character.

## JavaScript Logic

The calculator logic is implemented in a modular fashion with the following components:

1. **Basic Arithmetic Functions**:
   - `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`, `divide(a, b)`, and `remainder(a, b)` perform the core calculations.

2. **Operate Function**:
   - `operate(num1, num2, operator)` handles the evaluation of the current expression based on the selected operator.

3. **Input and Display Handling**:
   - `updateInputDisplay()` and `updateResultDisplay()` update the UI as users input data.
   - `handleButtonClick()` manages the logic for each button click event.

4. **Keyboard Support**:
   - `handleKeyPress()` captures keyboard inputs and maps them to the corresponding calculator functions.

## CSS Styling

The calculator is styled with a clean and minimalistic design using the **Roboto** font. It includes:

- **Hover Effects**: Smooth color transitions on hover.
- **Button Animations**: Click animations using keyframes.
- **Responsive Layout**: The design adjusts to different screen sizes.

## Screenshots

![image](https://github.com/user-attachments/assets/a111ac65-1c03-4849-a96d-b67bd28c1ec5)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kacpersmaga/calculator.git
   cd calculator
   ```

2. Open `index.html` in your browser to start using the calculator.

## Future Improvements

- Add support for **advanced mathematical functions** like square roots and exponentiation.
- Improve error handling for invalid inputs (e.g., division by zero).
- Enhance the responsive design for a better mobile experience.
- Include a **dark mode** option for better visibility in low-light environments.

## Author

Kacper Smaga
