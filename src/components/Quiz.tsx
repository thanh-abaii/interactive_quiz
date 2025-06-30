import React, { useState, useEffect } from 'react';
import { Question } from './Question';
import { Results } from './Results';
import { Question as QuestionType, QuizState, QuizStats } from '../types/quiz';
import { questionPool } from '../data/questions';

const QUESTIONS_PER_QUIZ = 3;

export const Quiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentQuestionIndex: 0,
    selectedAnswer: null,
    showFeedback: false,
    score: 0,
    isCompleted: false,
    answeredQuestions: [],
  });

  // Initialize quiz with random questions
  const initializeQuiz = () => {
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, QUESTIONS_PER_QUIZ);
    
    setQuizState({
      questions: selectedQuestions,
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showFeedback: false,
      score: 0,
      isCompleted: false,
      answeredQuestions: new Array(QUESTIONS_PER_QUIZ).fill(false),
    });
  };

  // Initialize quiz on component mount
  useEffect(() => {
    initializeQuiz();
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState.showFeedback) return;

    if (quizState.selectedAnswer === null) {
      // First time selecting an answer
      setQuizState(prev => ({
        ...prev,
        selectedAnswer: answerIndex,
      }));
    } else if (quizState.selectedAnswer === answerIndex) {
      // Confirming the selected answer
      const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
      const isCorrect = answerIndex === currentQuestion.correctAnswer;
      
      setQuizState(prev => ({
        ...prev,
        showFeedback: true,
        score: isCorrect ? prev.score + 1 : prev.score,
        answeredQuestions: prev.answeredQuestions.map((answered, index) => 
          index === prev.currentQuestionIndex ? true : answered
        ),
      }));
    } else {
      // Changing the selected answer
      setQuizState(prev => ({
        ...prev,
        selectedAnswer: answerIndex,
      }));
    }
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      // Move to next question
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showFeedback: false,
      }));
    } else {
      // Quiz completed
      setQuizState(prev => ({
        ...prev,
        isCompleted: true,
      }));
    }
  };

  const handleRestart = () => {
    initializeQuiz();
  };

  const getQuizStats = (): QuizStats => ({
    score: quizState.score,
    total: quizState.questions.length,
    percentage: Math.round((quizState.score / quizState.questions.length) * 100),
  });

  if (quizState.questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (quizState.isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <Results stats={getQuizStats()} onRestart={handleRestart} />
      </div>
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Question
        question={currentQuestion}
        selectedAnswer={quizState.selectedAnswer}
        showFeedback={quizState.showFeedback}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNext}
        questionNumber={quizState.currentQuestionIndex + 1}
        totalQuestions={quizState.questions.length}
      />
    </div>
  );
};