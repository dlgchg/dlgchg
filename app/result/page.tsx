'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCachedResult, clearCachedResult, TestResult } from '@/lib/calculator';
import ResultCard from '@/components/ResultCard';

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<TestResult | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const cached = getCachedResult();
    if (cached) {
      setResult(cached);
    }
  }, []);

  const handleRetest = () => {
    clearCachedResult();
    router.push('/');
  };

  const handleHome = () => {
    router.push('/');
  };

  if (!mounted) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-white/30 text-sm">加载中...</div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
        <div className="text-5xl mb-2 opacity-50">✧</div>
        <h2 className="text-xl text-white/60 text-center">暂无测试结果</h2>
        <p className="text-white/30 text-sm text-center">
          请先完成星座灵格测试
        </p>
        <button
          onClick={() => router.push('/')}
          className="px-8 py-3 rounded-xl font-medium text-white
            bg-gradient-to-r from-indigo-600 to-purple-600
            hover:from-indigo-500 hover:to-purple-500
            transition-all duration-300 shadow-lg shadow-purple-500/20"
        >
          前往测试
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center py-8 px-4">
      {/* 顶部标题 */}
      <div className="text-center mb-6 animate-fadeIn">
        <h1 className="text-xl font-bold text-white/90 mb-1">你的灵格结果</h1>
        <p className="text-white/40 text-sm">
          集中度 {result.concentration}% · 区分度 {result.differentiation}
        </p>
      </div>

      {/* 结果卡片 */}
      <div className="animate-slideInUp">
        <ResultCard result={result} />
      </div>

      {/* 底部按钮 */}
      <div className="flex flex-col items-center gap-3 w-full max-w-[375px] mt-6">
        <button
          onClick={handleRetest}
          className="w-full py-3 rounded-xl font-medium text-white/70
            bg-white/5 border border-white/10
            hover:bg-white/10 hover:text-white
            transition-all duration-300"
        >
          重新测试
        </button>
        <button
          onClick={handleHome}
          className="w-full py-3 rounded-xl font-medium text-white/40
            hover:text-white/60 transition-all duration-300"
        >
          返回首页
        </button>
      </div>
    </div>
  );
}
