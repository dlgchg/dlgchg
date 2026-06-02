'use client';

import { Question, QuestionOption } from '@/lib/questions';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedOption: string | null;
  onSelect: (option: QuestionOption) => void;
}

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-lg mx-auto animate-fadeIn">
      {/* 题号 */}
      <div className="text-center mb-6">
        <span className="text-sm text-indigo-300/70 tracking-widest uppercase">
          Question {questionIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* 题目 */}
      <h2 className="text-xl md:text-2xl font-semibold text-center text-white mb-8 leading-relaxed">
        {question.text}
      </h2>

      {/* 选项 */}
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.label;
          return (
            <button
              key={option.label}
              onClick={() => onSelect(option)}
              className={`
                w-full text-left px-5 py-4 rounded-xl border transition-all duration-300
                ${
                  isSelected
                    ? 'bg-indigo-600/30 border-indigo-400/60 shadow-lg shadow-indigo-500/20 scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.01] hover:shadow-md hover:shadow-indigo-500/10'
                }
              `}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`
                    flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold
                    ${
                      isSelected
                        ? 'bg-indigo-400 text-indigo-950'
                        : 'bg-white/10 text-white/70'
                    }
                  `}
                >
                  {option.label}
                </span>
                <span
                  className={`text-base leading-relaxed ${
                    isSelected ? 'text-white' : 'text-white/80'
                  }`}
                >
                  {option.text}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
