import React from 'react';
import { Trophy, RotateCcw, Star } from 'lucide-react';
import { QuizStats } from '../types/quiz';

interface ResultsProps {
  stats: QuizStats;
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ stats, onRestart }) => {
  const getScoreMessage = (percentage: number) => {
    if (percentage === 100) {
      return {
        title: "Perfect Score! 🎉",
        message: "Outstanding! You have excellent knowledge of web development fundamentals!",
        icon: <Trophy className="w-16 h-16 text-yellow-500" />,
        bgColor: "from-yellow-400 to-orange-500"
      };
    } else if (percentage >= 67) {
      return {
        title: "Great Job! 🌟",
        message: "Well done! You have a solid understanding of web development concepts.",
        icon: <Star className="w-16 h-16 text-blue-500" />,
        bgColor: "from-blue-400 to-purple-500"
      };
    } else if (percentage >= 33) {
      return {
        title: "Good Effort! 👍",
        message: "You're on the right track! Keep learning and practicing to improve your skills.",
        icon: <Star className="w-16 h-16 text-green-500" />,
        bgColor: "from-green-400 to-blue-500"
      };
    } else {
      return {
        title: "Keep Learning! 📚",
        message: "Don't worry! Everyone starts somewhere. Keep studying and you'll improve quickly!",
        icon: <Star className="w-16 h-16 text-purple-500" />,
        bgColor: "from-purple-400 to-pink-500"
      };
    }
  };

  const scoreInfo = getScoreMessage(stats.percentage);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
        {/* Score icon */}
        <div className="mb-6">
          {scoreInfo.icon}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {scoreInfo.title}
        </h1>

        {/* Score display */}
        <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r ${scoreInfo.bgColor} mb-6`}>
          <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">
                {stats.score}/{stats.total}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {stats.percentage}%
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {scoreInfo.message}
        </p>

        {/* Score breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quiz Summary</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">{stats.score}</div>
              <div className="text-sm text-gray-600">Correct</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">{stats.total - stats.score}</div>
              <div className="text-sm text-gray-600">Incorrect</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-4">
          <button
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Take Quiz Again</span>
          </button>
          
          <p className="text-sm text-gray-500">
            Questions are randomized each time you retake the quiz!
          </p>
        </div>
      </div>
    </div>
  );
};