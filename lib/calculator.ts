import { SpiritName, RankName, QuestionOption } from './questions';
import { spiritElements, elementInfo, spiritMarriage, getSpiritProfile, SpiritProfile } from './spirits';

/** 各星灵得分 */
export type SpiritScores = Record<SpiritName, number>;

/** 元素得分 */
export type ElementScores = Record<string, number>;

/** 完整测试结果 */
export interface TestResult {
  /** 守护星灵 */
  guardianSpirit: SpiritName;
  /** 暗面星灵 */
  shadowSpirit: SpiritName;
  /** 阶位 */
  rank: RankName;
  /** 集中度 */
  concentration: number;
  /** 区分度 */
  differentiation: number;
  /** 各星灵得分 */
  scores: SpiritScores;
  /** 元素分布 */
  elementDistribution: ElementScores;
  /** 灵格信息 */
  profile: SpiritProfile;
  /** 联姻信息 */
  marriage: {
    bestPartner: SpiritName;
    mutualAchievement: SpiritName;
    soulResonance: SpiritName;
  };
  /** 总分 */
  totalScore: number;
}

/** 所有星灵名称列表 */
const ALL_SPIRITS: SpiritName[] = [
  '太阳灵', '月亮灵', '战神灵', '爱神灵', '智神灵',
  '福神灵', '律神灵', '自由灵', '梦神灵', '轮回灵', '命运灵',
];

/** 初始化星灵得分 */
function initScores(): SpiritScores {
  const scores: Partial<SpiritScores> = {};
  for (const spirit of ALL_SPIRITS) {
    scores[spirit] = 0;
  }
  return scores as SpiritScores;
}

/** 根据选择的选项计算得分 */
export function calculateScores(selectedOptions: QuestionOption[]): SpiritScores {
  const scores = initScores();
  for (const option of selectedOptions) {
    scores[option.primary] += 2;
    scores[option.secondary] += 1;
  }
  return scores;
}

/** 计算元素分布 */
export function calculateElementDistribution(scores: SpiritScores): ElementScores {
  const distribution: Record<string, number> = { '火': 0, '土': 0, '风': 0, '水': 0, '跨': 0 };
  for (const spirit of ALL_SPIRITS) {
    const element = spiritElements[spirit];
    distribution[element] += scores[spirit];
  }
  return distribution;
}

/** 判定阶位 */
export function determineRank(concentration: number, differentiation: number): RankName {
  if (concentration >= 22 && differentiation >= 8) return '归源';
  if (concentration >= 20 && differentiation >= 6) return '升华';
  if (concentration >= 18 && differentiation >= 5) return '破茧';
  if (concentration >= 16 && differentiation >= 3) return '觉明';
  if (concentration >= 14 && differentiation >= 2) return '蕴育';
  return '初醒';
}

/** 完整计算测试结果 */
export function calculateResult(selectedOptions: QuestionOption[]): TestResult {
  // 计算各星灵得分
  const scores = calculateScores(selectedOptions);

  // 计算总分
  const totalScore = ALL_SPIRITS.reduce((sum, spirit) => sum + scores[spirit], 0);

  // 按得分排序
  const sorted = [...ALL_SPIRITS].sort((a, b) => scores[b] - scores[a]);

  // 守护星灵（最高分）和暗面星灵（第二高分）
  const guardianSpirit = sorted[0];
  const shadowSpirit = sorted[1];

  // 集中度 = 最高分 / 总分 * 100
  const concentration = totalScore > 0 ? (scores[guardianSpirit] / totalScore) * 100 : 0;

  // 区分度 = 最高分 - 第二高分
  const differentiation = scores[guardianSpirit] - scores[shadowSpirit];

  // 判定阶位
  const rank = determineRank(concentration, differentiation);

  // 获取灵格信息
  const profile = getSpiritProfile(guardianSpirit, rank);

  // 元素分布
  const elementDistribution = calculateElementDistribution(scores);

  // 联姻信息
  const marriage = spiritMarriage[guardianSpirit];

  return {
    guardianSpirit,
    shadowSpirit,
    rank,
    concentration: Math.round(concentration * 10) / 10,
    differentiation,
    scores,
    elementDistribution,
    profile,
    marriage,
    totalScore,
  };
}

/** 从 localStorage 读取缓存结果 */
export function getCachedResult(): TestResult | null {
  try {
    if (typeof window === 'undefined') return null;
    const cached = localStorage.getItem('spirit_test_result');
    if (cached) {
      return JSON.parse(cached) as TestResult;
    }
  } catch {
    // SSR 或 localStorage 不可用
  }
  return null;
}

/** 缓存测试结果到 localStorage */
export function cacheResult(result: TestResult): void {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem('spirit_test_result', JSON.stringify(result));
  } catch {
    // localStorage 不可用
  }
}

/** 清除缓存结果 */
export function clearCachedResult(): void {
  try {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('spirit_test_result');
  } catch {
    // localStorage 不可用
  }
}
