# React Native useRef Hook Returns Null on Initial Access

This repository demonstrates a common issue encountered when using the `useRef` hook in React Native: accessing its current value immediately after the component renders results in `null`. This is because the ref's value is populated after the component mounts.

The `useRefNullBug.js` file showcases the problem. The `useRefNullSolution.js` file provides a solution using useEffect to access the ref's value after the component mounts.

## How to reproduce the bug
1. Clone this repository.
2. Run `npm install`.
3. Run the buggy code and observe the console error.

## How to fix the bug
Implement the solution shown in `useRefNullSolution.js`.  This uses useEffect to ensure the ref value is accessed after the component mounts.