# Beginner's Guide to this Portfolio Project

Welcome! This project is built using **React**, a popular JavaScript library for building user interfaces.

If you are new to React, this guide will help you understand how the code works.

## Project Structure

Here is a quick overview of the important folders:

- **`src/`**: This is where all the source code lives.
    - **`components/`**: Building blocks of the website (like buttons, navigation, specific sections).
    - **`pages/`**: The main views of the application (e.g., the Home page, the NotFound page).
    - **`hooks/`**: Custom logic that can be reused across different components (like the `use-toast` hook for notifications).
    - **`App.tsx`**: The main entry point where we define the application's routes.
    - **`main.tsx`**: The file that renders the React application into the HTML file.

## Key Concepts Used

### 1. Components
React is all about components. A component is a function that returns HTML-like code (called JSX).
Example:
```tsx
const Button = () => {
  return <button>Click me</button>;
}
```

### 2. Props
Props are like arguments to a function. They allow you to pass data from a parent component to a child component.

### 3. Hooks
Hooks allow you to "hook into" React features like state and lifecycle methods.
- **`useState`**: Allows a component to remember information (like if a modal is open or closed).
- **`useEffect`**: Lets you run code when something changes (like when the component first loads).

### 4. Routing
We use `react-router-dom` to handle navigation between pages without reloading the browser. You can see this set up in `App.tsx`.

## How to Make Changes

1.  **Change the content**: Go to `src/components/About.tsx` or `Hero.tsx` and change the text.
2.  **Change the styles**: This project uses **Tailwind CSS**, so you change styles by editing the `className` string.
    - Example: `className="text-red-500"` makes the text red.

Happy coding!
