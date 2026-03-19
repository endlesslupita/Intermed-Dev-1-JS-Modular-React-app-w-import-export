# Building a Modular React Application with Import/Export

## Objective
Gain hands-on experience with component modularity in React by creating a small application that utilizes both default and named imports/exports.

## Assignment Overview
You will create a React application consisting of multiple components: a main `App` component, a `Header` component, a `Footer` component, and two content components called `ContentA` and `ContentB`. You will practice using both default and named exports/imports to manage these components.

## Prerequisites
- Basic knowledge of React and JavaScript ES6 syntax
- Node.js and npm (Node Package Manager) installed on your machine
- A code editor (like VSCode) and familiarity with terminal or command prompt commands

## Setup Instructions

1. Create a new React application using Create React App:
   ```bash
   npx create-react-app react-modularity-assignment
   ```
2. Navigate into your project directory:
   ```bash
   cd react-modularity-assignment
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Assignment Tasks

### Task 1: Create Component Files
- Create a new folder in `src` named `components`
- Inside `components`, create five files:
  - `Header.js`
  - `Footer.js`
  - `ContentA.js`
  - `ContentB.js`
  - `SharedComponents.js`

### Task 2: Implement Components
- **Header and Footer:** Implement simple components in their respective files. Export them using **default export**.
- **Content Components:** Implement `ContentA` and `ContentB` with some dummy content. Export them using **named export**.

### Task 3: Use Shared Components
- In `SharedComponents.js`, create and export a `Button` component using **named export**.

### Task 4: Assemble the App
- In `App.js`:
  - Import `Header` and `Footer` using **default import** syntax
  - Import `ContentA` and `ContentB` using **named import** syntax
  - Import the `Button` component from `SharedComponents.js` and use it inside both `ContentA` and `ContentB`

### Task 5: Styling *(Optional)*
Add basic styling to your components to improve the UI.

## Assignment Submission

### GitHub Repository
- Push your program to a new **public** GitHub repository
- Repository must include all source code files and this `README.md`

### Video Demonstration
Provide a video (YouTube — public or unlisted) demonstrating:
- The program's functionality
- Test cases: at least **3 normal cases** and at least **3 edge cases**

### Submission
- Submit the link to your GitHub repository
- Include the link to your YouTube video demonstration
