'use client';

import { useRef, useState } from 'react';
import { TestResult } from '@/lib/calculator';
import { spiritColors, spiritGradients } from '@/lib/spirits';
import SpiritIcon from './SpiritIcon';
import ElementBar from './ElementBar';

interface ResultCardProps {
  result: TestResult;
}

export default function ResultCard({ result }: ResultCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);
  const [shareReady, setShareReady] = useState(false);

  const guardianColor = spiritColors[result.guardianSpirit];
  const guardianGradient = spiritGradients[result.guardianSpirit];

  const handleShare = async () => {
    if (!cardRef.current) return;
    setSharing(true);
    try {
      // 临时移除 oklab 颜色，html2canvas 不支持
      const el = cardRef.current;
      const allElements = el.querySelectorAll('*');
      const savedStyles: { el: Element; prop: string; val: string }[] = [];

      allElements.forEach((child) => {
        const computed = window.getComputedStyle(child);
        ['color', 'backgroundColor', 'borderColor', 'boxShadow', 'background'].forEach((prop) => {
          const val = computed.getPropertyValue(prop as any);
          // html2canvas / dom-to-image 不支持 lab()/oklab()/color-mix() 等新函数，尝试用 computed 的解析值覆盖
          if (
            val && (
              val.includes('oklab') ||
              val.includes('lab(') ||
              val.includes('in oklab') ||
              val.includes('in lab') ||
              val.includes('color-mix')
            )
          ) {
            savedStyles.push({ el: child, prop, val: (child as HTMLElement).style.getPropertyValue(prop) });
            // 用 computed 的 resolved 颜色覆盖（浏览器已将这些函数解析为 rgb / rgba）
            (child as HTMLElement).style.setProperty(prop, computed.getPropertyValue(prop as any));
          }
        });
      });

      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(el, {
        backgroundColor: '#0a0a1a',
        scale: 2,
        useCORS: true,
        logging: false,
      });

      // 恢复原始样式
      savedStyles.forEach(({ el: child, prop, val }) => {
        if (val) {
          (child as HTMLElement).style.setProperty(prop, val);
        } else {
          (child as HTMLElement).style.removeProperty(prop);
        }
      });

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `灵格测试-${result.profile.title}.png`;
      link.href = dataUrl;
      link.click();
      setShareReady(true);
      setTimeout(() => setShareReady(false), 3000);
    } catch (err) {
      console.error('生成分享图片失败:', err);
    } finally {
      setSharing(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* 分享卡片区域 */}
      <div
        id="share-card"
        ref={cardRef}
        className="w-[375px] rounded-2xl overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0d0d2b 0%, #1a1a3e 50%, #0d0d2b 100%)' }}
      >
        {/* 顶部装饰 */}
        <div
          className="h-2"
          style={{
            background: `linear-gradient(90deg, ${guardianGradient[0]}, ${guardianGradient[1]})`,
          }}
        />

        <div className="px-6 py-8">
          {/* 标签 */}
          <div className="text-center mb-4">
            <span
              className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
              style={{
                background: `${guardianColor}20`,
                color: guardianColor,
                border: `1px solid ${guardianColor}40`,
              }}
            >
              你的守护星灵
            </span>
          </div>

          {/* 灵格符号 */}
          <div className="flex justify-center mb-3">
            <SpiritIcon spirit={result.guardianSpirit} size={64} color={guardianColor} />
          </div>

          {/* 灵格名称 */}
          <h2
            className="text-2xl font-bold text-center mb-2"
            style={{ color: guardianColor }}
          >
            {result.profile.title}
          </h2>

          {/* 一句话描述 */}
          <p className="text-center text-white/70 text-sm leading-relaxed mb-6 px-2">
            {result.profile.description}
          </p>

          {/* 分隔线 */}
          <div
            className="h-px mb-6"
            style={{ background: `linear-gradient(90deg, transparent, ${guardianColor}40, transparent)` }}
          />

          {/* 暗面星灵 */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-xs text-white/40">暗面星灵</span>
            <SpiritIcon spirit={result.shadowSpirit} size={24} color={spiritColors[result.shadowSpirit]} />
            <span className="text-sm" style={{ color: spiritColors[result.shadowSpirit] }}>
              {result.shadowSpirit}
            </span>
          </div>

          {/* 元素分布 */}
          <ElementBar
            elementDistribution={result.elementDistribution}
            totalScore={result.totalScore}
          />

          {/* 分隔线 */}
          <div
            className="h-px my-5"
            style={{ background: `linear-gradient(90deg, transparent, ${guardianColor}30, transparent)` }}
          />

          {/* 灵魂共鸣 */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-indigo-200/80">灵魂共鸣</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/5 rounded-lg p-2 text-center">
                <div className="text-[10px] text-white/40 mb-1">最佳搭档</div>
                <SpiritIcon spirit={result.marriage.bestPartner} size={28} color={spiritColors[result.marriage.bestPartner]} />
                <div className="text-[10px]" style={{ color: spiritColors[result.marriage.bestPartner] }}>
                  {result.marriage.bestPartner}
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-2 text-center">
                <div className="text-[10px] text-white/40 mb-1">相互成就</div>
                <SpiritIcon spirit={result.marriage.mutualAchievement} size={28} color={spiritColors[result.marriage.mutualAchievement]} />
                <div className="text-[10px]" style={{ color: spiritColors[result.marriage.mutualAchievement] }}>
                  {result.marriage.mutualAchievement}
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-2 text-center">
                <div className="text-[10px] text-white/40 mb-1">灵魂共鸣</div>
                <SpiritIcon spirit={result.marriage.soulResonance} size={28} color={spiritColors[result.marriage.soulResonance]} />
                <div className="text-[10px]" style={{ color: spiritColors[result.marriage.soulResonance] }}>
                  {result.marriage.soulResonance}
                </div>
              </div>
            </div>
          </div>

          {/* 底部标识 */}
          <div className="mt-6 text-center">
            <span className="text-[10px] text-white/20">✨ 星座灵格测试 ✨</span>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-col items-center gap-3 w-full max-w-[375px]">
        <button
          onClick={handleShare}
          disabled={sharing}
          className="w-full py-3.5 rounded-xl font-medium text-white transition-all duration-300
            bg-gradient-to-r from-indigo-500 to-purple-500
            hover:from-indigo-400 hover:to-purple-400 hover:shadow-lg hover:shadow-purple-500/25
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sharing ? '生成中...' : shareReady ? '✓ 已保存' : '保存分享图片'}
        </button>
      </div>
    </div>
  );
}
