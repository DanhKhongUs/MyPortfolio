export interface SkillType {
  label: string;
  alt: string;
  skills: string[];
}

export const skillsData: SkillType[] = [
  {
    label: "Front-end",
    alt: "Frontend skills atom icon",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "HTML",
      "CSS",
      "SASS",
    ],
  },
  {
    label: "Back-end",
    alt: "Backend skills gear icon",
    skills: [],
  },
  {
    label: "General Skills",
    alt: "General skills icon",
    skills: ["Object-Oriented Programming", "Git", "GitHub"],
  },
];
