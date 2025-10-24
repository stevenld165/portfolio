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

  "astro",

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
  },
  gitlab: {
    name: "GitLab C/I",
    iconName: "devicon:gitlab",
  },

  angular: {
    name: "Angular",
    iconName: "devicon:angular",
  },
  astro: {
    name: "Astro",
    iconName: "devicon:astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "devicon:bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "devicon:cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "devicon:html5",
  },
  javascript: {
    name: "JavaScript",
    iconName: "devicon:javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "devicon:mongo",
  },
  mysql: {
    name: "MySQL",

    iconName: "devicon:mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "devicon:wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "devicon:nodejs",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "devicon:tailwindcss",
  },
  figma: {
    name: "Figma",
    iconName: "devicon:figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "devicon:firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "devicon:markdown",
  },
  php: {
    name: "PHP",
    iconName: "devicon:php",
  },
  sass: {
    name: "Sass",
    iconName: "devicon:sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "devicon:typescript",
  },
  git: {
    name: "Git",
    iconName: "devicon:git",
  },
  css: {
    name: "CSS",
    iconName: "devicon:css3",
  },
  vercel: {
    name: "Vercel",
    iconName: "devicon:vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "devicon:netlify",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "devicon:deepseek",
  },
  python: {
    name: "Python",
    iconName: "devicon:python",
  },
}
