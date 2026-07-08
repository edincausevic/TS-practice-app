export const seedData = {
  id: 114,
  version: '0.3',
  allExercises: [
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
          "title": "Union Type with Error",
          "description": "Create a variable called %data% with union type %string | boolean%. Assign it a %string%, then a %boolean%, and finally try to assign it a %number% to see the error.",
          "result": "",
          "note": "implement in your editor / console and observe the type error",
          "solution": "let data: string | boolean = 'Hello';\ndata = true;\ndata = 42; // TypeScript shows error",
          "done": false
        }
      ]
    },
  ]
}