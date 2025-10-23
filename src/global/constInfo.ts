export const PERSONAL_INFO = {
  github: "https://github.com/stevenld165",
  email: "stevenld165@gmail.com",
  linkedin: "https://www.linkedin.com/in/steven-duong-141740327/",
}

export const PERSONAL_TECHNOLOGIES = [
  "java",
  "csharp",
  "javascript",
  "ts",
  "python",
  "php",

  "html",
  "css",
  "tailwind",

  "node",

  "react",
  "vue",
  "nuxt",

  "mysql",
  "postgres",

  "firebase",
  "supabase",

  "dotnet",
  "expressjs",

  "figma",
  "vercel",
  "netlify",

  "git",
  "gitlab",
  "markdown",
]

export interface ExperienceItem {
  title: string
  employer: string
  start: string
  end: string
  desc: string
}

export const PERSONAL_WORK_EXPERIENCE: ExperienceItem[] = [
  {
    title: "Software Engineering Intern",
    employer: "Ayoka Systems",
    start: "May 2025",
    end: "Aug 2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    title: "Software Engineering Student",
    employer: "University of Texas at Dallas",
    start: "Sep 2023",
    end: "Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
]

export interface TechnologyItem {
  name: string
  iconName: string
  className?: string
}

export const TECHNOLOGIES: Record<string, TechnologyItem> = {
  csharp: {
    name: "C#",
    iconName: "devicon:csharp",
  },
  java: {
    name: "Java",
    iconName: "devicon:java",
    className: "bg-[#f6ece1]!",
  },
  react: {
    name: "React",
    iconName: "devicon:react",
  },
  vue: {
    name: "Vue",
    iconName: "devicon:vuejs",
  },
  nuxt: {
    name: "Nuxt",
    iconName: "devicon:nuxt",
  },
  postgres: {
    name: "PostgreSQL",
    iconName: "devicon:postgresql",
  },
  supabase: {
    name: "Supabase",
    iconName: "devicon:supabase",
  },
  dotnet: {
    name: ".NET",
    iconName: "devicon:dotnetcore",
  },
  expressjs: {
    name: "Express.js",
    iconName: "devicon:express",
    className: "bg-[#f6ece1]!",
  },
  gitlab: {
    name: "GitLab C/I",
    iconName: "devicon:gitlab",
  },
}
