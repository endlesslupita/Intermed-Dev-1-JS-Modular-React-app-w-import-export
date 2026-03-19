# The Lean Startup Approach: A Modular React Application

## About This Project
This React application introduces the **Business Model Canvas**, a strategic tool used as an alternative to writing a traditional business plan. It demonstrates modular component architecture using both default and named imports/exports.

The app includes:
- A header introducing the Lean Startup Approach
- The Business Model Canvas diagram
- A "Learn More" button linking to a YouTube overview video
- Three recommended books with cover images and links to purchase at independent bookstores via Bookshop.org
- A footer encouraging support for local bookstores and libraries

## How to Run the App

1. Clone this repository
2. Navigate into the project folder:
   ```bash
   cd react-modularity-assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser to `http://localhost:3000`

## How to Run the Tests

```bash
cd react-modularity-assignment
npm test
```

## Test Cases

### Normal Tests
1. **Header renders correctly** — verifies "The Lean Startup Approach:" appears on the page
2. **Business Model Generation button** — verifies the link goes to the correct Bookshop.org page
3. **Value Proposition Design button** — verifies the link goes to the correct Bookshop.org page
4. **Testing Business Ideas button** — verifies the link goes to the correct Bookshop.org page

### Edge Cases
5. **Button with no `href`** — verifies that a button without a destination is not accessible as a link
6. **Button with empty string `href`** — verifies that an empty `href` attribute is present but empty
7. **Button with no label** — verifies that a button with no label renders no accessible link

## Video Demo Outline
1. Show the GitHub repository and the component file structure in `src/components/`
2. Point out `Header.js` and `Footer.js` using default export
3. Point out `ContentA.js` and `ContentB.js` using named export
4. Point out `SharedComponents.js` exporting the `Button` component
5. Show `App.js` and explain the default vs. named import syntax
6. Open the app in the browser at `http://localhost:3000`
7. Show the Business Model Canvas image and the Learn More button — click it
8. Show the three book covers and click each Bookshop.org button
9. Run `npm test` in the terminal
10. Walk through each of the 4 normal tests and explain what they verify
11. Walk through each of the 3 edge case tests and explain what they verify

---

# Assignment Instructions

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
