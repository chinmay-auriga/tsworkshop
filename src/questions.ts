import type { TeamName, RoundQuestion } from "./data";

const NISHANT_TEAM_QUESTIONS: Record<number, RoundQuestion[]> = {
  1: [
    {
      id: 1,
      question:
        "What will be the output of the following code? Explain the type transformations happening at each step.",
      codeSnippet:
        'let x: string = "hello";\nlet y: number = x.length;\nlet z: boolean = !!y;\nconsole.log(typeof z, z);',
    },
    {
      id: 2,
      question:
        "Identify and fix all type errors in the following interface usage. Explain why each issue occurs.",
      codeSnippet:
        'interface User {\n  name: string;\n  age: number;\n  email?: string;\n}\n\nconst user: User = {\n  name: "Ashish",\n  age: "25",\n  email: null,\n};',
    },
    {
      id: 3,
      question:
        "Explain the difference between `never` and `void`. Provide examples of when each should be used.",
    },
    {
      id: 4,
      question:
        "What will TypeScript infer as the type of `result`? Why does this inference happen?",
      codeSnippet:
        'const values = [1, "two", 3, "four"];\nconst result = values[0];',
    },
    {
      id: 5,
      question:
        "Write a function `getLength` that accepts either a string or an array and returns its length. How does TypeScript allow safe access without narrowing?",
    },
    {
      id: 6,
      question:
        "What is wrong with the following enum usage? How would you redesign it to make it type-safe?",
      codeSnippet:
        "enum Direction {\n  Up,\n  Down,\n  Left,\n  Right,\n}\n\nfunction move(dir: Direction) {\n  console.log(dir);\n}\n\nmove(0);\nmove(5);",
    },
    {
      id: 7,
      question:
        "Explain the behavior of tuples in the following snippet. What happens if you try to access an out-of-bounds index?",
      codeSnippet:
        'const tuple: [string, number] = ["age", 30];\nconsole.log(tuple[0].toUpperCase());\nconsole.log(tuple[1].toFixed(2));\n// console.log(tuple[2]);',
    },
    {
      id: 8,
      question:
        "What is the type of `key` inside this loop? Why is a type assertion needed when indexing?",
      codeSnippet:
        'interface Config {\n  host: string;\n  port: number;\n  debug: boolean;\n}\n\nconst config: Config = { host: "localhost", port: 3000, debug: true };\n\nfor (const key in config) {\n  console.log(config[key as keyof Config]);\n}',
    },
    {
      id: 9,
      question:
        "Will this function compile? If not, fix it using proper type narrowing and explain why `unknown` behaves this way.",
      codeSnippet:
        "function processValue(val: unknown) {\n  console.log(val.toUpperCase());\n}",
    },
    {
      id: 10,
      question:
        "Create a generic utility type `Nullable<T>` and demonstrate its usage. How does it differ from optional properties?",
    },
  ],
};

const KAPIL_TEAM_QUESTIONS: Record<number, RoundQuestion[]> = {
  1: [
    {
      id: 1,
      question:
        "Will this code compile? If not, explain the error and fix it using proper type narrowing.",
      codeSnippet:
        "function printId(id: string | number) {\n  if (id) {\n    console.log(id.toUpperCase());\n  }\n}",
    },
    {
      id: 2,
      question:
        "Will this code produce a runtime or compile-time issue? Explain how type assertions can introduce unsafe behavior.",
      codeSnippet:
        "interface User {\n  name: string;\n}\n\nconst data = {\n  age: 25\n} as User;\n\nfunction printName(user: User) {\n  console.log(user.name.length);\n}\n\nprintName(data);",
    },
    {
      id: 3,
      question:
        "You are building a lookup map. Create a function that accepts only valid role keys and returns the correct value type.",
      codeSnippet:
        'const roles = {\n  admin: { access: "all" },\n  user: { access: "limited" },\n};',
    },
    {
      id: 4,
      question:
        "Determine the inferred types of A, B, C, D, and E. Explain distributive conditional types and keyof behavior.",
      codeSnippet:
        'type Shape =\n  | { kind: "circle"; radius: number }\n  | { kind: "square"; size: number }\n  | { kind: "rectangle"; width: number; height: number };\n\ntype ExtractByKind<T, K> = T extends { kind: K } ? T : never;\n\ntype A = ExtractByKind<Shape, "circle">;\ntype B = ExtractByKind<Shape, "circle" | "square">;\ntype C = ExtractByKind<Shape, string>;\n\ntype Keys<T> = T extends any ? keyof T : never;\n\ntype D = Keys<Shape>;\ntype E = keyof Shape;',
    },
    {
      id: 5,
      question:
        "Will assigning between these types cause an error? Explain structural typing in TypeScript.",
      codeSnippet:
        'type A = { name: string };\ntype B = { name: string };\n\nlet a: A = { name: "John" };\nlet b: B = a;',
    },
    {
      id: 6,
      question:
        "What is the difference between optional properties and union with undefined? Explain with implications.",
      codeSnippet:
        "type User1 = { name: string; age?: number };\ntype User2 = { name: string; age: number | undefined };",
    },
    {
      id: 7,
      question:
        "Will this code compile? Explain optional chaining behavior and potential undefined issues.",
      codeSnippet:
        "type User = { profile?: { name: string } };\n\nfunction getName(u: User) {\n  return u.profile?.name.toUpperCase();\n}",
    },
    {
      id: 8,
      question:
        "Will this discriminated union logic compile? If not, explain why narrowing fails.",
      codeSnippet:
        'type A = { kind: "a"; value: string };\ntype B = { kind: "b"; value: number };\n\nfunction f(x: A | B) {\n  if ("value" in x) {\n    return x.value.toUpperCase();\n  }\n  return x.value.toFixed(2);\n}',
    },
    {
      id: 9,
      question:
        "Implement a generic DeepReadonly<T> that recursively makes all nested properties readonly.",
    },
    {
      id: 10,
      question:
        "Implement a generic DeepPartial<T> that recursively makes all nested properties optional.",
    },
  ],
};

export const TEAM_ROUND_QUESTIONS: Record<
  TeamName,
  Record<number, RoundQuestion[]>
> = {
  "Nishant Ke Favourite": NISHANT_TEAM_QUESTIONS,
  "Kapil Ke Khaas": KAPIL_TEAM_QUESTIONS,
};
