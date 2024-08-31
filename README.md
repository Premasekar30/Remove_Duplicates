# Remove_Duplicates
# Remove Duplicates from an Array

## Overview
This project demonstrates how to remove duplicates from an array in JavaScript and return the unique values in O(n) complexity. The input array is processed using a `Set` to ensure all values are unique, and the result is displayed on a simple web page.

## Files

- `index.html`: The main HTML file that structures the web page.
- `styles.css`: The CSS file for styling the web page.
- `script.js`: The JavaScript file containing the logic to remove duplicates from the array.

## How It Works
- The function `removeDuplicates` takes an array as input and creates a `Set` from it, which automatically removes any duplicate values.
- The unique values are then returned as a new array using the spread operator (`...`).
- The result is displayed on the web page.

## Usage
1. Open `index.html` in a web browser.
2. The page will display the unique values from the input array `[1, 2, 3, 4, 5, 1, 6, 2, 7, 1, 3]`.

## Complexity
- The time complexity of removing duplicates is O(n), where n is the number of elements in the array. This efficiency is achieved by using a `Set`, which has O(1) average time complexity for insertion.

## Technologies Used
- HTML
- CSS
- JavaScript
