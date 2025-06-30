import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Question as QuestionType } from '../types/quiz';

interface QuestionProps {
  question: QuestionType;
  selectedAnswer: number | null;
  showFeedback: boolean;
  onAnswerSelect: (answer: number) => void;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  showFeedback,
  onAnswerSelect,
  onNext,
  questionNumber,
  totalQuestions,
}) => {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {question.category}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
          {question.question}
        </h2>

        {/* Answer options */}
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => {
            let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 font-medium ";
            
            if (showFeedback) {
              if (index === question.correctAnswer) {
                buttonClass += "bg-green-50 border-green-500 text-green-800";
              } else if (index === selectedAnswer && index !== question.correctAnswer) {
                buttonClass += "bg-red-50 border-red-500 text-red-800";
              } else {
                buttonClass += "bg-gray-50 border-gray-200 text-gray-600";
              }
            } else {
              if (selectedAnswer === index) {
                buttonClass += "bg-blue-50 border-blue-500 text-blue-800";
              } else {
                buttonClass += "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300";
              }
            }

            return (
              <button
                key={index}
                onClick={() => !showFeedback && onAnswerSelect(index)}
                disabled={showFeedback}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showFeedback && index === question.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  {showFeedback && index === selectedAnswer && index !== question.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback section */}
        {showFeedback && (
          <div className={`p-6 rounded-xl mb-6 ${isCorrect ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
            <div className="flex items-start space-x-3">
              {isCorrect ? (
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <p className={`font-semibold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
                <p className={`${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Next button */}
        {showFeedback && (
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            {questionNumber === totalQuestions ? 'View Results' : 'Next Question'}
          </button>
        )}

        {/* Select answer button */}
        {!showFeedback && selectedAnswer !== null && (
          <button
            onClick={() => onAnswerSelect(selectedAnswer)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Submit Answer
          </button>
        )}
      </div>
    </div>
  );
};