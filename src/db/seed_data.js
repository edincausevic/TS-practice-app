export const seedData = {
  id: '144_TS',
  version: '0.3',
  allExercises: [
    {
      "id": "fx8brk4iqkqx8hbp5l8b",
      "type": "title",
      "title": "Section 2: Starting with Typescript",
      "videoID": "1121",
      "questionsTotal": 0,
      "tasksTotal": 0,
      "totalCorrect": 0,
      "totalFalse": 0,
      "totalTasksDone": 0,
      "sectionExercisesIndex": "1-12",
      "questions": [
      ],
      "tasks": [
      ]
    },
    {
      "id": "h864q8os35xgpakyqyzs",
      "title": "TypeScript Primitives",
      "videoID": "11",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "v2wrjf6gbyz6uckh5s15",
          "title": "String Type",
          "question": "Which of the following is the correct way to declare a string variable in TypeScript?",
          "options": [
            { "id": "0ez2ixfhtjdqcltcj7la", "option": "a", "text": "let name = 'Mike';", "correct": false, "selected": false },
            { "id": "gppwpd42hiz0kibw51b4", "option": "b", "text": "const name: string = 'Mike';", "correct": true, "selected": false },
            { "id": "jaziy26swev7arxlqw21", "option": "c", "text": "var name: 'Mike';", "correct": false, "selected": false },
            { "id": "s2rlvvmvm42x7jko84yu", "option": "d", "text": "string name = 'Mike';", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "bu2v8gd0flr5n6105he2",
          "title": "Type Annotations",
          "question": "In the code const age: number = 20, what is the purpose of : number?",
          "options": [
            { "id": "3bz3fwcpz65lpc8vw124", "option": "a", "text": "It assigns the value 20", "correct": false, "selected": false },
            { "id": "jo4bqgqrxi0ftrqthic7", "option": "b", "text": "It tells TypeScript that age can only hold number values", "correct": true, "selected": false },
            { "id": "202gb82d64ygru7k70vs", "option": "c", "text": "It converts 20 to a number", "correct": false, "selected": false },
            { "id": "je52wy39t6m7kmu90gm3", "option": "d", "text": "It's optional and does nothing", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "1ives04wnzm3yrby95tn",
          "title": "Boolean Type",
          "question": "Which primitive type would you use for a variable that can only be true or false?",
          "options": [
            { "id": "llzn7q4zzelwoqsy7tod", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "rgm7afy4woutwswlgnkz", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "lc1ijqiqhd4o0mthkmrv", "option": "c", "text": "boolean", "correct": true, "selected": false },
            { "id": "o9cvqlk6ck635tvdih28", "option": "d", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "z8is36jmsiyru26syy4y",
          "title": "Symbol Syntax",
          "question": "What is the correct way to create a symbol in TypeScript based on the video code?",
          "options": [
            { "id": "lrn27fa5c9prpflppe5u", "option": "a", "text": "const symbol = Symbol('key')", "correct": true, "selected": false },
            { "id": "nkxoo6rfl6istym7byk2", "option": "b", "text": "const symbol: symbol = 'key'", "correct": false, "selected": false },
            { "id": "l75ifn95vrbqp1gs3dm8", "option": "c", "text": "const symbol = new Symbol('key')", "correct": false, "selected": false },
            { "id": "0fsj2cozieek1kryre35", "option": "d", "text": "const symbol: symbol = Symbol.key", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "oehl8354v9r68ql0cy0n",
          "title": "BigInt and ES Version",
          "question": "Based on the video, why do we need target: es2022 in tsconfig.json for bigint?",
          "options": [
            { "id": "mc7w4419oz6210joo8gu", "option": "a", "text": "BigInt was introduced in ES2020 and isn't available in ES6", "correct": true, "selected": false },
            { "id": "h7kmasgjpc60012xaebp", "option": "b", "text": "BigInt only works with the latest TypeScript version", "correct": false, "selected": false },
            { "id": "3kg9pshsuudr85dizqrz", "option": "c", "text": "ES6 doesn't support number literals with n suffix", "correct": false, "selected": false },
            { "id": "6k3ekhjv1ldjb79ct76u", "option": "d", "text": "Both a and c are correct", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "w533h0d9yvulwt4zyu9n",
          "title": "Identifying Primitive Types",
          "question": "In the code const data: null = null, what type is data?",
          "options": [
            { "id": "9pmf9zuvpjvzffvsr9oz", "option": "a", "text": "undefined", "correct": false, "selected": false },
            { "id": "fhm5uu2tgobdijzax3tl", "option": "b", "text": "null", "correct": true, "selected": false },
            { "id": "14a75c5hml8on70gryrg", "option": "c", "text": "object", "correct": false, "selected": false },
            { "id": "19p3ogm50cbczsv2pgd0", "option": "d", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "7rssu9p17inkupxiby6g",
          "title": "Declare a String and Number",
          "description": "Create two variables: one for a person's %name% and one for their %age%. Add type annotations.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const name: string = 'Mike';\nconst age: number = 20;",
          "done": false
        },
        {
          "id": "035gyhid7xdxv1odqriw",
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
      "id": "3ea7ij5ttpc1bo8pc25h",
      "title": "Type Inference",
      "videoID": "12",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "fmtym7j2ihebchfb6ytc",
          "title": "What is Type Inference",
          "question": "What does TypeScript's type inference do?",
          "options": [
            { "id": "ua03xilyxw8tpvgrgyrf", "option": "a", "text": "It forces you to write type annotations for every variable", "correct": false, "selected": false },
            { "id": "0rblssxbe885ejvkobw2", "option": "b", "text": "It automatically determines the type based on the assigned value", "correct": true, "selected": false },
            { "id": "1zgkmmgey87hneyrl0cp", "option": "c", "text": "It converts all types to 'any'", "correct": false, "selected": false },
            { "id": "uy7aoaipnj9wceaziks3", "option": "d", "text": "It only works with 'const' variables", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "dcjrn73sw5ip1aogncgs",
          "title": "String Inference",
          "question": "let message = 'Hello';\nmessage = 42;\nWhat happens in TypeScript?",
          "options": [
            { "id": "3l4jgk649xylf4gdo5l7", "option": "a", "text": "It works fine because message can be anything", "correct": false, "selected": false },
            { "id": "z6c693rxozvtjlhrxfr2", "option": "b", "text": "TypeScript infers message as string and shows an error when assigning number", "correct": true, "selected": false },
            { "id": "mnscx2vvu8gwnazvah00", "option": "c", "text": "message becomes type 'any'", "correct": false, "selected": false },
            { "id": "sc0iejno0dbob7o86u9e", "option": "d", "text": "It converts 42 to a string automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "mx9mnpxs6mw77maji9yt",
          "title": "Number Inference",
          "question": "let score = 100;\nWhat type does TypeScript infer for 'score'?",
          "options": [
            { "id": "4tntlsg2sziqvkfukgp0", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "qgmfvzt85eskvb1oawjh", "option": "b", "text": "number", "correct": true, "selected": false },
            { "id": "9bry0tdt21tzh2ag1700", "option": "c", "text": "any", "correct": false, "selected": false },
            { "id": "p786w8m8j5y446alv9tw", "option": "d", "text": "boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "scdlshcpivwrhhq6cni3",
          "title": "Boolean Inference",
          "question": "let isReady = true;\nWhat type does TypeScript infer for 'isReady'?",
          "options": [
            { "id": "44cm2l1119gtbpznnstd", "option": "a", "text": "boolean", "correct": true, "selected": false },
            { "id": "uguxuj9qi3kdjwnic2rl", "option": "b", "text": "string", "correct": false, "selected": false },
            { "id": "hm6nbb1ybxhb5j744l4m", "option": "c", "text": "number", "correct": false, "selected": false },
            { "id": "ji0bzi8xpdzi3s9sk4gi", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "584kdus4e7vk1tkudhuq",
          "title": "Reassignment with Inference",
          "question": "let value = 'Hello';\nvalue = 'World';\nvalue = true;\nWhat does TypeScript do?",
          "options": [
            { "id": "l4owyyspgsv42ca44y6a", "option": "a", "text": "Allows all assignments because it's just JavaScript", "correct": false, "selected": false },
            { "id": "07siw81ck3u085r3bn2j", "option": "b", "text": "Infers value as string and shows error when assigning boolean", "correct": true, "selected": false },
            { "id": "cmm31ppcm6xey9hej9js", "option": "c", "text": "Infers value as 'any' type", "correct": false, "selected": false },
            { "id": "qen84zwjv7dqx9l5zuk6", "option": "d", "text": "Changes the type to boolean automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "681v3zp6gq544w2319f8",
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
      "id": "27tnvzhp46r721151e12",
      "title": "Module Scope and Variable Conflicts",
      "videoID": "13",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "xmlnpd4nul06mz07y0kh",
          "title": "Variable Conflict Error",
          "question": "Why does TypeScript show an error when you have the same variable name in two different .ts files?",
          "options": [
            { "id": "wrn48wnf64ub68gmaqs1", "option": "a", "text": "Because TypeScript treats all files as a single global scope by default", "correct": true, "selected": false },
            { "id": "ggkid6edvzw0psut8b3n", "option": "b", "text": "Because TypeScript doesn't allow any duplicate names in a project", "correct": false, "selected": false },
            { "id": "7fffi34sh7fega3ni095", "option": "c", "text": "Because the files are automatically imported into each other", "correct": false, "selected": false },
            { "id": "h3fdfijfnhtfw797ylc6", "option": "d", "text": "Because TypeScript checks for duplicate variable names globally", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "7nz22cmbmgv999bwg9yl",
          "title": "Fixing with export {}",
          "question": "How does adding 'export {}' at the top of a TypeScript file fix the variable name conflict?",
          "options": [
            { "id": "u6lz11mvg8rrl870rx7o", "option": "a", "text": "It deletes the variable from the file", "correct": false, "selected": false },
            { "id": "iqpzdav10og9tdhwifmm", "option": "b", "text": "It makes the file a module, creating its own scope", "correct": true, "selected": false },
            { "id": "4s0fye93eyo68ji0l4dv", "option": "c", "text": "It tells TypeScript to ignore the variable", "correct": false, "selected": false },
            { "id": "2v644cj2xpdso8a1167v", "option": "d", "text": "It changes the variable name automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "rpjuosbejgcx67wun3v5",
          "title": "moduleDetection Setting",
          "question": "What does the 'moduleDetection' setting in tsconfig.json do when set to 'force'?",
          "options": [
            { "id": "po27xw959abv6qaca60i", "option": "a", "text": "It forces all files to be treated as modules", "correct": true, "selected": false },
            { "id": "d0bvuccybzs25mp78yfa", "option": "b", "text": "It detects and deletes all duplicate variables", "correct": false, "selected": false },
            { "id": "jpnk7igb0c3gzrjjpitq", "option": "c", "text": "It prevents TypeScript from running", "correct": false, "selected": false },
            { "id": "qxmisf52vkoy2awea27n", "option": "d", "text": "It only works with JavaScript files", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "04d5puavp82rw4ota0k4",
          "title": "Identifying the Problem",
          "question": "You have two files: file1.ts has 'let name = 'John'' and file2.ts has 'let name = 'Jane''. TypeScript shows an error. Why?",
          "options": [
            { "id": "an2vrolrc5mjztjdxez5", "option": "a", "text": "The names are different so there's no error", "correct": false, "selected": false },
            { "id": "uxor7yu4sez5t3iclccm", "option": "b", "text": "Both variables are in the global scope, causing a conflict", "correct": true, "selected": false },
            { "id": "fs8hzkvzjftlzavjijrq", "option": "c", "text": "You can't use 'let' in TypeScript", "correct": false, "selected": false },
            { "id": "4zyxxpq4pvt0ozqpdp1i", "option": "d", "text": "The files are in different folders so there's no conflict", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
      ]
    },
    {
      "id": "udlxtscwv72eyius7vo1",
      "title": "Union Types",
      "videoID": "14",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "kx2oy1bn42xjgmkpgz39",
          "title": "What is a Union Type",
          "question": "What does the | (pipe) symbol mean in TypeScript?",
          "options": [
            { "id": "p80xvp0s5dyt9jlxbk5c", "option": "a", "text": "It means 'and' - the variable must be both types", "correct": false, "selected": false },
            { "id": "oe3yxkqn6xz5qzi7dcs7", "option": "b", "text": "It means 'or' - the variable can be one of the types", "correct": true, "selected": false },
            { "id": "z44p0v2nr2ejzo0nyfgk", "option": "c", "text": "It means 'not' - the variable cannot be that type", "correct": false, "selected": false },
            { "id": "v4ywy47syozzv6hhftlj", "option": "d", "text": "It means 'any' - the variable can be anything", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "88m3h1ovayfx7a1t5gfs",
          "title": "Union Type Syntax",
          "question": "Which of the following correctly declares a variable that can be either string or number?",
          "options": [
            { "id": "vcef2rmepju8l1s96wjh", "option": "a", "text": "let value: string && number;", "correct": false, "selected": false },
            { "id": "xdgykaf5zgyercybgx3j", "option": "b", "text": "let value: string | number;", "correct": true, "selected": false },
            { "id": "xrrv2ioqqobb6dirynfs", "option": "c", "text": "let value: string, number;", "correct": false, "selected": false },
            { "id": "etg60tzu2qwrtoz542ab", "option": "d", "text": "let value: string + number;", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "cxcymh2lgq3si9rithah",
          "title": "Using Union Types",
          "question": "let value: string | number = 'Hello';\nvalue = 42;\nvalue = true;\nWhat happens on the third assignment?",
          "options": [
            { "id": "strg367et456mj72whst", "option": "a", "text": "It works fine because union types allow anything", "correct": false, "selected": false },
            { "id": "44kbg0q1yld7ckdoz372", "option": "b", "text": "TypeScript shows an error because boolean is not in the union", "correct": true, "selected": false },
            { "id": "5x0rhja9teyclzj88xrh", "option": "c", "text": "It converts true to a string", "correct": false, "selected": false },
            { "id": "xbtvdx0iz02dlr0kn0am", "option": "d", "text": "It converts true to a number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "9ttouy069rgtak29a8ea",
          "title": "Union with Different Types",
          "question": "Which of these union type declarations is valid in TypeScript?",
          "options": [
            { "id": "75fiwgqav58o1wq004dy", "option": "a", "text": "let id: number | string;", "correct": true, "selected": false },
            { "id": "ffzqaosms8axsbe2ftsq", "option": "b", "text": "let id: number string;", "correct": false, "selected": false },
            { "id": "qpvpoyaqvafhpk66k05j", "option": "c", "text": "let id: number, string;", "correct": false, "selected": false },
            { "id": "ygi1zcfaupyq2r4acsw4", "option": "d", "text": "let id: number & string;", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "qohhdrhswpqln5izr4ys",
          "title": "Union with Three Types",
          "question": "let value: string | number | boolean = 'Hello';\nvalue = 42;\nvalue = true;\nvalue = null;\nWhat happens on the fourth assignment?",
          "options": [
            { "id": "4y658f3t77ylg3i7e034", "option": "a", "text": "It works fine because null is a valid primitive type", "correct": false, "selected": false },
            { "id": "y7emmxozr5spmt5c4f7s", "option": "b", "text": "TypeScript shows an error because null is not in the union", "correct": true, "selected": false },
            { "id": "g3xnnt87j18xngfapc6m", "option": "c", "text": "It converts null to undefined", "correct": false, "selected": false },
            { "id": "ezfaky5j1b3gigkan6d3", "option": "d", "text": "It works fine and value becomes null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "husz5ha5egymi2of9vkb",
          "title": "Union with Three Pipes",
          "question": "Which of the following shows a correct union type with three possible types?",
          "options": [
            { "id": "tnmx70p6938zzgkkdtl1", "option": "a", "text": "let data: string | number | boolean;", "correct": true, "selected": false },
            { "id": "qh7aad0484pcoe9epugw", "option": "b", "text": "let data: string number boolean;", "correct": false, "selected": false },
            { "id": "cbwre9n7d60nowafwx41", "option": "c", "text": "let data: string | number && boolean;", "correct": false, "selected": false },
            { "id": "kq4tdnj32a73xxp6lw0h", "option": "d", "text": "let data: string, number, boolean;", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "k1spl8f05av06w49shue",
          "title": "Declare a Union Type",
          "description": "Create a variable called %status% that can be either a %string% or a %number%. Assign it the string 'active', then reassign it to the number %1%.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let status: string | number = 'active';\nstatus = 1;",
          "done": false
        },
        {
          "id": "fc75zytizzhgn7wljgki",
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
      "id": "db28v5kfzuv977j1xqab",
      "title": "Literal Types",
      "videoID": "17",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "6anhpd9wztxhsxiup456",
          "title": "What are Literal Types",
          "question": "What is a literal type in TypeScript?",
          "options": [
            { "id": "m5s6vdtv551hu4oupslh", "option": "a", "text": "A type that only works with numbers", "correct": false, "selected": false },
            { "id": "kbe2fzi41s7wza1nrydb", "option": "b", "text": "A type that can hold any string value", "correct": false, "selected": false },
            { "id": "afkuwvb584ebpky04f6l", "option": "c", "text": "A type that means the variable is undefined", "correct": false, "selected": false },
            { "id": "udz7q2m14v50nahdtfxn", "option": "d", "text": "A type that can only hold a specific exact value", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "bo3nhyl3sn9w4uwnjaux",
          "title": "String Literal Syntax",
          "question": "Which of the following correctly declares a string literal type?",
          "options": [
            { "id": "3q9tho9hnbgt4gyou4b3", "option": "a", "text": "let status = 'active';", "correct": false, "selected": false },
            { "id": "68ocfc8re19qx0yg9pxx", "option": "b", "text": "let status: 'active' = 'active';", "correct": true, "selected": false },
            { "id": "ty66hpiyfrcu7d5ksmcn", "option": "c", "text": "let status: string = active;", "correct": false, "selected": false },
            { "id": "5po8txbwietnj8ti5u4e", "option": "d", "text": "let status: string = 'active';", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "37ifztm6btk0qpduxzv4",
          "title": "Literal Type Error",
          "question": "let direction: 'left' = 'left';\ndirection = 'right';\nWhat happens when you run this code?",
          "options": [
            { "id": "qcchs4k63uovjfs61n34", "option": "a", "text": "TypeScript shows an error because 'right' is not allowed", "correct": true, "selected": false },
            { "id": "ihgjpev8elcr28h9vkbd", "option": "b", "text": "It works fine because direction can be any string", "correct": false, "selected": false },
            { "id": "g02ehg76gh4ktbyv9q34", "option": "c", "text": "direction becomes 'right' automatically", "correct": false, "selected": false },
            { "id": "m8212dkorovhchglty91", "option": "d", "text": "The code only works with numbers", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "sf50olrmqh7xwys2lrpj",
          "title": "Number Literal Type",
          "question": "Which of the following is a valid number literal type?",
          "options": [
            { "id": "gyqrcxaqh5m3aj472yyg", "option": "a", "text": "let count: 5 = 10;", "correct": false, "selected": false },
            { "id": "no8auznjmxly0uqjor1b", "option": "b", "text": "let count: number = '5';", "correct": false, "selected": false },
            { "id": "0gx740v3gggaov6bmwzx", "option": "c", "text": "let count: number = 5;", "correct": false, "selected": false },
            { "id": "adbgphpll91vdp7nxgqa", "option": "d", "text": "let count: 5 = 5;", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "iuia5qj96jy8ytr1u4ny",
          "title": "Literal Type with Union",
          "question": "let status: 'active' | 'inactive' = 'active';\nstatus = 'inactive';\nstatus = 'pending';\nWhat happens on the third assignment?",
          "options": [
            { "id": "u3yil3yr2cc7d3l86rja", "option": "a", "text": "It converts 'pending' to 'active'", "correct": false, "selected": false },
            { "id": "4fq51icb3l6kvx2fv93e", "option": "b", "text": "status becomes undefined", "correct": false, "selected": false },
            { "id": "348vbzhtqsm57g2rcvm6", "option": "c", "text": "TypeScript shows an error because 'pending' is not in the union", "correct": true, "selected": false },
            { "id": "h3fqcl3fz2w0reyo3g47", "option": "d", "text": "It works fine because union allows any string", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "73k5fwsuxs9bl6vi7iqi",
          "title": "Boolean Literal Type",
          "question": "Which of these is a boolean literal type?",
          "options": [
            { "id": "56e97ku0rd5r5tbtud0u", "option": "a", "text": "let isReady: true = false;", "correct": false, "selected": false },
            { "id": "mlpseyzq66qhx4xzwn0f", "option": "b", "text": "let isReady: boolean | true;", "correct": false, "selected": false },
            { "id": "q5snljatem14r5p6ecxd", "option": "c", "text": "let isReady: true = true;", "correct": true, "selected": false },
            { "id": "vjf4pv9f51u7cntxi19z", "option": "d", "text": "let isReady: boolean = true;", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "d3ow5g7c3nmall0k42lg",
          "title": "String Literal Type",
          "description": "Create a variable called %status% with a literal type that can only be %'active'%. Then try to reassign it to %'inactive'% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let status: 'active' = 'active';\nstatus = 'inactive'; // TypeScript shows error",
          "done": false
        },
        {
          "id": "10hy89txc1rl6aykpgjq",
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
      "id": "w5mcpntg3ej2wekhjq1b",
      "title": "The 'any' Type",
      "videoID": "16",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "dtevikwks5e22986ythc",
          "title": "What is 'any'",
          "question": "What does the 'any' type do in TypeScript?",
          "options": [
            { "id": "fqekanp8qgumze7gby7a", "option": "a", "text": "It restricts a variable to only one type", "correct": false, "selected": false },
            { "id": "wr27qg4q5eg2yqc0s0yh", "option": "b", "text": "It turns off type checking and allows any value", "correct": true, "selected": false },
            { "id": "jjuqx1rb97as1nmsr62j", "option": "c", "text": "It only allows numbers", "correct": false, "selected": false },
            { "id": "86o5l8mznv6thbvu0w2r", "option": "d", "text": "It means the variable is undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "k3zhijm837cwryt49t2q",
          "title": "Reassigning 'any'",
          "question": "let id: any = '901482';\nid = 123;\nid = { value: 123 };\nWhat happens when you run this code?",
          "options": [
            { "id": "6amq42ntrship22089je", "option": "a", "text": "TypeScript shows errors for each reassignment", "correct": false, "selected": false },
            { "id": "rwxyl73g7y5e77mco9j1", "option": "b", "text": "It works fine because 'any' allows any type", "correct": true, "selected": false },
            { "id": "f5014fq49v6wex66214b", "option": "c", "text": "The code only accepts string values", "correct": false, "selected": false },
            { "id": "vfklbd0j1ilwwdsx2cw2", "option": "d", "text": "TypeScript automatically converts all values to strings", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "4bss59tff2r435dnzp1i",
          "title": "'any' with Arrays",
          "question": "let users: any = [{ id: 1, name: 'Lee' }];\nusers[0].name = 134;\nusers[0].age = 23;\nWhat happens when you run this code?",
          "options": [
            { "id": "vvcneus33ovdmr4yxawn", "option": "a", "text": "TypeScript shows errors because name should be a string", "correct": false, "selected": false },
            { "id": "2y43qr8flzo0u2cjmezb", "option": "b", "text": "It works fine because 'any' allows adding and changing any properties", "correct": true, "selected": false },
            { "id": "sjheqvtf9l14pmjdclhs", "option": "c", "text": "TypeScript shows an error because age doesn't exist", "correct": false, "selected": false },
            { "id": "mjz9kf8otk6qrwiwduzt", "option": "d", "text": "Only the first line works, the rest fail", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "8k980y665qmkm039g6u2",
          "title": "Problems with 'any'",
          "question": "What is the main disadvantage of using 'any' in TypeScript?",
          "options": [
            { "id": "ompbn9rt1l0uumslx78k", "option": "a", "text": "It makes the code run slower", "correct": false, "selected": false },
            { "id": "vjcrm8xbp5eaccqaiubu", "option": "b", "text": "It removes type safety and defeats the purpose of TypeScript", "correct": true, "selected": false },
            { "id": "ceym38krk51bl49kv6tp", "option": "c", "text": "It only works with strings", "correct": false, "selected": false },
            { "id": "2wpcop98a3ycs33dbbbb", "option": "d", "text": "It causes compilation errors", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": []
    },
    {
      "id": "k8h36nh003pf4koa77an",
      "title": "Objects in TypeScript",
      "videoID": "15",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "naxxo4gh100jz3mfrlop",
          "title": "Object Type Syntax",
          "question": "Which of the following correctly declares an object type in TypeScript?",
          "options": [
            { "id": "3al5r24rqwlctovo5z9x", "option": "a", "text": "let user: { name: string, age: number };", "correct": true, "selected": false },
            { "id": "6vsc876q2qa4o3enk3il", "option": "b", "text": "let user: object { name: string, age: number };", "correct": false, "selected": false },
            { "id": "am3cyvi1jegjj228j6pj", "option": "c", "text": "let user: name: string, age: number;", "correct": false, "selected": false },
            { "id": "kv00stu6pyvnl5v1qrhm", "option": "d", "text": "let user: { name string, age number };", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "y6g7q5eycq40u6nrm4xr",
          "title": "Optional Properties",
          "question": "What does the ? symbol mean after a property name in a TypeScript object type?",
          "options": [
            { "id": "yl79wew2idl7o4hxr3yd", "option": "a", "text": "The property is required", "correct": false, "selected": false },
            { "id": "ncoa061tywo8a9jne30l", "option": "b", "text": "The property is optional", "correct": true, "selected": false },
            { "id": "yxnjojkchma1q43jtigg", "option": "c", "text": "The property can only be null", "correct": false, "selected": false },
            { "id": "4xazobuaowh7i639kp6g", "option": "d", "text": "The property is a boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "9khej3dmsungm79c4s3g",
          "title": "Nested Objects",
          "question": "In the code let user: { address?: { street: string } }, what does address?: mean?",
          "options": [
            { "id": "3i17kgiwjknm2dd60a4u", "option": "a", "text": "address is required but can be empty", "correct": false, "selected": false },
            { "id": "46jr8unj3l0idru8x465", "option": "b", "text": "address is optional - the object may not have it", "correct": true, "selected": false },
            { "id": "02a76qd0xiwafr0gfn9f", "option": "c", "text": "address must be a string", "correct": false, "selected": false },
            { "id": "4zwrtwn3uoqmx7prk22i", "option": "d", "text": "address can only be null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "b4vvnnf74wnkmporhoxj",
          "title": "Union Types in Objects",
          "question": "In this object type: { id: number | string, name: string }, what types can id be?",
          "options": [
            { "id": "m5apy753rjtedfescd77", "option": "a", "text": "Only number", "correct": false, "selected": false },
            { "id": "irbdf3ok1zhevgj8oyjv", "option": "b", "text": "Only string", "correct": false, "selected": false },
            { "id": "ze4eojfkqlg9ms6uoh6d", "option": "c", "text": "Either number or string", "correct": true, "selected": false },
            { "id": "eosxugo09rgw3ysbwo7g", "option": "d", "text": "Both number and string at the same time", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "u3n3u68abmsz9jend32w",
          "title": "Required vs Optional",
          "question": "let person: { name?: string } = {}\nperson.name = 'Mike'\nWhy does this code work?",
          "options": [
            { "id": "f7de3ezbacoognv7cvw3", "option": "a", "text": "Because name is optional, you can add it later", "correct": true, "selected": false },
            { "id": "df3vv2piia3syyectrv9", "option": "b", "text": "Because TypeScript allows any property on objects", "correct": false, "selected": false },
            { "id": "bpvz7w767ur3u5dq24l2", "option": "c", "text": "Because {} means the object can have anything", "correct": false, "selected": false },
            { "id": "rcrql5vfpwct3gbwmofd", "option": "d", "text": "It would actually show an error", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "hbxcnqpu4wzl4kuv39yl",
          "title": "Object Assignment",
          "question": "let user: { name: string, age: number } = { name: 'Mike' };\nWhat happens when you run this code?",
          "options": [
            { "id": "clyvrfr9tsl8nhuanh1l", "option": "a", "text": "TypeScript adds age: undefined automatically", "correct": false, "selected": false },
            { "id": "uf7i0n8wf4zyeheyobka", "option": "b", "text": "TypeScript shows an error because age is missing", "correct": true, "selected": false },
            { "id": "ygxy596qgezhqlu3pfny", "option": "c", "text": "It works fine and age is optional", "correct": false, "selected": false },
            { "id": "kfa26xv4h5woeobr7944", "option": "d", "text": "It converts the object to a different type", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "1ksynjx5uipy7brcnolj",
          "title": "Create a User Object",
          "description": "Create an object called %user% with properties: %id% (number or string), %name% (string), and %age% (number). Add type annotations.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let user: {\n  id: number | string,\n  name: string,\n  age: number\n} = {\n  id: 123,\n  name: 'Mike',\n  age: 23\n}",
          "done": false
        },
        {
          "id": "rlpcgnbbsmfif5scn44f",
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
      "id": "nl6ekvt8z9l9tdjk1s0g",
      "title": "Arrays in TypeScript",
      "videoID": "18",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "3pzigql0tttq6cuhh2rq",
          "title": "Array Type Syntax",
          "question": "Which of the following correctly declares an array of numbers in TypeScript?",
          "options": [
            { "id": "7fyuuh89fg3rhxyaf4uj", "option": "a", "text": "let numbers: number[] = [1, 2, 3];", "correct": true, "selected": false },
            { "id": "t3xe7k0oq46nvq84vgee", "option": "b", "text": "let numbers: []number = [1, 2, 3];", "correct": false, "selected": false },
            { "id": "erzptjs87ro23n228m8a", "option": "c", "text": "let numbers: array<number> = [1, 2, 3];", "correct": false, "selected": false },
            { "id": "e1pw1sj2bnm4lkuhl3wy", "option": "d", "text": "let numbers = [1, 2, 3];", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "rovtktvr89b3y2fgsl30",
          "title": "Array Inference",
          "question": "const fruits = []\nWhat type does TypeScript infer for 'fruits'?",
          "options": [
            { "id": "jvsv69z9upje6lxpdm8t", "option": "a", "text": "string[]", "correct": false, "selected": false },
            { "id": "djez3hoh4ynl2ich3rr1", "option": "b", "text": "any[]", "correct": true, "selected": false },
            { "id": "ylhaslr2co23nscqx3q6", "option": "c", "text": "never[]", "correct": false, "selected": false },
            { "id": "q91xi7lov1isig2sp87c", "option": "d", "text": "number[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "flp4vvzcwm228xo0rov0",
          "title": "Array Type",
          "question": "const numbers: number[] = [1, 2, 3, 4];\nnumbers.push('123')\nWhat happens when you run this code?",
          "options": [
            { "id": "6s8w1n4ulnmg2y5rmnuu", "option": "a", "text": "It works fine and adds '123' to the array", "correct": false, "selected": false },
            { "id": "v6d826zd2577zeteofim", "option": "b", "text": "TypeScript shows an error because '123' is a string, not a number", "correct": true, "selected": false },
            { "id": "b1vj22azbfbi93ziaujn", "option": "c", "text": "It converts '123' to a number", "correct": false, "selected": false },
            { "id": "czq1n5u6lh6koe79evol", "option": "d", "text": "The array becomes empty", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "plfu88jd7qb1myy0k8rk",
          "title": "Spread Operator with Arrays",
          "question": "const numbers: number[] = [1, 2, 3, 4];\nconst prices = [...numbers, 'hello']\nWhat type does TypeScript infer for 'prices'?",
          "options": [
            { "id": "zunryuttzn64ukedj9wv", "option": "a", "text": "number[]", "correct": false, "selected": false },
            { "id": "w878ln7vrh6z67zzox0c", "option": "b", "text": "string[]", "correct": false, "selected": false },
            { "id": "ibmkrvmiijid4w4vp5bt", "option": "c", "text": "(number | string)[]", "correct": true, "selected": false },
            { "id": "dlhrqalhombgeh8tt0dp", "option": "d", "text": "any[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "3bd02icbid3yks593xzm",
          "title": "Mixed Array Inference",
          "question": "const mixed = ['hello', 12, true]\nmixed.push({name: 1})\nWhat type does TypeScript infer for 'mixed' and what happens when pushing an object?",
          "options": [
            { "id": "2y0j6cp0sgpiwlf6oqgi", "option": "a", "text": "mixed is any[] and the push works fine", "correct": false, "selected": false },
            { "id": "kss9mncdunnkzylcdgfy", "option": "b", "text": "mixed is (string | number | boolean)[] and TypeScript shows an error when pushing an object", "correct": true, "selected": false },
            { "id": "peo7juhvlxwpxmb6qoqk", "option": "c", "text": "mixed is string[] and the push fails", "correct": false, "selected": false },
            { "id": "e50654861l5g5tegsbct", "option": "d", "text": "mixed is (string | number | boolean | object)[] and the push works", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "9ppm8g8tng6vt4sg5x9c",
          "title": "Explicit Mixed Array",
          "question": "Which of the following correctly declares an array that can hold strings, numbers, and booleans?",
          "options": [
            { "id": "6nnooa5g0e780mhpi4t2", "option": "a", "text": "let mixed: string[] | number[] | boolean[] = ['hello', 12, true];", "correct": false, "selected": false },
            { "id": "riev0pib9zt1of2otze4", "option": "b", "text": "let mixed: (string | number | boolean)[] = ['hello', 12, true];", "correct": true, "selected": false },
            { "id": "lasl6a7gskvraeghxhui", "option": "c", "text": "let mixed: string | number | boolean[] = ['hello', 12, true];", "correct": false, "selected": false },
            { "id": "qknjcb0ie3j3a3dqfa4y", "option": "d", "text": "let mixed: any[] = ['hello', 12, true];", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "0ryok24kf2ir2759niwm",
          "title": "Typed Array",
          "description": "Create an array of %numbers% called %scores% with values %[10, 20, 30, 40]%. Add the type annotation. Then try to push a %string% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const scores: number[] = [10, 20, 30, 40];\nscores.push('50'); // TypeScript shows error",
          "done": false
        },
        {
          "id": "dqb0w87vzwnzqguwxtci",
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
      "id": "imue2jm7r2hsifv6d0wo",
      "title": "Functions in TypeScript",
      "videoID": "19",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "62tg1fishhgfdqpfkkeo",
          "title": "Function Parameter Types",
          "question": "Which of the following correctly declares a function with typed parameters?",
          "options": [
            { "id": "4hcv9uggrwxi35dwtr9a", "option": "a", "text": "function greet(name: string) { return 'Hello ' + name; }", "correct": true, "selected": false },
            { "id": "zul8afrxffoc4d16y4d9", "option": "b", "text": "function greet(name) { return 'Hello ' + name; }", "correct": false, "selected": false },
            { "id": "kn6ez6i70ei1kj1afpkm", "option": "c", "text": "function greet(string name) { return 'Hello ' + name; }", "correct": false, "selected": false },
            { "id": "1371dm47q8rct7jv89h1", "option": "d", "text": "function greet(name: string): { return 'Hello ' + name; }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "fl8m0292u8r1sr537vbv",
          "title": "Optional Parameters",
          "question": "How do you make a function parameter optional in TypeScript?",
          "options": [
            { "id": "ipvzqbzzrj3c33a051h7", "option": "a", "text": "function greet(name?) { }", "correct": false, "selected": false },
            { "id": "su4nge8iirdfgnj7pcfh", "option": "b", "text": "function greet(name: string?) { }", "correct": false, "selected": false },
            { "id": "c6cxgg7sogksmkmahjx4", "option": "c", "text": "function greet(name?: string) { }", "correct": true, "selected": false },
            { "id": "wgauvbj8unbrwnb3muty", "option": "d", "text": "function greet(optional name: string) { }", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "0ewodr0v2ncgk9vwst42",
          "title": "Optional Parameter Usage",
          "question": "function greet(name?: string) { return 'Hello ' + name; }\ngreet();\ngreet('Mike');",
          "options": [
            { "id": "4187kbvqulcevnjvll74", "option": "a", "text": "Only greet('Mike') is valid, greet() is invalid", "correct": false, "selected": false },
            { "id": "bpu1zneqqscricyzrr57", "option": "b", "text": "Only greet() is valid, greet('Mike') is invalid", "correct": false, "selected": false },
            { "id": "hvra5lxb18d1cm427bsh", "option": "c", "text": "Both greet() and greet('Mike') are valid", "correct": true, "selected": false },
            { "id": "c64q2c8xjau3e6wq7p7q", "option": "d", "text": "Neither greet() nor greet('Mike') is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "bkk5b75fbbav1efw030f",
          "title": "Union Type Parameters",
          "question": "function display(value: string | number) { console.log(value); }\ndisplay('Hello');\ndisplay(42);\ndisplay(true);",
          "options": [
            { "id": "ha0yvcajqros6r5az1e9", "option": "a", "text": "display('Hello') and display(42) are valid, display(true) is invalid", "correct": true, "selected": false },
            { "id": "x3uuw7j1sigwp93rxdh1", "option": "b", "text": "display('Hello'), display(42), and display(true) are all valid", "correct": false, "selected": false },
            { "id": "ia9g5v0feiq6ad87vhvg", "option": "c", "text": "Only display('Hello') is valid", "correct": false, "selected": false },
            { "id": "qy2o08oehpjao5qzaldf", "option": "d", "text": "Only display(42) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s90quz8aaw7xm0ly7js7",
          "title": "Literal Type Parameters",
          "question": "function setStatus(status: 'active' | 'inactive' | 'pending') { }\nsetStatus('active');\nsetStatus('inactive');\nsetStatus('pending');",
          "options": [
            { "id": "pgq93gc6s3kyt1ocr0lj", "option": "a", "text": "setStatus('active'), setStatus('inactive'), and setStatus('pending') are all valid", "correct": true, "selected": false },
            { "id": "apkjod9fjy5e4pf7e9gt", "option": "b", "text": "Only setStatus('active') and setStatus('inactive') are valid", "correct": false, "selected": false },
            { "id": "y8n4m5rnz2wpjel2vpf4", "option": "c", "text": "Only setStatus('pending') is valid", "correct": false, "selected": false },
            { "id": "c8rr6awg71nof4p51vza", "option": "d", "text": "None of these calls are valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "tqhywnvchwcgxfgul6pz",
          "title": "Literal Type Error",
          "question": "function setStatus(status: 'active' | 'inactive') { }\nsetStatus('pending');",
          "options": [
            { "id": "p82xrrsiz4dy4my5gdtg", "option": "a", "text": "It works fine because status can be any string", "correct": false, "selected": false },
            { "id": "5mtrxoxev7tlvqz7bdc0", "option": "b", "text": "TypeScript shows an error because 'pending' is not in the allowed literal types", "correct": true, "selected": false },
            { "id": "3lz517ur935dxxjo83dj", "option": "c", "text": "It sets status to 'active' automatically", "correct": false, "selected": false },
            { "id": "stxhqvmiodsxooeu3pb4", "option": "d", "text": "It converts 'pending' to undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "e7b2wp9dxi3gkw7b8vsv",
          "title": "Mixed Parameter Types",
          "question": "function createUser(id: number | string, name: string, isActive?: boolean) { }\ncreateUser(1, 'Mike');\ncreateUser('ABC', 'Jane', true);\ncreateUser(true, 'Bob');",
          "options": [
            { "id": "e3zce718tw81j1gu2281", "option": "a", "text": "createUser(1, 'Mike') and createUser('ABC', 'Jane', true) are valid, createUser(true, 'Bob') is invalid", "correct": true, "selected": false },
            { "id": "htphv5656dnt2ieaafuz", "option": "b", "text": "All calls including createUser(true, 'Bob') are valid", "correct": false, "selected": false },
            { "id": "i1aoqzkuhf6s5oyfenaq", "option": "c", "text": "Only createUser(1, 'Mike') is valid", "correct": false, "selected": false },
            { "id": "en7z35anmmza0mn6359n", "option": "d", "text": "Only createUser('ABC', 'Jane', true) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "oornn0wautr5hc34egz4",
          "title": "Multiple Optional Parameters",
          "question": "function log(message: string, level?: string, timestamp?: number) { }\nlog('Hello');\nlog('Hello', 'info');\nlog('Hello', 'info', 12345);",
          "options": [
            { "id": "setzbhg63xklqh8jny93", "option": "a", "text": "Only log('Hello') is valid", "correct": false, "selected": false },
            { "id": "ntb9sms2zez2hfua37pm", "option": "b", "text": "Only log('Hello', 'info') is valid", "correct": false, "selected": false },
            { "id": "h7t8tedazukgqrnkafa0", "option": "c", "text": "log('Hello'), log('Hello', 'info'), and log('Hello', 'info', 12345) are all valid", "correct": true, "selected": false },
            { "id": "mk2wax8htcf9tkqqiy5l", "option": "d", "text": "None of these calls are valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "x4h0nit73opuy1mfg6ua",
          "title": "Union with Literal Types",
          "question": "function sendMessage(type: 'email' | 'sms', content: string | number) { }\nsendMessage('email', 'Hello');\nsendMessage('sms', 12345);\nsendMessage('email', 456);\nsendMessage('email', true);",
          "options": [
            { "id": "gmxyb8uuat3wrk0d134g", "option": "a", "text": "sendMessage('email', 'Hello'), sendMessage('sms', 12345), and sendMessage('email', 456) are all valid", "correct": true, "selected": false },
            { "id": "3m05zag2m8fq11zdibqs", "option": "b", "text": "Only sendMessage('email', 'Hello') is valid", "correct": false, "selected": false },
            { "id": "oy8fnn0wmikofwzpjbf5", "option": "c", "text": "Only sendMessage('sms', 12345) is valid", "correct": false, "selected": false },
            { "id": "2cdkjft4g6ap7shfc76h", "option": "d", "text": "sendMessage('email', true) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "k2ao2949ty1x8r8fplda",
          "title": "Optional vs Union",
          "question": "What is the difference between 'name?: string' and 'name: string | undefined' as a function parameter?",
          "options": [
            { "id": "eis5my5r0gs0sjakhszw", "option": "a", "text": "There is no difference between them", "correct": false, "selected": false },
            { "id": "aet671jh0er1brweac09", "option": "b", "text": "'name?: string' makes it optional (can be omitted), 'name: string | undefined' requires explicitly passing undefined", "correct": true, "selected": false },
            { "id": "m6u083tq581pp98wkzf0", "option": "c", "text": "'name?: string' requires a value, 'name: string | undefined' makes it optional", "correct": false, "selected": false },
            { "id": "onji7xkms4u6iil59i3c", "option": "d", "text": "'name?: string' only works with strings, 'name: string | undefined' works with any type", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "jrpbbcrtqpouckn7gjxi",
          "title": "Optional Parameters",
          "description": "Create a function called %display% that takes a %message% (string) and an optional %prefix% (string). If prefix is provided, log it with the message. If no prefix is provided, just log the message. Call it with and without the prefix.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function display(message: string, prefix?: string) {\n  if (prefix) {\n    console.log(prefix + ': ' + message);\n  } else {\n    console.log(message);\n  }\n}\ndisplay('Hello');\ndisplay('World', 'Info');",
          "done": false
        },
        {
          "id": "alfrexydftem832hwfb4",
          "title": "Union Type Parameters",
          "description": "Create a function called %printId% that takes an %id% parameter that can be either a %number% or a %string%. Inside the function, log the id. Call it with both a number and a string.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function printId(id: number | string) {\n  console.log(id);\n}\nprintId(123);\nprintId('ABC123');",
          "done": false
        },
        {
          "id": "htqnsqghwiu76u32u5ul",
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
      "id": "1s1tlcwz8494oh1d1sl8",
      "title": "Void",
      "videoID": "20",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "lo1iv2bst5f8yza6mrau",
          "title": "What is Void",
          "question": "What does the 'void' type mean in TypeScript?",
          "options": [
            { "id": "nmtw86pfndu1o8jzmvrm", "option": "a", "text": "A function that returns nothing (undefined)", "correct": true, "selected": false },
            { "id": "2kd5ygvjkm09toyye6zr", "option": "b", "text": "A function that never returns", "correct": false, "selected": false },
            { "id": "zahn3lddy2e3krdi1vs2", "option": "c", "text": "A function that returns a number", "correct": false, "selected": false },
            { "id": "vktgw9xms805pkdujd2x", "option": "d", "text": "A function that returns a string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "7fjyclzl5h4fis2ax0fc",
          "title": "Void Function",
          "question": "function logMessage(msg: string): void {\n  console.log(msg);\n}\nWhat does this function return?",
          "options": [
            { "id": "7gr9crwtc5yb1lbwp220", "option": "a", "text": "It returns the message as a string", "correct": false, "selected": false },
            { "id": "w8pwdr9qzj1cjb5j13rl", "option": "b", "text": "It returns undefined because it has no return statement", "correct": true, "selected": false },
            { "id": "gx7na6ukde4vjej1kom7", "option": "c", "text": "It returns null", "correct": false, "selected": false },
            { "id": "nfjtirf4x05m1fcu0n01", "option": "d", "text": "It throws an error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "6uixrwj11kz9mhoq5vvh",
          "title": "Void vs Undefined",
          "question": "What is the difference between 'void' and 'undefined' in TypeScript?",
          "options": [
            { "id": "sgihuxdx1ubtkjnvcbz4", "option": "a", "text": "They are exactly the same thing", "correct": false, "selected": false },
            { "id": "507c6bnl7gctn3t3kexv", "option": "b", "text": "'void' is for functions that don't return a value, 'undefined' is an actual value", "correct": true, "selected": false },
            { "id": "hovun8wey3k42dd8ny6t", "option": "c", "text": "'void' means never returns, 'undefined' means returns nothing", "correct": false, "selected": false },
            { "id": "5ua34kjzlspmrnqq5601", "option": "d", "text": "'void' only works with arrow functions", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "gzj02cynjf0vj90kfr1b",
          "title": "Void with Return Statement",
          "question": "function doSomething(): void {\n  return;\n}\nIs this valid TypeScript?",
          "options": [
            { "id": "hxmipnrgkac73cillun9", "option": "a", "text": "No, void functions cannot have any return statement", "correct": false, "selected": false },
            { "id": "0lqjm77juch5ix8lj2j5", "option": "b", "text": "Yes, returning nothing (just 'return;') is valid for void functions", "correct": true, "selected": false },
            { "id": "m29t5ni5tcy05nbq8foi", "option": "c", "text": "No, you must return undefined explicitly", "correct": false, "selected": false },
            { "id": "959qu4xjxdwxjwomebpt", "option": "d", "text": "Yes, but only if you return null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "0casqzyy45fc15mt9oxm",
          "title": "Void with Return Value",
          "question": "function getNumber(): void {\n  return 42;\n}\nWhat happens when you run this code?",
          "options": [
            { "id": "qvyyapv6uyttc4kxpn22", "option": "a", "text": "It works fine and returns 42", "correct": false, "selected": false },
            { "id": "l91oacnn23hfci4ynet8", "option": "b", "text": "TypeScript shows an error because void functions can't return a value", "correct": true, "selected": false },
            { "id": "lz26dqapbjuhqrm0pj7j", "option": "c", "text": "It returns undefined", "correct": false, "selected": false },
            { "id": "4l2rdxfzmgknufph11yi", "option": "d", "text": "It converts 42 to undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "y5vq0zzh5wcz8s256b7l",
          "title": "Function Inference with Void",
          "question": "function greet(name: string) {\n  console.log('Hello ' + name);\n}\nWhat type does TypeScript infer for the return type of this function?",
          "options": [
            { "id": "0sjzitc292a97op9tlju", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "b3pd00qt7p94jw08enjb", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "tem2ksbfayeu3aohrtlj", "option": "c", "text": "void", "correct": true, "selected": false },
            { "id": "s1r5t1l81nyjoimocs1g", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "xc7ueva1uyn1pbmpzse4",
          "title": "Arrow Function with Void",
          "question": "const logMessage = (msg: string): void => {\n  console.log(msg);\n};\nWhat is the return type of this arrow function?",
          "options": [
            { "id": "x01tqtixf2xlga06k7go", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "iqotulttydlmlyyrrtxv", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "xrbvbs7td5ospu4jyi8c", "option": "c", "text": "void", "correct": true, "selected": false },
            { "id": "z9iwy3sr17cldmlavnki", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
      ]
    },
    {
      "id": "d9sobnfafkpy09ndweu5",
      "title": "Never",
      "videoID": "21",
      "section": 2,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "rmlhiz5y1swpio35xe0f",
          "title": "What is Never",
          "question": "What does the 'never' type mean in TypeScript?",
          "options": [
            { "id": "lyvs01o5azgfi3o48zvc", "option": "a", "text": "A function that returns undefined", "correct": false, "selected": false },
            { "id": "9i9uj7wp3a919z3qrymo", "option": "b", "text": "A function that never returns (throws error or infinite loop)", "correct": true, "selected": false },
            { "id": "46f1bp0j45a3vawaoqro", "option": "c", "text": "A function that returns null", "correct": false, "selected": false },
            { "id": "6yqle39k1wecrd0y9361", "option": "d", "text": "A function that returns void", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "rhn9y1j6h9o2eug62g6b",
          "title": "Never with Error",
          "question": "function throwError(message: string): never {\n  throw new Error(message);\n}\nWhat happens when this function is called?",
          "options": [
            { "id": "d4loutapz0000q2nq8w3", "option": "a", "text": "It returns undefined", "correct": false, "selected": false },
            { "id": "mevdedf3hedphrcs6qwr", "option": "b", "text": "It throws an error and never returns", "correct": true, "selected": false },
            { "id": "6e8jbbv85i7cd8h8txu2", "option": "c", "text": "It logs the message and returns void", "correct": false, "selected": false },
            { "id": "9zr34tqkm110wrimrlhu", "option": "d", "text": "It returns null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "gmkjbwy1zkcfbchzy49t",
          "title": "Never with Infinite Loop",
          "question": "function infiniteLoop() {\n  while (true) {\n    console.log('Running...');\n  }\n}\nWhat type this function infers?",
          "options": [
            { "id": "lsn7yv98q0zah4pwv8vo", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "vuym0g5vm8fs5mz1prwd", "option": "b", "text": "never", "correct": true, "selected": false },
            { "id": "ic0lmu7vuji7koms0kns", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "yh8e1s4263xwntpgashb", "option": "d", "text": "null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "lv3o7ww7xsdk84m7ite0",
          "title": "Void vs Never",
          "question": "What is the main difference between 'void' and 'never'?",
          "options": [
            { "id": "t5m16ro785jne6f0svu1", "option": "a", "text": "'void' means returns nothing (undefined), 'never' means never returns", "correct": true, "selected": false },
            { "id": "pgdhlupgndjn6h8frtdu", "option": "b", "text": "'void' means never returns, 'never' means returns nothing", "correct": false, "selected": false },
            { "id": "mohzwd2a9fs31t9mvffi", "option": "c", "text": "They are the same thing", "correct": false, "selected": false },
            { "id": "nvvotz30ewf2svo6qgsq", "option": "d", "text": "'void' is for functions, 'never' is for variables only", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "f2yt98xd0xje5mhqetil",
          "title": "Never vs Void - Error Function",
          "question": "Which return type should you use for a function that always throws an error?",
          "options": [
            { "id": "od0v4o22vlpkim5m2htm", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "cwsxle7elgmx48i5wtse", "option": "b", "text": "never", "correct": true, "selected": false },
            { "id": "ukwbc1itpckxhbrre3g6", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "s1psu6ewrmykacfflbkp", "option": "d", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "hpm24m080e8jd5im3f94",
          "title": "Never Function Inference",
          "question": "function fail() {\n  throw new Error('Something went wrong');\n}\nWhat type does TypeScript infer for the return type of this function?",
          "options": [
            { "id": "3itnhbe9mpxh62uh3n0z", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "sxn7hxm3e8mlr716qfnd", "option": "b", "text": "never", "correct": true, "selected": false },
            { "id": "9xtu58tw649ayouoqcfr", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "5h688a83klzt4smxj9e9", "option": "d", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
      ],
      "tasks": [
      ]
    },
    {
      "id": "w8ov25ylz9uan3077n6h",
      "title": "Milestone Exercise - All Concepts",
      "videoID": "22",
      "section": 2,
      "done": false,
      "milestone": true,
      "inProgress": false,
      "questions": [
        {
          "id": "ncg76gdfkdpxaifab1fn",
          "title": "String Type",
          "question": "Which of the following correctly declares a string variable in TypeScript?",
          "options": [
            { "id": "7jk7khd327uwot3qh733", "option": "a", "text": "let name = 'Mike';", "correct": false, "selected": false },
            { "id": "2wnp0ewivu7qjay3rskm", "option": "b", "text": "const name: string = 'Mike';", "correct": true, "selected": false },
            { "id": "iwu8f3mko26fnsf6mp99", "option": "c", "text": "var name: 'Mike';", "correct": false, "selected": false },
            { "id": "ugsm873w9i8wbaywr1pl", "option": "d", "text": "string name = 'Mike';", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "k31yly8gsdkizs4ftp6h",
          "title": "Type Inference",
          "question": "let message = 'Hello';\nmessage = 42;\nWhat happens in TypeScript?",
          "options": [
            { "id": "l2ms1obtiozckn65h8ua", "option": "a", "text": "It works fine because message can be anything", "correct": false, "selected": false },
            { "id": "8gn4w41stu8h6mheu6kp", "option": "b", "text": "TypeScript infers message as string and shows an error when assigning number", "correct": true, "selected": false },
            { "id": "3joyid3awhn2hud09xnu", "option": "c", "text": "message becomes type 'any'", "correct": false, "selected": false },
            { "id": "j04zl1xbpzy3sd0fcqu8", "option": "d", "text": "It converts 42 to a string automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "f8b0c3m0l115401gblio",
          "title": "Variable Conflict Error",
          "question": "Why does TypeScript show an error when you have the same variable name in two different .ts files?",
          "options": [
            { "id": "ungf564q7ouiow8t3cf8", "option": "a", "text": "Because TypeScript treats all files as a single global scope by default", "correct": true, "selected": false },
            { "id": "eudq2jq6ish0oyn7n2kj", "option": "b", "text": "Because TypeScript doesn't allow any duplicate names in a project", "correct": false, "selected": false },
            { "id": "5xx9xfzuc2e7spm2l5a6", "option": "c", "text": "Because the files are automatically imported into each other", "correct": false, "selected": false },
            { "id": "8nm2jic3ewrb719bazzf", "option": "d", "text": "Because TypeScript checks for duplicate variable names globally", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "o00x4qx0qhmil711ud9d",
          "title": "Union Type Syntax",
          "question": "Which of the following correctly declares a variable that can be either string or number?",
          "options": [
            { "id": "krs5i1dl8kv3c7wyz9by", "option": "a", "text": "let value: string && number;", "correct": false, "selected": false },
            { "id": "tpu6p7omj4djvtebjjhf", "option": "b", "text": "let value: string | number;", "correct": true, "selected": false },
            { "id": "ldc1pqc9fzuv2d6sjq30", "option": "c", "text": "let value: string, number;", "correct": false, "selected": false },
            { "id": "p5j2jq8fgg6mj3r7y8xo", "option": "d", "text": "let value: string + number;", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ot4azufs5bs5n7shamtj",
          "title": "Object Type Syntax",
          "question": "Which of the following correctly declares an object type in TypeScript?",
          "options": [
            { "id": "szwl9vnvww8x3zq073ep", "option": "a", "text": "let user: { name: string, age: number };", "correct": true, "selected": false },
            { "id": "2khphwigpw7x75mpglpt", "option": "b", "text": "let user: object { name: string, age: number };", "correct": false, "selected": false },
            { "id": "825c9bbh0a8u7jyoytse", "option": "c", "text": "let user: name: string, age: number;", "correct": false, "selected": false },
            { "id": "hfxk5avngdeljregxt2a", "option": "d", "text": "let user: { name string, age number };", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "1afiu8n00jkytp03fuof",
          "title": "What is 'any'",
          "question": "What does the 'any' type do in TypeScript?",
          "options": [
            { "id": "75q39vu6ikscj9gvu26u", "option": "a", "text": "It restricts a variable to only one type", "correct": false, "selected": false },
            { "id": "pc8fyf0g3o9bp51nrx1o", "option": "b", "text": "It turns off type checking and allows any value", "correct": true, "selected": false },
            { "id": "y0ue018f2xx4pw4bf0rz", "option": "c", "text": "It only allows numbers", "correct": false, "selected": false },
            { "id": "gjxyxdwf7zgfs6ad0wx5", "option": "d", "text": "It means the variable is undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "epyd52ivl4f81hk0icku",
          "title": "Literal Types",
          "question": "What is a literal type in TypeScript?",
          "options": [
            { "id": "o7tx94emego747e1mtli", "option": "a", "text": "A type that only works with numbers", "correct": false, "selected": false },
            { "id": "bstdz671e1cfe0ijpe2w", "option": "b", "text": "A type that can hold any string value", "correct": false, "selected": false },
            { "id": "1hf402s580slsjj3sehm", "option": "c", "text": "A type that means the variable is undefined", "correct": false, "selected": false },
            { "id": "b8oweev1ve6pckypiwx4", "option": "d", "text": "A type that can only hold a specific exact value", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "gnrwx56cl434zro5881i",
          "title": "Array Type Syntax",
          "question": "Which of the following correctly declares an array of numbers in TypeScript?",
          "options": [
            { "id": "agd2u3ij5dmwvcqyhxb8", "option": "a", "text": "let numbers: number[] = [1, 2, 3];", "correct": true, "selected": false },
            { "id": "6x807das269i2l1rvqwy", "option": "b", "text": "let numbers: []number = [1, 2, 3];", "correct": false, "selected": false },
            { "id": "6bb77x6o5bixuzs804lm", "option": "c", "text": "let numbers: array<number> = [1, 2, 3];", "correct": false, "selected": false },
            { "id": "4dtjefhbhce0i0pk8oi3", "option": "d", "text": "let numbers = [1, 2, 3];", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "2ak8tacy0i23pw7ag9rf",
          "title": "Function Parameter Types",
          "question": "Which of the following correctly declares a function with typed parameters?",
          "options": [
            { "id": "dpjsht53hzh9z6543wof", "option": "a", "text": "function greet(name: string) { return 'Hello ' + name; }", "correct": true, "selected": false },
            { "id": "g5gielme0j46deuyidr6", "option": "b", "text": "function greet(name) { return 'Hello ' + name; }", "correct": false, "selected": false },
            { "id": "bembww2jfohpzsivyfkx", "option": "c", "text": "function greet(string name) { return 'Hello ' + name; }", "correct": false, "selected": false },
            { "id": "xtd9jn7zenhubt2owm47", "option": "d", "text": "function greet(name: string): { return 'Hello ' + name; }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "swmw04j9ra8izc31xs2k",
          "title": "What is Void",
          "question": "What does the 'void' type mean in TypeScript?",
          "options": [
            { "id": "quh80nj8jrqskuqblnxn", "option": "a", "text": "A function that returns nothing (undefined)", "correct": true, "selected": false },
            { "id": "hubzrjlhk7heort1n983", "option": "b", "text": "A function that never returns", "correct": false, "selected": false },
            { "id": "vpl2rulyctnkhs3jmv0x", "option": "c", "text": "A function that returns a number", "correct": false, "selected": false },
            { "id": "f1y3ctowrz0aaf7lieiu", "option": "d", "text": "A function that returns a string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "l8b213niex2h5ygpj8g3",
          "title": "What is Never",
          "question": "What does the 'never' type mean in TypeScript?",
          "options": [
            { "id": "kxbyr0b1chtxqijuvzpt", "option": "a", "text": "A function that returns undefined", "correct": false, "selected": false },
            { "id": "b80o32iybtotcfsbjm35", "option": "b", "text": "A function that never returns (throws error or infinite loop)", "correct": true, "selected": false },
            { "id": "ytsmvjjbtkl5avdge5st", "option": "c", "text": "A function that returns null", "correct": false, "selected": false },
            { "id": "9l0tnut6ui28nsewnqrg", "option": "d", "text": "A function that returns void", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "xdls37gw515j3q4v3c8p",
          "title": "Optional Properties",
          "question": "What does the ? symbol mean after a property name in a TypeScript object type?",
          "options": [
            { "id": "12ceh6sqftosmbsy1mgf", "option": "a", "text": "The property is required", "correct": false, "selected": false },
            { "id": "9y2iq65q52cr4ri0ko3n", "option": "b", "text": "The property is optional", "correct": true, "selected": false },
            { "id": "d26h0g0e060o4431w9w0", "option": "c", "text": "The property can only be null", "correct": false, "selected": false },
            { "id": "cjbibq8yiyf4oze3usvf", "option": "d", "text": "The property is a boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "4wgtegmisp1z12x0aaho",
          "title": "String Literal Syntax",
          "question": "Which of the following correctly declares a string literal type?",
          "options": [
            { "id": "ar4vgrjcwyvt0642yzc4", "option": "a", "text": "let status = 'active';", "correct": false, "selected": false },
            { "id": "zhjhhcfvgjkvos91zky4", "option": "b", "text": "let status: 'active' = 'active';", "correct": true, "selected": false },
            { "id": "bdtvzy67tiokehtdhrw2", "option": "c", "text": "let status: string = active;", "correct": false, "selected": false },
            { "id": "q7xw679n0x9apwo7nftw", "option": "d", "text": "let status: string = 'active';", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "p5h1trxvvde2rofp6hp0",
          "title": "Void Function with Return Statement",
          "question": "function doSomething(): void {\n  return;\n}\nIs this valid TypeScript?",
          "options": [
            { "id": "ycqs4fjp9lg0xjujbieg", "option": "a", "text": "No, void functions cannot have any return statement", "correct": false, "selected": false },
            { "id": "nfie1ni33h2aokub6dfl", "option": "b", "text": "Yes, returning nothing (just 'return;') is valid for void functions", "correct": true, "selected": false },
            { "id": "8g6tkqwvtwe7b579t4vx", "option": "c", "text": "No, you must return undefined explicitly", "correct": false, "selected": false },
            { "id": "hmtdj1idugi8cs87kkij", "option": "d", "text": "Yes, but only if you return null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ub8d53brt60w9cteisdc",
          "title": "Never with Error",
          "question": "function throwError(message: string): never {\n  throw new Error(message);\n}\nWhat happens when this function is called?",
          "options": [
            { "id": "0xen6550sej351lwvbrp", "option": "a", "text": "It returns undefined", "correct": false, "selected": false },
            { "id": "3cumcze0dufwigqhp4h1", "option": "b", "text": "It throws an error and never returns", "correct": true, "selected": false },
            { "id": "9sfmjnnvfejucypza9f2", "option": "c", "text": "It logs the message and returns void", "correct": false, "selected": false },
            { "id": "jyermj9bkcu6r2px5y46", "option": "d", "text": "It returns null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "889ah721v23dik6jq2l5",
          "title": "Union Type Parameters",
          "question": "function display(value: string | number) { console.log(value); }\ndisplay('Hello');\ndisplay(42);\ndisplay(true);",
          "options": [
            { "id": "69ou82antqey6au9dus4", "option": "a", "text": "display('Hello') and display(42) are valid, display(true) is invalid", "correct": true, "selected": false },
            { "id": "vnca0vuyzh97wya6t68j", "option": "b", "text": "display('Hello'), display(42), and display(true) are all valid", "correct": false, "selected": false },
            { "id": "r85xv111czv9jeckcxld", "option": "c", "text": "Only display('Hello') is valid", "correct": false, "selected": false },
            { "id": "pafqacbw0c0e8l4g1y62", "option": "d", "text": "Only display(42) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "wcfvh9yskxciuy5mq74x",
          "title": "Optional Parameters",
          "question": "How do you make a function parameter optional in TypeScript?",
          "options": [
            { "id": "a2etk24dtxwx3yakpgu5", "option": "a", "text": "function greet(name?) { }", "correct": false, "selected": false },
            { "id": "thy9p60fkm01yhbx4qeq", "option": "b", "text": "function greet(name: string?) { }", "correct": false, "selected": false },
            { "id": "yba73d488lm2r7c1v77a", "option": "c", "text": "function greet(name?: string) { }", "correct": true, "selected": false },
            { "id": "cmp5ky9ka2mhvlk8j3wx", "option": "d", "text": "function greet(optional name: string) { }", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "8xu5glv6tjriyapic06f",
          "title": "Literal Type Error",
          "question": "function setStatus(status: 'active' | 'inactive') { }\nsetStatus('pending');",
          "options": [
            { "id": "udgo966nrpigymy7m3ga", "option": "a", "text": "It works fine because status can be any string", "correct": false, "selected": false },
            { "id": "k6g6k60vbzu9kl8auk3j", "option": "b", "text": "TypeScript shows an error because 'pending' is not in the allowed literal types", "correct": true, "selected": false },
            { "id": "jbcqibglx76vd6exuuy6", "option": "c", "text": "It sets status to 'active' automatically", "correct": false, "selected": false },
            { "id": "x8c9kp2kfrdhniichew3", "option": "d", "text": "It converts 'pending' to undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "washq4rsfbnls2efyn06",
          "title": "Array Inference",
          "question": "const fruits = []\nWhat type does TypeScript infer for 'fruits'?",
          "options": [
            { "id": "ie5ymvxxtaboye86xlcn", "option": "a", "text": "string[]", "correct": false, "selected": false },
            { "id": "lsy6pg45wq8mo0gyrytg", "option": "b", "text": "any[]", "correct": true, "selected": false },
            { "id": "66tfijx6gidt0axkbree", "option": "c", "text": "never[]", "correct": false, "selected": false },
            { "id": "vzdxb43r2ymqiylpo2q0", "option": "d", "text": "number[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "o75y8io2y60g8r3witd2",
          "title": "Void vs Undefined",
          "question": "What is the difference between 'void' and 'undefined' in TypeScript?",
          "options": [
            { "id": "3luhojnhwfl4pcedkwtr", "option": "a", "text": "They are exactly the same thing", "correct": false, "selected": false },
            { "id": "feaaub5ip8w6mrq8qw4m", "option": "b", "text": "'void' is for functions that don't return a value, 'undefined' is an actual value", "correct": true, "selected": false },
            { "id": "olftukrpj0p9w1eb2zv2", "option": "c", "text": "'void' means never returns, 'undefined' means returns nothing", "correct": false, "selected": false },
            { "id": "cns8a7z2ni7362revg14", "option": "d", "text": "'void' only works with arrow functions", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "t7552dpi1v017d3aqrwt",
          "title": "Reassigning 'any'",
          "question": "let id: any = '901482';\nid = 123;\nid = { value: 123 };\nWhat happens when you run this code?",
          "options": [
            { "id": "4dwck6v7o58d69gp9og6", "option": "a", "text": "TypeScript shows errors for each reassignment", "correct": false, "selected": false },
            { "id": "vwq9jmznlihjplax1jm1", "option": "b", "text": "It works fine because 'any' allows any type", "correct": true, "selected": false },
            { "id": "7a6ag5fz6pmcj8skeixk", "option": "c", "text": "The code only accepts string values", "correct": false, "selected": false },
            { "id": "lppu6mc55hgkehom8t9b", "option": "d", "text": "TypeScript automatically converts all values to strings", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "xk0nax75srfjb6l0xfaw",
          "title": "Fixing with export {}",
          "question": "How does adding 'export {}' at the top of a TypeScript file fix the variable name conflict?",
          "options": [
            { "id": "sv8d5luwbu4di98skb2s", "option": "a", "text": "It deletes the variable from the file", "correct": false, "selected": false },
            { "id": "4vjfkk3tipg7vpvz8i0q", "option": "b", "text": "It makes the file a module, creating its own scope", "correct": true, "selected": false },
            { "id": "x67fn2vt15ynftwnrsc8", "option": "c", "text": "It tells TypeScript to ignore the variable", "correct": false, "selected": false },
            { "id": "0mza5oesuy8t2po56cnr", "option": "d", "text": "It changes the variable name automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "jc8gjszorstceft2jl2c",
          "title": "Union Types in Objects",
          "question": "In this object type: { id: number | string, name: string }, what types can id be?",
          "options": [
            { "id": "8exzeqomdu2kjr0ti0ju", "option": "a", "text": "Only number", "correct": false, "selected": false },
            { "id": "ibutnfl7af8vkrvoau9a", "option": "b", "text": "Only string", "correct": false, "selected": false },
            { "id": "om8rn1psarrkkmhnfh92", "option": "c", "text": "Either number or string", "correct": true, "selected": false },
            { "id": "jdu2h6lyw504u7cz8a6b", "option": "d", "text": "Both number and string at the same time", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "4h0op5ov07a9u5gtm29c",
          "title": "Literal Type with Union",
          "question": "let status: 'active' | 'inactive' = 'active';\nstatus = 'inactive';\nstatus = 'pending';\nWhat happens on the third assignment?",
          "options": [
            { "id": "0bwzioojk2wvx5ysb5dn", "option": "a", "text": "It converts 'pending' to 'active'", "correct": false, "selected": false },
            { "id": "hwovfz56j2b3aojtjsjt", "option": "b", "text": "status becomes undefined", "correct": false, "selected": false },
            { "id": "d51bd7wju1zlmtay4bdg", "option": "c", "text": "TypeScript shows an error because 'pending' is not in the union", "correct": true, "selected": false },
            { "id": "xffkn36ww14g2g5n7t1p", "option": "d", "text": "It works fine because union allows any string", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "axfbbhvfqh44mbsvfzmx",
          "title": "Array Type Error",
          "question": "const numbers: number[] = [1, 2, 3, 4];\nnumbers.push('123')\nWhat happens when you run this code?",
          "options": [
            { "id": "nd0ardgqro9ysn109lbt", "option": "a", "text": "It works fine and adds '123' to the array", "correct": false, "selected": false },
            { "id": "k058o3srrq3elrwtcvl3", "option": "b", "text": "TypeScript shows an error because '123' is a string, not a number", "correct": true, "selected": false },
            { "id": "oqhbuctq2hhw0apsyvg7", "option": "c", "text": "It converts '123' to a number", "correct": false, "selected": false },
            { "id": "0m1o3pofhuqeiahiwaf4", "option": "d", "text": "The array becomes empty", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "wyso8quzgkhbxgo0g233",
          "title": "Number Literal Type",
          "question": "Which of the following is a valid number literal type?",
          "options": [
            { "id": "vgjce91g74hqmou53txh", "option": "a", "text": "let count: 5 = 10;", "correct": false, "selected": false },
            { "id": "xdz0hn5yucom9jww7hvc", "option": "b", "text": "let count: number = '5';", "correct": false, "selected": false },
            { "id": "n8j4y1tgdmj3sx369pdq", "option": "c", "text": "let count: number = 5;", "correct": false, "selected": false },
            { "id": "kxgc4jis07owg01xcbf2", "option": "d", "text": "let count: 5 = 5;", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "cu1s4qovhge1oa3z5cfw",
          "title": "Mixed Parameter Types",
          "question": "function createUser(id: number | string, name: string, isActive?: boolean) { }\ncreateUser(1, 'Mike');\ncreateUser('ABC', 'Jane', true);\ncreateUser(true, 'Bob');",
          "options": [
            { "id": "97jh4nrwlxigaj8tpkn0", "option": "a", "text": "createUser(1, 'Mike') and createUser('ABC', 'Jane', true) are valid, createUser(true, 'Bob') is invalid", "correct": true, "selected": false },
            { "id": "gduitcsxqfxlxpox6hi8", "option": "b", "text": "All calls including createUser(true, 'Bob') are valid", "correct": false, "selected": false },
            { "id": "udovmpk91sbe23q3p3z2", "option": "c", "text": "Only createUser(1, 'Mike') is valid", "correct": false, "selected": false },
            { "id": "snmrmffs1k0he19f0ahp", "option": "d", "text": "Only createUser('ABC', 'Jane', true) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "re4yommt1kk1vzzf34fp",
          "title": "Never with Infinite Loop",
          "question": "function infiniteLoop() {\n  while (true) {\n    console.log('Running...');\n  }\n}\nWhat type should this function return?",
          "options": [
            { "id": "54q84klmocz9698j3bbe", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "wy1cy976lp07sbrgpobb", "option": "b", "text": "never", "correct": true, "selected": false },
            { "id": "83kud887420n91tbjwqi", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "fwiajks4ns2b3tb05y3o", "option": "d", "text": "null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "hot8r73xeb6a4cgjot5k",
          "title": "'any' with Arrays",
          "question": "let users: any = [{ id: 1, name: 'Lee' }];\nusers[0].name = 134;\nusers[0].age = 23;\nWhat happens when you run this code?",
          "options": [
            { "id": "i9nbk30bq6gzalcw5i9e", "option": "a", "text": "TypeScript shows errors because name should be a string", "correct": false, "selected": false },
            { "id": "cbtl1xd2tj3ae2sft07h", "option": "b", "text": "It works fine because 'any' allows adding and changing any properties", "correct": true, "selected": false },
            { "id": "3gv1axhawcnq5xq2aa3c", "option": "c", "text": "TypeScript shows an error because age doesn't exist", "correct": false, "selected": false },
            { "id": "zguyzrsz8ckeu0k2f10c", "option": "d", "text": "Only the first line works, the rest fail", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "f3x00cpb6wuauw5glhy6",
          "title": "Void vs Never",
          "question": "What is the main difference between 'void' and 'never'?",
          "options": [
            { "id": "kpau8ikasr81oz3ncv5u", "option": "a", "text": "'void' means returns nothing (undefined), 'never' means never returns", "correct": true, "selected": false },
            { "id": "qfp7apugqmiams042xl1", "option": "b", "text": "'void' means never returns, 'never' means returns nothing", "correct": false, "selected": false },
            { "id": "b59m8lbruxyit77zripy", "option": "c", "text": "They are the same thing", "correct": false, "selected": false },
            { "id": "xfocy8l8rjkksh0bsv75", "option": "d", "text": "'void' is for functions, 'never' is for variables only", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "5hrljth5wdod5hmseerz",
          "title": "Spread Operator with Arrays",
          "question": "const numbers: number[] = [1, 2, 3, 4];\nconst prices = [...numbers, 'hello']\nWhat type does TypeScript infer for 'prices'?",
          "options": [
            { "id": "hshw94u0r81fx4unih1r", "option": "a", "text": "number[]", "correct": false, "selected": false },
            { "id": "1gug2pcuqoesjc2r63tw", "option": "b", "text": "string[]", "correct": false, "selected": false },
            { "id": "9ybqgr7typ60s82rfy38", "option": "c", "text": "(number | string)[]", "correct": true, "selected": false },
            { "id": "ksyw3lve6vqvm2bhkdzk", "option": "d", "text": "any[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "b051hrriyk06dpbkxwtw",
          "title": "Mixed Array Inference",
          "question": "const mixed = ['hello', 12, true]\nmixed.push({name: 1})\nWhat type does TypeScript infer for 'mixed' and what happens when pushing an object?",
          "options": [
            { "id": "d95zfuhsd9fs5vbwns7o", "option": "a", "text": "mixed is any[] and the push works fine", "correct": false, "selected": false },
            { "id": "k9dyxu6hcxmhtw4afzmg", "option": "b", "text": "mixed is (string | number | boolean)[] and TypeScript shows an error when pushing an object", "correct": true, "selected": false },
            { "id": "auqssf8u7l8ldbc1ru4g", "option": "c", "text": "mixed is string[] and the push fails", "correct": false, "selected": false },
            { "id": "9tytsurgn1iorv58sq7c", "option": "d", "text": "mixed is (string | number | boolean | object)[] and the push works", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "y4zath14t1srt5b15i24",
          "title": "Multiple Optional Parameters",
          "question": "function log(message: string, level?: string, timestamp?: number) { }\nlog('Hello');\nlog('Hello', 'info');\nlog('Hello', 'info', 12345);",
          "options": [
            { "id": "xcvgjdpshokiv92pmb7k", "option": "a", "text": "Only log('Hello') is valid", "correct": false, "selected": false },
            { "id": "30fvactjtr10vc7xaf8f", "option": "b", "text": "Only log('Hello', 'info') is valid", "correct": false, "selected": false },
            { "id": "izzvra8vizuysv4tqtkz", "option": "c", "text": "log('Hello'), log('Hello', 'info'), and log('Hello', 'info', 12345) are all valid", "correct": true, "selected": false },
            { "id": "hlkhfjg98h1lm43vuvd4", "option": "d", "text": "None of these calls are valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "00qplhrljqoxsochpybl",
          "title": "Required vs Optional",
          "question": "let person: { name?: string } = {}\nperson.name = 'Mike'\nWhy does this code work?",
          "options": [
            { "id": "znduxfdmtdcw378j317f", "option": "a", "text": "Because name is optional, you can add it later", "correct": true, "selected": false },
            { "id": "xt6r1s5lvrzo5ug17p07", "option": "b", "text": "Because TypeScript allows any property on objects", "correct": false, "selected": false },
            { "id": "xihxqs3s4bpq4qyofyeu", "option": "c", "text": "Because {} means the object can have anything", "correct": false, "selected": false },
            { "id": "y7gt0eouzo8jwogtpa5y", "option": "d", "text": "It would actually show an error", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "d91pyw5oraufnljnidmc",
          "title": "Boolean Literal Type",
          "question": "Which of these is a boolean literal type?",
          "options": [
            { "id": "mtknedrpialdkb1ky3ia", "option": "a", "text": "let isReady: true = false;", "correct": false, "selected": false },
            { "id": "e5bj5ehm4515ew389b42", "option": "b", "text": "let isReady: boolean | true;", "correct": false, "selected": false },
            { "id": "2p1ev2seccahlidyv9eb", "option": "c", "text": "let isReady: true = true;", "correct": true, "selected": false },
            { "id": "0i0hfryxsvmtj0eoy6ku", "option": "d", "text": "let isReady: boolean = true;", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "e8qav7z0f23u2i0e5yps",
          "title": "Union with Literal Types",
          "question": "function sendMessage(type: 'email' | 'sms', content: string | number) { }\nsendMessage('email', 'Hello');\nsendMessage('sms', 12345);\nsendMessage('email', 456);\nsendMessage('email', true);",
          "options": [
            { "id": "eg7cvm9px25mlxg6e5vv", "option": "a", "text": "sendMessage('email', 'Hello'), sendMessage('sms', 12345), and sendMessage('email', 456) are all valid", "correct": true, "selected": false },
            { "id": "gx6y0nntny9phyqlflp0", "option": "b", "text": "Only sendMessage('email', 'Hello') is valid", "correct": false, "selected": false },
            { "id": "0fxcdg44cvkttpdcggyj", "option": "c", "text": "Only sendMessage('sms', 12345) is valid", "correct": false, "selected": false },
            { "id": "wp5fxmb2keenfj7z3o96", "option": "d", "text": "sendMessage('email', true) is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "4x6ett9bpeox904wqqhf",
          "title": "Arrow Function with Void",
          "question": "const logMessage = (msg: string): void => {\n  console.log(msg);\n};\nWhat is the return type of this arrow function?",
          "options": [
            { "id": "v3fv87uvegt6fif8414k", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "eb5ynmu4rubmuowqkjka", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "l73wbkl1a5t6c4l14zzl", "option": "c", "text": "void", "correct": true, "selected": false },
            { "id": "gmeeia9qve7ix3itd0gy", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "po11wmqtg8ciqy116258",
          "title": "Object Assignment",
          "question": "let user: { name: string, age: number } = { name: 'Mike' };\nWhat happens when you run this code?",
          "options": [
            { "id": "xp2sfvoz481hvjbfbtq8", "option": "a", "text": "TypeScript adds age: undefined automatically", "correct": false, "selected": false },
            { "id": "4rfagowev9sds9ovvyn3", "option": "b", "text": "TypeScript shows an error because age is missing", "correct": true, "selected": false },
            { "id": "3drf1qbkx74tu88u3jey", "option": "c", "text": "It works fine and age is optional", "correct": false, "selected": false },
            { "id": "dkgg11dv7gvv922l5dzm", "option": "d", "text": "It converts the object to a different type", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "oyh2u0zro3prngni8gd6",
          "title": "Problems with 'any'",
          "question": "What is the main disadvantage of using 'any' in TypeScript?",
          "options": [
            { "id": "mdalbvnyf2zvqcx9fp8f", "option": "a", "text": "It makes the code run slower", "correct": false, "selected": false },
            { "id": "23hc8ijmr0witsg5nnev", "option": "b", "text": "It removes type safety and defeats the purpose of TypeScript", "correct": true, "selected": false },
            { "id": "5q0mchcm4igcfuhxfwp1", "option": "c", "text": "It only works with strings", "correct": false, "selected": false },
            { "id": "f24rc18x80t0wdrex38w", "option": "d", "text": "It causes compilation errors", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "jb4641r35d76s4pp5jcc",
          "title": "Void with Return Value",
          "question": "function getNumber(): void {\n  return 42;\n}\nWhat happens when you run this code?",
          "options": [
            { "id": "erw5gxnyehjk6sujc39b", "option": "a", "text": "It works fine and returns 42", "correct": false, "selected": false },
            { "id": "g69si767qbdnsc3xq1x0", "option": "b", "text": "TypeScript shows an error because void functions can't return a value", "correct": true, "selected": false },
            { "id": "f3niizx7v9z4izpjhvn8", "option": "c", "text": "It returns undefined", "correct": false, "selected": false },
            { "id": "6oib9i8kmy6hs36csmnw", "option": "d", "text": "It converts 42 to undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "uz74m9berjomtjx21b0v",
          "title": "BigInt and ES Version",
          "question": "Why do we need target: es2022 in tsconfig.json for bigint?",
          "options": [
            { "id": "gbx9hwb64bif4oh7em4d", "option": "a", "text": "BigInt was introduced in ES2020 and isn't available in ES6", "correct": true, "selected": false },
            { "id": "ybw9gqptpy334u30cove", "option": "b", "text": "BigInt only works with the latest TypeScript version", "correct": false, "selected": false },
            { "id": "e9uec9pvwix7oblv9uhw", "option": "c", "text": "ES6 doesn't support number literals with n suffix", "correct": false, "selected": false },
            { "id": "p9xs5k0ayjt604hmi5fg", "option": "d", "text": "Both a and c are correct", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "mj6d1sm1i4tpce3brxnb",
          "title": "Type Annotations",
          "question": "In the code let age: number = 20, what is the purpose of : number?",
          "options": [
            { "id": "ow3ulesflovplwozspx1", "option": "a", "text": "It assigns the value 20", "correct": false, "selected": false },
            { "id": "rlazf8hxzpvbm3bwavs6", "option": "b", "text": "It tells TypeScript that age can only hold number values", "correct": true, "selected": false },
            { "id": "0l1fr39tsdy2l45foq6z", "option": "c", "text": "It converts 20 to a number", "correct": false, "selected": false },
            { "id": "dm9tu3fuo5tn6u4gcdea", "option": "d", "text": "It's optional and does nothing", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "t38szazxlfagh0effn6s",
          "title": "Optional vs Union",
          "question": "What is the difference between 'name?: string' and 'name: string | undefined' as a function parameter?",
          "options": [
            { "id": "w58rlsrdkvjb6ddwq96r", "option": "a", "text": "There is no difference between them", "correct": false, "selected": false },
            { "id": "mb2kfpt3myj0kn849n92", "option": "b", "text": "'name?: string' makes it optional (can be omitted), 'name: string | undefined' requires explicitly passing undefined", "correct": true, "selected": false },
            { "id": "rigxcwvqogakbnk18ygn", "option": "c", "text": "'name?: string' requires a value, 'name: string | undefined' makes it optional", "correct": false, "selected": false },
            { "id": "hqthe3tlrl4si1f3h0nd", "option": "d", "text": "'name?: string' only works with strings, 'name: string | undefined' works with any type", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "2i9rqccpvedyy74altn6",
          "title": "Function Inference with Void",
          "question": "function greet(name: string) {\n  console.log('Hello ' + name);\n}\nWhat type does TypeScript infer for the return type of this function?",
          "options": [
            { "id": "ov7auci2ryl57sr26hei", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "2pehgzo21ur8k8bhismn", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "7kl01pra92qsomx6vngo", "option": "c", "text": "void", "correct": true, "selected": false },
            { "id": "v1zsescfwke5s5hj6zkm", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "4t7awtmjiebz5wudc5fg",
          "title": "Never Function Inference",
          "question": "function fail() {\n  throw new Error('Something went wrong');\n}\nWhat type does TypeScript infer for the return type of this function?",
          "options": [
            { "id": "oamwfdnztd751dnmmma8", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "jn4lrqop8qtpa3ojko5x", "option": "b", "text": "never", "correct": true, "selected": false },
            { "id": "f0u4mxcgjxsmmufqqxtj", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "evbolmafjgfa7gx7sy0u", "option": "d", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ickgpyrzrs0vw6ejug8b",
          "title": "Explicit Mixed Array",
          "question": "Which of the following correctly declares an array that can hold strings, numbers, and booleans?",
          "options": [
            { "id": "t2rh1febxcn8e9pdanno", "option": "a", "text": "let mixed: string[] | number[] | boolean[] = ['hello', 12, true];", "correct": false, "selected": false },
            { "id": "u3f4xldnxwnk2lftfff1", "option": "b", "text": "let mixed: (string | number | boolean)[] = ['hello', 12, true];", "correct": true, "selected": false },
            { "id": "az3uj3nt8izwfobb3u5x", "option": "c", "text": "let mixed: string | number | boolean[] = ['hello', 12, true];", "correct": false, "selected": false },
            { "id": "x5f4hrc2xb2zngien4e9", "option": "d", "text": "let mixed: any[] = ['hello', 12, true];", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "nqtk7v8ljrg73a8k1crr",
          "title": "Create a User Object with Union Types",
          "description": "Create an object called %user% with properties: %id% (number | string), %name% (string), and %age% (number). Add type annotations. Then add an optional %email% property.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let user: {\n  id: number | string,\n  name: string,\n  age: number,\n  email?: string\n} = {\n  id: 123,\n  name: 'Mike',\n  age: 23\n};\nuser.email = 'mike@email.com';",
          "done": false,
        },
        {
          "id": "rf0f1fod21kucsr744kc",
          "title": "Function with Multiple Parameter Types",
          "description": "Create a function called %processValue% that takes a %value% parameter with union type %string | number | boolean%. Inside the function, log the value and its type. Call it with different values.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function processValue(value: string | number | boolean) {\n  console.log('Value:', value, 'Type:', typeof value);\n}\nprocessValue('Hello');\nprocessValue(42);\nprocessValue(true);",
          "done": false,
        },
        {
          "id": "sbwucta4ntha6wml4fmj",
          "title": "Array with Mixed Types",
          "description": "Create an array called %mixedArray% that can hold %strings%, %numbers%, and %booleans%. Add values %'apple'%, %42%, and %false%. Then try to add an %object% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const mixedArray: (string | number | boolean)[] = ['apple', 42, false];\nmixedArray.push({key: 'value'}); // TypeScript shows error",
          "done": false,
        },
        {
          "id": "x2jhietn8dp3drz48l4l",
          "title": "Literal Type Function",
          "description": "Create a function called %setPriority% that takes a %priority% parameter with literal type %'low'% | %'medium'% | %'high'%. Log the priority. Call it with each valid value and then try %'urgent'% to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function setPriority(priority: 'low' | 'medium' | 'high') {\n  console.log('Priority:', priority);\n}\nsetPriority('low');\nsetPriority('medium');\nsetPriority('high');\nsetPriority('urgent'); // TypeScript shows error",
          "done": false,
        },
        {
          "id": "utlvrucxnvwgxw5wa7js",
          "title": "Never Function with Error",
          "description": "Create a function called %panic% that takes a %message% (string) and throws an error. Add the correct return type (%never%). Call the function.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function panic(message: string): never {\n  throw new Error(message);\n}\npanic('Something went terribly wrong');",
          "done": false,
        },
        {
          "id": "yx565iyk18b6irsq50un",
          "title": "Object with Optional and Union Types",
          "description": "Create an object type for a %product% with: %id% (number), %name% (string), %price% (number), %category% (optional string), and %tags% (array of strings). Create an example product object.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let product: {\n  id: number,\n  name: string,\n  price: number,\n  category?: string,\n  tags: string[]\n} = {\n  id: 1,\n  name: 'Laptop',\n  price: 999.99,\n  tags: ['electronics', 'computer']\n};\nproduct.category = 'Technology';",
          "done": false,
        },
        {
          "id": "m5ctdkz5jwt3aptcegiu",
          "title": "Function with Optional Parameters",
          "description": "Create a function called %greetUser% that takes a %name% (string) and an optional %title% (string). If title is provided, log 'Hello, Title Name'. Otherwise, log 'Hello, Name'.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function greetUser(name: string, title?: string) {\n  if (title) {\n    console.log('Hello, ' + title + ' ' + name);\n  } else {\n    console.log('Hello, ' + name);\n  }\n}\ngreetUser('Mike');\ngreetUser('Jane', 'Dr.');",
          "done": false,
        },
        {
          "id": "7g2lntmrqyoe8lqa419h",
          "title": "Array Operations with Inference",
          "description": "Create an empty array called %items%. Push a %string%, then a %number%, then a %boolean%. What type does TypeScript infer for the array? Then try to push an %object% to see the error.",
          "result": "",
          "note": "implement in your editor / console and observe the inference",
          "solution": "const items = [];\nitems.push('Hello');\nitems.push(42);\nitems.push(true);\n// items is inferred as (string | number | boolean)[]\nitems.push({key: 'value'}); // TypeScript shows error",
          "done": false,
        },
        {
          "id": "fuahml01fhkuic2kh2vt",
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
      "id": "1rrhi7solwwyst5v8cay",
      "type": "title",
      "title": "Section 3: Typescript",
      "videoID": "1121",
      "questionsTotal": 0,
      "tasksTotal": 0,
      "totalCorrect": 0,
      "totalFalse": 0,
      "totalTasksDone": 0,
      "sectionExercisesIndex": "13-24",
      "questions": [
      ],
      "tasks": [
      ]
    },
    
  ]
}