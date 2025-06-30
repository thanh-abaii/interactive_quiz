import React, { useState } from 'react';
import { Welcome } from './components/Welcome';
import { Quiz } from './components/Quiz';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleBackToWelcome = () => {
    setShowQuiz(false);
  };

  return (
    <div className="min-h-screen">
      {showQuiz ? (
        <Quiz key={Date.now()} />
      ) : (
        <Welcome onStartQuiz={handleStartQuiz} />
      )}
    </div>
  );
}

export default App;