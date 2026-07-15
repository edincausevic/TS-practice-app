export const seedData = {
  id: 114,
  version: '0.1',
  allExercises: [
    {
      "id": "primitives-section-1311",
      "type": "title",
      "title": "Section 2: Starting with Typescript",
      "videoID": "1121",
      "sectionExercisesIndex": "1-12",
      "questions": [
      ],
      "tasks": [
      ]
    },
    {
      "id": "primitives-section-101",
      "title": "TypeScript Primitives",
      "videoID": "11",
      "done": false,
      "inProgress": false,
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
      "done": false,
      "inProgress": false,
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
      "done": false,
      "inProgress": false,
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
      "done": false,
      "inProgress": false,
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
      "done": false,
      "inProgress": false,
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
      "done": false,
      "inProgress": false,
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
      "done": false,
      "inProgress": false,
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
      "done": false,
      "inProgress": false,
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
      "done": false,
      "inProgress": false,
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
    {
      "id": "void-section-101",
      "title": "Void",
      "videoID": "20",
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "q-void-001",
          "title": "What is Void",
          "question": "What does the 'void' type mean in TypeScript?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "A function that returns nothing (undefined)", "correct": true, "selected": false },
            { "id": "opt-2", "option": "b", "text": "A function that never returns", "correct": false, "selected": false },
            { "id": "opt-3", "option": "c", "text": "A function that returns a number", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "A function that returns a string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-void-002",
          "title": "Void Function",
          "question": "function logMessage(msg: string): void {\n  console.log(msg);\n}\nWhat does this function return?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "It returns the message as a string", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "It returns undefined because it has no return statement", "correct": true, "selected": false },
            { "id": "opt-7", "option": "c", "text": "It returns null", "correct": false, "selected": false },
            { "id": "opt-8", "option": "d", "text": "It throws an error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-void-003",
          "title": "Void vs Undefined",
          "question": "What is the difference between 'void' and 'undefined' in TypeScript?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "They are exactly the same thing", "correct": false, "selected": false },
            { "id": "opt-10", "option": "b", "text": "'void' is for functions that don't return a value, 'undefined' is an actual value", "correct": true, "selected": false },
            { "id": "opt-11", "option": "c", "text": "'void' means never returns, 'undefined' means returns nothing", "correct": false, "selected": false },
            { "id": "opt-12", "option": "d", "text": "'void' only works with arrow functions", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-void-004",
          "title": "Void with Return Statement",
          "question": "function doSomething(): void {\n  return;\n}\nIs this valid TypeScript?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "No, void functions cannot have any return statement", "correct": false, "selected": false },
            { "id": "opt-14", "option": "b", "text": "Yes, returning nothing (just 'return;') is valid for void functions", "correct": true, "selected": false },
            { "id": "opt-15", "option": "c", "text": "No, you must return undefined explicitly", "correct": false, "selected": false },
            { "id": "opt-16", "option": "d", "text": "Yes, but only if you return null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-void-005",
          "title": "Void with Return Value",
          "question": "function getNumber(): void {\n  return 42;\n}\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-17", "option": "a", "text": "It works fine and returns 42", "correct": false, "selected": false },
            { "id": "opt-18", "option": "b", "text": "TypeScript shows an error because void functions can't return a value", "correct": true, "selected": false },
            { "id": "opt-19", "option": "c", "text": "It returns undefined", "correct": false, "selected": false },
            { "id": "opt-20", "option": "d", "text": "It converts 42 to undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-void-006",
          "title": "Function Inference with Void",
          "question": "function greet(name: string) {\n  console.log('Hello ' + name);\n}\nWhat type does TypeScript infer for the return type of this function?",
          "options": [
            { "id": "opt-21", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "opt-22", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "opt-23", "option": "c", "text": "void", "correct": true, "selected": false },
            { "id": "opt-24", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-void-008",
          "title": "Arrow Function with Void",
          "question": "const logMessage = (msg: string): void => {\n  console.log(msg);\n};\nWhat is the return type of this arrow function?",
          "options": [
            { "id": "opt-29", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "opt-30", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "opt-31", "option": "c", "text": "void", "correct": true, "selected": false },
            { "id": "opt-32", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
      ]
    },
    {
      "id": "never-section-101",
      "title": "Never",
      "videoID": "21",
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "q-never-001",
          "title": "What is Never",
          "question": "What does the 'never' type mean in TypeScript?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "A function that returns undefined", "correct": false, "selected": false },
            { "id": "opt-2", "option": "b", "text": "A function that never returns (throws error or infinite loop)", "correct": true, "selected": false },
            { "id": "opt-3", "option": "c", "text": "A function that returns null", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "A function that returns void", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-never-002",
          "title": "Never with Error",
          "question": "function throwError(message: string): never {\n  throw new Error(message);\n}\nWhat happens when this function is called?",
          "options": [
            { "id": "opt-5", "option": "a", "text": "It returns undefined", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "It throws an error and never returns", "correct": true, "selected": false },
            { "id": "opt-7", "option": "c", "text": "It logs the message and returns void", "correct": false, "selected": false },
            { "id": "opt-8", "option": "d", "text": "It returns null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-never-003",
          "title": "Never with Infinite Loop",
          "question": "function infiniteLoop() {\n  while (true) {\n    console.log('Running...');\n  }\n}\nWhat type this function infers?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "opt-10", "option": "b", "text": "never", "correct": true, "selected": false },
            { "id": "opt-11", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-12", "option": "d", "text": "null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-never-004",
          "title": "Void vs Never",
          "question": "What is the main difference between 'void' and 'never'?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "'void' means returns nothing (undefined), 'never' means never returns", "correct": true, "selected": false },
            { "id": "opt-14", "option": "b", "text": "'void' means never returns, 'never' means returns nothing", "correct": false, "selected": false },
            { "id": "opt-15", "option": "c", "text": "They are the same thing", "correct": false, "selected": false },
            { "id": "opt-16", "option": "d", "text": "'void' is for functions, 'never' is for variables only", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-never-006",
          "title": "Never vs Void - Error Function",
          "question": "Which return type should you use for a function that always throws an error?",
          "options": [
            { "id": "opt-21", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "opt-22", "option": "b", "text": "never", "correct": true, "selected": false },
            { "id": "opt-23", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-24", "option": "d", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-never-007",
          "title": "Never Function Inference",
          "question": "function fail() {\n  throw new Error('Something went wrong');\n}\nWhat type does TypeScript infer for the return type of this function?",
          "options": [
            { "id": "opt-25", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "opt-26", "option": "b", "text": "never", "correct": true, "selected": false },
            { "id": "opt-27", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-28", "option": "d", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
      ],
      "tasks": [
      ]
    },
    {
      "id": "milestone-section-101",
      "title": "Milestone Exercise - All Concepts",
      "videoID": "22",
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "q-mil-001",
          "title": "String Type",
          "question": "Which of the following correctly declares a string variable in TypeScript?",
          "options": [
            { "id": "opt-1", "option": "a", "text": "let name = 'Mike';", "correct": false, "selected": false },
            { "id": "opt-2", "option": "b", "text": "const name: string = 'Mike';", "correct": true, "selected": false },
            { "id": "opt-3", "option": "c", "text": "var name: 'Mike';", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "string name = 'Mike';", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-002",
          "title": "Type Inference",
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
          "id": "q-mil-003",
          "title": "Variable Conflict Error",
          "question": "Why does TypeScript show an error when you have the same variable name in two different .ts files?",
          "options": [
            { "id": "opt-9", "option": "a", "text": "Because TypeScript treats all files as a single global scope by default", "correct": true, "selected": false },
            { "id": "opt-10", "option": "b", "text": "Because TypeScript doesn't allow any duplicate names in a project", "correct": false, "selected": false },
            { "id": "opt-11", "option": "c", "text": "Because the files are automatically imported into each other", "correct": false, "selected": false },
            { "id": "opt-12", "option": "d", "text": "Because TypeScript checks for duplicate variable names globally", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-004",
          "title": "Union Type Syntax",
          "question": "Which of the following correctly declares a variable that can be either string or number?",
          "options": [
            { "id": "opt-13", "option": "a", "text": "let value: string && number;", "correct": false, "selected": false },
            { "id": "opt-14", "option": "b", "text": "let value: string | number;", "correct": true, "selected": false },
            { "id": "opt-15", "option": "c", "text": "let value: string, number;", "correct": false, "selected": false },
            { "id": "opt-16", "option": "d", "text": "let value: string + number;", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-005",
          "title": "Object Type Syntax",
          "question": "Which of the following correctly declares an object type in TypeScript?",
          "options": [
            { "id": "opt-17", "option": "a", "text": "let user: { name: string, age: number };", "correct": true, "selected": false },
            { "id": "opt-18", "option": "b", "text": "let user: object { name: string, age: number };", "correct": false, "selected": false },
            { "id": "opt-19", "option": "c", "text": "let user: name: string, age: number;", "correct": false, "selected": false },
            { "id": "opt-20", "option": "d", "text": "let user: { name string, age number };", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-006",
          "title": "What is 'any'",
          "question": "What does the 'any' type do in TypeScript?",
          "options": [
            { "id": "opt-21", "option": "a", "text": "It restricts a variable to only one type", "correct": false, "selected": false },
            { "id": "opt-22", "option": "b", "text": "It turns off type checking and allows any value", "correct": true, "selected": false },
            { "id": "opt-23", "option": "c", "text": "It only allows numbers", "correct": false, "selected": false },
            { "id": "opt-24", "option": "d", "text": "It means the variable is undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-007",
          "title": "Literal Types",
          "question": "What is a literal type in TypeScript?",
          "options": [
            { "id": "opt-25", "option": "a", "text": "A type that only works with numbers", "correct": false, "selected": false },
            { "id": "opt-26", "option": "b", "text": "A type that can hold any string value", "correct": false, "selected": false },
            { "id": "opt-27", "option": "c", "text": "A type that means the variable is undefined", "correct": false, "selected": false },
            { "id": "opt-28", "option": "d", "text": "A type that can only hold a specific exact value", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "q-mil-008",
          "title": "Array Type Syntax",
          "question": "Which of the following correctly declares an array of numbers in TypeScript?",
          "options": [
            { "id": "opt-29", "option": "a", "text": "let numbers: number[] = [1, 2, 3];", "correct": true, "selected": false },
            { "id": "opt-30", "option": "b", "text": "let numbers: []number = [1, 2, 3];", "correct": false, "selected": false },
            { "id": "opt-31", "option": "c", "text": "let numbers: array<number> = [1, 2, 3];", "correct": false, "selected": false },
            { "id": "opt-32", "option": "d", "text": "let numbers = [1, 2, 3];", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-009",
          "title": "Function Parameter Types",
          "question": "Which of the following correctly declares a function with typed parameters?",
          "options": [
            { "id": "opt-33", "option": "a", "text": "function greet(name: string) { return 'Hello ' + name; }", "correct": true, "selected": false },
            { "id": "opt-34", "option": "b", "text": "function greet(name) { return 'Hello ' + name; }", "correct": false, "selected": false },
            { "id": "opt-35", "option": "c", "text": "function greet(string name) { return 'Hello ' + name; }", "correct": false, "selected": false },
            { "id": "opt-36", "option": "d", "text": "function greet(name: string): { return 'Hello ' + name; }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-010",
          "title": "What is Void",
          "question": "What does the 'void' type mean in TypeScript?",
          "options": [
            { "id": "opt-37", "option": "a", "text": "A function that returns nothing (undefined)", "correct": true, "selected": false },
            { "id": "opt-38", "option": "b", "text": "A function that never returns", "correct": false, "selected": false },
            { "id": "opt-39", "option": "c", "text": "A function that returns a number", "correct": false, "selected": false },
            { "id": "opt-40", "option": "d", "text": "A function that returns a string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-011",
          "title": "What is Never",
          "question": "What does the 'never' type mean in TypeScript?",
          "options": [
            { "id": "opt-41", "option": "a", "text": "A function that returns undefined", "correct": false, "selected": false },
            { "id": "opt-42", "option": "b", "text": "A function that never returns (throws error or infinite loop)", "correct": true, "selected": false },
            { "id": "opt-43", "option": "c", "text": "A function that returns null", "correct": false, "selected": false },
            { "id": "opt-44", "option": "d", "text": "A function that returns void", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-012",
          "title": "Optional Properties",
          "question": "What does the ? symbol mean after a property name in a TypeScript object type?",
          "options": [
            { "id": "opt-45", "option": "a", "text": "The property is required", "correct": false, "selected": false },
            { "id": "opt-46", "option": "b", "text": "The property is optional", "correct": true, "selected": false },
            { "id": "opt-47", "option": "c", "text": "The property can only be null", "correct": false, "selected": false },
            { "id": "opt-48", "option": "d", "text": "The property is a boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-013",
          "title": "String Literal Syntax",
          "question": "Which of the following correctly declares a string literal type?",
          "options": [
            { "id": "opt-49", "option": "a", "text": "let status = 'active';", "correct": false, "selected": false },
            { "id": "opt-50", "option": "b", "text": "let status: 'active' = 'active';", "correct": true, "selected": false },
            { "id": "opt-51", "option": "c", "text": "let status: string = active;", "correct": false, "selected": false },
            { "id": "opt-52", "option": "d", "text": "let status: string = 'active';", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-014",
          "title": "Void Function with Return Statement",
          "question": "function doSomething(): void {\n  return;\n}\nIs this valid TypeScript?",
          "options": [
            { "id": "opt-53", "option": "a", "text": "No, void functions cannot have any return statement", "correct": false, "selected": false },
            { "id": "opt-54", "option": "b", "text": "Yes, returning nothing (just 'return;') is valid for void functions", "correct": true, "selected": false },
            { "id": "opt-55", "option": "c", "text": "No, you must return undefined explicitly", "correct": false, "selected": false },
            { "id": "opt-56", "option": "d", "text": "Yes, but only if you return null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-015",
          "title": "Never with Error",
          "question": "function throwError(message: string): never {\n  throw new Error(message);\n}\nWhat happens when this function is called?",
          "options": [
            { "id": "opt-57", "option": "a", "text": "It returns undefined", "correct": false, "selected": false },
            { "id": "opt-58", "option": "b", "text": "It throws an error and never returns", "correct": true, "selected": false },
            { "id": "opt-59", "option": "c", "text": "It logs the message and returns void", "correct": false, "selected": false },
            { "id": "opt-60", "option": "d", "text": "It returns null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-016",
          "title": "Union Type Parameters",
          "question": "function display(value: string | number) { console.log(value); }\ndisplay('Hello');\ndisplay(42);\ndisplay(true);",
          "options": [
            { "id": "opt-61", "option": "a", "text": "display('Hello') and display(42) are valid, display(true) is invalid", "correct": true, "selected": false },
            { "id": "opt-62", "option": "b", "text": "display('Hello'), display(42), and display(true) are all valid", "correct": false, "selected": false },
            { "id": "opt-63", "option": "c", "text": "Only display('Hello') is valid", "correct": false, "selected": false },
            { "id": "opt-64", "option": "d", "text": "Only display(42) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-017",
          "title": "Optional Parameters",
          "question": "How do you make a function parameter optional in TypeScript?",
          "options": [
            { "id": "opt-65", "option": "a", "text": "function greet(name?) { }", "correct": false, "selected": false },
            { "id": "opt-66", "option": "b", "text": "function greet(name: string?) { }", "correct": false, "selected": false },
            { "id": "opt-67", "option": "c", "text": "function greet(name?: string) { }", "correct": true, "selected": false },
            { "id": "opt-68", "option": "d", "text": "function greet(optional name: string) { }", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-mil-018",
          "title": "Literal Type Error",
          "question": "function setStatus(status: 'active' | 'inactive') { }\nsetStatus('pending');",
          "options": [
            { "id": "opt-69", "option": "a", "text": "It works fine because status can be any string", "correct": false, "selected": false },
            { "id": "opt-70", "option": "b", "text": "TypeScript shows an error because 'pending' is not in the allowed literal types", "correct": true, "selected": false },
            { "id": "opt-71", "option": "c", "text": "It sets status to 'active' automatically", "correct": false, "selected": false },
            { "id": "opt-72", "option": "d", "text": "It converts 'pending' to undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-019",
          "title": "Array Inference",
          "question": "const fruits = []\nWhat type does TypeScript infer for 'fruits'?",
          "options": [
            { "id": "opt-73", "option": "a", "text": "string[]", "correct": false, "selected": false },
            { "id": "opt-74", "option": "b", "text": "any[]", "correct": true, "selected": false },
            { "id": "opt-75", "option": "c", "text": "never[]", "correct": false, "selected": false },
            { "id": "opt-76", "option": "d", "text": "number[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-020",
          "title": "Void vs Undefined",
          "question": "What is the difference between 'void' and 'undefined' in TypeScript?",
          "options": [
            { "id": "opt-77", "option": "a", "text": "They are exactly the same thing", "correct": false, "selected": false },
            { "id": "opt-78", "option": "b", "text": "'void' is for functions that don't return a value, 'undefined' is an actual value", "correct": true, "selected": false },
            { "id": "opt-79", "option": "c", "text": "'void' means never returns, 'undefined' means returns nothing", "correct": false, "selected": false },
            { "id": "opt-80", "option": "d", "text": "'void' only works with arrow functions", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-021",
          "title": "Reassigning 'any'",
          "question": "let id: any = '901482';\nid = 123;\nid = { value: 123 };\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-81", "option": "a", "text": "TypeScript shows errors for each reassignment", "correct": false, "selected": false },
            { "id": "opt-82", "option": "b", "text": "It works fine because 'any' allows any type", "correct": true, "selected": false },
            { "id": "opt-83", "option": "c", "text": "The code only accepts string values", "correct": false, "selected": false },
            { "id": "opt-84", "option": "d", "text": "TypeScript automatically converts all values to strings", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-022",
          "title": "Fixing with export {}",
          "question": "How does adding 'export {}' at the top of a TypeScript file fix the variable name conflict?",
          "options": [
            { "id": "opt-85", "option": "a", "text": "It deletes the variable from the file", "correct": false, "selected": false },
            { "id": "opt-86", "option": "b", "text": "It makes the file a module, creating its own scope", "correct": true, "selected": false },
            { "id": "opt-87", "option": "c", "text": "It tells TypeScript to ignore the variable", "correct": false, "selected": false },
            { "id": "opt-88", "option": "d", "text": "It changes the variable name automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-023",
          "title": "Union Types in Objects",
          "question": "In this object type: { id: number | string, name: string }, what types can id be?",
          "options": [
            { "id": "opt-89", "option": "a", "text": "Only number", "correct": false, "selected": false },
            { "id": "opt-90", "option": "b", "text": "Only string", "correct": false, "selected": false },
            { "id": "opt-91", "option": "c", "text": "Either number or string", "correct": true, "selected": false },
            { "id": "opt-92", "option": "d", "text": "Both number and string at the same time", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-mil-024",
          "title": "Literal Type with Union",
          "question": "let status: 'active' | 'inactive' = 'active';\nstatus = 'inactive';\nstatus = 'pending';\nWhat happens on the third assignment?",
          "options": [
            { "id": "opt-93", "option": "a", "text": "It converts 'pending' to 'active'", "correct": false, "selected": false },
            { "id": "opt-94", "option": "b", "text": "status becomes undefined", "correct": false, "selected": false },
            { "id": "opt-95", "option": "c", "text": "TypeScript shows an error because 'pending' is not in the union", "correct": true, "selected": false },
            { "id": "opt-96", "option": "d", "text": "It works fine because union allows any string", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-mil-025",
          "title": "Array Type Error",
          "question": "const numbers: number[] = [1, 2, 3, 4];\nnumbers.push('123')\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-97", "option": "a", "text": "It works fine and adds '123' to the array", "correct": false, "selected": false },
            { "id": "opt-98", "option": "b", "text": "TypeScript shows an error because '123' is a string, not a number", "correct": true, "selected": false },
            { "id": "opt-99", "option": "c", "text": "It converts '123' to a number", "correct": false, "selected": false },
            { "id": "opt-100", "option": "d", "text": "The array becomes empty", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-026",
          "title": "Number Literal Type",
          "question": "Which of the following is a valid number literal type?",
          "options": [
            { "id": "opt-101", "option": "a", "text": "let count: 5 = 10;", "correct": false, "selected": false },
            { "id": "opt-102", "option": "b", "text": "let count: number = '5';", "correct": false, "selected": false },
            { "id": "opt-103", "option": "c", "text": "let count: number = 5;", "correct": false, "selected": false },
            { "id": "opt-104", "option": "d", "text": "let count: 5 = 5;", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "q-mil-027",
          "title": "Mixed Parameter Types",
          "question": "function createUser(id: number | string, name: string, isActive?: boolean) { }\ncreateUser(1, 'Mike');\ncreateUser('ABC', 'Jane', true);\ncreateUser(true, 'Bob');",
          "options": [
            { "id": "opt-105", "option": "a", "text": "createUser(1, 'Mike') and createUser('ABC', 'Jane', true) are valid, createUser(true, 'Bob') is invalid", "correct": true, "selected": false },
            { "id": "opt-106", "option": "b", "text": "All calls including createUser(true, 'Bob') are valid", "correct": false, "selected": false },
            { "id": "opt-107", "option": "c", "text": "Only createUser(1, 'Mike') is valid", "correct": false, "selected": false },
            { "id": "opt-108", "option": "d", "text": "Only createUser('ABC', 'Jane', true) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-028",
          "title": "Never with Infinite Loop",
          "question": "function infiniteLoop() {\n  while (true) {\n    console.log('Running...');\n  }\n}\nWhat type should this function return?",
          "options": [
            { "id": "opt-109", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "opt-110", "option": "b", "text": "never", "correct": true, "selected": false },
            { "id": "opt-111", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-112", "option": "d", "text": "null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-030",
          "title": "'any' with Arrays",
          "question": "let users: any = [{ id: 1, name: 'Lee' }];\nusers[0].name = 134;\nusers[0].age = 23;\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-117", "option": "a", "text": "TypeScript shows errors because name should be a string", "correct": false, "selected": false },
            { "id": "opt-118", "option": "b", "text": "It works fine because 'any' allows adding and changing any properties", "correct": true, "selected": false },
            { "id": "opt-119", "option": "c", "text": "TypeScript shows an error because age doesn't exist", "correct": false, "selected": false },
            { "id": "opt-120", "option": "d", "text": "Only the first line works, the rest fail", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-031",
          "title": "Void vs Never",
          "question": "What is the main difference between 'void' and 'never'?",
          "options": [
            { "id": "opt-121", "option": "a", "text": "'void' means returns nothing (undefined), 'never' means never returns", "correct": true, "selected": false },
            { "id": "opt-122", "option": "b", "text": "'void' means never returns, 'never' means returns nothing", "correct": false, "selected": false },
            { "id": "opt-123", "option": "c", "text": "They are the same thing", "correct": false, "selected": false },
            { "id": "opt-124", "option": "d", "text": "'void' is for functions, 'never' is for variables only", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-032",
          "title": "Spread Operator with Arrays",
          "question": "const numbers: number[] = [1, 2, 3, 4];\nconst prices = [...numbers, 'hello']\nWhat type does TypeScript infer for 'prices'?",
          "options": [
            { "id": "opt-125", "option": "a", "text": "number[]", "correct": false, "selected": false },
            { "id": "opt-126", "option": "b", "text": "string[]", "correct": false, "selected": false },
            { "id": "opt-127", "option": "c", "text": "(number | string)[]", "correct": true, "selected": false },
            { "id": "opt-128", "option": "d", "text": "any[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-mil-034",
          "title": "Mixed Array Inference",
          "question": "const mixed = ['hello', 12, true]\nmixed.push({name: 1})\nWhat type does TypeScript infer for 'mixed' and what happens when pushing an object?",
          "options": [
            { "id": "opt-133", "option": "a", "text": "mixed is any[] and the push works fine", "correct": false, "selected": false },
            { "id": "opt-134", "option": "b", "text": "mixed is (string | number | boolean)[] and TypeScript shows an error when pushing an object", "correct": true, "selected": false },
            { "id": "opt-135", "option": "c", "text": "mixed is string[] and the push fails", "correct": false, "selected": false },
            { "id": "opt-136", "option": "d", "text": "mixed is (string | number | boolean | object)[] and the push works", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-035",
          "title": "Multiple Optional Parameters",
          "question": "function log(message: string, level?: string, timestamp?: number) { }\nlog('Hello');\nlog('Hello', 'info');\nlog('Hello', 'info', 12345);",
          "options": [
            { "id": "opt-137", "option": "a", "text": "Only log('Hello') is valid", "correct": false, "selected": false },
            { "id": "opt-138", "option": "b", "text": "Only log('Hello', 'info') is valid", "correct": false, "selected": false },
            { "id": "opt-139", "option": "c", "text": "log('Hello'), log('Hello', 'info'), and log('Hello', 'info', 12345) are all valid", "correct": true, "selected": false },
            { "id": "opt-140", "option": "d", "text": "None of these calls are valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-mil-037",
          "title": "Required vs Optional",
          "question": "let person: { name?: string } = {}\nperson.name = 'Mike'\nWhy does this code work?",
          "options": [
            { "id": "opt-145", "option": "a", "text": "Because name is optional, you can add it later", "correct": true, "selected": false },
            { "id": "opt-146", "option": "b", "text": "Because TypeScript allows any property on objects", "correct": false, "selected": false },
            { "id": "opt-147", "option": "c", "text": "Because {} means the object can have anything", "correct": false, "selected": false },
            { "id": "opt-148", "option": "d", "text": "It would actually show an error", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-038",
          "title": "Boolean Literal Type",
          "question": "Which of these is a boolean literal type?",
          "options": [
            { "id": "opt-149", "option": "a", "text": "let isReady: true = false;", "correct": false, "selected": false },
            { "id": "opt-150", "option": "b", "text": "let isReady: boolean | true;", "correct": false, "selected": false },
            { "id": "opt-151", "option": "c", "text": "let isReady: true = true;", "correct": true, "selected": false },
            { "id": "opt-152", "option": "d", "text": "let isReady: boolean = true;", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-mil-039",
          "title": "Union with Literal Types",
          "question": "function sendMessage(type: 'email' | 'sms', content: string | number) { }\nsendMessage('email', 'Hello');\nsendMessage('sms', 12345);\nsendMessage('email', 456);\nsendMessage('email', true);",
          "options": [
            { "id": "opt-153", "option": "a", "text": "sendMessage('email', 'Hello'), sendMessage('sms', 12345), and sendMessage('email', 456) are all valid", "correct": true, "selected": false },
            { "id": "opt-154", "option": "b", "text": "Only sendMessage('email', 'Hello') is valid", "correct": false, "selected": false },
            { "id": "opt-155", "option": "c", "text": "Only sendMessage('sms', 12345) is valid", "correct": false, "selected": false },
            { "id": "opt-156", "option": "d", "text": "sendMessage('email', true) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-040",
          "title": "Arrow Function with Void",
          "question": "const logMessage = (msg: string): void => {\n  console.log(msg);\n};\nWhat is the return type of this arrow function?",
          "options": [
            { "id": "opt-157", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "opt-158", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "opt-159", "option": "c", "text": "void", "correct": true, "selected": false },
            { "id": "opt-160", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-mil-041",
          "title": "Object Assignment",
          "question": "let user: { name: string, age: number } = { name: 'Mike' };\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-161", "option": "a", "text": "TypeScript adds age: undefined automatically", "correct": false, "selected": false },
            { "id": "opt-162", "option": "b", "text": "TypeScript shows an error because age is missing", "correct": true, "selected": false },
            { "id": "opt-163", "option": "c", "text": "It works fine and age is optional", "correct": false, "selected": false },
            { "id": "opt-164", "option": "d", "text": "It converts the object to a different type", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-042",
          "title": "Problems with 'any'",
          "question": "What is the main disadvantage of using 'any' in TypeScript?",
          "options": [
            { "id": "opt-165", "option": "a", "text": "It makes the code run slower", "correct": false, "selected": false },
            { "id": "opt-166", "option": "b", "text": "It removes type safety and defeats the purpose of TypeScript", "correct": true, "selected": false },
            { "id": "opt-167", "option": "c", "text": "It only works with strings", "correct": false, "selected": false },
            { "id": "opt-168", "option": "d", "text": "It causes compilation errors", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-043",
          "title": "Void with Return Value",
          "question": "function getNumber(): void {\n  return 42;\n}\nWhat happens when you run this code?",
          "options": [
            { "id": "opt-169", "option": "a", "text": "It works fine and returns 42", "correct": false, "selected": false },
            { "id": "opt-170", "option": "b", "text": "TypeScript shows an error because void functions can't return a value", "correct": true, "selected": false },
            { "id": "opt-171", "option": "c", "text": "It returns undefined", "correct": false, "selected": false },
            { "id": "opt-172", "option": "d", "text": "It converts 42 to undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-044",
          "title": "BigInt and ES Version",
          "question": "Why do we need target: es2022 in tsconfig.json for bigint?",
          "options": [
            { "id": "opt-173", "option": "a", "text": "BigInt was introduced in ES2020 and isn't available in ES6", "correct": true, "selected": false },
            { "id": "opt-174", "option": "b", "text": "BigInt only works with the latest TypeScript version", "correct": false, "selected": false },
            { "id": "opt-175", "option": "c", "text": "ES6 doesn't support number literals with n suffix", "correct": false, "selected": false },
            { "id": "opt-176", "option": "d", "text": "Both a and c are correct", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-mil-045",
          "title": "Type Annotations",
          "question": "In the code let age: number = 20, what is the purpose of : number?",
          "options": [
            { "id": "opt-177", "option": "a", "text": "It assigns the value 20", "correct": false, "selected": false },
            { "id": "opt-178", "option": "b", "text": "It tells TypeScript that age can only hold number values", "correct": true, "selected": false },
            { "id": "opt-179", "option": "c", "text": "It converts 20 to a number", "correct": false, "selected": false },
            { "id": "opt-180", "option": "d", "text": "It's optional and does nothing", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-046",
          "title": "Optional vs Union",
          "question": "What is the difference between 'name?: string' and 'name: string | undefined' as a function parameter?",
          "options": [
            { "id": "opt-181", "option": "a", "text": "There is no difference between them", "correct": false, "selected": false },
            { "id": "opt-182", "option": "b", "text": "'name?: string' makes it optional (can be omitted), 'name: string | undefined' requires explicitly passing undefined", "correct": true, "selected": false },
            { "id": "opt-183", "option": "c", "text": "'name?: string' requires a value, 'name: string | undefined' makes it optional", "correct": false, "selected": false },
            { "id": "opt-184", "option": "d", "text": "'name?: string' only works with strings, 'name: string | undefined' works with any type", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-047",
          "title": "Function Inference with Void",
          "question": "function greet(name: string) {\n  console.log('Hello ' + name);\n}\nWhat type does TypeScript infer for the return type of this function?",
          "options": [
            { "id": "opt-185", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "opt-186", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "opt-187", "option": "c", "text": "void", "correct": true, "selected": false },
            { "id": "opt-188", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-mil-048",
          "title": "Never Function Inference",
          "question": "function fail() {\n  throw new Error('Something went wrong');\n}\nWhat type does TypeScript infer for the return type of this function?",
          "options": [
            { "id": "opt-189", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "opt-190", "option": "b", "text": "never", "correct": true, "selected": false },
            { "id": "opt-191", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-192", "option": "d", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-mil-050",
          "title": "Explicit Mixed Array",
          "question": "Which of the following correctly declares an array that can hold strings, numbers, and booleans?",
          "options": [
            { "id": "opt-197", "option": "a", "text": "let mixed: string[] | number[] | boolean[] = ['hello', 12, true];", "correct": false, "selected": false },
            { "id": "opt-198", "option": "b", "text": "let mixed: (string | number | boolean)[] = ['hello', 12, true];", "correct": true, "selected": false },
            { "id": "opt-199", "option": "c", "text": "let mixed: string | number | boolean[] = ['hello', 12, true];", "correct": false, "selected": false },
            { "id": "opt-200", "option": "d", "text": "let mixed: any[] = ['hello', 12, true];", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-mil-001",
          "title": "Create a User Object with Union Types",
          "description": "Create an object called %user% with properties: %id% (number | string), %name% (string), and %age% (number). Add type annotations. Then add an optional %email% property.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let user: {\n  id: number | string,\n  name: string,\n  age: number,\n  email?: string\n} = {\n  id: 123,\n  name: 'Mike',\n  age: 23\n};\nuser.email = 'mike@email.com';",
          "done": false,
        },
        {
          "id": "task-mil-002",
          "title": "Function with Multiple Parameter Types",
          "description": "Create a function called %processValue% that takes a %value% parameter with union type %string | number | boolean%. Inside the function, log the value and its type. Call it with different values.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function processValue(value: string | number | boolean) {\n  console.log('Value:', value, 'Type:', typeof value);\n}\nprocessValue('Hello');\nprocessValue(42);\nprocessValue(true);",
          "done": false,
        },
        {
          "id": "task-mil-003",
          "title": "Array with Mixed Types",
          "description": "Create an array called %mixedArray% that can hold %strings%, %numbers%, and %booleans%. Add values %'apple'%, %42%, and %false%. Then try to add an %object% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const mixedArray: (string | number | boolean)[] = ['apple', 42, false];\nmixedArray.push({key: 'value'}); // TypeScript shows error",
          "done": false,
        },
        {
          "id": "task-mil-004",
          "title": "Literal Type Function",
          "description": "Create a function called %setPriority% that takes a %priority% parameter with literal type %'low'% | %'medium'% | %'high'%. Log the priority. Call it with each valid value and then try %'urgent'% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function setPriority(priority: 'low' | 'medium' | 'high') {\n  console.log('Priority:', priority);\n}\nsetPriority('low');\nsetPriority('medium');\nsetPriority('high');\nsetPriority('urgent'); // TypeScript shows error",
          "done": false,
        },
        {
          "id": "task-mil-006",
          "title": "Never Function with Error",
          "description": "Create a function called %panic% that takes a %message% (string) and throws an error. Add the correct return type (%never%). Call the function.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function panic(message: string): never {\n  throw new Error(message);\n}\npanic('Something went terribly wrong');",
          "done": false,
        },
        {
          "id": "task-mil-007",
          "title": "Object with Optional and Union Types",
          "description": "Create an object type for a %product% with: %id% (number), %name% (string), %price% (number), %category% (optional string), and %tags% (array of strings). Create an example product object.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let product: {\n  id: number,\n  name: string,\n  price: number,\n  category?: string,\n  tags: string[]\n} = {\n  id: 1,\n  name: 'Laptop',\n  price: 999.99,\n  tags: ['electronics', 'computer']\n};\nproduct.category = 'Technology';",
          "done": false,
        },
        {
          "id": "task-mil-008",
          "title": "Function with Optional Parameters",
          "description": "Create a function called %greetUser% that takes a %name% (string) and an optional %title% (string). If title is provided, log 'Hello, Title Name'. Otherwise, log 'Hello, Name'.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function greetUser(name: string, title?: string) {\n  if (title) {\n    console.log('Hello, ' + title + ' ' + name);\n  } else {\n    console.log('Hello, ' + name);\n  }\n}\ngreetUser('Mike');\ngreetUser('Jane', 'Dr.');",
          "done": false,
        },
        {
          "id": "task-mil-009",
          "title": "Array Operations with Inference",
          "description": "Create an empty array called %items%. Push a %string%, then a %number%, then a %boolean%. What type does TypeScript infer for the array? Then try to push an %object% to see the error.",
          "result": "",
          "note": "implement in your editor / console and observe the inference",
          "solution": "const items = [];\nitems.push('Hello');\nitems.push(42);\nitems.push(true);\n// items is inferred as (string | number | boolean)[]\nitems.push({key: 'value'}); // TypeScript shows error",
          "done": false,
        },
        {
          "id": "task-mil-010",
          "title": "Combining All Concepts",
          "description": "Create a function called %handleData% that takes:\n- %data%: string | number\n- %type%: 'string' | 'number' | 'boolean'\n- %callback%: optional function that takes no parameters and returns void\nInside the function, log the data and its type. If callback is provided, call it. Call the function with different combinations.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function handleData(\n  data: string | number,\n  type: 'string' | 'number' | 'boolean',\n  callback?: () => void\n) {\n  console.log('Data:', data, 'Type:', type);\n  if (callback) {\n    callback();\n  }\n}\nhandleData('Hello', 'string');\nhandleData(42, 'number', () => console.log('Done!'));",
          "done": false,
        }
      ]
    },
    {
      "id": "31241",
      "type": "title",
      "title": "Section 3: Typescript",
      "videoID": "1121",
      "questions": [
      ],
      "tasks": [
      ]
    },
  ]
}