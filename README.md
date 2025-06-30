# Interactive Quiz App

This is a simple interactive quiz application built with React, TypeScript, and Vite. It presents users with a series of multiple-choice questions on web development topics and provides immediate feedback on their answers.

## Features

*   **Randomized Questions:** Each quiz session pulls a random set of questions from a predefined pool.
*   **Immediate Feedback:** Users receive instant feedback after answering each question.
*   **Score Tracking:** The app keeps track of the user's score throughout the quiz.
*   **Final Results:** A summary of the user's performance is displayed at the end of the quiz.
*   **Responsive Design:** The application is styled with Tailwind CSS for a clean and responsive layout.

## Tech Stack

*   **Framework:** [React](https://reactjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 18 or higher)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/interactive-quiz-app.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd interactive-quiz-app
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

This will open the application in your default browser at `http://localhost:5173`.

## Project Structure

```
interactive-quiz-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Question.tsx
│   │   ├── Quiz.tsx
│   │   ├── Results.tsx
│   │   └── Welcome.tsx
│   ├── data/
│   │   └── questions.ts
│   ├── types/
│   │   └── quiz.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
└── README.md
```

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run lint`: Lints the codebase for errors.
*   `npm run preview`: Previews the production build locally.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.
