import { LucideIcon, Gamepad2, Palette, Music, Code2, BookOpen } from 'lucide-react';

export interface Interest {
  id: number;
  name: string;
  color: string;
  bgGradient: string;
  icon: LucideIcon;
  description: string;
  details: string[];
  emoji: string;
}

export const interests: Interest[] = [
  {
    id: 0,
    name: 'Games',
    color: 'blue',
    bgGradient: 'from-blue-400 to-blue-600',
    icon: Gamepad2,
    emoji: '🎮',
    description: 'Gaming is my escape and inspiration',
    details: [
      'Love exploring different game genres — RPGs, strategy, indie games',
      'Fascinated by game design and mechanics',
      'Enjoy both competitive and casual gaming',
      'Games teach problem-solving and creativity'
    ]
  },
  {
    id: 1,
    name: 'Art',
    color: 'pink',
    bgGradient: 'from-pink-400 to-rose-600',
    icon: Palette,
    emoji: '🎨',
    description: 'Art fuels creativity and self-expression',
    details: [
      'Appreciate both digital and traditional art forms',
      'Inspired by concept art, illustration, and character design',
      'Art influences my approach to UI/UX design',
      'Constantly learning new creative techniques'
    ]
  },
  {
    id: 2,
    name: 'Music',
    color: 'green',
    bgGradient: 'from-green-400 to-emerald-600',
    icon: Music,
    emoji: '🎵',
    description: 'Music keeps me motivated and grounded',
    details: [
      'Eclectic taste — from lo-fi beats to synthwave',
      'Music fuels productivity during coding sessions',
      'Appreciate both instrumental and vocal compositions',
      'Exploring audio design and sonic branding'
    ]
  },
  {
    id: 3,
    name: 'Tech',
    color: 'purple',
    bgGradient: 'from-purple-400 to-indigo-600',
    icon: Code2,
    emoji: '💻',
    description: 'Technology is my canvas and playground',
    details: [
      'Passionate about web development and design',
      'Constantly learning new frameworks and languages',
      'Interested in AI, automation, and creative tech',
      'Love building tools that solve real problems'
    ]
  },
  {
    id: 4,
    name: 'Writing',
    color: 'orange',
    bgGradient: 'from-orange-400 to-red-600',
    icon: BookOpen,
    emoji: '✍️',
    description: 'Writing helps me think and communicate',
    details: [
      'Enjoy storytelling and creative writing',
      'Technical writing for documentation and guides',
      'Blogging about tech insights and learnings',
      'Writing clarifies thoughts and builds understanding'
    ]
  }
];

export const getInterestById = (id: number): Interest | undefined => {
  return interests.find(interest => interest.id === id);
};

export const getNextInterest = (currentId: number): number => {
  return (currentId + 1) % interests.length;
};

export const getPreviousInterest = (currentId: number): number => {
  return (currentId - 1 + interests.length) % interests.length;
};
