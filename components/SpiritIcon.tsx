'use client';

import { SpiritName } from '@/lib/questions';

interface SpiritIconProps {
  spirit: SpiritName;
  size?: number;
  color?: string;
  className?: string;
}

/** 太阳灵 - 光芒四射的太阳 */
function SunIcon({ size = 48, color = '#FFD700' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="18" fill={color} opacity="0.3" />
      <circle cx="50" cy="50" r="12" fill={color} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 50 + Math.cos(rad) * 22;
        const y1 = 50 + Math.sin(rad) * 22;
        const x2 = 50 + Math.cos(rad) * 35;
        const y2 = 50 + Math.sin(rad) * 35;
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" strokeLinecap="round" />;
      })}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 50 + Math.cos(rad) * 22;
        const y1 = 50 + Math.sin(rad) * 22;
        const x2 = 50 + Math.cos(rad) * 28;
        const y2 = 50 + Math.sin(rad) * 28;
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" strokeLinecap="round" />;
      })}
    </svg>
  );
}

/** 月亮灵 - 新月与星 */
function MoonIcon({ size = 48, color = '#C0C0FF' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 15C38 20 25 38 25 55C25 72 38 88 60 88C42 82 32 68 32 55C32 42 42 25 60 15Z" fill={color} />
      <circle cx="68" cy="22" r="2" fill={color} opacity="0.6" />
      <circle cx="78" cy="35" r="1.5" fill={color} opacity="0.4" />
      <circle cx="72" cy="45" r="1" fill={color} opacity="0.3" />
      <path d="M75 15L76.5 19L80.5 20.5L76.5 22L75 26L73.5 22L69.5 20.5L73.5 19Z" fill={color} opacity="0.7" />
    </svg>
  );
}

/** 战神灵 - 交叉剑与盾 */
function WarIcon({ size = 48, color = '#FF4444' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35 15L38 70L50 78L62 70L65 15L50 22Z" fill={color} opacity="0.2" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <line x1="30" y1="20" x2="70" y2="80" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="70" y1="20" x2="30" y2="80" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="50" r="6" fill={color} opacity="0.4" stroke={color} strokeWidth="1.5" />
      <line x1="50" y1="12" x2="50" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="12" x2="54" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** 爱神灵 - 宝石/钻石 */
function LoveIcon({ size = 48, color = '#FF69B4' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15L80 40L50 88L20 40Z" fill={color} opacity="0.15" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 40H80" stroke={color} strokeWidth="1.5" />
      <path d="M50 15L35 40L50 88" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <path d="M50 15L65 40L50 88" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="50" cy="42" r="5" fill={color} opacity="0.4" />
      <path d="M38 35L42 30L46 35L42 40Z" fill={color} opacity="0.3" />
    </svg>
  );
}

/** 智神灵 - 全视之眼 */
function WisdomIcon({ size = 48, color = '#4FC3F7' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 50C10 50 30 20 50 20C70 20 90 50 90 50C90 50 70 80 50 80C30 80 10 50 10 50Z" fill={color} opacity="0.1" stroke={color} strokeWidth="2" />
      <circle cx="50" cy="50" r="14" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="6" fill={color} />
      <circle cx="47" cy="47" r="2" fill="white" opacity="0.6" />
      <path d="M30 25L25 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M70 25L75 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M50 14V8" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/** 福神灵 - 命运之轮 */
function FortuneIcon({ size = 48, color = '#FFB74D' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" fill={color} opacity="0.1" stroke={color} strokeWidth="2" />
      <circle cx="50" cy="50" r="6" fill={color} opacity="0.4" />
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x2 = 50 + Math.cos(rad) * 30;
        const y2 = 50 + Math.sin(rad) * 30;
        return <line key={angle} x1="50" y1="50" x2={x2} y2={y2} stroke={color} strokeWidth="1.5" opacity="0.4" />;
      })}
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 50 + Math.cos(rad) * 30;
        const cy = 50 + Math.sin(rad) * 30;
        return <circle key={angle} cx={cx} cy={cy} r="4" fill={color} opacity="0.6" />;
      })}
    </svg>
  );
}

/** 律神灵 - 天平/沙漏 */
function LawIcon({ size = 48, color = '#81C784' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 沙漏主体 */}
      <path d="M32 18H68L55 50L68 82H32L45 50Z" fill={color} opacity="0.1" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      {/* 上半部分沙子 */}
      <path d="M40 25H60L52 45H48Z" fill={color} opacity="0.3" />
      {/* 下半部分沙子 */}
      <path d="M42 75H58L50 58Z" fill={color} opacity="0.2" />
      {/* 中间流沙 */}
      <line x1="50" y1="45" x2="50" y2="55" stroke={color} strokeWidth="1.5" opacity="0.5" />
      {/* 顶部和底部横线 */}
      <line x1="28" y1="18" x2="72" y2="18" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="82" x2="72" y2="82" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** 自由灵 - 闪电翅膀 */
function FreedomIcon({ size = 48, color = '#BA68C8' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 闪电 */}
      <path d="M55 12L38 48H50L42 88L68 45H54L62 12Z" fill={color} opacity="0.8" />
      {/* 左翅膀 */}
      <path d="M30 40C15 35 8 42 12 50C8 45 5 38 15 32C22 28 28 30 30 40Z" fill={color} opacity="0.3" />
      {/* 右翅膀 */}
      <path d="M70 40C85 35 92 42 88 50C92 45 95 38 85 32C78 28 72 30 70 40Z" fill={color} opacity="0.3" />
    </svg>
  );
}

/** 梦神灵 - 梦境漩涡 */
function DreamIcon({ size = 48, color = '#7986CB' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 漩涡 */}
      <path d="M50 50C50 44 56 38 62 38C70 38 76 44 76 52C76 62 68 70 58 70C44 70 34 60 34 46C34 30 46 18 62 18" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      {/* 内圈 */}
      <path d="M50 50C50 47 53 44 56 44C60 44 63 47 63 51C63 56 59 60 54 60C48 60 44 56 44 50" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* 中心点 */}
      <circle cx="50" cy="50" r="3" fill={color} opacity="0.6" />
      {/* 星尘 */}
      <circle cx="28" cy="30" r="1.5" fill={color} opacity="0.3" />
      <circle cx="72" cy="28" r="1" fill={color} opacity="0.2" />
      <circle cx="75" cy="70" r="1.5" fill={color} opacity="0.25" />
      <path d="M22 50L23 52L25 53L23 54L22 56L21 54L19 53L21 52Z" fill={color} opacity="0.3" />
    </svg>
  );
}

/** 轮回灵 - 蛇环/无限循环 */
function RebirthIcon({ size = 48, color = '#CE93D8' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 外环 */}
      <circle cx="50" cy="50" r="30" fill={color} opacity="0.08" stroke={color} strokeWidth="2.5" strokeDasharray="8 4" />
      {/* 内环 */}
      <circle cx="50" cy="50" r="20" fill={color} opacity="0.05" stroke={color} strokeWidth="1.5" />
      {/* 上升三角 */}
      <path d="M50 22L62 55H38Z" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      {/* 下降三角 */}
      <path d="M50 78L38 45H62Z" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      {/* 中心 */}
      <circle cx="50" cy="50" r="4" fill={color} opacity="0.5" />
    </svg>
  );
}

/** 命运灵 - 指南针/星轨 */
function FateIcon({ size = 48, color = '#FFF176' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 外环 */}
      <circle cx="50" cy="50" r="32" fill={color} opacity="0.05" stroke={color} strokeWidth="1.5" />
      {/* 刻度 */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 50 + Math.cos(rad) * 28;
        const y1 = 50 + Math.sin(rad) * 28;
        const x2 = 50 + Math.cos(rad) * 32;
        const y2 = 50 + Math.sin(rad) * 32;
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" opacity="0.3" />;
      })}
      {/* 指针 */}
      <path d="M50 18L54 48L50 52L46 48Z" fill={color} opacity="0.6" />
      <path d="M50 82L46 52L50 48L54 52Z" fill={color} opacity="0.3" />
      {/* 左右指针 */}
      <path d="M18 50L48 46L52 50L48 54Z" fill={color} opacity="0.3" />
      <path d="M82 50L52 54L48 50L52 46Z" fill={color} opacity="0.3" />
      {/* 中心 */}
      <circle cx="50" cy="50" r="3" fill={color} />
      {/* 北极星 */}
      <path d="M50 6L51 9L54 10L51 11L50 14L49 11L46 10L49 9Z" fill={color} opacity="0.5" />
    </svg>
  );
}

const iconMap: Record<SpiritName, React.FC<{ size?: number; color?: string }>> = {
  '太阳灵': SunIcon,
  '月亮灵': MoonIcon,
  '战神灵': WarIcon,
  '爱神灵': LoveIcon,
  '智神灵': WisdomIcon,
  '福神灵': FortuneIcon,
  '律神灵': LawIcon,
  '自由灵': FreedomIcon,
  '梦神灵': DreamIcon,
  '轮回灵': RebirthIcon,
  '命运灵': FateIcon,
};

export default function SpiritIcon({ spirit, size = 48, color, className }: SpiritIconProps) {
  const Icon = iconMap[spirit];
  if (!Icon) return null;
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={size} color={color} />
    </span>
  );
}
