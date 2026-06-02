/** 星灵名称类型 */
export type SpiritName =
  | '太阳灵'
  | '月亮灵'
  | '战神灵'
  | '爱神灵'
  | '智神灵'
  | '福神灵'
  | '律神灵'
  | '自由灵'
  | '梦神灵'
  | '轮回灵'
  | '命运灵';

/** 阶位名称类型 */
export type RankName = '初醒' | '蕴育' | '觉明' | '破茧' | '升华' | '归源';

/** 元素名称类型 */
export type ElementName = '火' | '土' | '风' | '水' | '跨';

/** 选项数据 */
export interface QuestionOption {
  label: string;
  text: string;
  primary: SpiritName;   // 主加 +2
  secondary: SpiritName; // 副加 +1
}

/** 题目数据 */
export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

/** 18 道题目及评分矩阵 */
export const questions: Question[] = [
  {
    id: 1,
    text: '朋友聚会中，你通常是？',
    options: [
      { label: 'A', text: '自然而然成为焦点，掌控全场节奏', primary: '太阳灵', secondary: '福神灵' },
      { label: 'B', text: '安静观察，偶尔和投缘的人深聊', primary: '月亮灵', secondary: '梦神灵' },
      { label: 'C', text: '游走不同圈子，交换各种信息', primary: '智神灵', secondary: '自由灵' },
      { label: 'D', text: '找到最舒适的位置，不想被打扰', primary: '律神灵', secondary: '爱神灵' },
    ],
  },
  {
    id: 2,
    text: '遇到一个全新的环境，你的第一反应是？',
    options: [
      { label: 'A', text: '主动出击，探索一切可能', primary: '战神灵', secondary: '福神灵' },
      { label: 'B', text: '先感受氛围，等待内心的信号', primary: '月亮灵', secondary: '轮回灵' },
      { label: 'C', text: '快速分析规则，找到最优路径', primary: '智神灵', secondary: '律神灵' },
      { label: 'D', text: '按自己的方式来，管它什么规则', primary: '自由灵', secondary: '战神灵' },
    ],
  },
  {
    id: 3,
    text: '你最享受的交流方式是？',
    options: [
      { label: 'A', text: '站在台上，用自己的故事感染人', primary: '太阳灵', secondary: '福神灵' },
      { label: 'B', text: '一对一深度对话，触碰灵魂', primary: '梦神灵', secondary: '月亮灵' },
      { label: 'C', text: '思维碰撞，辩论到天亮', primary: '智神灵', secondary: '自由灵' },
      { label: 'D', text: '安静陪伴，无需多言的默契', primary: '爱神灵', secondary: '律神灵' },
    ],
  },
  {
    id: 4,
    text: '做重要决定时，你主要依靠？',
    options: [
      { label: 'A', text: '直觉和第六感，身体知道答案', primary: '月亮灵', secondary: '梦神灵' },
      { label: 'B', text: '逻辑分析，数据不会说谎', primary: '智神灵', secondary: '律神灵' },
      { label: 'C', text: '内心深处的使命感，仿佛命运指引', primary: '命运灵', secondary: '轮回灵' },
      { label: 'D', text: '过往经验，踏实的才靠谱', primary: '律神灵', secondary: '爱神灵' },
    ],
  },
  {
    id: 5,
    text: '面对冲突，你的本能反应是？',
    options: [
      { label: 'A', text: '正面硬刚，绝不退缩', primary: '战神灵', secondary: '太阳灵' },
      { label: 'B', text: '冷静分析，找到破绽', primary: '律神灵', secondary: '智神灵' },
      { label: 'C', text: '共情理解，寻找和解', primary: '月亮灵', secondary: '爱神灵' },
      { label: 'D', text: '转换视角，跳出框架', primary: '自由灵', secondary: '命运灵' },
    ],
  },
  {
    id: 6,
    text: '你对"规则"的态度是？',
    options: [
      { label: 'A', text: '规则是给平庸者的，我是例外', primary: '太阳灵', secondary: '战神灵' },
      { label: 'B', text: '规则是保护伞，有秩序才有自由', primary: '律神灵', secondary: '爱神灵' },
      { label: 'C', text: '规则需要被理解，然后创造性使用', primary: '智神灵', secondary: '自由灵' },
      { label: 'D', text: '规则是幻象，真理在规则之外', primary: '梦神灵', secondary: '轮回灵' },
    ],
  },
  {
    id: 7,
    text: '你最害怕失去的是？',
    options: [
      { label: 'A', text: '自由和独立', primary: '自由灵', secondary: '战神灵' },
      { label: 'B', text: '安全感和归属', primary: '月亮灵', secondary: '爱神灵' },
      { label: 'C', text: '掌控感和影响力', primary: '太阳灵', secondary: '律神灵' },
      { label: 'D', text: '内心的平静和意义', primary: '梦神灵', secondary: '命运灵' },
    ],
  },
  {
    id: 8,
    text: '在亲密关系中，你更需要？',
    options: [
      { label: 'A', text: '被看见、被崇拜', primary: '太阳灵', secondary: '战神灵' },
      { label: 'B', text: '被理解、被接纳', primary: '月亮灵', secondary: '梦神灵' },
      { label: 'C', text: '被尊重、有空间', primary: '律神灵', secondary: '自由灵' },
      { label: 'D', text: '被珍惜、被呵护', primary: '爱神灵', secondary: '命运灵' },
    ],
  },
  {
    id: 9,
    text: '你处理负面情绪的方式是？',
    options: [
      { label: 'A', text: '用行动转化，化悲愤为力量', primary: '战神灵', secondary: '福神灵' },
      { label: 'B', text: '独处消化，让情绪自然流动', primary: '月亮灵', secondary: '梦神灵' },
      { label: 'C', text: '理性拆解，找到根源解决', primary: '智神灵', secondary: '律神灵' },
      { label: 'D', text: '深度转化，在痛苦中重生', primary: '轮回灵', secondary: '命运灵' },
    ],
  },
  {
    id: 10,
    text: '什么最能激发你的灵感？',
    options: [
      { label: 'A', text: '宏大的愿景和使命感', primary: '命运灵', secondary: '福神灵' },
      { label: 'B', text: '细腻的感受和美的体验', primary: '爱神灵', secondary: '月亮灵' },
      { label: 'C', text: '反常识的观点和颠覆性想法', primary: '自由灵', secondary: '智神灵' },
      { label: 'D', text: '生命的深度和隐藏的真相', primary: '轮回灵', secondary: '梦神灵' },
    ],
  },
  {
    id: 11,
    text: '你学习的最佳方式是？',
    options: [
      { label: 'A', text: '实践出真知，直接上手', primary: '战神灵', secondary: '太阳灵' },
      { label: 'B', text: '系统学习，从基础到进阶', primary: '律神灵', secondary: '智神灵' },
      { label: 'C', text: '发散探索，连接不同领域', primary: '福神灵', secondary: '自由灵' },
      { label: 'D', text: '沉浸体验，用身心去感知', primary: '梦神灵', secondary: '月亮灵' },
    ],
  },
  {
    id: 12,
    text: '你对"成功"的定义更接近？',
    options: [
      { label: 'A', text: '创造无可替代的价值', primary: '太阳灵', secondary: '命运灵' },
      { label: 'B', text: '建立持久稳固的基业', primary: '律神灵', secondary: '爱神灵' },
      { label: 'C', text: '持续成长和突破边界', primary: '自由灵', secondary: '战神灵' },
      { label: 'D', text: '活出真实的自己，内心富足', primary: '梦神灵', secondary: '轮回灵' },
    ],
  },
  {
    id: 13,
    text: '如果可以拥有一种超能力，你选？',
    options: [
      { label: 'A', text: '影响和感染所有人的魅力', primary: '太阳灵', secondary: '福神灵' },
      { label: 'B', text: '看透人心的洞察力', primary: '月亮灵', secondary: '轮回灵' },
      { label: 'C', text: '随心所欲操控时空', primary: '自由灵', secondary: '战神灵' },
      { label: 'D', text: '治愈一切创伤的力量', primary: '爱神灵', secondary: '梦神灵' },
    ],
  },
  {
    id: 14,
    text: '你最认同的人生阶段是？',
    options: [
      { label: 'A', text: '少年：热血冲劲，不怕犯错', primary: '战神灵', secondary: '福神灵' },
      { label: 'B', text: '青年：求知若渴，探索世界', primary: '智神灵', secondary: '自由灵' },
      { label: 'C', text: '中年：厚积薄发，掌控全局', primary: '律神灵', secondary: '太阳灵' },
      { label: 'D', text: '长者：看破不说破，通透自在', primary: '梦神灵', secondary: '命运灵' },
    ],
  },
  {
    id: 15,
    text: '你最想留下的遗产是？',
    options: [
      { label: 'A', text: '改变世界的创举', primary: '命运灵', secondary: '太阳灵' },
      { label: 'B', text: '温暖他人的记忆', primary: '月亮灵', secondary: '爱神灵' },
      { label: 'C', text: '颠覆性的思想或发明', primary: '自由灵', secondary: '智神灵' },
      { label: 'D', text: '一个坚不可摧的体系', primary: '律神灵', secondary: '轮回灵' },
    ],
  },
  {
    id: 16,
    text: '面对人生的重大转折，你会？',
    options: [
      { label: 'A', text: '主动制造转折，不甘平庸', primary: '战神灵', secondary: '命运灵' },
      { label: 'B', text: '顺应内心的召唤，即使前路未知', primary: '月亮灵', secondary: '命运灵' },
      { label: 'C', text: '冷静评估风险，谋定而后动', primary: '律神灵', secondary: '智神灵' },
      { label: 'D', text: '相信一切发生都有意义', primary: '梦神灵', secondary: '轮回灵' },
    ],
  },
  {
    id: 17,
    text: '你对"完美"的理解是？',
    options: [
      { label: 'A', text: '无可挑剔的极致呈现', primary: '爱神灵', secondary: '太阳灵' },
      { label: 'B', text: '万物各得其所的和谐', primary: '福神灵', secondary: '月亮灵' },
      { label: 'C', text: '不存在完美，进化永无止境', primary: '自由灵', secondary: '战神灵' },
      { label: 'D', text: '完美是执念，接纳残缺才是真', primary: '轮回灵', secondary: '梦神灵' },
    ],
  },
  {
    id: 18,
    text: '闭上眼睛，你看到的是？',
    options: [
      { label: 'A', text: '一片金色的光芒，充满力量', primary: '太阳灵', secondary: '战神灵' },
      { label: 'B', text: '深邃的星空，无限的可能', primary: '命运灵', secondary: '自由灵' },
      { label: 'C', text: '温柔的月光，宁静的湖水', primary: '月亮灵', secondary: '爱神灵' },
      { label: 'D', text: '一扇门，门后是未知', primary: '轮回灵', secondary: '智神灵' },
    ],
  },
];
