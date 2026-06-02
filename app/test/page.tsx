'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { questions, QuestionOption } from '@/lib/questions';
import { calculateResult, cacheResult } from '@/lib/calculator';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';

export default function TestPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = currentIndex < questions.length ? questions[currentIndex] : null;

  // 如果题目数据异常，重定向回首页
  if (!currentQuestion) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-white/50 mb-4">题目加载异常</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-500 transition-colors"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  const handleSelect = useCallback(
    (option: QuestionOption) => {
      if (isTransitioning) return;
      setSelectedOption(option.label);

      // 延迟后进入下一题
      setTimeout(() => {
        const newAnswers = [...answers, option];
        setAnswers(newAnswers);

        if (currentIndex < totalQuestions - 1) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            setSelectedOption(null);
            setIsTransitioning(false);
          }, 300);
        } else {
          // 所有题目回答完毕，计算结果
          const result = calculateResult(newAnswers);
          cacheResult(result);
          router.push('/result');
        }
      }, 400);
    },
    [answers, currentIndex, totalQuestions, isTransitioning, router]
  );

  return (
    <div className="flex-1 flex flex-col px-5 py-8 min-h-screen">
      {/* 进度条 */}
      <ProgressBar current={currentIndex} total={totalQuestions} />

      {/* 题目卡片 */}
      <div className="flex-1 flex items-center justify-center">
        <QuestionCard
          question={currentQuestion}
          questionIndex={currentIndex}
          totalQuestions={totalQuestions}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
      </div>

      {/* 底部提示 */}
      <div className="text-center py-4">
        <p className="text-white/20 text-xs">
          选择最符合你直觉的答案，不要过度思考
        </p>
      </div>
    </div>
  );
}
