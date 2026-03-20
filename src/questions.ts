import type { TeamName, RoundQuestion } from "./data";

const NISHANT_TEAM_QUESTIONS: Record<number, RoundQuestion[]> = {
  1: [
    {
      id: 1,
      question: "What is TypeScript and how is it different from JavaScript?",
    },
    {
      id: 2,
      question: "What will be the inferred type of `score` in the snippet below?",
      codeSnippet: "const score = 10;",
    },
    {
      id: 3,
      question: "How do you define a function return type in TypeScript?",
      codeSnippet: "function greet(name: string): string {\n  return `Hello ${name}`;\n}",
    },
    { id: 4, question: "What is the difference between interface and type?" },
    {
      id: 5,
      question:
        "Why do we use optional properties (for example, name?: string)?",
    },
  ],
};

const KAPIL_TEAM_QUESTIONS: Record<number, RoundQuestion[]> = {
  1: [
    {
      id: 1,
      question: "What are the main benefits of using TypeScript in a project?",
    },
    {
      id: 2,
      question: "What is wrong with this annotation, if anything?",
      codeSnippet: "let city: string = 'Indore';",
    },
    {
      id: 3,
      question: "What is the purpose of readonly in interfaces?",
      codeSnippet: "interface User {\n  readonly id: number;\n  name: string;\n}",
    },
    {
      id: 4,
      question:
        "How do optional chaining and nullish coalescing help in TS code?",
      codeSnippet:
        "const displayName = user?.profile?.name ?? 'Guest';",
    },
    { id: 5, question: "When would you use enum in TypeScript?" },
  ],
};

export const TEAM_ROUND_QUESTIONS: Record<
  TeamName,
  Record<number, RoundQuestion[]>
> = {
  "Nishant Ke Favourite": NISHANT_TEAM_QUESTIONS,
  "Kapil Ke Khaas": KAPIL_TEAM_QUESTIONS,
};
