export const seedData = {
  id: 114,
  version: '0.3',
  allExercises: [
    {
      "id": "primitives-section-1311",
      "type": "title",
      "title": "Section 2: Starting with Typescript",
      "videoID": "1121",
      "questions": [
      ],
      "tasks": [
      ]
    },
    {
      "id": "primitives-section-101",
      "title": "TypeScript Primitives",
      "videoID": "11",
      "questions": [
        {
          "id": "q-prim-001",
          "title": "String Type",
          "question": "Which of the following is the correct way to declare a string variable in TypeScript?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "let name = 'Mike';", "correct": false, "selected": false },
            { "id": "opt-2", "option": "b", "text": "const name: string = 'Mike';", "correct": true, "selected": false },
            { "id": "opt-3", "option": "c", "text": "var name: 'Mike';", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "string name = 'Mike';", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-prim-002",
          "title": "Type Annotations",
          "question": "In the code const age: number = 20, what is the purpose of : number?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "It assigns the value 20", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "It tells TypeScript that age can only hold number values", "correct": true, "selected": false },
            { "id": "opt-7", "option": "c", "text": "It converts 20 to a number", "correct": false, "selected": false },
            { "id": "opt-8", "option": "d", "text": "It's optional and does nothing", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-prim-003",
          "title": "Boolean Type",
          "question": "Which primitive type would you use for a variable that can only be true or false?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "opt-10", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "opt-11", "option": "c", "text": "boolean", "correct": true, "selected": false },
            { "id": "opt-12", "option": "d", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-prim-004",
          "title": "Symbol Syntax",
          "question": "What is the correct way to create a symbol in TypeScript based on the video code?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "const symbol = Symbol('key')", "correct": true, "selected": false },
            { "id": "opt-14", "option": "b", "text": "const symbol: symbol = 'key'", "correct": false, "selected": false },
            { "id": "opt-15", "option": "c", "text": "const symbol = new Symbol('key')", "correct": false, "selected": false },
            { "id": "opt-16", "option": "d", "text": "const symbol: symbol = Symbol.key", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-prim-005",
          "title": "BigInt and ES Version",
          "question": "Based on the video, why do we need target: es2022 in tsconfig.json for bigint?",
          "options": [
            { "id": "opt-17", "option": "a", "text": "BigInt was introduced in ES2020 and isn't available in ES6", "correct": true, "selected": false },
            { "id": "opt-18", "option": "b", "text": "BigInt only works with the latest TypeScript version", "correct": false, "selected": false },
            { "id": "opt-19", "option": "c", "text": "ES6 doesn't support number literals with n suffix", "correct": false, "selected": false },
            { "id": "opt-20", "option": "d", "text": "Both a and c are correct", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-prim-006",
          "title": "Identifying Primitive Types",
          "question": "In the code const data: null = null, what type is data?",
          "options": [
            { "id": "opt-21", "option": "a", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-22", "option": "b", "text": "null", "correct": true, "selected": false },
            { "id": "opt-23", "option": "c", "text": "object", "correct": false, "selected": false },
            { "id": "opt-24", "option": "d", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-prim-001",
          "title": "Declare a String and Number",
          "description": "Create two variables: one for a person's %name% and one for their %age%. Add type annotations.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const name: string = 'Mike';\nconst age: number = 20;",
          "done": false
        },
        {
          "id": "task-prim-002",
          "title": "Declare All Primitives",
          "description": "Create variables for each primitive type: %string%, %number%, %boolean%, %undefined%, %null%, %symbol%, and %bigint%. Add the correct type annotation for each.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const name: string = 'Mike';\nconst age: number = 20;\nconst isActive: boolean = true;\nconst address: undefined = undefined;\nconst data: null = null;\nconst symbol: symbol = Symbol('key');\nconst hugeNum: bigint = 90218309123890213n;",
          "done": false
        }
      ]
    },
    {
      "id": "type-inference-section-101",
      "title": "Type Inference",
      "videoID": "12",
      "questions": [
        {
          "id": "q-inf-001",
          "title": "What is Type Inference",
          "question": "What does TypeScript's type inference do?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "It forces you to write type annotations for every variable", "correct": false, "selected": false },
            { "id": "opt-2", "option": "b", "text": "It automatically determines the type based on the assigned value", "correct": true, "selected": false },
            { "id": "opt-3", "option": "c", "text": "It converts all types to 'any'", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "It only works with 'const' variables", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-inf-002",
          "title": "String Inference",
          "question": "let message = 'Hello';\nmessage = 42;\nWhat happens in TypeScript?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "It works fine because message can be anything", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "TypeScript infers message as string and shows an error when assigning number", "correct": true, "selected": false },
            { "id": "opt-7", "option": "c", "text": "message becomes type 'any'", "correct": false, "selected": false },
            { "id": "opt-8", "option": "d", "text": "It converts 42 to a string automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-inf-003",
          "title": "Number Inference",
          "question": "let score = 100;\nWhat type does TypeScript infer for 'score'?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "opt-10", "option": "b", "text": "number", "correct": true, "selected": false },
            { "id": "opt-11", "option": "c", "text": "any", "correct": false, "selected": false },
            { "id": "opt-12", "option": "d", "text": "boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-inf-004",
          "title": "Boolean Inference",
          "question": "let isReady = true;\nWhat type does TypeScript infer for 'isReady'?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "boolean", "correct": true, "selected": false },
            { "id": "opt-14", "option": "b", "text": "string", "correct": false, "selected": false },
            { "id": "opt-15", "option": "c", "text": "number", "correct": false, "selected": false },
            { "id": "opt-16", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-inf-005",
          "title": "Reassignment with Inference",
          "question": "let value = 'Hello';\nvalue = 'World';\nvalue = true;\nWhat does TypeScript do?",
          "options": [
            { "id": "opt-17", "option": "a", "text": "Allows all assignments because it's just JavaScript", "correct": false, "selected": false },
            { "id": "opt-18", "option": "b", "text": "Infers value as string and shows error when assigning boolean", "correct": true, "selected": false },
            { "id": "opt-19", "option": "c", "text": "Infers value as 'any' type", "correct": false, "selected": false },
            { "id": "opt-20", "option": "d", "text": "Changes the type to boolean automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-inf-001",
          "title": "Let TypeScript Infer",
          "description": "Create a %let% variable called %city% and assign it the string 'London'. Then try to reassign it to a %number% (e.g. 100). Observe what TypeScript does.",
          "result": "",
          "note": "implement in your editor / console and see the type error",
          "solution": "let city = 'London';\ncity = 100; // TypeScript shows error",
          "done": false
        }
      ]
    },
    {
      "id": "module-scope-section-101",
      "title": "Module Scope and Variable Conflicts",
      "videoID": "13",
      "questions": [
        {
          "id": "q-scope-001",
          "title": "Variable Conflict Error",
          "question": "Why does TypeScript show an error when you have the same variable name in two different .ts files?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "Because TypeScript treats all files as a single global scope by default", "correct": true, "selected": false },
            { "id": "opt-2", "option": "b", "text": "Because TypeScript doesn't allow any duplicate names in a project", "correct": false, "selected": false },
            { "id": "opt-3", "option": "c", "text": "Because the files are automatically imported into each other", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "Because TypeScript checks for duplicate variable names globally", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-scope-002",
          "title": "Fixing with export {}",
          "question": "How does adding 'export {}' at the top of a TypeScript file fix the variable name conflict?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "It deletes the variable from the file", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "It makes the file a module, creating its own scope", "correct": true, "selected": false },
            { "id": "opt-7", "option": "c", "text": "It tells TypeScript to ignore the variable", "correct": false, "selected": false },
            { "id": "opt-8", "option": "d", "text": "It changes the variable name automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-scope-003",
          "title": "moduleDetection Setting",
          "question": "What does the 'moduleDetection' setting in tsconfig.json do when set to 'force'?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "It forces all files to be treated as modules", "correct": true, "selected": false },
            { "id": "opt-10", "option": "b", "text": "It detects and deletes all duplicate variables", "correct": false, "selected": false },
            { "id": "opt-11", "option": "c", "text": "It prevents TypeScript from running", "correct": false, "selected": false },
            { "id": "opt-12", "option": "d", "text": "It only works with JavaScript files", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-scope-004",
          "title": "Identifying the Problem",
          "question": "You have two files: file1.ts has 'let name = 'John'' and file2.ts has 'let name = 'Jane''. TypeScript shows an error. Why?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "The names are different so there's no error", "correct": false, "selected": false },
            { "id": "opt-14", "option": "b", "text": "Both variables are in the global scope, causing a conflict", "correct": true, "selected": false },
            { "id": "opt-15", "option": "c", "text": "You can't use 'let' in TypeScript", "correct": false, "selected": false },
            { "id": "opt-16", "option": "d", "text": "The files are in different folders so there's no conflict", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
      ]
    },
    {
      "id": "union-types-section-101",
      "title": "Union Types",
      "videoID": "14",
      "questions": [
        {
          "id": "q-union-001",
          "title": "What is a Union Type",
          "question": "What does the | (pipe) symbol mean in TypeScript?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "It means 'and' - the variable must be both types", "correct": false, "selected": false },
            { "id": "opt-2", "option": "b", "text": "It means 'or' - the variable can be one of the types", "correct": true, "selected": false },
            { "id": "opt-3", "option": "c", "text": "It means 'not' - the variable cannot be that type", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "It means 'any' - the variable can be anything", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-union-002",
          "title": "Union Type Syntax",
          "question": "Which of the following correctly declares a variable that can be either string or number?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "let value: string && number;", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "let value: string | number;", "correct": true, "selected": false },
            { "id": "opt-7", "option": "c", "text": "let value: string, number;", "correct": false, "selected": false },
            { "id": "opt-8", "option": "d", "text": "let value: string + number;", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-union-003",
          "title": "Using Union Types",
          "question": "let value: string | number = 'Hello';\nvalue = 42;\nvalue = true;\nWhat happens on the third assignment?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "It works fine because union types allow anything", "correct": false, "selected": false },
            { "id": "opt-10", "option": "b", "text": "TypeScript shows an error because boolean is not in the union", "correct": true, "selected": false },
            { "id": "opt-11", "option": "c", "text": "It converts true to a string", "correct": false, "selected": false },
            { "id": "opt-12", "option": "d", "text": "It converts true to a number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-union-004",
          "title": "Union with Different Types",
          "question": "Which of these union type declarations is valid in TypeScript?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "let id: number | string;", "correct": true, "selected": false },
            { "id": "opt-14", "option": "b", "text": "let id: number string;", "correct": false, "selected": false },
            { "id": "opt-15", "option": "c", "text": "let id: number, string;", "correct": false, "selected": false },
            { "id": "opt-16", "option": "d", "text": "let id: number & string;", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-union-005",
          "title": "Union with Three Types",
          "question": "let value: string | number | boolean = 'Hello';\nvalue = 42;\nvalue = true;\nvalue = null;\nWhat happens on the fourth assignment?",
          "options": [
            { "id": "opt-17", "option": "a", "text": "It works fine because null is a valid primitive type", "correct": false, "selected": false },
            { "id": "opt-18", "option": "b", "text": "TypeScript shows an error because null is not in the union", "correct": true, "selected": false },
            { "id": "opt-19", "option": "c", "text": "It converts null to undefined", "correct": false, "selected": false },
            { "id": "opt-20", "option": "d", "text": "It works fine and value becomes null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-union-006",
          "title": "Union with Three Pipes",
          "question": "Which of the following shows a correct union type with three possible types?",
          "options": [
            { "id": "opt-21", "option": "a", "text": "let data: string | number | boolean;", "correct": true, "selected": false },
            { "id": "opt-22", "option": "b", "text": "let data: string number boolean;", "correct": false, "selected": false },
            { "id": "opt-23", "option": "c", "text": "let data: string | number && boolean;", "correct": false, "selected": false },
            { "id": "opt-24", "option": "d", "text": "let data: string, number, boolean;", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "task-union-001",
          "title": "Declare a Union Type",
          "description": "Create a variable called %status% that can be either a %string% or a %number%. Assign it the string 'active', then reassign it to the number %1%.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let status: string | number = 'active';\nstatus = 1;",
          "done": false
        },
        {
          "id": "task-union-002",
          "title": "Union with Three Types",
          "description": "Create a variable called %data% with union type %string | number | boolean%. Assign it a %string%, then a %number%, then a %boolean%.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let data: string | number | boolean = 'Hello';\ndata = 42;\ndata = true;",
          "done": false
        }
      ]
    },
    {
      "id": "literal-types-section-101",
      "title": "Literal Types",
      "videoID": "17",
      "questions": [
        {
          "id": "q-lit-001",
          "title": "What are Literal Types",
          "question": "What is a literal type in TypeScript?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "A type that only works with numbers", "correct": false, "selected": false },
            { "id": "opt-2", "option": "b", "text": "A type that can hold any string value", "correct": false, "selected": false },
            { "id": "opt-3", "option": "c", "text": "A type that means the variable is undefined", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "A type that can only hold a specific exact value", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "q-lit-002",
          "title": "String Literal Syntax",
          "question": "Which of the following correctly declares a string literal type?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "let status = 'active';", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "let status: 'active' = 'active';", "correct": true, "selected": false },
            { "id": "opt-7", "option": "c", "text": "let status: string = active;", "correct": false, "selected": false },
            { "id": "opt-8", "option": "d", "text": "let status: string = 'active';", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-lit-003",
          "title": "Literal Type Error",
          "question": "let direction: 'left' = 'left';\ndirection = 'right';\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "TypeScript shows an error because 'right' is not allowed", "correct": true, "selected": false },
            { "id": "opt-10", "option": "b", "text": "It works fine because direction can be any string", "correct": false, "selected": false },
            { "id": "opt-11", "option": "c", "text": "direction becomes 'right' automatically", "correct": false, "selected": false },
            { "id": "opt-12", "option": "d", "text": "The code only works with numbers", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-lit-004",
          "title": "Number Literal Type",
          "question": "Which of the following is a valid number literal type?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "let count: 5 = 10;", "correct": false, "selected": false },
            { "id": "opt-14", "option": "b", "text": "let count: number = '5';", "correct": false, "selected": false },
            { "id": "opt-15", "option": "c", "text": "let count: number = 5;", "correct": false, "selected": false },
            { "id": "opt-16", "option": "d", "text": "let count: 5 = 5;", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "q-lit-005",
          "title": "Literal Type with Union",
          "question": "let status: 'active' | 'inactive' = 'active';\nstatus = 'inactive';\nstatus = 'pending';\nWhat happens on the third assignment?",
          "options": [
            { "id": "opt-17", "option": "a", "text": "It converts 'pending' to 'active'", "correct": false, "selected": false },
            { "id": "opt-18", "option": "b", "text": "status becomes undefined", "correct": false, "selected": false },
            { "id": "opt-19", "option": "c", "text": "TypeScript shows an error because 'pending' is not in the union", "correct": true, "selected": false },
            { "id": "opt-20", "option": "d", "text": "It works fine because union allows any string", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-lit-006",
          "title": "Boolean Literal Type",
          "question": "Which of these is a boolean literal type?",
          "options": [
            { "id": "opt-21", "option": "a", "text": "let isReady: true = false;", "correct": false, "selected": false },
            { "id": "opt-22", "option": "b", "text": "let isReady: boolean | true;", "correct": false, "selected": false },
            { "id": "opt-23", "option": "c", "text": "let isReady: true = true;", "correct": true, "selected": false },
            { "id": "opt-24", "option": "d", "text": "let isReady: boolean = true;", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-lit-001",
          "title": "String Literal Type",
          "description": "Create a variable called %status% with a literal type that can only be %'active'%. Then try to reassign it to %'inactive'% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let status: 'active' = 'active';\nstatus = 'inactive'; // TypeScript shows error",
          "done": false
        },
        {
          "id": "task-lit-002",
          "title": "Union of Literal Types",
          "description": "Create a variable called %direction% with a union type of %'up'% | %'down'% | %'left'% | %'right'%. Assign it %'up'%, then %'left'%, then try %'diagonal'% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let direction: 'up' | 'down' | 'left' | 'right' = 'up';\ndirection = 'left';\ndirection = 'diagonal'; // TypeScript shows error",
          "done": false
        }
      ]
    },
    {
      "id": "any-type-section-101",
      "title": "The 'any' Type",
      "videoID": "16",
      "questions": [
        {
          "id": "q-any-001",
          "title": "What is 'any'",
          "question": "What does the 'any' type do in TypeScript?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "It restricts a variable to only one type", "correct": false, "selected": false },
            { "id": "opt-2", "option": "b", "text": "It turns off type checking and allows any value", "correct": true, "selected": false },
            { "id": "opt-3", "option": "c", "text": "It only allows numbers", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "It means the variable is undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-any-002",
          "title": "Reassigning 'any'",
          "question": "let id: any = '901482';\nid = 123;\nid = { value: 123 };\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "TypeScript shows errors for each reassignment", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "It works fine because 'any' allows any type", "correct": true, "selected": false },
            { "id": "opt-7", "option": "c", "text": "The code only accepts string values", "correct": false, "selected": false },
            { "id": "opt-8", "option": "d", "text": "TypeScript automatically converts all values to strings", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-any-003",
          "title": "'any' with Arrays",
          "question": "let users: any = [{ id: 1, name: 'Lee' }];\nusers[0].name = 134;\nusers[0].age = 23;\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "TypeScript shows errors because name should be a string", "correct": false, "selected": false },
            { "id": "opt-10", "option": "b", "text": "It works fine because 'any' allows adding and changing any properties", "correct": true, "selected": false },
            { "id": "opt-11", "option": "c", "text": "TypeScript shows an error because age doesn't exist", "correct": false, "selected": false },
            { "id": "opt-12", "option": "d", "text": "Only the first line works, the rest fail", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-any-004",
          "title": "Problems with 'any'",
          "question": "What is the main disadvantage of using 'any' in TypeScript?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "It makes the code run slower", "correct": false, "selected": false },
            { "id": "opt-14", "option": "b", "text": "It removes type safety and defeats the purpose of TypeScript", "correct": true, "selected": false },
            { "id": "opt-15", "option": "c", "text": "It only works with strings", "correct": false, "selected": false },
            { "id": "opt-16", "option": "d", "text": "It causes compilation errors", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": []
    },
    {
      "id": "objects-section-101",
      "title": "Objects in TypeScript",
      "videoID": "15",
      "questions": [
        {
          "id": "q-obj-001",
          "title": "Object Type Syntax",
          "question": "Which of the following correctly declares an object type in TypeScript?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "let user: { name: string, age: number };", "correct": true, "selected": false },
            { "id": "opt-2", "option": "b", "text": "let user: object { name: string, age: number };", "correct": false, "selected": false },
            { "id": "opt-3", "option": "c", "text": "let user: name: string, age: number;", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "let user: { name string, age number };", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-obj-002",
          "title": "Optional Properties",
          "question": "What does the ? symbol mean after a property name in a TypeScript object type?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "The property is required", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "The property is optional", "correct": true, "selected": false },
            { "id": "opt-7", "option": "c", "text": "The property can only be null", "correct": false, "selected": false },
            { "id": "opt-8", "option": "d", "text": "The property is a boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-obj-003",
          "title": "Nested Objects",
          "question": "In the code let user: { address?: { street: string } }, what does address?: mean?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "address is required but can be empty", "correct": false, "selected": false },
            { "id": "opt-10", "option": "b", "text": "address is optional - the object may not have it", "correct": true, "selected": false },
            { "id": "opt-11", "option": "c", "text": "address must be a string", "correct": false, "selected": false },
            { "id": "opt-12", "option": "d", "text": "address can only be null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-obj-004",
          "title": "Union Types in Objects",
          "question": "In this object type: { id: number | string, name: string }, what types can id be?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "Only number", "correct": false, "selected": false },
            { "id": "opt-14", "option": "b", "text": "Only string", "correct": false, "selected": false },
            { "id": "opt-15", "option": "c", "text": "Either number or string", "correct": true, "selected": false },
            { "id": "opt-16", "option": "d", "text": "Both number and string at the same time", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-obj-005",
          "title": "Required vs Optional",
          "question": "let person: { name?: string } = {}\nperson.name = 'Mike'\nWhy does this code work?",
          "options": [
            { "id": "opt-17", "option": "a", "text": "Because name is optional, you can add it later", "correct": true, "selected": false },
            { "id": "opt-18", "option": "b", "text": "Because TypeScript allows any property on objects", "correct": false, "selected": false },
            { "id": "opt-19", "option": "c", "text": "Because {} means the object can have anything", "correct": false, "selected": false },
            { "id": "opt-20", "option": "d", "text": "It would actually show an error", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-obj-006",
          "title": "Object Assignment",
          "question": "let user: { name: string, age: number } = { name: 'Mike' };\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-21", "option": "a", "text": "TypeScript adds age: undefined automatically", "correct": false, "selected": false },
            { "id": "opt-22", "option": "b", "text": "TypeScript shows an error because age is missing", "correct": true, "selected": false },
            { "id": "opt-23", "option": "c", "text": "It works fine and age is optional", "correct": false, "selected": false },
            { "id": "opt-24", "option": "d", "text": "It converts the object to a different type", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-obj-001",
          "title": "Create a User Object",
          "description": "Create an object called %user% with properties: %id% (number or string), %name% (string), and %age% (number). Add type annotations.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let user: {\n  id: number | string,\n  name: string,\n  age: number\n} = {\n  id: 123,\n  name: 'Mike',\n  age: 23\n}",
          "done": false
        },
        {
          "id": "task-obj-002",
          "title": "Add an Optional Property",
          "description": "Create a %person% object with a required %name% (string) and an optional %age% (number). Start with just the name, then add the age later.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let person: { name: string, age?: number } = {\n  name: 'Mike'\n};\nperson.age = 23;",
          "done": false
        }
      ]
    },
    {
      "id": "arrays-section-101",
      "title": "Arrays in TypeScript",
      "videoID": "18",
      "questions": [
        {
          "id": "q-arr-001",
          "title": "Array Type Syntax",
          "question": "Which of the following correctly declares an array of numbers in TypeScript?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "let numbers: number[] = [1, 2, 3];", "correct": true, "selected": false },
            { "id": "opt-2", "option": "b", "text": "let numbers: []number = [1, 2, 3];", "correct": false, "selected": false },
            { "id": "opt-3", "option": "c", "text": "let numbers: array<number> = [1, 2, 3];", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "let numbers = [1, 2, 3];", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-arr-002",
          "title": "Array Inference",
          "question": "const fruits = []\nWhat type does TypeScript infer for 'fruits'?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "string[]", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "any[]", "correct": true, "selected": false },
            { "id": "opt-7", "option": "c", "text": "never[]", "correct": false, "selected": false },
            { "id": "opt-8", "option": "d", "text": "number[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-arr-003",
          "title": "Array Type",
          "question": "const numbers: number[] = [1, 2, 3, 4];\nnumbers.push('123')\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "It works fine and adds '123' to the array", "correct": false, "selected": false },
            { "id": "opt-10", "option": "b", "text": "TypeScript shows an error because '123' is a string, not a number", "correct": true, "selected": false },
            { "id": "opt-11", "option": "c", "text": "It converts '123' to a number", "correct": false, "selected": false },
            { "id": "opt-12", "option": "d", "text": "The array becomes empty", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-arr-004",
          "title": "Spread Operator with Arrays",
          "question": "const numbers: number[] = [1, 2, 3, 4];\nconst prices = [...numbers, 'hello']\nWhat type does TypeScript infer for 'prices'?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "number[]", "correct": false, "selected": false },
            { "id": "opt-14", "option": "b", "text": "string[]", "correct": false, "selected": false },
            { "id": "opt-15", "option": "c", "text": "(number | string)[]", "correct": true, "selected": false },
            { "id": "opt-16", "option": "d", "text": "any[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-arr-005",
          "title": "Mixed Array Inference",
          "question": "const mixed = ['hello', 12, true]\nmixed.push({name: 1})\nWhat type does TypeScript infer for 'mixed' and what happens when pushing an object?",
          "options": [
            { "id": "opt-17", "option": "a", "text": "mixed is any[] and the push works fine", "correct": false, "selected": false },
            { "id": "opt-18", "option": "b", "text": "mixed is (string | number | boolean)[] and TypeScript shows an error when pushing an object", "correct": true, "selected": false },
            { "id": "opt-19", "option": "c", "text": "mixed is string[] and the push fails", "correct": false, "selected": false },
            { "id": "opt-20", "option": "d", "text": "mixed is (string | number | boolean | object)[] and the push works", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-arr-006",
          "title": "Explicit Mixed Array",
          "question": "Which of the following correctly declares an array that can hold strings, numbers, and booleans?",
          "options": [
            { "id": "opt-21", "option": "a", "text": "let mixed: string[] | number[] | boolean[] = ['hello', 12, true];", "correct": false, "selected": false },
            { "id": "opt-22", "option": "b", "text": "let mixed: (string | number | boolean)[] = ['hello', 12, true];", "correct": true, "selected": false },
            { "id": "opt-23", "option": "c", "text": "let mixed: string | number | boolean[] = ['hello', 12, true];", "correct": false, "selected": false },
            { "id": "opt-24", "option": "d", "text": "let mixed: any[] = ['hello', 12, true];", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-arr-001",
          "title": "Typed Array",
          "description": "Create an array of %numbers% called %scores% with values %[10, 20, 30, 40]%. Add the type annotation. Then try to push a %string% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const scores: number[] = [10, 20, 30, 40];\nscores.push('50'); // TypeScript shows error",
          "done": false
        },
        {
          "id": "task-arr-002",
          "title": "Mixed Array",
          "description": "Create an array called %data% that can hold %strings%, %numbers%, and %booleans%. Add values %'Hello'%, %42%, and %true%. Then try to push an %object% %{key: 'value'}% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const data: (string | number | boolean)[] = ['Hello', 42, true];\ndata.push({key: 'value'}); // TypeScript shows error",
          "done": false
        }
      ]
    },
    {
      "id": "functions-section-101",
      "title": "Functions in TypeScript",
      "videoID": "19",
      "questions": [
        {
          "id": "q-fn-001",
          "title": "Function Parameter Types",
          "question": "Which of the following correctly declares a function with typed parameters?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "function greet(name: string) { return 'Hello ' + name; }", "correct": true, "selected": false },
            { "id": "opt-2", "option": "b", "text": "function greet(name) { return 'Hello ' + name; }", "correct": false, "selected": false },
            { "id": "opt-3", "option": "c", "text": "function greet(string name) { return 'Hello ' + name; }", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "function greet(name: string): { return 'Hello ' + name; }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-fn-002",
          "title": "Optional Parameters",
          "question": "How do you make a function parameter optional in TypeScript?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "function greet(name?) { }", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "function greet(name: string?) { }", "correct": false, "selected": false },
            { "id": "opt-7", "option": "c", "text": "function greet(name?: string) { }", "correct": true, "selected": false },
            { "id": "opt-8", "option": "d", "text": "function greet(optional name: string) { }", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-fn-003",
          "title": "Optional Parameter Usage",
          "question": "function greet(name?: string) { return 'Hello ' + name; }\ngreet();\ngreet('Mike');",
          "options": [
            { "id": "opt-9", "option": "a", "text": "Only greet('Mike') is valid, greet() is invalid", "correct": false, "selected": false },
            { "id": "opt-10", "option": "b", "text": "Only greet() is valid, greet('Mike') is invalid", "correct": false, "selected": false },
            { "id": "opt-11", "option": "c", "text": "Both greet() and greet('Mike') are valid", "correct": true, "selected": false },
            { "id": "opt-12", "option": "d", "text": "Neither greet() nor greet('Mike') is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-fn-004",
          "title": "Union Type Parameters",
          "question": "function display(value: string | number) { console.log(value); }\ndisplay('Hello');\ndisplay(42);\ndisplay(true);",
          "options": [
            { "id": "opt-13", "option": "a", "text": "display('Hello') and display(42) are valid, display(true) is invalid", "correct": true, "selected": false },
            { "id": "opt-14", "option": "b", "text": "display('Hello'), display(42), and display(true) are all valid", "correct": false, "selected": false },
            { "id": "opt-15", "option": "c", "text": "Only display('Hello') is valid", "correct": false, "selected": false },
            { "id": "opt-16", "option": "d", "text": "Only display(42) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-fn-005",
          "title": "Literal Type Parameters",
          "question": "function setStatus(status: 'active' | 'inactive' | 'pending') { }\nsetStatus('active');\nsetStatus('inactive');\nsetStatus('pending');",
          "options": [
            { "id": "opt-17", "option": "a", "text": "setStatus('active'), setStatus('inactive'), and setStatus('pending') are all valid", "correct": true, "selected": false },
            { "id": "opt-18", "option": "b", "text": "Only setStatus('active') and setStatus('inactive') are valid", "correct": false, "selected": false },
            { "id": "opt-19", "option": "c", "text": "Only setStatus('pending') is valid", "correct": false, "selected": false },
            { "id": "opt-20", "option": "d", "text": "None of these calls are valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-fn-006",
          "title": "Literal Type Error",
          "question": "function setStatus(status: 'active' | 'inactive') { }\nsetStatus('pending');",
          "options": [
            { "id": "opt-21", "option": "a", "text": "It works fine because status can be any string", "correct": false, "selected": false },
            { "id": "opt-22", "option": "b", "text": "TypeScript shows an error because 'pending' is not in the allowed literal types", "correct": true, "selected": false },
            { "id": "opt-23", "option": "c", "text": "It sets status to 'active' automatically", "correct": false, "selected": false },
            { "id": "opt-24", "option": "d", "text": "It converts 'pending' to undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-fn-007",
          "title": "Mixed Parameter Types",
          "question": "function createUser(id: number | string, name: string, isActive?: boolean) { }\ncreateUser(1, 'Mike');\ncreateUser('ABC', 'Jane', true);\ncreateUser(true, 'Bob');",
          "options": [
            { "id": "opt-25", "option": "a", "text": "createUser(1, 'Mike') and createUser('ABC', 'Jane', true) are valid, createUser(true, 'Bob') is invalid", "correct": true, "selected": false },
            { "id": "opt-26", "option": "b", "text": "All calls including createUser(true, 'Bob') are valid", "correct": false, "selected": false },
            { "id": "opt-27", "option": "c", "text": "Only createUser(1, 'Mike') is valid", "correct": false, "selected": false },
            { "id": "opt-28", "option": "d", "text": "Only createUser('ABC', 'Jane', true) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-fn-008",
          "title": "Multiple Optional Parameters",
          "question": "function log(message: string, level?: string, timestamp?: number) { }\nlog('Hello');\nlog('Hello', 'info');\nlog('Hello', 'info', 12345);",
          "options": [
            { "id": "opt-29", "option": "a", "text": "Only log('Hello') is valid", "correct": false, "selected": false },
            { "id": "opt-30", "option": "b", "text": "Only log('Hello', 'info') is valid", "correct": false, "selected": false },
            { "id": "opt-31", "option": "c", "text": "log('Hello'), log('Hello', 'info'), and log('Hello', 'info', 12345) are all valid", "correct": true, "selected": false },
            { "id": "opt-32", "option": "d", "text": "None of these calls are valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-fn-009",
          "title": "Union with Literal Types",
          "question": "function sendMessage(type: 'email' | 'sms', content: string | number) { }\nsendMessage('email', 'Hello');\nsendMessage('sms', 12345);\nsendMessage('email', 456);\nsendMessage('email', true);",
          "options": [
            { "id": "opt-33", "option": "a", "text": "sendMessage('email', 'Hello'), sendMessage('sms', 12345), and sendMessage('email', 456) are all valid", "correct": true, "selected": false },
            { "id": "opt-34", "option": "b", "text": "Only sendMessage('email', 'Hello') is valid", "correct": false, "selected": false },
            { "id": "opt-35", "option": "c", "text": "Only sendMessage('sms', 12345) is valid", "correct": false, "selected": false },
            { "id": "opt-36", "option": "d", "text": "sendMessage('email', true) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-fn-010",
          "title": "Optional vs Union",
          "question": "What is the difference between 'name?: string' and 'name: string | undefined' as a function parameter?",
          "options": [
            { "id": "opt-37", "option": "a", "text": "There is no difference between them", "correct": false, "selected": false },
            { "id": "opt-38", "option": "b", "text": "'name?: string' makes it optional (can be omitted), 'name: string | undefined' requires explicitly passing undefined", "correct": true, "selected": false },
            { "id": "opt-39", "option": "c", "text": "'name?: string' requires a value, 'name: string | undefined' makes it optional", "correct": false, "selected": false },
            { "id": "opt-40", "option": "d", "text": "'name?: string' only works with strings, 'name: string | undefined' works with any type", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-fn-002",
          "title": "Optional Parameters",
          "description": "Create a function called %display% that takes a %message% (string) and an optional %prefix% (string). If prefix is provided, log it with the message. If no prefix is provided, just log the message. Call it with and without the prefix.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function display(message: string, prefix?: string) {\n  if (prefix) {\n    console.log(prefix + ': ' + message);\n  } else {\n    console.log(message);\n  }\n}\ndisplay('Hello');\ndisplay('World', 'Info');",
          "done": false
        },
        {
          "id": "task-fn-003",
          "title": "Union Type Parameters",
          "description": "Create a function called %printId% that takes an %id% parameter that can be either a %number% or a %string%. Inside the function, log the id. Call it with both a number and a string.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function printId(id: number | string) {\n  console.log(id);\n}\nprintId(123);\nprintId('ABC123');",
          "done": false
        },
        {
          "id": "task-fn-004",
          "title": "Literal Type Parameters",
          "description": "Create a function called %setStatus% that takes a %status% parameter with literal type %'pending'% | %'approved'% | %'rejected'%. Call it with each valid value and then try %'cancelled'% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function setStatus(status: 'pending' | 'approved' | 'rejected') {\n  console.log('Status:', status);\n}\nsetStatus('pending');\nsetStatus('approved');\nsetStatus('cancelled'); // TypeScript shows error",
          "done": false
        }
      ]
    },
  ]
}