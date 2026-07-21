
export interface Skill {
  id: number;
  icon: string;
  percentage: string;
  name: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  skill: Skill[];
}
