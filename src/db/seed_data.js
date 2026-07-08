export const seedData = {
  id: 114,
  version: '0.4',
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
 
    
  ]
}