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
      codeSnippet:
        "function logMessage(msg: string): void {\n  console.log(msg);\n}\n\nfunction throwError(msg: string): never {\n  throw new Error(msg);\n}",
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
      codeSnippet:
        "function getLength(input: string | any[]): number {\n  return input.length;\n}",
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
      codeSnippet:
        'type Nullable<T> = T | null | undefined;\n\nlet username: Nullable<string>;\nusername = "Neha";\nusername = null;\nusername = undefined;\n// username = 42;',
    },
  ],
  2: [
    {
      id: 1,
      question:
        "Implement a generic function `first` that takes an array of any type and returns the first element, with the correct return type inferred automatically.",
      codeSnippet:
        "function first<T>(arr: T[]): T | undefined {\n  return arr[0];\n}",
    },
    {
      id: 2,
      question:
        "What are the resulting types of `A`, `B`, and `C` in the conditional type below? Explain how conditional types work here.",
      codeSnippet:
        'type IsString<T> = T extends string ? "yes" : "no";\n\ntype A = IsString<string>;\ntype B = IsString<number>;\ntype C = IsString<"hello">;',
    },
    {
      id: 3,
      question:
        "Implement a recursive type `DeepReadonly<T>` that makes all nested properties readonly, not just the top-level ones.",
      codeSnippet:
        "interface AppState {\n  user: {\n    name: string;\n    settings: {\n      theme: string;\n      notifications: boolean;\n    };\n  };\n  items: string[];\n}\n\ntype DeepReadonly<T> = {\n  readonly [K in keyof T]: T[K] extends object\n    ? DeepReadonly<T[K]>\n    : T[K];\n};",
    },
    {
      id: 4,
      question:
        "What is the type of `Result` below? Explain why conditional types distribute over unions and how that changes the output.",
      codeSnippet:
        "type ToArray<T> = T extends any ? T[] : never;\n\ntype Result = ToArray<string | number>;\n\ntype ToArrayNonDist<T> = [T] extends [any] ? T[] : never;\ntype Result2 = ToArrayNonDist<string | number>;",
    },
    {
      id: 5,
      question:
        "Create a type `FunctionKeys<T>` that extracts only the keys of `T` whose values are functions.",
      codeSnippet:
        "interface API {\n  baseUrl: string;\n  timeout: number;\n  fetchUser: (id: number) => Promise<User>;\n  fetchPosts: () => Promise<Post[]>;\n  retryCount: number;\n}\n\ntype FunctionKeys<T> = {\n  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;\n}[keyof T];",
    },
    {
      id: 6,
      question:
        "Write a generic type `Merge<A, B>` that merges two object types, with `B` overriding overlapping properties from `A`.",
      codeSnippet:
        'type Merge<A, B> = Omit<A, keyof B> & B;\n\ninterface Defaults {\n  color: string;\n  size: number;\n  visible: boolean;\n}\n\ninterface Overrides {\n  color: "red" | "blue";\n  opacity: number;\n}\n\ntype Final = Merge<Defaults, Overrides>;',
    },
    {
      id: 7,
      question:
        "Write a generic type guard function `isNonNull` that removes `null` and `undefined` from any type `T`, and explain how it helps with array filtering.",
      codeSnippet:
        'function isNonNull<T>(val: T): val is NonNullable<T> {\n  return val !== null && val !== undefined;\n}\n\nconst items: (string | null | undefined)[] = ["a", null, "b", undefined];\nconst filtered = items.filter(isNonNull);',
    },
    {
      id: 8,
      question:
        "What will be the types of `A`, `B`, and `C` below? Explain how the `infer` keyword works in this utility type.",
      codeSnippet:
        "type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never;\n\ntype A = ReturnOf<() => string>;\ntype B = ReturnOf<(x: number) => boolean>;\ntype C = ReturnOf<string>;",
    },
    {
      id: 9,
      question:
        "Create a discriminated union for API response states and write a function that handles all cases with exhaustive checking so invalid states are caught at compile time.",
      codeSnippet:
        'type ApiResponse<T> =\n  | { status: "loading" }\n  | { status: "success"; data: T }\n  | { status: "error"; error: string };\n\nfunction handleResponse(res: ApiResponse<User>): string {\n  switch (res.status) {\n    case "loading":\n      return "Loading...";\n    case "success":\n      return res.data.name;\n    case "error":\n      return res.error;\n    default: {\n      const _exhaustive: never = res;\n      return _exhaustive;\n    }\n  }\n}',
    },
    {
      id: 10,
      question:
        "Create a strongly typed event emitter where `emit` enforces the correct payload for each event and `on` automatically infers the correct payload type for each handler. Payload should be required for events that need it and disallowed for `void` events.",
      codeSnippet:
        "type Events = {\n  login: { userId: number };\n  logout: void;\n  error: { message: string; code: number };\n};\n\ndeclare function createEmitter<E>(): {\n  emit<K extends keyof E>(\n    event: K,\n    ...args: E[K] extends void ? [] : [payload: E[K]]\n  ): void;\n  on<K extends keyof E>(\n    event: K,\n    handler: E[K] extends void ? () => void : (payload: E[K]) => void\n  ): void;\n};\n\nconst emitter = createEmitter<Events>();",
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
      codeSnippet:
        "type DeepReadonly<T> = {\n  readonly [K in keyof T]: T[K] extends object\n    ? DeepReadonly<T[K]>\n    : T[K];\n};",
    },
    {
      id: 10,
      question:
        "Implement a generic DeepPartial<T> that recursively makes all nested properties optional.",
      codeSnippet:
        "type DeepPartial<T> = {\n  [K in keyof T]?: T[K] extends object\n    ? DeepPartial<T[K]>\n    : T[K];\n};",
    },
  ],
  2: [
    {
      id: 1,
      question:
        "Implement a generic function `last` that takes an array of any type and returns the last element with correct type inference.",
      codeSnippet:
        "function last<T>(arr: T[]): T | undefined {\n  return arr[arr.length - 1];\n}",
    },
    {
      id: 2,
      question:
        "What are types `A`, `B`, and `C`? Explain how conditional types evaluate in the example below.",
      codeSnippet:
        'type IsArray<T> = T extends any[] ? "array" : "other";\n\n' +
        "type A = IsArray<string[]>;\n" +
        "type B = IsArray<number>;\n" +
        "type C = IsArray<[string, number]>;",
    },
    {
      id: 3,
      question:
        "Implement a `DeepPartial<T>` type that makes ALL nested properties optional recursively.",
      codeSnippet:
        "interface FormData {\n" +
        "  user: {\n" +
        "    name: string;\n" +
        "    address: {\n" +
        "      city: string;\n" +
        "      zip: number;\n" +
        "    };\n" +
        "  };\n" +
        "  agreed: boolean;\n" +
        "}\n\n" +
        "type DeepPartial<T> = {\n" +
        "  [K in keyof T]?: T[K] extends object\n" +
        "    ? DeepPartial<T[K]>\n" +
        "    : T[K];\n" +
        "};",
    },
    {
      id: 4,
      question:
        "Explain why this produces different results and what 'naked' vs 'clothed' type parameters mean.",
      codeSnippet:
        "type Dist<T> = T extends string ? T[] : never;\n" +
        "type NoDist<T> = [T] extends [string] ? T[] : never;\n\n" +
        'type A = Dist<"a" | "b" | 1>;\n' +
        'type B = NoDist<"a" | "b" | 1>;',
    },
    {
      id: 5,
      question:
        "Create a type `ReadonlyKeys<T>` that extracts only the keys of `T` that are readonly.",
      codeSnippet:
        "interface Mixed {\n" +
        "  readonly id: number;\n" +
        "  name: string;\n" +
        "  readonly createdAt: Date;\n" +
        "  updatedAt: Date;\n" +
        "}\n\n" +
        "type ReadonlyKeys<T> = {\n" +
        "  [K in keyof T]-?: (<V>() => V extends { [P in K]: T[K] } ? 1 : 2) extends\n" +
        "    (<V>() => V extends { -readonly [P in K]: T[K] } ? 1 : 2)\n" +
        "    ? never\n" +
        "    : K;\n" +
        "}[keyof T];",
    },
    {
      id: 6,
      question:
        "Write a type `Override<T, U>` that takes type `T` and overrides only the matching keys with types from `U`, keeping the rest unchanged.",
      codeSnippet:
        "type Override<T, U extends Partial<Record<keyof T, any>>> = Omit<T, keyof U> & U;\n\n" +
        "interface BaseConfig {\n" +
        "  host: string;\n" +
        "  port: number;\n" +
        "  debug: boolean;\n" +
        "}\n\n" +
        "type ProdConfig = Override<BaseConfig, { debug: false; port: 443 }>; // { host: string; debug: false; port: 443 }",
    },
    {
      id: 7,
      question:
        "Write a type guard function `isError` using a custom type predicate that works with this union.",
      codeSnippet:
        'interface Success { kind: "success"; data: any; }\n' +
        'interface Failure { kind: "failure"; error: Error; }\n\n' +
        "function isError(result: Success | Failure): result is Failure {\n" +
        '  return result.kind === "failure";\n' +
        "}\n\n" +
        "function handle(result: Success | Failure) {\n" +
        "  if (isError(result)) {\n" +
        "    console.log(result.error.message); // result: Failure\n" +
        "  } else {\n" +
        "    console.log(result.data); // result: Success\n" +
        "  }\n}",
    },
    {
      id: 8,
      question:
        "What types do `A`, `B`, and `C` resolve to? Explain how `infer` pattern matches in different positions.",
      codeSnippet:
        "type First<T> = T extends [infer F, ...any[]] ? F : never;\n" +
        "type Last<T> = T extends [...any[], infer L] ? L : never;\n" +
        "type Middle<T> = T extends [any, ...infer M, any] ? M : never;\n\n" +
        "type A = First<[1, 2, 3]>;\n" +
        "type B = Last<[1, 2, 3]>;\n" +
        "type C = Middle<[1, 2, 3]>;",
    },
    {
      id: 9,
      question:
        "Create a discriminated union for a state machine representing a network request. Include an impossible state check.",
      codeSnippet:
        "type RequestState<T> =\n" +
        '  | { state: "idle" }\n' +
        '  | { state: "pending"; startedAt: number }\n' +
        '  | { state: "fulfilled"; data: T; completedAt: number }\n' +
        '  | { state: "rejected"; error: Error; retryCount: number };\n\n' +
        "function renderUI(req: RequestState<string>) {\n" +
        "  switch (req.state) {\n" +
        '    case "idle":\n' +
        '      return "Ready";\n' +
        '    case "pending":\n' +
        "      return `Loading since ${req.startedAt}`;\n" +
        '    case "fulfilled":\n' +
        "      return req.data;\n" +
        '    case "rejected":\n' +
        "      return `Error: ${req.error.message} (retries: ${req.retryCount})`;\n" +
        "    default: {\n" +
        "      const _: never = req; // Compile error if a state is missed\n" +
        "      return _;\n" +
        "    }\n" +
        "  }\n}",
    },
    {
      id: 10,
      question:
        "Write a template literal type `EventName` that generates valid event handler names (on + capitalized event) from a union of events.",
      codeSnippet:
        'type Events = "click" | "hover" | "focus";\n' +
        'type EventName = `on${Capitalize<Events>}`; // Should produce "onClick" | "onHover" | "onFocus"',
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
