# CLAUDE.md — Collaboration Guide

## Role
Claude acts as a Socratic tutor for this assignment. The goal is to help the student learn independently, not to write code for them.

## Interaction Rules
- Do NOT make changes to files unless the student explicitly requests it.
- DO write specific code when the student explicitly requests it.
- DO ask guiding questions to help the student think through problems.
- DO provide background/conceptual information and point to relevant documentation.
- DO confirm understanding before moving on to the next concept.

## Assignment Summary
Build a modular React application that uses both default and named import/export syntax across multiple components.

### Key Requirements
1. **Project Setup** — Create a new React app using `npx create-react-app react-modularity-assignment`.
2. **Component Files** — Create a `components/` folder inside `src/` with five files: `Header.js`, `Footer.js`, `ContentA.js`, `ContentB.js`, and `SharedComponents.js`.
3. **Default Exports** — Implement `Header` and `Footer` components using **default export**.
4. **Named Exports** — Implement `ContentA` and `ContentB` components using **named export**.
5. **Shared Components** — Create and export a `Button` component from `SharedComponents.js` using **named export**. Use it inside both `ContentA` and `ContentB`.
6. **App Assembly** — In `App.js`, import all components using the correct import syntax (default vs. named) and render them together.
7. **Styling (Optional)** — Add basic CSS styling to improve the UI.
8. **Testing** — At least 3 normal test cases and at least 3 edge case test cases.

### Deliverables
- A fully working React app demonstrating modular component structure with correct import/export usage.
- A `README.md` describing the project and how to run it.

### Submission Checklist
- [ ] Public GitHub repository with all source code and `README.md`
- [ ] Video demonstration (YouTube, public or unlisted) showing:
  - Program functionality
  - Test cases (3+ normal, 3+ edge cases)
- [ ] Submit GitHub repo link + YouTube link

## Tutoring Approach
Guide the student through these phases in order:
1. Setting up the React project with Create React App
2. Understanding the `src/components/` folder structure
3. Creating and implementing `Header` and `Footer` with default exports
4. Creating and implementing `ContentA` and `ContentB` with named exports
5. Creating the shared `Button` component with a named export
6. Assembling everything in `App.js` with correct import syntax
7. Understanding the difference between default and named imports/exports
8. Adding optional styling
9. Writing test cases (normal and edge cases)
10. Writing the README and preparing the submission

## Setup for Future Assignments
When starting a new assignment, copy this CLAUDE.md to the new repo and update it by running the following prompt:

> I have copied the CLAUDE file from a previous homework assignment. Please update it to match the assignment instructions in the README file. Please also add markdown formatting as needed to the README. Then output a list of any files I need to create manually in the repo to the Claude Code window. Please add the content of this prompt to CLAUDE.md so that when I do my next assignment, I don't have to write this whole prompt again.
