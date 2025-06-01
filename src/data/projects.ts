import todo from "~/assets/projects/todoapp/todoapp.png";
import tiflo from "~/assets/projects/tifloapp/tifloapp.png";
import music from "~/assets/projects/musicapp/musicapp.png";
import student from "~/assets/projects/studentapp/studentapp.png";

export interface ProjectType {
  id: number;
  title: string;
  about: string;
  description: string;
  thumbnail: string;
  tech: string[];
  githubUrl: string;
  filter: string[];
  type: string;
}

export const projects: ProjectType[] = [
  {
    id: 0,
    title: "Todo List",
    about: "Todo app challenge from Frontend Mentor",
    description: "",
    thumbnail: todo,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/DanhKhongUs/todolist-ui",
    filter: ["All", "Challenges", "Wed Development"],

    type: "Web Development",
  },
  {
    id: 1,
    title: "Tiflo app",
    about: "Tiflo app from Frontend Mentor",
    description: "",
    thumbnail: tiflo,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/DanhKhongUs/Tiflo",
    filter: ["All", "Web Development"],

    type: "Web Development",
  },
  {
    id: 2,
    title: "Music app",
    about: "Music app from Frontend Mentor",
    description: "",
    thumbnail: music,
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/DanhKhongUs/project_musicplayer",
    filter: ["All", "Web Development"],

    type: "Web Development",
  },
  {
    id: 3,
    title: "Student app",
    about: "Student app from Frontend Mentor",
    description: "",
    thumbnail: student,
    tech: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/DanhKhongUs/student-app",
    filter: ["All", "Web Development"],

    type: "Web Development",
  },
];
