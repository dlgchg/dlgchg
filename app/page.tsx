'use client';

import SpiritIcon from '@/components/SpiritIcon';
import { clearCachedResult, getCachedResult, TestResult } from '@/lib/calculator';
import { spiritColors } from '@/lib/spirits';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [cachedResult, setCachedResult] = useState<TestResult | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const cached = getCachedResult();
    if (cached) {
      setCachedResult(cached);
    }
  }, []);

  const handleStartTest = () => {
    clearCachedResult();
    router.push('/test');
  };

  const handleViewResult = () => {
    router.push('/result');
  };

  if (!mounted) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-white/30 text-sm">加载中...</div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
      {/* 主标题区域 */}
      <div className="text-center mb-10 animate-fadeIn">
        {/* 装饰符号 */}
        <div className="text-4xl mb-4 animate-float" style={{ animation: 'float 4s ease-in-out infinite' }}>
          ✨
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          星座灵格测试
        </h1>

        <p className="text-white/50 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
          探索你的灵魂星座，发现守护星灵与暗面星灵，
          <br />
          了解你的灵格阶位与元素属性
        </p>
      </div>

      {/* 星灵符号展示 */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        {(['太阳灵', '月亮灵', '战神灵', '爱神灵', '智神灵', '福神灵', '律神灵', '自由灵', '梦神灵', '轮回灵', '命运灵'] as const).map((name) => (
          <span
            key={name}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            title={name}
          >
            <SpiritIcon spirit={name} size={28} color={spiritColors[name]} />
          </span>
        ))}
      </div>

      {/* 按钮区域 */}
      <div className="flex flex-col items-center gap-3 w-full max-w-xs animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <button
          onClick={handleStartTest}
          className="w-full py-4 rounded-xl font-medium text-white text-lg
            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
            hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
            transition-all duration-300 shadow-lg shadow-purple-500/20
            hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]
            active:scale-[0.98]"
        >
          {cachedResult ? '重新测试' : '开始测试'}
        </button>

        {cachedResult && (
          <button
            onClick={handleViewResult}
            className="w-full py-3.5 rounded-xl font-medium text-white/80
              bg-white/5 border border-white/10
              hover:bg-white/10 hover:text-white
              transition-all duration-300
              hover:scale-[1.01] active:scale-[0.98]"
          >
            {/* <span className="mr-2 flex items-center"> */}
            查看上次结果：<SpiritIcon spirit={cachedResult.guardianSpirit} size={20} color={spiritColors[cachedResult.guardianSpirit]} />{cachedResult.profile.title}
            {/* </span> */}
          </button>
        )}
      </div>

      {/* 底部信息 */}
      <div className="mt-12 text-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <p className="text-white/20 text-xs">
          18 道题 · 约 3 分钟 · 11 种星灵 · 66 种灵格
        </p>
      </div>
    </div>
  );
}
