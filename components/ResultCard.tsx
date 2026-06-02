'use client';

import { TestResult } from '@/lib/calculator';
import { spiritColors, spiritGradients } from '@/lib/spirits';
import { useRef, useState } from 'react';
import ElementBar from './ElementBar';
import SpiritIcon from './SpiritIcon';

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
      const el = cardRef.current;

      // 1. 深拷贝卡片元素
      const clone = el.cloneNode(true) as HTMLElement;

      // 2. 遍历原始元素和克隆元素，将浏览器已解析的计算样式（lab→rgb）内联到克隆元素
      const origEls = [el, ...el.querySelectorAll('*')] as HTMLElement[];
      const cloneEls = [clone, ...clone.querySelectorAll('*')] as HTMLElement[];
      for (let i = 0; i < origEls.length; i++) {
        const computed = window.getComputedStyle(origEls[i]);
        for (let j = 0; j < computed.length; j++) {
          const prop = computed[j];
          cloneEls[i].style.setProperty(prop, computed.getPropertyValue(prop));
        }
      }

      // 3. 临时移除所有样式表，防止 html-to-image 解析 lab/oklch/oklab
      const removedNodes: { node: Element; parent: Node; next: Node | null }[] = [];
      document.querySelectorAll('style, link[rel="stylesheet"]').forEach((node) => {
        const parent = node.parentNode!;
        const next = node.nextSibling;
        removedNodes.push({ node, parent, next });
        parent.removeChild(node);
      });

      // 4. 添加遮罩防止页面闪烁
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;inset:0;background:#0a0a1a;z-index:99999;';
      document.body.appendChild(overlay);

      // 5. 将克隆元素加入页面（隐藏位置）
      clone.style.position = 'fixed';
      clone.style.left = '-9999px';
      document.body.appendChild(clone);

      let dataUrl: string | undefined;
      try {
        // 6. 截图（此时页面无样式表，html-to-image 不会遇到 lab()）
        const { toPng } = await import('html-to-image');
        dataUrl = await toPng(clone, {
          backgroundColor: '#0a0a1a',
          pixelRatio: 2,
          cacheBust: true,
        });
      } finally {
        // 7. 清理：移除克隆元素和遮罩
        document.body.removeChild(clone);
        document.body.removeChild(overlay);

        // 8. 恢复所有样式表
        removedNodes.forEach(({ node, parent, next }) => {
          if (next) {
            parent.insertBefore(node, next);
          } else {
            parent.appendChild(node);
          }
        });
      }

      if (!dataUrl) throw new Error('生成图片失败');

      // 9. dataUrl 转 Blob
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const fileName = `灵格测试-${result.profile.title}.png`;
      const file = new File([blob], fileName, { type: 'image/png' });

      // 尝试使用 Web Share API（手机端有效）
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: '星座灵格测试',
            text: `我的灵格结果是「${result.profile.title}」，快来测测你的吧！`,
          });
          setShareReady(true);
          setTimeout(() => setShareReady(false), 3000);
        } catch (shareErr: any) {
          // 用户取消分享不算错误
          if (shareErr.name !== 'AbortError') {
            throw shareErr;
          }
        }
      } else {
        // 降级方案：PC 端直接下载
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = fileName;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setShareReady(true);
        setTimeout(() => setShareReady(false), 3000);
      }
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
