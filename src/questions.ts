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
  3: [
    {
      id: 1,
      question:
        "Build a fully typed Search Filter React component that filters users by name (case insensitive) without using `any`.",
      codeSnippet:
        'type User = { id: number; name: string };\n\nfunction SearchFilter<T extends { id: number; name: string }>({\n  users,\n}: {\n  users: T[];\n}) {\n  const [query, setQuery] = React.useState("");\n\n  const filtered = React.useMemo(() => {\n    return users.filter((u) =>\n      u.name.toLowerCase().includes(query.toLowerCase())\n    );\n  }, [users, query]);\n\n  return (\n    <div>\n      <input\n        value={query}\n        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>\n          setQuery(e.target.value)\n        }\n      />\n      {filtered.map((u) => (\n        <div key={u.id}>{u.name}</div>\n      ))}\n    </div>\n  );\n}',
    },
    {
      id: 2,
      question:
        "Implement a strongly typed `useDynamicForm` hook where schema drives inferred value types and setter enforces correct types.",
      codeSnippet:
        "type FieldMap = {\n  text: string;\n  number: number;\n  checkbox: boolean;\n};\n\ntype Schema = Record<string, { type: keyof FieldMap; default: unknown }>;\n\ntype InferValues<T extends Schema> = {\n  [K in keyof T]: FieldMap[T[K]['type']];\n};\n\nfunction useDynamicForm<T extends Schema>(schema: T) {\n  const initialValues = Object.keys(schema).reduce((acc, key) => {\n    const k = key as keyof T;\n    acc[k] = schema[k].default as InferValues<T>[typeof k];\n    return acc;\n  }, {} as InferValues<T>);\n\n  const [values, setValues] = React.useState(initialValues);\n\n  function setValue<K extends keyof T>(key: K, value: InferValues<T>[K]) {\n    setValues((prev) => ({ ...prev, [key]: value }));\n  }\n\n  function reset() {\n    setValues(initialValues);\n  }\n\n  return { values, setValue, reset };\n}",
    },
    {
      id: 3,
      question:
        "Build a typed multi-step form state machine using discriminated unions without `any`, `as`, or non-null assertions.",
      codeSnippet:
        "type Step1Data = { name: string; age: number; email: string };\ntype Step2Data = { role: 'frontend' | 'backend' | 'fullstack'; experience: 'junior' | 'mid' | 'senior'; newsletter: boolean };\n\ntype FormStep =\n  | { step: 1; data: Step1Data }\n  | { step: 2; data: Step2Data }\n  | { step: 3; data: Step1Data & Step2Data };",
    },
    {
      id: 4,
      question:
        "Implement a generic `useStepState<T>` hook that manages form data and validation errors for each step.",
      codeSnippet:
        "function useStepState<T>(initial: T) {\n  const [data, setData] = React.useState<T>(initial);\n  const [errors, setErrors] = React.useState<Record<keyof T, string | undefined>>({} as Record<keyof T, string | undefined>);\n\n  function update<K extends keyof T>(key: K, value: T[K]) {\n    setData((prev) => ({ ...prev, [key]: value }));\n  }\n\n  return { data, errors, setErrors, update };\n}",
    },
    {
      id: 5,
      question:
        "Write a generic validation function that maps errors to the exact keys of the input type without using `any`.",
      codeSnippet:
        "function validate<T extends Record<string, unknown>>(data: T): Record<keyof T, string | undefined> {\n  const result = {} as Record<keyof T, string | undefined>;\n\n  for (const key in data) {\n    if (!data[key]) {\n      result[key] = 'Required';\n    }\n  }\n\n  return result;\n}",
    },
    {
      id: 6,
      question:
        "Create a typed StepIndicator component using mapped types based on FormStep['step'].",
      codeSnippet:
        "type Steps = 1 | 2 | 3;\n\nconst stepLabels: Record<Steps, string> = {\n  1: 'Personal',\n  2: 'Preferences',\n  3: 'Review',\n};\n\nfunction StepIndicator({ current }: { current: Steps }) {\n  return (\n    <div>\n      {(Object.keys(stepLabels) as unknown as Steps[]).map((step) => (\n        <span key={step}>\n          {stepLabels[step]} {step === current ? '(active)' : ''}\n        </span>\n      ))}\n    </div>\n  );\n}",
    },
    {
      id: 7,
      question:
        "Create a reusable TextBox component that only accepts text-like input types and supports all native handlers.",
      codeSnippet:
        "type InputType = 'text' | 'email' | 'search';\n\ntype TextBoxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {\n  type?: InputType;\n};\n\nconst TextBox = React.forwardRef<HTMLInputElement, TextBoxProps>(\n  ({ type = 'text', ...rest }, ref) => {\n    return <input ref={ref} type={type} {...rest} />;\n  }\n);",
    },
    {
      id: 8,
      question:
        "Ensure onChange is strictly typed and propagates correct value types in a controlled input component.",
      codeSnippet:
        "type Props = {\n  value: string;\n  onChange: (value: string) => void;\n};\n\nfunction Input({ value, onChange }: Props) {\n  return (\n    <input\n      value={value}\n      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>\n        onChange(e.target.value)\n      }\n    />\n  );\n}",
    },
    {
      id: 9,
      question:
        "Compose final submission data from multiple steps ensuring full type safety without casting.",
      codeSnippet:
        "function combine<A, B>(a: A, b: B): A & B {\n  return { ...a, ...b };\n}",
    },
    {
      id: 10,
      question:
        "Handle step transitions with type-safe guards ensuring invalid transitions are impossible.",
      codeSnippet:
        "function nextStep(step: FormStep): FormStep {\n  switch (step.step) {\n    case 1:\n      return { step: 2, data: { role: 'frontend', experience: 'junior', newsletter: false } };\n    case 2:\n      return { step: 3, data: { ...step.data } };\n    case 3:\n      return step;\n  }\n}",
    },
  ],
  4: [
    {
      id: 1,
      question:
        "What does `strict: true` do in tsconfig.json? Name at least 3 individual flags it enables.",
    },
    {
      id: 2,
      question:
        "What is the difference between `target`, `module`, and `moduleResolution` in tsconfig.json?",
    },
    {
      id: 3,
      question:
        "What will TypeScript infer as the type of `val` here, and what runtime problem can occur without `noUncheckedIndexedAccess`?",
      codeSnippet: `const arr: string[] = ["a", "b"];\nconst val = arr[5];\nconsole.log(val.toUpperCase());`,
    },
    {
      id: 4,
      question:
        "What does `skipLibCheck: true` do? When is it safe to use and when is it risky?",
    },
    {
      id: 5,
      question:
        "What is wrong with this code when `isolatedModules: true` is set, and how do you fix it?",
      codeSnippet: `// types.ts\nexport type User = { id: number; name: string };\n\n// index.ts\nexport { User } from "./types";`,
    },
    {
      id: 6,
      question:
        "What do `declaration`, `declarationMap`, and `sourceMap` each do? Which combination would you use when publishing an npm library?",
    },
    {
      id: 7,
      question:
        "Given this tsconfig, what files get compiled — and can `src/global.d.ts` be excluded by the `exclude` pattern? Why or why not?",
      codeSnippet: `{\n  "compilerOptions": { },\n  "include": ["src/**/*"],\n  "exclude": ["src/**/*.test.ts"],\n  "files": ["src/global.d.ts"]\n}`,
    },
    {
      id: 8,
      question:
        "Identify the two conflicting flags in these compiler options and explain why they conflict.",
      codeSnippet: `{\n  "compilerOptions": {\n    "strict": true,\n    "noImplicitAny": false,\n    "noEmit": true,\n    "declaration": true,\n    "esModuleInterop": false,\n    "allowSyntheticDefaultImports": true\n  }\n}`,
    },
    {
      id: 9,
      question:
        "What does `baseUrl` and `paths` do in this config? What additional step is required outside of tsconfig for aliases to work at runtime?",
      codeSnippet: `{\n  "compilerOptions": {\n    "baseUrl": "./src",\n    "paths": {\n      "@components/*": ["components/*"]\n    }\n  }\n}`,
    },
    {
      id: 10,
      question:
        "Design a TypeScript monorepo setup using Project References for `packages/shared` and `packages/app`. What is `composite: true` required for, and what does `tsc --build` do differently from `tsc`?",
      codeSnippet: `// Expected structure:\n// packages/shared/tsconfig.json  → composite: true\n// packages/app/tsconfig.json     → references shared\n// tsconfig.json (root)           → references both\n\n// Fill in the correct tsconfig for each level.`,
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
  3: [
    {
      id: 1,
      question:
        "Implement a Virtualized List component in React with TypeScript that efficiently renders large datasets by only mounting visible items.",
      codeSnippet:
        'type Item = { id: number; text: string };\n\nfunction VirtualizedList<T extends { id: number }>({\n  items,\n  itemHeight,\n  height,\n  render,\n}: {\n  items: T[];\n  itemHeight: number;\n  height: number;\n  render: (item: T) => React.ReactNode;\n}) {\n  const [scrollTop, setScrollTop] = React.useState(0);\n\n  const startIndex = Math.floor(scrollTop / itemHeight);\n  const endIndex = Math.min(\n    items.length,\n    Math.ceil((scrollTop + height) / itemHeight)\n  );\n\n  const visibleItems = items.slice(startIndex, endIndex);\n\n  return (\n    <div\n      style={{ overflowY: "auto", height }}\n      onScroll={(e: React.UIEvent<HTMLDivElement>) =>\n        setScrollTop(e.currentTarget.scrollTop)\n      }\n    >\n      <div style={{ height: items.length * itemHeight, position: "relative" }}>\n        {visibleItems.map((item, idx) => (\n          <div\n            key={item.id}\n            style={{\n              position: "absolute",\n              top: (startIndex + idx) * itemHeight,\n              height: itemHeight,\n            }}\n          >\n            {render(item)}\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}',
    },
    {
      id: 2,
      question:
        "Build a type-safe state machine in TypeScript for a React component ensuring only valid transitions between states.",
      codeSnippet:
        'type State = "idle" | "loading" | "success" | "error";\n\ntype Event =\n  | { type: "FETCH" }\n  | { type: "RESOLVE" }\n  | { type: "REJECT" }\n  | { type: "RESET" };\n\nconst transitions: Record<State, Partial<Record<Event["type"], State>>> = {\n  idle: { FETCH: "loading" },\n  loading: { RESOLVE: "success", REJECT: "error" },\n  success: { RESET: "idle" },\n  error: { RESET: "idle" },\n};\n\nfunction reducer(state: State, event: Event): State {\n  return transitions[state][event.type] ?? state;\n}',
    },
    {
      id: 3,
      question:
        "Create a type-safe Event Emitter class in TypeScript supporting strongly typed event payloads.",
      codeSnippet:
        "type Events = {\n  message: { text: string };\n  close: void;\n};\n\nclass EventEmitter<E extends Record<string, any>> {\n  private listeners: {\n    [K in keyof E]?: ((payload: E[K]) => void)[];\n  } = {};\n\n  on<K extends keyof E>(event: K, cb: (payload: E[K]) => void) {\n    (this.listeners[event] ||= []).push(cb);\n  }\n\n  emit<K extends keyof E>(event: K, payload: E[K]) {\n    this.listeners[event]?.forEach((cb) => cb(payload));\n  }\n}",
    },
    {
      id: 4,
      question:
        "Build an Infinite Scroll component in React with TypeScript that fetches additional data on reaching the bottom.",
      codeSnippet:
        'function InfiniteScroll<T>({\n  fetchMore,\n  render,\n}: {\n  fetchMore: () => Promise<T[]>;\n  render: (item: T) => React.ReactNode;\n}) {\n  const [items, setItems] = React.useState<T[]>([]);\n\n  const handleScroll = async (e: React.UIEvent<HTMLDivElement>) => {\n    const el = e.currentTarget;\n    if (el.scrollTop + el.clientHeight >= el.scrollHeight) {\n      const more = await fetchMore();\n      setItems((prev) => [...prev, ...more]);\n    }\n  };\n\n  return (\n    <div onScroll={handleScroll} style={{ overflowY: "auto", height: 400 }}>\n      {items.map(render)}\n    </div>\n  );\n}',
    },
    {
      id: 5,
      question:
        "Implement a dynamic form builder in React with TypeScript based on a configuration object with validation rules.",
      codeSnippet:
        'type Field = {\n  name: string;\n  type: "text" | "number";\n  required?: boolean;\n};\n\nfunction DynamicForm({ fields }: { fields: Field[] }) {\n  const [values, setValues] = React.useState<Record<string, any>>({});\n\n  return (\n    <form>\n      {fields.map((f) => (\n        <input\n          key={f.name}\n          type={f.type}\n          onChange={(e) =>\n            setValues({ ...values, [f.name]: e.target.value })\n          }\n        />\n      ))}\n    </form>\n  );\n}',
    },
    {
      id: 6,
      question:
        "Create a Tree View component in React with TypeScript supporting recursive rendering of nested nodes.",
      codeSnippet:
        "type TreeNode = {\n  id: string;\n  name: string;\n  children?: TreeNode[];\n};\n\nfunction Tree({ node }: { node: TreeNode }) {\n  const [open, setOpen] = React.useState(false);\n\n  return (\n    <div>\n      <div onClick={() => setOpen((o) => !o)}>{node.name}</div>\n      {open &&\n        node.children?.map((child) => (\n          <Tree key={child.id} node={child} />\n        ))}\n    </div>\n  );\n}",
    },
    {
      id: 7,
      question:
        "Implement a drag-and-drop list in React with TypeScript allowing reordering of items.",
      codeSnippet:
        "type Item = { id: string; text: string };\n\nfunction DragList({ items }: { items: Item[] }) {\n  const [list, setList] = React.useState(items);\n\n  const onDrag = (from: number, to: number) => {\n    const updated = [...list];\n    const [moved] = updated.splice(from, 1);\n    updated.splice(to, 0, moved);\n    setList(updated);\n  };\n\n  return (\n    <div>\n      {list.map((item) => (\n        <div key={item.id} draggable>\n          {item.text}\n        </div>\n      ))}\n    </div>\n  );\n}",
    },
    {
      id: 8,
      question:
        "Set up a fully typed Redux store in TypeScript with actions and reducers for a counter.",
      codeSnippet:
        'type State = { count: number };\n\ntype Action = { type: "INC" } | { type: "DEC" };\n\nfunction reducer(state: State = { count: 0 }, action: Action): State {\n  switch (action.type) {\n    case "INC":\n      return { count: state.count + 1 };\n    case "DEC":\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n}',
    },
    {
      id: 9,
      question:
        "Build an accessible Modal component in React with TypeScript handling keyboard and focus management.",
      codeSnippet:
        'function Modal({\n  isOpen,\n  onClose,\n  children,\n}: {\n  isOpen: boolean;\n  onClose: () => void;\n  children: React.ReactNode;\n}) {\n  React.useEffect(() => {\n    const onKey = (e: KeyboardEvent) => {\n      if (e.key === "Escape") onClose();\n    };\n    window.addEventListener("keydown", onKey);\n    return () => window.removeEventListener("keydown", onKey);\n  }, [onClose]);\n\n  if (!isOpen) return null;\n\n  return <div role="dialog">{children}</div>;\n}',
    },
    {
      id: 10,
      question:
        "Create a typed React Router v6 setup ensuring route params are type-safe.",
      codeSnippet:
        "type UserParams = { id: string };\n\nfunction UserPage() {\n  const params = useParams<UserParams>();\n  return <div>User: {params.id}</div>;\n}",
    },
  ],
  4: [
    {
      id: 1,
      question:
        "What is the difference between enabling `strict: true` versus manually enabling flags like `noImplicitAny` and `strictNullChecks` individually? When would you choose one over the other?",
    },
    {
      id: 2,
      question:
        "What does `strictNullChecks: true` do? Look at the code below — what is the type of `user` in each case, and which line causes a compile error with `strictNullChecks` on?",
      codeSnippet: `function getUser(id: number): string | null {\n  return id === 1 ? "Alice" : null;\n}\n\nconst user = getUser(2);\nconsole.log(user.toUpperCase()); // Line A\n\nif (user !== null) {\n  console.log(user.toUpperCase()); // Line B\n}`,
    },
    {
      id: 3,
      question:
        "What do `include`, `exclude`, and `rootDir` each control? Given this config, which files get compiled and what will the output folder structure look like inside `dist/`?",
      codeSnippet: `{\n  "compilerOptions": {\n    "outDir": "./dist",\n    "rootDir": "./src"\n  },\n  "include": ["src/**/*", "tests/**/*"],\n  "exclude": ["tests/**/*"]\n}`,
    },
    {
      id: 4,
      question:
        "Why should you set `skipLibCheck: true` in application projects? How is it different from `skipDefaultLibCheck`, and when would you want to keep `skipLibCheck: false`?",
    },
    {
      id: 5,
      question:
        "What is the risk of using `baseUrl` and `paths` aliases without configuring matching aliases in your bundler (Webpack/Vite)? What breaks and at which stage?",
      codeSnippet: `// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": "./src",\n    "paths": {\n      "@api/*": ["api/*"],\n      "@shared/*": ["shared/*"],\n      "@config/*": ["config/*"]\n    }\n  }\n}\n\n// usage\nimport { fetchUser } from "@api/users"; // Will this work at runtime?`,
    },
    {
      id: 6,
      question:
        "What does `verbatimModuleSyntax: true` do, and why is it designed to replace the combination of `isolatedModules: true` and `importsNotUsedAsValues`? What code pattern does it enforce?",
      codeSnippet: `// With verbatimModuleSyntax: true\n// Which of these is correct and which causes an error?\n\nimport { User } from "./types";         // Option A\nimport type { User } from "./types";   // Option B\n\nexport { User };                        // Option C\nexport type { User };                  // Option D`,
    },
    {
      id: 7,
      question:
        "Explain the difference between `moduleResolution: 'node'`, `'node16'`, `'nodenext'`, and `'bundler'`. Which would you pick for a Vite SPA, a Node.js ESM backend, and a legacy Express app — and why?",
    },
    {
      id: 8,
      question:
        "What does `exactOptionalPropertyTypes: true` do and how does it differ from what `strictNullChecks` already enforces? What compile error does the code below produce with it enabled?",
      codeSnippet: `type Config = {\n  timeout?: number;\n};\n\nconst config: Config = {\n  timeout: undefined, // Is this allowed?\n};\n\nfunction setup(c: Config) {\n  const t: Config = {};\n  t.timeout = undefined; // Is this allowed?\n}`,
    },
    {
      id: 9,
      question:
        "If you need to cut CI/CD pipeline time by 30%, which specific tsconfig flags should you audit first? Explain what `incremental`, `tsBuildInfoFile`, and `skipLibCheck` each contribute to build performance.",
    },
    {
      id: 10,
      question:
        "Set up a complete Project References monorepo for `packages/common`, `packages/server`, and `packages/client` where both server and client depend on common. Write all four tsconfig files (root + one per package) and explain why `composite: true` and `declaration: true` are non-negotiable on `common`.",
      codeSnippet: `// Expected tsconfig structure:\n\n// tsconfig.json            ← root, no compilation, only references\n// packages/common/tsconfig.json   ← must be referenceable\n// packages/server/tsconfig.json   ← depends on common\n// packages/client/tsconfig.json   ← depends on common\n\n// Fill in all four configs correctly.`,
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
