# Project Title: COA TAKE-HOME CHALLENGE

## Table of Contents

1. [Overview](#overview)
2. [UI Challenge: Interactive Photo Gallery](#ui-challenge-interactive-photo-gallery)
3. [Coding Challenge 1: Array Manipulation](#coding-challenge-1-array-manipulation)
4. [Coding Challenge 2: String Transformation](#coding-challenge-2-string-transformation)
5. [Installation](#installation)

## Overview

This repository contains solutions to three main challenges:

1. An interactive photo gallery based on provided Figma designs.
2. An array manipulation coding challenge.
3. A string transformation coding challenge.

## UI Challenge: Interactive Photo Gallery

### Description

- Implement an interactive photo gallery based on the provided Figma designs.
- The gallery should be responsive and work seamlessly on both desktop and mobile devices.
- Implement features such as image thumbnail navigation, full-size image viewing, and any interactions specified in the designs.

### Features

- **Responsive Design**: Adapts to different screen sizes.
- **Thumbnail Navigation**: Navigate through images using thumbnails.
- **Full-Size Image Viewing**: Click on a thumbnail to view the full-size image.
- **Interactive Elements**: Includes any specific interactions provided in the designs.

## Coding Challenge 1: Array Manipulation

### Problem Statement

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return `true` if such a subarray exists, otherwise return `false`.

### Example

- **Input**: `arr = [4, 2, 7, 1, 9, 5], target = 17`
- **Output**: `true`
- **Explanation**: The subarray `[7, 1, 9]` sums up to 17, which is equal to the target.

### Constraints

- The array will contain between 1 and 100,000 elements.
- The elements in the array and the target sum will be between -1,000,000,000 and 1,000,000,000.

### Complexity

- **Time Complexity**: O(n), where n is the length of the array.
- **Space Complexity**: O(1).

## Coding Challenge 2: String Transformation

### Problem Statement

Given a string, transform it based on the following rules:

- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

### Examples

- **Input**: `"Hamburger"`
- **Output**: `"regrubmaH"`
- **Explanation**: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in `"regrubmaH"`.

- **Input**: `"Pizza"`
- **Output**: `"80 105 122 122 97"`
- **Explanation**: The length of the string is 5, which is divisible by 5 but not by 3 or 15. Therefore, each character is replaced by its ASCII code, resulting in `"80 105 122 122 97"`.

- **Input**: `"Chocolate Chip Cookie"`
- **Output**: `"eikooCpihCetalocohC"`
- **Explanation**: The length of the string is 21, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in `"eikooCpihCetalocohC"`.

### Constraints

- The string will only contain alphanumeric characters and spaces.
- The length of the string will be between 1 and 1000.

### Complexity

- **Time Complexity**: O(n), where n is the length of the string.
- **Space Complexity**: O(n), where n is the length of the string.

## Installation

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed.

### Steps

1. Clone the repository:

   git clone <https://github.com/denyse-umwari/coa-take-home-challenge.git>

2. Navigate to the project directory:

    cd coa-take-home-challenge

## Usage

### Running the UI Challenge

3. Open HTML files in your preferred web browser,(Eg: Chrome, Edge, Firefox)

### Running the Coding Challenges

1. Navigate to the coding challenges directory:

   cd CHALLENGES

2. Run the array manipulation challenge:

   node arrayMap.js

3. Run the string transformation challenge:

   node stringTransform.js

And that's it! Please remember to star ⭐⭐⭐⭐⭐ the repo if it was helpful!! Hope it goes well!!
