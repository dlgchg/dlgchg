import { SpiritName, RankName, ElementName } from './questions';

/** 星灵符号映射（仅用于非组件场景的 fallback） */
export const spiritSymbols: Record<SpiritName, string> = {
  '太阳灵': '☉',
  '月亮灵': '☽',
  '战神灵': '⚔',
  '爱神灵': '◇',
  '智神灵': '◉',
  '福神灵': '❋',
  '律神灵': '⊛',
  '自由灵': '⚡',
  '梦神灵': '❋',
  '轮回灵': '∞',
  '命运灵': '✦',
};

/** 星灵对应颜色 */
export const spiritColors: Record<SpiritName, string> = {
  '太阳灵': '#FFD700',
  '月亮灵': '#C0C0FF',
  '战神灵': '#FF4444',
  '爱神灵': '#FF69B4',
  '智神灵': '#4FC3F7',
  '福神灵': '#FFB74D',
  '律神灵': '#81C784',
  '自由灵': '#BA68C8',
  '梦神灵': '#7986CB',
  '轮回灵': '#CE93D8',
  '命运灵': '#FFF176',
};

/** 星灵对应渐变色（用于背景） */
export const spiritGradients: Record<SpiritName, [string, string]> = {
  '太阳灵': ['#FFD700', '#FF8C00'],
  '月亮灵': ['#9FA8DA', '#5C6BC0'],
  '战神灵': ['#EF5350', '#B71C1C'],
  '爱神灵': ['#F48FB1', '#E91E63'],
  '智神灵': ['#4FC3F7', '#0288D1'],
  '福神灵': ['#FFB74D', '#F57C00'],
  '律神灵': ['#81C784', '#388E3C'],
  '自由灵': ['#CE93D8', '#7B1FA2'],
  '梦神灵': ['#9FA8DA', '#3F51B5'],
  '轮回灵': ['#CE93D8', '#6A1B9A'],
  '命运灵': ['#FFF176', '#F9A825'],
};

/** 元素归属 */
export const spiritElements: Record<SpiritName, ElementName> = {
  '太阳灵': '火',
  '战神灵': '火',
  '福神灵': '火',
  '爱神灵': '土',
  '律神灵': '土',
  '智神灵': '风',
  '自由灵': '风',
  '月亮灵': '水',
  '梦神灵': '水',
  '轮回灵': '水',
  '命运灵': '跨',
};

/** 元素符号和颜色 */
export const elementInfo: Record<ElementName, { symbol: string; color: string; label: string }> = {
  '火': { symbol: '🔥', color: '#FF6B35', label: '火' },
  '土': { symbol: '🌍', color: '#8BC34A', label: '土' },
  '风': { symbol: '💨', color: '#90CAF9', label: '风' },
  '水': { symbol: '🌊', color: '#7986CB', label: '水' },
  '跨': { symbol: '✨', color: '#FFF176', label: '跨' },
};

/** 灵格联姻表 */
export const spiritMarriage: Record<SpiritName, { bestPartner: SpiritName; mutualAchievement: SpiritName; soulResonance: SpiritName }> = {
  '太阳灵': { bestPartner: '月亮灵', mutualAchievement: '律神灵', soulResonance: '轮回灵' },
  '月亮灵': { bestPartner: '太阳灵', mutualAchievement: '梦神灵', soulResonance: '战神灵' },
  '战神灵': { bestPartner: '福神灵', mutualAchievement: '律神灵', soulResonance: '月亮灵' },
  '爱神灵': { bestPartner: '爱神灵', mutualAchievement: '太阳灵', soulResonance: '月亮灵' },
  '智神灵': { bestPartner: '自由灵', mutualAchievement: '律神灵', soulResonance: '福神灵' },
  '福神灵': { bestPartner: '战神灵', mutualAchievement: '命运灵', soulResonance: '爱神灵' },
  '律神灵': { bestPartner: '智神灵', mutualAchievement: '太阳灵', soulResonance: '战神灵' },
  '自由灵': { bestPartner: '智神灵', mutualAchievement: '命运灵', soulResonance: '轮回灵' },
  '梦神灵': { bestPartner: '月亮灵', mutualAchievement: '命运灵', soulResonance: '爱神灵' },
  '轮回灵': { bestPartner: '自由灵', mutualAchievement: '梦神灵', soulResonance: '太阳灵' },
  '命运灵': { bestPartner: '梦神灵', mutualAchievement: '轮回灵', soulResonance: '福神灵' },
};

/** 66 种灵格全表 */
export interface SpiritProfile {
  spirit: SpiritName;
  rank: RankName;
  symbol: string;
  title: string;
  description: string;
}

const spiritProfiles: SpiritProfile[] = [
  // 太阳灵系列
  { spirit: '太阳灵', rank: '初醒', symbol: '☉', title: '太阳灵·初醒', description: '你开始感受到内心有光，却还不敢站到舞台中央' },
  { spirit: '太阳灵', rank: '蕴育', symbol: '☉', title: '太阳灵·蕴育', description: '你知道自己是发光体，只是在等一个足够大的舞台' },
  { spirit: '太阳灵', rank: '觉明', symbol: '☉', title: '太阳灵·觉明', description: '你不再隐藏光芒，自然成为人群中的焦点' },
  { spirit: '太阳灵', rank: '破茧', symbol: '☉', title: '太阳灵·破茧', description: '你用影响力点燃他人，成为不可忽视的存在' },
  { spirit: '太阳灵', rank: '升华', symbol: '☉', title: '太阳灵·升华', description: '你的光芒不再是耀眼，而是温暖——让人自愿追随' },
  { spirit: '太阳灵', rank: '归源', symbol: '☉', title: '太阳灵·归源', description: '你已不需要舞台，因为你走到哪里，哪里就是舞台' },

  // 月亮灵系列
  { spirit: '月亮灵', rank: '初醒', symbol: '☽', title: '月亮灵·初醒', description: '你隐约感知到情绪的潮汐，却还分不清是自己的还是他人的' },
  { spirit: '月亮灵', rank: '蕴育', symbol: '☽', title: '月亮灵·蕴育', description: '你学会倾听内心，开始信任直觉胜过逻辑' },
  { spirit: '月亮灵', rank: '觉明', symbol: '☽', title: '月亮灵·觉明', description: '你的共情能力成为天赋，能感受别人未曾说出口的心事' },
  { spirit: '月亮灵', rank: '破茧', symbol: '☽', title: '月亮灵·破茧', description: '你用深刻的理解和包容，创造让他人安心的港湾' },
  { spirit: '月亮灵', rank: '升华', symbol: '☽', title: '月亮灵·升华', description: '你的温柔不再软弱，而是一种能融化坚冰的力量' },
  { spirit: '月亮灵', rank: '归源', symbol: '☽', title: '月亮灵·归源', description: '你与万物共鸣，却不再被任何人的情绪所困' },

  // 战神灵系列
  { spirit: '战神灵', rank: '初醒', symbol: '⚔', title: '战神灵·初醒', description: '你心里有一团火，偶尔会莫名想冲上去' },
  { spirit: '战神灵', rank: '蕴育', symbol: '⚔', title: '战神灵·蕴育', description: '你学会把冲动变成行动力，但有时收不住' },
  { spirit: '战神灵', rank: '觉明', symbol: '⚔', title: '战神灵·觉明', description: '你是天生的战士，敢做别人不敢做的决定' },
  { spirit: '战神灵', rank: '破茧', symbol: '⚔', title: '战神灵·破茧', description: '你用行动力开创局面，成为团队里最可靠的前锋' },
  { spirit: '战神灵', rank: '升华', symbol: '⚔', title: '战神灵·升华', description: '你懂得何时出剑、何时收鞘，力量成为守护而非伤害' },
  { spirit: '战神灵', rank: '归源', symbol: '⚔', title: '战神灵·归源', description: '你已无需战斗，因为你已没有敌人——真正的勇者不战而胜' },

  // 爱神灵系列
  { spirit: '爱神灵', rank: '初醒', symbol: '◇', title: '爱神灵·初醒', description: '你对美和舒适有本能的向往，但还说不清自己要什么' },
  { spirit: '爱神灵', rank: '蕴育', symbol: '◇', title: '爱神灵·蕴育', description: '你开始知道自己喜欢什么，并在生活中创造小小的美好' },
  { spirit: '爱神灵', rank: '觉明', symbol: '◇', title: '爱神灵·觉明', description: '你对美与和谐的追求成为你的标签，周围因你而更宜人' },
  { spirit: '爱神灵', rank: '破茧', symbol: '◇', title: '爱神灵·破茧', description: '你用品味和价值感创造吸引力，让美好事物因你而存在' },
  { spirit: '爱神灵', rank: '升华', symbol: '◇', title: '爱神灵·升华', description: '你不再追逐外在的美，因为你自己就是美的标准' },
  { spirit: '爱神灵', rank: '归源', symbol: '◇', title: '爱神灵·归源', description: '你让一切都恰到好处，却让人感觉不到你的刻意' },

  // 智神灵系列
  { spirit: '智神灵', rank: '初醒', symbol: '◉', title: '智神灵·初醒', description: '你对什么都感兴趣，但还没有找到深挖的方向' },
  { spirit: '智神灵', rank: '蕴育', symbol: '◉', title: '智神灵·蕴育', description: '你学会在信息海洋中导航，开始建立自己的知识体系' },
  { spirit: '智神灵', rank: '觉明', symbol: '◉', title: '智神灵·觉明', description: '你是行走的信息中枢，能快速连接看似无关的知识' },
  { spirit: '智神灵', rank: '破茧', symbol: '◉', title: '智神灵·破茧', description: '你用跨界思维解决难题，让复杂变得简单' },
  { spirit: '智神灵', rank: '升华', symbol: '◉', title: '智神灵·升华', description: '你不再炫技，而是懂得什么时候该说话，什么时候该沉默' },
  { spirit: '智神灵', rank: '归源', symbol: '◉', title: '智神灵·归源', description: '你的存在本身就在传递智慧，不必开口已让人开悟' },

  // 福神灵系列
  { spirit: '福神灵', rank: '初醒', symbol: '❋', title: '福神灵·初醒', description: '你天生比一般人看得开，但偶尔也会自我怀疑' },
  { spirit: '福神灵', rank: '蕴育', symbol: '❋', title: '福神灵·蕴育', description: '你开始相信自己的好运，并发现乐观本身就是一种能力' },
  { spirit: '福神灵', rank: '觉明', symbol: '❋', title: '福神灵·觉明', description: '你是人群中的太阳鸟，走到哪里都带来希望和笑声' },
  { spirit: '福神灵', rank: '破茧', symbol: '❋', title: '福神灵·破茧', description: '你用慷慨和远见连接世界，机会总是向你涌来' },
  { spirit: '福神灵', rank: '升华', symbol: '❋', title: '福神灵·升华', description: '你不再追逐好运，因为你已是好运本身——利他即是利己' },
  { spirit: '福神灵', rank: '归源', symbol: '❋', title: '福神灵·归源', description: '你什么都不缺，因为你已不再需要"拥有"才能"丰盛"' },

  // 律神灵系列
  { spirit: '律神灵', rank: '初醒', symbol: '⊛', title: '律神灵·初醒', description: '你隐约感觉自律带来自由，但还经常对抗自己的惰性' },
  { spirit: '律神灵', rank: '蕴育', symbol: '⊛', title: '律神灵·蕴育', description: '你开始建立自己的节奏，发现纪律不是束缚而是底气' },
  { spirit: '律神灵', rank: '觉明', symbol: '⊛', title: '律神灵·觉明', description: '你是人群中最靠谱的存在，说到做到从不打折' },
  { spirit: '律神灵', rank: '破茧', symbol: '⊛', title: '律神灵·破茧', description: '你用坚不可摧的意志建造体系，让混乱因你而有序' },
  { spirit: '律神灵', rank: '升华', symbol: '⊛', title: '律神灵·升华', description: '你看似毫不费力，实则十年磨一剑——自律已成本能' },
  { spirit: '律神灵', rank: '归源', symbol: '⊛', title: '律神灵·归源', description: '规则于你如呼吸，你构建的秩序能自发运转' },

  // 自由灵系列
  { spirit: '自由灵', rank: '初醒', symbol: '⚡', title: '自由灵·初醒', description: '你隐隐感到自己跟别人不一样，但还不敢完全做自己' },
  { spirit: '自由灵', rank: '蕴育', symbol: '⚡', title: '自由灵·蕴育', description: '你开始拒绝被定义，即使这让别人不舒服' },
  { spirit: '自由灵', rank: '觉明', symbol: '⚡', title: '自由灵·觉明', description: '你是规则之外的闪电，用独特视角打破常规' },
  { spirit: '自由灵', rank: '破茧', symbol: '⚡', title: '自由灵·破茧', description: '你用创新颠覆现状，证明另一条路是可能的' },
  { spirit: '自由灵', rank: '升华', symbol: '⚡', title: '自由灵·升华', description: '你不再需要叛逆来证明自由，因为你本身就是自由' },
  { spirit: '自由灵', rank: '归源', symbol: '⚡', title: '自由灵·归源', description: '你与万物同频却不受限，自由不是对抗，而是创造' },

  // 梦神灵系列
  { spirit: '梦神灵', rank: '初醒', symbol: '❋', title: '梦神灵·初醒', description: '你偶尔分不清现实和幻想，却也在幻想中看到了别人看不到的' },
  { spirit: '梦神灵', rank: '蕴育', symbol: '❋', title: '梦神灵·蕴育', description: '你学会把梦变成创作，想象力是你最忠实的朋友' },
  { spirit: '梦神灵', rank: '觉明', symbol: '❋', title: '梦神灵·觉明', description: '你在现实与灵性之间自如行走，共情力让你成为疗愈者' },
  { spirit: '梦神灵', rank: '破茧', symbol: '❋', title: '梦神灵·破茧', description: '你用无边的想象力和深刻的同理心，创造触动人心的作品' },
  { spirit: '梦神灵', rank: '升华', symbol: '❋', title: '梦神灵·升华', description: '你不再逃避现实，因为你已能把梦照进现实' },
  { spirit: '梦神灵', rank: '归源', symbol: '❋', title: '梦神灵·归源', description: '你见众生如见自己，见自己如见众生——觉醒即在梦中' },

  // 轮回灵系列
  { spirit: '轮回灵', rank: '初醒', symbol: '∞', title: '轮回灵·初醒', description: '你感觉内心有巨大的力量，但还不理解它的方向' },
  { spirit: '轮回灵', rank: '蕴育', symbol: '∞', title: '轮回灵·蕴育', description: '你学会直面黑暗面，在痛苦中发现了重生的力量' },
  { spirit: '轮回灵', rank: '觉明', symbol: '∞', title: '轮回灵·觉明', description: '你是浴火重生的凤凰，每一次跌落都让你更强' },
  { spirit: '轮回灵', rank: '破茧', symbol: '∞', title: '轮回灵·破茧', description: '你对权力和转化有深刻理解，能从废墟中建造帝国' },
  { spirit: '轮回灵', rank: '升华', symbol: '∞', title: '轮回灵·升华', description: '你不再恐惧失去，因为你已历经千次重生' },
  { spirit: '轮回灵', rank: '归源', symbol: '∞', title: '轮回灵·归源', description: '你化身变革本身——旧世界的终结者，新世界的缔造者' },

  // 命运灵系列
  { spirit: '命运灵', rank: '初醒', symbol: '✦', title: '命运灵·初醒', description: '你偶尔感觉人生有某种使命在召唤，但还看不清方向' },
  { spirit: '命运灵', rank: '蕴育', symbol: '✦', title: '命运灵·蕴育', description: '你开始感知生命的脉络，发现看似偶然的事都有深意' },
  { spirit: '命运灵', rank: '觉明', symbol: '✦', title: '命运灵·觉明', description: '你清晰知道自己的方向，并感到有一股力量在推着你走' },
  { spirit: '命运灵', rank: '破茧', symbol: '✦', title: '命运灵·破茧', description: '你成为使命的化身，用行动证明天命可期' },
  { spirit: '命运灵', rank: '升华', symbol: '✦', title: '命运灵·升华', description: '你不再等命运安排，因为你已在创造命运' },
  { spirit: '命运灵', rank: '归源', symbol: '✦', title: '命运灵·归源', description: '你与宇宙的节律同频，每一步都踩在对的时间对的位置' },
];

/** 根据星灵和阶位获取灵格描述 */
export function getSpiritProfile(spirit: SpiritName, rank: RankName): SpiritProfile {
  const profile = spiritProfiles.find((p) => p.spirit === spirit && p.rank === rank);
  if (!profile) {
    return {
      spirit,
      rank,
      symbol: spiritSymbols[spirit],
      title: `${spiritSymbols[spirit]} ${spirit}·${rank}`,
      description: '探索中...',
    };
  }
  return profile;
}

/** 所有灵格列表 */
export { spiritProfiles };
