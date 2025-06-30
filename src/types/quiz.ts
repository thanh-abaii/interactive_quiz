export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  showFeedback: boolean;
  score: number;
  isCompleted: boolean;
  answeredQuestions: boolean[];
}

export interface QuizStats {
  score: number;
  total: number;
  percentage: number;
}