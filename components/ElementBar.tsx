'use client';

import { SpiritName, ElementName } from '@/lib/questions';
import { elementInfo, spiritElements, spiritColors } from '@/lib/spirits';
import { SpiritScores, ElementScores } from '@/lib/calculator';
import SpiritIcon from './SpiritIcon';

interface ElementBarProps {
  elementDistribution: ElementScores;
  totalScore: number;
}

/** 元素显示符号（用带颜色的 SVG 圆点替代 emoji） */
const elementDot: Record<ElementName, string> = {
  '火': '#FF6B35',
  '土': '#8BC34A',
  '风': '#90CAF9',
  '水': '#7986CB',
  '跨': '#FFF176',
};
const ELEMENT_ORDER: ElementName[] = ['火', '土', '风', '水', '跨'];

export default function ElementBar({ elementDistribution, totalScore }: ElementBarProps) {
  const maxElementScore = Math.max(...ELEMENT_ORDER.map((e) => elementDistribution[e] || 0), 1);

  return (
    <div className="space-y-2.5">
      <h4 className="text-sm font-medium text-indigo-200/80 mb-3">元素分布</h4>
      {ELEMENT_ORDER.map((element) => {
        const info = elementInfo[element];
        const score = elementDistribution[element] || 0;
        const percentage = totalScore > 0 ? (score / totalScore) * 100 : 0;
        const barWidth = maxElementScore > 0 ? (score / maxElementScore) * 100 : 0;

        return (
          <div key={element} className="flex items-center gap-2.5">
            <span className="w-6 flex justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <circle cx="9" cy="9" r="7" fill={elementDot[element]} opacity="0.6" />
                <circle cx="9" cy="9" r="3.5" fill={elementDot[element]} />
              </svg>
            </span>
            <span className="text-xs text-white/50 w-5">{info.label}</span>
            <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${barWidth}%`,
                  background: `linear-gradient(90deg, ${info.color}88, ${info.color})`,
                }}
              />
            </div>
            <span className="text-xs text-white/50 w-12 text-right">
              {Math.round(percentage)}%
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** 星灵得分分布条 */
interface SpiritScoreBarProps {
  scores: SpiritScores;
}

const SPIRIT_DISPLAY_ORDER: SpiritName[] = [
  '太阳灵', '月亮灵', '战神灵', '爱神灵', '智神灵',
  '福神灵', '律神灵', '自由灵', '梦神灵', '轮回灵', '命运灵',
];

export function SpiritScoreBar({ scores }: SpiritScoreBarProps) {
  const maxScore = Math.max(...SPIRIT_DISPLAY_ORDER.map((s) => scores[s]), 1);

  return (
    <div className="space-y-1.5">
      {SPIRIT_DISPLAY_ORDER.map((spirit) => {
        const score = scores[spirit];
        const barWidth = maxScore > 0 ? (score / maxScore) * 100 : 0;
        const color = spiritColors[spirit];

        return (
          <div key={spirit} className="flex items-center gap-2">
            <span className="w-5 flex justify-center"><SpiritIcon spirit={spirit} size={16} color={color} /></span>
            <span className="text-[10px] text-white/40 w-10 truncate">{spirit.replace('灵', '')}</span>
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${barWidth}%`,
                  background: color,
                  opacity: 0.7,
                }}
              />
            </div>
            <span className="text-[10px] text-white/40 w-5 text-right">{score}</span>
          </div>
        );
      })}
    </div>
  );
}
