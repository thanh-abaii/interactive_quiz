import React from 'react';
import { Code, Play, Trophy, Shuffle } from 'lucide-react';

interface WelcomeProps {
  onStartQuiz: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
          {/* Hero icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Code className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Web Development Quiz
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Test your knowledge of HTML, CSS, and JavaScript fundamentals
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-4">
              <Shuffle className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Random Questions</h3>
              <p className="text-sm text-gray-600 text-center">
                3 questions randomly selected from our pool of 15+ questions
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Trophy className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Instant Feedback</h3>
              <p className="text-sm text-gray-600 text-center">
                Get explanations for every answer to help you learn
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Code className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Beginner Friendly</h3>
              <p className="text-sm text-gray-600 text-center">
                Perfect for those starting their web development journey
              </p>
            </div>
          </div>

          {/* Quiz info */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-800 mb-3">What to Expect:</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center justify-center space-x-2">
                <span>📋</span>
                <span>3 multiple choice questions</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>⏱️</span>
                <span>Take your time - no time limit</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>🔄</span>
                <span>Retake as many times as you want</span>
              </div>
            </div>
          </div>

          {/* Start button */}
          <button
            onClick={onStartQuiz}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
          >
            <Play className="w-5 h-5" />
            <span>Start Quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
};