export const seedData = {
  id: '144_TS',
  version: '0.2',
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
      "section": 2,
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
      "section": 3,
      "sectionExercisesIndex": "13-24",
      "questions": [
      ],
      "tasks": [
      ]
    },
    {
      "id": "k9p3m7q2v8x5t1w4r6y9",
      "title": "Type Aliasesp",
      "videoID": "20",
      "section": 3,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "a1b2c3d4e5f6g7h8i9j0",
          "title": "Basic Type Alias",
          "question": "What is the correct way to define a type alias for a string?",
          "options": [
            { "id": "q1w2e3r4t5y6u7i8o9p0", "option": "a", "text": "type Name = string;", "correct": true, "selected": false },
            { "id": "z1x2c3v4b5n6m7l8k9j0", "option": "b", "text": "interface Name = string;", "correct": false, "selected": false },
            { "id": "p9o8i7u6y5t4r3e2w1q", "option": "c", "text": "type Name: string;", "correct": false, "selected": false },
            { "id": "a9s8d7f6g5h4j3k2l1m", "option": "d", "text": "alias Name = string;", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "b2c3d4e5f6g7h8i9j0k1",
          "title": "Using Type Alias",
          "question": "type Username = string;\nconst user1: Username = 'Sarah';\nconst user2: Username = 123;",
          "options": [
            { "id": "m1n2b3v4c5x6z7l8k9j0", "option": "a", "text": "Both assignments are valid", "correct": false, "selected": false },
            { "id": "q2w3e4r5t6y7u8i9o0p", "option": "b", "text": "Only user1 is valid", "correct": true, "selected": false },
            { "id": "a1s2d3f4g5h6j7k8l9m", "option": "c", "text": "Only user2 is valid", "correct": false, "selected": false },
            { "id": "z9x8c7v6b5n4m3l2k1j", "option": "d", "text": "Neither assignment is valid", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "c3d4e5f6g7h8i9j0k1l2",
          "title": "Union Type Alias",
          "question": "type ID = string | number;\nWhich of the following is valid?",
          "options": [
            { "id": "p1o2i3u4y5t6r7e8w9q", "option": "a", "text": "let id: ID = true;", "correct": false, "selected": false },
            { "id": "l9k8j7h6g5f4d3s2a1", "option": "b", "text": "let id: ID = [];", "correct": false, "selected": false },
            { "id": "m2n3b4v5c6x7z8l9k0", "option": "c", "text": "let id1: ID = 42; let id2: ID = 'user-789';", "correct": true, "selected": false },
            { "id": "q3w4e5r6t7y8u9i0o1", "option": "d", "text": "let id: ID = null;", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "d4e5f6g7h8i9j0k1l2m3",
          "title": "Object Type Alias",
          "question": "When defining a complex User type with type alias, which property can be omitted?",
          "options": [
            { "id": "a2s3d4f5g6h7j8k9l0m", "option": "a", "text": "All properties must be provided", "correct": false, "selected": false },
            { "id": "z1x2c3v4b5n6m7l8k9j", "option": "b", "text": "Only the id property is required", "correct": false, "selected": false },
            { "id": "q4w5e6r7t8y9u0i1o2", "option": "c", "text": "Only string properties can be optional", "correct": false, "selected": false },
            { "id": "p3o4i5u6y7t8r9e0w1", "option": "d", "text": "A property marked with ? (optional)", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "e5f6g7h8i9j0k1l2m3n4",
          "title": "Literal Union in Type",
          "question": "type User = {\n  role: 'USER' | 'ADMIN';\n};\nWhich assignment is valid?",
          "options": [
            { "id": "l1k2j3h4g5f6d7s8a9", "option": "a", "text": "role: 'user' (lowercase) is valid", "correct": false, "selected": false },
            { "id": "m4n5b6v7c8x9z0l1k2", "option": "b", "text": "role: 'Manager' is valid", "correct": false, "selected": false },
            { "id": "q5w6e7r8t9y0u1i2o3", "option": "c", "text": "role can be any string", "correct": false, "selected": false },
            { "id": "a3s4d5f6g7h8j9k0l1", "option": "d", "text": "role: 'USER' and role: 'ADMIN' are both valid", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "f6g7h8i9j0k1l2m3n4o5",
          "title": "Using Type Alias in Function",
          "question": "function showUser(user: User): void {\n  console.log(user.name);\n}",
          "options": [
            { "id": "z2x3c4v5b6n7m8l9k0", "option": "a", "text": "The function can only accept objects created with new User()", "correct": false, "selected": false },
            { "id": "p4o5i6u7y8t9r0e1w2", "option": "b", "text": "The return type should be User, not void", "correct": false, "selected": false },
            { "id": "q6w7e8r9t0y1u2i3o4", "option": "c", "text": "Type aliases cannot be used as function parameters", "correct": false, "selected": false },
            { "id": "a5s6d7f8g9h0j1k2l3", "option": "d", "text": "The function accepts any object that matches the User type", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        }
      ],
      "tasks": [
        {
          "id": "t1u2v3w4x5y6z7a8b9c0",
          "title": "Simple Type Alias",
          "description": "Create a type alias called %Email% that represents a string. Then declare two variables using this type alias with different email strings.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Email = string;\n\nconst email1: Email = 'john@example.com';\nconst email2: Email = 'admin@company.org';",
          "done": false
        },
        {
          "id": "d1e2f3g4h5i6j7k8l9m0",
          "title": "Complex User Type",
          "description": "Create a type alias called %Player% with properties: %id% (string | number), %username% (string), %level% (number), %status% ('ACTIVE' | 'INACTIVE'), and an optional %achievements% (string[] array). Create one object that matches this type.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Player = {\n  id: string | number;\n  username: string;\n  level: number;\n  status: 'ACTIVE' | 'INACTIVE';\n  achievements?: string[];\n};\n\nconst player1: Player = {\n  id: 101,\n  username: 'ShadowNinja',\n  level: 42,\n  status: 'ACTIVE',\n  achievements: ['FirstWin', 'SpeedRun']\n};",
          "done": false
        },
        {
          "id": "n1o2p3q4r5s6t7u8v9w0",
          "title": "Function with Type Alias",
          "description": "Using the %Player% type from the previous task, create a function called %displayPlayer% that takes a Player as parameter and logs the username and level.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function displayPlayer(player: Player): void {\n  console.log(`Player: ${player.username}, Level: ${player.level}`);\n}\n\ndisplayPlayer(player1);",
          "done": false
        }
      ]
    },
    {
      "id": "x7y8z9w2v4t6r8p5q3m1",
      "title": "Intersection Types",
      "videoID": "21",
      "section": 3,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "q1a2s3d4f5g6h7j8k9l0",
          "title": "Basic Intersection",
          "question": "type A = { name: string };\ntype B = { age: number };\ntype C = A & B;",
          "options": [
            { "id": "p0o9i8u7y6t5r4e3w2", "option": "a", "text": "C only has properties from type A", "correct": false, "selected": false },
            { "id": "q1w2e3r4t5y6u7i8o9", "option": "b", "text": "C is the same as type A", "correct": false, "selected": false },
            { "id": "m9n8b7v6c5x4z3l2k1j", "option": "c", "text": "C requires both name and age properties", "correct": true, "selected": false },
            { "id": "a9s8d7f6g5h4j3k2l1", "option": "d", "text": "Intersection only works with primitive types", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "b2c3d4e5f6g7h8i9j0k1",
          "title": "Primitive Intersection",
          "question": "type Mixed = string & number;",
          "options": [
            { "id": "p1o2i3u4y5t6r7e8w9q", "option": "a", "text": "Mixed can be either string or number", "correct": false, "selected": false },
            { "id": "z9x8c7v6b5n4m3l2k1j", "option": "b", "text": "Mixed becomes the never type", "correct": true, "selected": false },
            { "id": "l0k9j8h7g6f5d4s3a2", "option": "c", "text": "Mixed is equivalent to any", "correct": false, "selected": false },
            { "id": "m2n3b4v5c6x7z8l9k0", "option": "d", "text": "This syntax is not allowed", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "c3d4e5f6g7h8i9j0k1l2",
          "title": "Conflicting Properties",
          "question": "type X = { id: string };\ntype Y = { id: number };\ntype Z = X & Y;",
          "options": [
            { "id": "q2w3e4r5t6y7u8i9o0p", "option": "a", "text": "The id property becomes never (impossible type)", "correct": true, "selected": false },
            { "id": "a1s2d3f4g5h6j7k8l9m", "option": "b", "text": "id becomes string | number", "correct": false, "selected": false },
            { "id": "z1x2c3v4b5n6m7l8k9j", "option": "c", "text": "Type Z only keeps properties from X", "correct": false, "selected": false },
            { "id": "p3o4i5u6y7t8r9e0w1", "option": "d", "text": "This creates a union type", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "d4e5f6g7h8i9j0k1l2m3",
          "title": "Union in Intersection",
          "question": "type A = { value: string | number };\ntype B = { value: number | boolean };\ntype C = A & B;",
          "options": [
            { "id": "l1k2j3h4g5f6d7s8a9", "option": "a", "text": "value must be of type number", "correct": true, "selected": false },
            { "id": "m4n5b6v7c8x9z0l1k2", "option": "b", "text": "value can be string | number | boolean", "correct": false, "selected": false },
            { "id": "q5w6e7r8t9y0u1i2o3", "option": "c", "text": "This intersection is impossible", "correct": false, "selected": false },
            { "id": "a3s4d5f6g7h8j9k0l1", "option": "d", "text": "value must be string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "e5f6g7h8i9j0k1l2m3n4",
          "title": "Merging Object Types",
          "question": "type User = { id: number; name: string };\ntype Admin = { isAdmin: boolean; isActive?: boolean };\ntype AdminUser = User & Admin;",
          "options": [
            { "id": "p4o5i6u7y8t9r0e1w2", "option": "a", "text": "AdminUser only has properties from User", "correct": false, "selected": false },
            { "id": "q6w7e8r9t0y1u2i3o4", "option": "b", "text": "isActive is required", "correct": false, "selected": false },
            { "id": "z2x3c4v5b6n7m8l9k0", "option": "c", "text": "AdminUser has id, name, isAdmin, and optional isActive", "correct": true, "selected": false },
            { "id": "a5s6d7f8g9h0j1k2l3", "option": "d", "text": "The types cannot be combined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "f6g7h8i9j0k1l2m3n4o5",
          "title": "Intersection Result",
          "question": "What is the main purpose of the intersection type operator (&) in TypeScript?",
          "options": [
            { "id": "l3k4j5h6g7f8d9s0a1", "option": "a", "text": "To combine multiple types into one (merging properties)", "correct": true, "selected": false },
            { "id": "m6n7b8v9c0x1z2l3k4", "option": "b", "text": "To create a choice between types (like union | )", "correct": false, "selected": false },
            { "id": "q8w9e0r1t2y3u4i5o6", "option": "c", "text": "To restrict a type to primitive values only", "correct": false, "selected": false },
            { "id": "a7s8d9f0g1h2j3k4l5", "option": "d", "text": "To create a new type from a class", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "d1e2f3g4h5i6j7k8l9m0",
          "title": "User + Admin Intersection",
          "description": "Create a %User% type (id: number, name: string, isActive: boolean) and an %Admin% type (isAdmin: boolean, permissions?: string[]). Create their intersection %AdminUser% and make a valid object.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type User = {\n  id: number;\n  name: string;\n  isActive: boolean;\n};\n\ntype Admin = {\n  isAdmin: boolean;\n  permissions?: string[];\n};\n\ntype AdminUser = User & Admin;\n\nconst admin: AdminUser = {\n  id: 1,\n  name: 'Jane Doe',\n  isActive: true,\n  isAdmin: true,\n  permissions: ['read', 'write']\n};",
          "done": false
        },
        {
          "id": "n1o2p3q4r5s6t7u8v9w0",
          "title": "Conflicting Intersection",
          "description": "Create two types that both have a property called %id% but with different types (string and number). Intersect them and try to create an object. What happens?",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type A = { id: string };\ntype B = { id: number };\ntype C = A & B;\n\n// const test: C = { id: 123 }; // Error - id becomes never",
          "done": false
        }
      ]
    },
    {
      "id": "ft1u2n3c4t5i6o7n8t9y0p",
      "title": "Function Types",
      "videoID": "26",
      "section": 3,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "ftq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is a Function Type",
          "question": "What is a function type in TypeScript?",
          "options": [
            { "id": "fto1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "A way to define the shape of a function with parameter and return types", "correct": true, "selected": false },
            { "id": "fto2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "A way to create a new function", "correct": false, "selected": false },
            { "id": "fto3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "A way to store functions in an array", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ftq2b3c4d5e6f7g8h9i0j1k",
          "title": "Function Type Syntax",
          "question": "Which of the following correctly defines a function type that takes a string and returns void?",
          "options": [
            { "id": "fto5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "type Logger = (message: string) => void;", "correct": true, "selected": false },
            { "id": "fto6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "type Logger = (string) => void;", "correct": false, "selected": false },
            { "id": "fto7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "type Logger = message: string => void;", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ftq3c4d5e6f7g8h9i0j1k2l",
          "title": "Using Function Types",
          "question": "type MathOperation = (a: number, b: number) => number;\nconst add: MathOperation = (a, b) => a + b;\nWhat is the return type of add?",
          "options": [
            { "id": "fto9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "fto0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "number", "correct": true, "selected": false },
            { "id": "fto1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "void", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ftq4d5e6f7g8h9i0j1k2l3m",
          "title": "Function with Different Parameter Names",
          "question": "type StringTransformer = (input: string) => string;\nconst toUpperCase: StringTransformer = (text) => text.toUpperCase();\nWhy does this work even though the parameter names are different?",
          "options": [
            { "id": "fto3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "TypeScript only cares about the type, not the parameter name", "correct": true, "selected": false },
            { "id": "fto4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "TypeScript automatically renames parameters", "correct": false, "selected": false },
            { "id": "fto5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "TypeScript ignores function types", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ftq5e6f7g8h9i0j1k2l3m4n",
          "title": "Function Type with Optional Parameters",
          "question": "type Greet = (name: string, greeting?: string) => string;\nconst greet: Greet = (name, greeting = 'Hello') => `${greeting}, ${name}`;\ngreet('John');\ngreet('Max', 'Hallo');\nWhich calls are valid?",
          "options": [
            { "id": "fto7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "Only greet('John') is valid", "correct": false, "selected": false },
            { "id": "fto8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "Only greet('Max', 'Hallo') is valid", "correct": false, "selected": false },
            { "id": "fto9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "Both greet('John') and greet('Max', 'Hallo') are valid", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "ftq6f7g8h9i0j1k2l3m4n5o",
          "title": "Function Type with Default Parameter",
          "question": "type Greet = (name: string, greeting?: string) => string;\nconst greet: Greet = (name, greeting = 'Hello') => `${greeting}, ${name}`;\nWhat happens when you call greet('John')?",
          "options": [
            { "id": "fto1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "It returns 'Hello, John'", "correct": true, "selected": false },
            { "id": "fto2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "It returns 'undefined, John'", "correct": false, "selected": false },
            { "id": "fto3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "It throws an error", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ftq7g8h9i0j1k2l3m4n5o6p",
          "title": "Function Type with Multiple Parameters",
          "question": "type MathOperation = (a: number, b: number) => number;\nconst multiply: MathOperation = function(a, b) {\n  return a * b;\n};\nWhich of the following is true?",
          "options": [
            { "id": "fto5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "The function works and returns the product of a and b", "correct": true, "selected": false },
            { "id": "fto6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "The function is invalid because it uses function keyword", "correct": false, "selected": false },
            { "id": "fto7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "The function returns a string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ftq9i0j1k2l3m4n5o6p7q8r",
          "title": "Function Type with Arrow vs Function Keyword",
          "question": "Which of the following correctly assigns a function to a function type?",
          "options": [
            { "id": "fto3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "const add: MathOperation = (a, b) => a + b;", "correct": false, "selected": false },
            { "id": "fto4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "const add: MathOperation = function(a, b) { return a + b; };", "correct": false, "selected": false },
            { "id": "fto5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "Both A and B are correct", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "ftq0j1k2l3m4n5o6p7q8r9s",
          "title": "Function Type Benefits",
          "question": "What is the main benefit of using function types?",
          "options": [
            { "id": "fto7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "They make functions run faster", "correct": false, "selected": false },
            { "id": "fto8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "They automatically implement functions", "correct": false, "selected": false },
            { "id": "fto9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "They allow reusing function shapes and provide type safety", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "ftt1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Function Type",
          "description": "Create a function type called %StringFormatter% that takes a %string% and returns a %string%. Then create a function called %toLowerCase% using this type that converts a string to lowercase.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type StringFormatter = (input: string) => string;\nconst toLowerCase: StringFormatter = (text) => text.toLowerCase();\nconsole.log(toLowerCase('HELLO')); // 'hello'",
          "done": false
        }
      ]
    },
    {
      "id": "tg1u2a3r4d5s6n7a8r9r0w",
      "title": "Type Guards and Narrowing",
      "videoID": "27",
      "section": 3,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "tgq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is Type Narrowing",
          "question": "What is type narrowing in TypeScript?",
          "options": [
            { "id": "tgo1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "Converting strings to numbers", "correct": false, "selected": false },
            { "id": "tgo2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "Creating new types from existing ones", "correct": false, "selected": false },
            { "id": "tgo3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "The process of refining a broad type to a more specific type", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "tgq2b3c4d5e6f7g8h9i0j1k",
          "title": "typeof Type Guard",
          "question": "Which of the following is a valid use of the typeof type guard?",
          "options": [
            { "id": "tgo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "if (typeof value === 'string') { }", "correct": true, "selected": false },
            { "id": "tgo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "if (typeof value = 'string') { }", "correct": false, "selected": false },
            { "id": "tgo7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "if (typeof value in 'string') { }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "tgq3c4d5e6f7g8h9i0j1k2l",
          "title": "When TypeScript Uses Narrowing",
          "question": "When does TypeScript automatically narrow types?",
          "options": [
            { "id": "tgo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "Only when you explicitly use the 'as' keyword", "correct": false, "selected": false },
            { "id": "tgo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "When you use type guards like typeof, in, or equality checks", "correct": true, "selected": false },
            { "id": "tgo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "TypeScript never narrows types automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "tgq4d5e6f7g8h9i0j1k2l3m",
          "title": "in Operator Type Guard",
          "question": "What does the 'in' operator check for in TypeScript type guards?",
          "options": [
            { "id": "tgo3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "Whether a value is in an array", "correct": false, "selected": false },
            { "id": "tgo4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "Whether a property exists in an object", "correct": true, "selected": false },
            { "id": "tgo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "Whether a type is a primitive", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "tgq5e6f7g8h9i0j1k2l3m4n",
          "title": "Truthiness Narrowing",
          "question": "What happens in TypeScript when you use a variable in a condition like 'if (value)'?",
          "options": [
            { "id": "tgo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "TypeScript throws an error", "correct": false, "selected": false },
            { "id": "tgo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "TypeScript converts the value to a string", "correct": false, "selected": false },
            { "id": "tgo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "TypeScript narrows out falsy values like 0, null, undefined, and empty string", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "tgq7g8h9i0j1k2l3m4n5o6p",
          "title": "typeof Guard with Union Types",
          "question": "When using 'typeof' on a union type, what does TypeScript do?",
          "options": [
            { "id": "tgo5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "It creates a new union type", "correct": false, "selected": false },
            { "id": "tgo6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "It removes all type safety", "correct": false, "selected": false },
            { "id": "tgo7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "It narrows the type to the specific type checked", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "tgq8h9i0j1k2l3m4n5o6p7q",
          "title": "in Operator Use Case",
          "question": "When is the 'in' operator most useful as a type guard?",
          "options": [
            { "id": "tgo9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "When checking primitive values", "correct": false, "selected": false },
            { "id": "tgo0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "When distinguishing between different object types that have different properties", "correct": true, "selected": false },
            { "id": "tgo1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "When working with arrays", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "tgq9i0j1k2l3m4n5o6p7q8r",
          "title": "Type Guard Benefits",
          "question": "Why are type guards important in TypeScript?",
          "options": [
            { "id": "tgo3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "They make the code run faster", "correct": false, "selected": false },
            { "id": "tgo4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "They automatically fix type errors", "correct": false, "selected": false },
            { "id": "tgo5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "They allow TypeScript to safely know the type so you can use type-specific methods", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "tgt1a2b3c4d5e6f7g8h9i0j",
          "title": "typeof Type Guard with Union",
          "description": "Create a function called %processInput% that takes a parameter %input% of type %string | number | boolean%. Use %typeof% to check each type and log a different message for each: 'String: ...', 'Number: ...', 'Boolean: ...'.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function processInput(input: string | number | boolean): void {\n  if (typeof input === 'string') {\n    console.log('String:', input);\n  } else if (typeof input === 'number') {\n    console.log('Number:', input);\n  } else {\n    console.log('Boolean:', input);\n  }\n}\nprocessInput('hello');\nprocessInput(42);\nprocessInput(true);",
          "done": false
        },
        {
          "id": "tgt2b3c4d5e6f7g8h9i0j1k",
          "title": "in Operator Type Guard",
          "description": "Create two types: %Phone% with %brand% (string) and %battery% (number), and %Laptop% with %brand% (string) and %ram% (number). Create a function called %printSpecs% that takes %device: Phone | Laptop% and uses the %in% operator to check which property exists. Log the specs accordingly.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Phone = { brand: string; battery: number };\ntype Laptop = { brand: string; ram: number };\nfunction printSpecs(device: Phone | Laptop): void {\n  if ('battery' in device) {\n    console.log(`Phone: ${device.brand}, Battery: ${device.battery}h`);\n  } else {\n    console.log(`Laptop: ${device.brand}, RAM: ${device.ram}GB`);\n  }\n}\nprintSpecs({ brand: 'Apple', battery: 20 });\nprintSpecs({ brand: 'Dell', ram: 16 });",
          "done": false
        }
      ]
    },
    {
      "id": "uk1n2o3w4n5t6y7p8e9r0s",
      "title": "Unknown Type",
      "videoID": "28",
      "section": 3,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "ukq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is Unknown",
          "question": "What is the 'unknown' type in TypeScript?",
          "options": [
            { "id": "uko1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "A type that represents any value but is type-safe", "correct": true, "selected": false },
            { "id": "uko2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "A type that only works with strings", "correct": false, "selected": false },
            { "id": "uko3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "A type that is the same as 'any'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ukq2b3c4d5e6f7g8h9i0j1k",
          "title": "unknown vs any",
          "question": "What is the main difference between 'unknown' and 'any'?",
          "options": [
            { "id": "uko5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "unknown requires type checking before use, any does not", "correct": true, "selected": false },
            { "id": "uko6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "any requires type checking, unknown does not", "correct": false, "selected": false },
            { "id": "uko7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "They are exactly the same", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ukq3c4d5e6f7g8h9i0j1k2l",
          "title": "Assigning to unknown",
          "question": "let data: unknown = 'hello';\nlet message: string = data;\nWhat happens when you run this code?",
          "options": [
            { "id": "uko9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "It works fine because data is a string", "correct": false, "selected": false },
            { "id": "uko0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "TypeScript shows an error because unknown cannot be assigned to string without checking", "correct": true, "selected": false },
            { "id": "uko1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "It converts data to a string automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ukq4d5e6f7g8h9i0j1k2l3m",
          "title": "Type Checking unknown",
          "question": "let value: unknown = 42;\nif (typeof value === 'number') {\n  console.log(value.toFixed(2));\n}\nWhy does this code work?",
          "options": [
            { "id": "uko3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "Because unknown can be used without any checks", "correct": false, "selected": false },
            { "id": "uko4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "Because TypeScript narrows unknown to number after the typeof check", "correct": true, "selected": false },
            { "id": "uko5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "TypeScript automatically converts unknown to number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ukq6f7g8h9i0j1k2l3m4n5o",
          "title": "unknown with Different Types",
          "question": "let value: unknown = 'hello';\nlet num: number = 10;\nvalue = num;\nvalue = true;\nWhat is the type of value after these assignments?",
          "options": [
            { "id": "uko1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "unknown (it can hold any value but stays unknown)", "correct": true, "selected": false },
            { "id": "uko2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "boolean", "correct": false, "selected": false },
            { "id": "uko3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "string | number | boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ukq7g8h9i0j1k2l3m4n5o6p",
          "title": "unknown Operations",
          "question": "let data: unknown = 'hello';\nconsole.log(data.length);\nWhat happens when you run this code?",
          "options": [
            { "id": "uko5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "It logs '5'", "correct": false, "selected": false },
            { "id": "uko6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "TypeScript shows an error because unknown can't be used without type checking", "correct": true, "selected": false },
            { "id": "uko7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "It throws a runtime error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ukq8h9i0j1k2l3m4n5o6p7q",
          "title": "When to Use unknown",
          "question": "When should you use 'unknown' instead of 'any'?",
          "options": [
            { "id": "uko9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "When you want to opt out of type checking", "correct": false, "selected": false },
            { "id": "uko0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "When you don't know the type but want type safety", "correct": true, "selected": false },
            { "id": "uko1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "When you only work with strings", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ukq9i0j1k2l3m4n5o6p7q8r",
          "title": "unknown with Functions",
          "question": "function processData(data: unknown): void {\n  if (typeof data === 'string') {\n    console.log('String:', data);\n  }\n}\nprocessData('hello');\nprocessData(42);\nWhat happens when processData(42) is called?",
          "options": [
            { "id": "uko3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "It logs 'String: 42'", "correct": false, "selected": false },
            { "id": "uko4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "It logs nothing because 42 doesn't pass the typeof check", "correct": true, "selected": false },
            { "id": "uko5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "It throws a runtime error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ukq0j1k2l3m4n5o6p7q8r9s",
          "title": "unknown Type Safety",
          "question": "Why is 'unknown' considered safer than 'any'?",
          "options": [
            { "id": "uko7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "Because unknown requires type checking before operations", "correct": true, "selected": false },
            { "id": "uko8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "Because unknown is faster than any", "correct": false, "selected": false },
            { "id": "uko9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "Because unknown only works with primitives", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "ukt1a2b3c4d5e6f7g8h9i0j",
          "title": "Working with unknown",
          "description": "Create a variable called %data% with type %unknown% and assign it a string value. Then try to log %data.length% without type checking to see the error. Finally, use a %typeof% type guard to safely log the length.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let data: unknown = 'TypeScript';\n// data.length; // Error: Object is of type 'unknown'\nif (typeof data === 'string') {\n  console.log(data.length); // 10\n}",
          "done": false
        },
      ]
    },
    {
      "id": "nn1a2s3s4e5r6t7i8o9n0p",
      "title": "Non-null Assertion Operator",
      "videoID": "29",
      "section": 3,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "nnq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is Non-null Assertion Operator",
          "question": "What does the non-null assertion operator (!) do in TypeScript?",
          "options": [
            { "id": "nno1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "It checks if a value is null", "correct": false, "selected": false },
            { "id": "nno2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "It tells TypeScript that a value is not null or undefined", "correct": true, "selected": false },
            { "id": "nno3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "It converts null to undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "nnq2b3c4d5e6f7g8h9i0j1k",
          "title": "Non-null Assertion Syntax",
          "question": "Which of the following correctly uses the non-null assertion operator?",
          "options": [
            { "id": "nno5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "let value = maybeValue?;", "correct": false, "selected": false },
            { "id": "nno6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "let value = maybeValue!!;", "correct": false, "selected": false },
            { "id": "nno7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "let value = maybeValue!;", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "nnq4d5e6f7g8h9i0j1k2l3m",
          "title": "Non-null Assertion with Objects",
          "question": "let user: { name: string } | null = { name: 'Mike' };\nlet userName = user!.name;\nWhat does this code do?",
          "options": [
            { "id": "nno3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "It converts user to undefined", "correct": false, "selected": false },
            { "id": "nno4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "It works because the ! tells TypeScript user is not null", "correct": true, "selected": false },
            { "id": "nno5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "It throws an error because user is null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "nnq5e6f7g8h9i0j1k2l3m4n",
          "title": "Non-null Assertion Safety",
          "question": "What is the risk of using the non-null assertion operator?",
          "options": [
            { "id": "nno7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "It changes the value type to string", "correct": false, "selected": false },
            { "id": "nno8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "It makes the code slower", "correct": false, "selected": false },
            { "id": "nno9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "It can cause runtime errors if the value is actually null or undefined", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
      ]
    },
    {
      "id": "p9q8r7s6t5u4v3w2x1y0",
      "title": "Tuples",
      "videoID": "22",
      "section": 3,
      "done": false,
      "inProgress": false,
      "questions": [
        {
          "id": "a1b2c3d4e5f6g7h8i9j0",
          "title": "Tuple vs Array",
          "question": "What is the main difference between `[string, number]` and `(string | number)[]`?",
          "options": [
            { "id": "z9x8c7v6b5n4m3l2k1j", "option": "a", "text": "They are exactly the same", "correct": false, "selected": false },
            { "id": "p1o2i3u4y5t6r7e8w9q", "option": "b", "text": "Tuple can only hold numbers", "correct": false, "selected": false },
            { "id": "l0k9j8h7g6f5d4s3a2", "option": "c", "text": "Array is more strict than tuple", "correct": false, "selected": false },
            { "id": "m2n3b4v5c6x7z8l9k0", "option": "d", "text": "Tuple has fixed length and ordered types, while array does not", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "b2c3d4e5f6g7h8i9j0k1",
          "title": "Basic Tuple",
          "question": "const status: [string, number] = ['success', 200];",
          "options": [
            { "id": "q2w3e4r5t6y7u8i9o0p", "option": "a", "text": "Order of types doesn't matter", "correct": false, "selected": false },
            { "id": "a1s2d3f4g5h6j7k8l9m", "option": "b", "text": "This is valid", "correct": true, "selected": false },
            { "id": "z1x2c3v4b5n6m7l8k9j", "option": "c", "text": "Missing third element", "correct": false, "selected": false },
            { "id": "p3o4i5u6y7t8r9e0w1", "option": "d", "text": "Should be written as (string | number)[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "c3d4e5f6g7h8i9j0k1l2",
          "title": "Tuple Length",
          "question": "const status: [string, number] = ['success', 200, 123];",
          "options": [
            { "id": "l1k2j3h4g5f6d7s8a9", "option": "a", "text": "It automatically removes the extra element", "correct": false, "selected": false },
            { "id": "m4n5b6v7c8x9z0l1k2", "option": "b", "text": "This is valid", "correct": false, "selected": false },
            { "id": "q5w6e7r8t9y0u1i2o3", "option": "c", "text": "Only works if the third element is a string", "correct": false, "selected": false },
            { "id": "a3s4d5f6g7h8j9k0l1", "option": "d", "text": "TypeScript shows an error (too many elements)", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "d4e5f6g7h8i9j0k1l2m3",
          "title": "Optional Tuple Elements",
          "question": "type APIEndpoint = [string, string, boolean?, number?];",
          "options": [
            { "id": "z2x3c4v5b6n7m8l9k0", "option": "a", "text": "All four elements are required", "correct": false, "selected": false },
            { "id": "p4o5i6u7y8t9r0e1w2", "option": "b", "text": "Only the boolean can be omitted", "correct": false, "selected": false },
            { "id": "q6w7e8r9t0y1u2i3o4", "option": "c", "text": "The last two elements are optional", "correct": true, "selected": false },
            { "id": "a5s6d7f8g9h0j1k2l3", "option": "d", "text": "This is not a valid tuple syntax", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "e5f6g7h8i9j0k1l2m3n4",
          "title": "Tuple Usage",
          "question": "const endpoint: [string, string, boolean?] = ['/users', 'GET'];",
          "options": [
            { "id": "l3k4j5h6g7f8d9s0a1", "option": "a", "text": "Missing required boolean element", "correct": false, "selected": false },
            { "id": "m6n7b8v9c0x1z2l3k4", "option": "b", "text": "The order of elements is wrong", "correct": false, "selected": false },
            { "id": "q8w9e0r1t2y3u4i5o6", "option": "c", "text": "Should use an object instead of tuple", "correct": false, "selected": false },
            { "id": "a7s8d9f0g1h2j3k4l5", "option": "d", "text": "This is valid because the boolean is optional", "correct": true, "selected": false }
          ],
          "correctAnswer": "d"
        },
        {
          "id": "f6g7h8i9j0k1l2m3n4o5",
          "title": "Tuple Push Behavior",
          "question": "After defining a tuple with exactly 2 elements, what happens if you call .push()?",
          "options": [
            { "id": "z4x5c6v7b8n9m0l1k2", "option": "a", "text": "It always throws a type error", "correct": false, "selected": false },
            { "id": "p5o6i7u8y9t0r1e2w3", "option": "b", "text": "The tuple automatically becomes a regular array", "correct": false, "selected": false },
            { "id": "q9w0e1r2t3y4u5i6o7", "option": "c", "text": "TypeScript may allow it even though it breaks the tuple length", "correct": true, "selected": false },
            { "id": "a8s9d0f1g2h3j4k5l6", "option": "d", "text": "push() is not allowed on tuples", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "t1u2v3w4x5y6z7a8b9c0",
          "title": "Basic Tuple",
          "description": "Create a tuple type called %Response% that holds a %string% (status) and a %number% (code). Declare a variable using this tuple.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Response = [string, number];\n\nconst apiResponse: Response = ['success', 200];",
          "done": false
        },
        {
          "id": "d1e2f3g4h5i6j7k8l9m0",
          "title": "Tuple with Optionals",
          "description": "Create a tuple type called %Endpoint% with: %path% (string), %method% (string), optional %auth% (boolean), and optional %timeout% (number). Create 3 different valid endpoints.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Endpoint = [string, string, boolean?, number?];\n\nconst e1: Endpoint = ['/users', 'GET'];\nconst e2: Endpoint = ['/posts', 'POST', true];\nconst e3: Endpoint = ['/settings', 'PUT', false, 5000];",
          "done": false
        },
        {
          "id": "n1o2p3q4r5s6t7u8v9w0",
          "title": "Tuple Limitations",
          "description": "Create a tuple with 2 elements. Then try to push a third element to it. Observe what happens.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const coords: [number, number] = [10, 20];\ncoords.push(30); // Allowed by TypeScript (but breaks tuple strictness)",
          "done": false
        }
      ]
    },
    {
      "id": "en1u2m3e4r5a6t7o8r9s0p",
      "title": "Enum",
      "videoID": "30",
      "section": 3,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "enq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is Enum",
          "question": "What is an enum in TypeScript?",
          "options": [
            { "id": "eno1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "A way to define a set of named constants", "correct": true, "selected": false },
            { "id": "eno2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "A way to create a new variable", "correct": false, "selected": false },
            { "id": "eno3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "A way to create a function", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "enq2b3c4d5e6f7g8h9i0j1k",
          "title": "Enum Syntax",
          "question": "Which of the following correctly defines an enum?",
          "options": [
            { "id": "eno5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "enum Status { PENDING, APPROVED, REJECTED }", "correct": true, "selected": false },
            { "id": "eno6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "type Status = { PENDING, APPROVED, REJECTED }", "correct": false, "selected": false },
            { "id": "eno7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "const Status = { PENDING, APPROVED, REJECTED }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "enq3c4d5e6f7g8h9i0j1k2l",
          "title": "Using Enum Values",
          "question": "enum Color { RED, GREEN, BLUE }\nlet myColor: Color = Color.RED;\nWhat is the value of myColor?",
          "options": [
            { "id": "eno9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "'RED'", "correct": false, "selected": false },
            { "id": "eno0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "0", "correct": true, "selected": false },
            { "id": "eno1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "enq4d5e6f7g8h9i0j1k2l3m",
          "title": "Enum with Custom Values",
          "question": "enum Status {\n  PENDING = 'PENDING',\n  APPROVED = 'APPROVED',\n  REJECTED = 'REJECTED'\n}\nWhat type of values does this enum use?",
          "options": [
            { "id": "eno3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "Number values", "correct": false, "selected": false },
            { "id": "eno4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "String values", "correct": true, "selected": false },
            { "id": "eno5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "Boolean values", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "enq5e6f7g8h9i0j1k2l3m4n",
          "title": "Enum with Numeric Values",
          "question": "enum Direction {\n  UP = 1,\n  DOWN = 2,\n  LEFT = 3\n}\nWhat is the value of Direction.LEFT?",
          "options": [
            { "id": "eno7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "'LEFT'", "correct": false, "selected": false },
            { "id": "eno8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "3", "correct": true, "selected": false },
            { "id": "eno9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "2", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "enq6f7g8h9i0j1k2l3m4n5o",
          "title": "Enum Benefits",
          "question": "What is the main benefit of using enums?",
          "options": [
            { "id": "eno1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "They make code more readable with named constants", "correct": true, "selected": false },
            { "id": "eno2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "They make code run faster", "correct": false, "selected": false },
            { "id": "eno3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "They automatically convert types", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "enq7g8h9i0j1k2l3m4n5o6p",
          "title": "Enum in Functions",
          "question": "enum Role { USER, ADMIN, GUEST }\nfunction setRole(role: Role) {\n  console.log(role);\n}\nsetRole(Role.ADMIN);\nWhat is logged to the console?",
          "options": [
            { "id": "eno5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "'ADMIN'", "correct": false, "selected": false },
            { "id": "eno6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "1", "correct": true, "selected": false },
            { "id": "eno7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "enq9i0j1k2l3m4n5o6p7q8r",
          "title": "Enum Auto-increment",
          "question": "enum Status {\n  PENDING = 1,\n  APPROVED,\n  REJECTED\n}\nWhat is the value of Status.REJECTED?",
          "options": [
            { "id": "eno3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "1", "correct": false, "selected": false },
            { "id": "eno4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "2", "correct": false, "selected": false },
            { "id": "eno5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "3", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "enq0j1k2l3m4n5o6p7q8r9s",
          "title": "Enum vs Union Type",
          "question": "What is the difference between an enum and a union type?",
          "options": [
            { "id": "eno7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "Enums create named constants, union types combine types", "correct": true, "selected": false },
            { "id": "eno8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "They are exactly the same", "correct": false, "selected": false },
            { "id": "eno9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "Enums only work with numbers", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
      ]
    },
    {
      "id": "s3m1a2b3c465e6f7g8h9i0j",
      "title": "Section 3 Milestone - All Concepts",
      "videoID": "31",
      "section": 3,
      "done": false,
      "milestone": true,
      "inProgress": false,
      "questions": [
        {
          "id": "s3q01a2b3c4d5e6f7g8h9i0j",
          "title": "Type Aliases",
          "question": "type Name = string;\nconst username: Name = 'Mike';\nWhat type does TypeScript infer for 'username'?",
          "options": [
            { "id": "s3o01a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "string", "correct": true, "selected": false },
            { "id": "s3o02b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "Name", "correct": false, "selected": false },
            { "id": "s3o03c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q02b3c4d5e6f7g8h9i0j1k",
          "title": "Intersection Types",
          "question": "type A = { a: string };\ntype B = { b: number };\ntype C = A & B;\nWhat does type C represent?",
          "options": [
            { "id": "s3o04d5e6f7g8h9i0j1k2l3m", "option": "a", "text": "A type with only property 'a'", "correct": false, "selected": false },
            { "id": "s3o05e6f7g8h9i0j1k2l3m4n", "option": "b", "text": "A type with both properties 'a' and 'b'", "correct": true, "selected": false },
            { "id": "s3o06f7g8h9i0j1k2l3m4n5o", "option": "c", "text": "A type with only property 'b'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q03c4d5e6f7g8h9i0j1k2l",
          "title": "Tuples",
          "question": "const status: [string, number] = ['success', 200];\nWhat type does TypeScript assign to 'status'?",
          "options": [
            { "id": "s3o07g8h9i0j1k2l3m4n5o6p", "option": "a", "text": "string[]", "correct": false, "selected": false },
            { "id": "s3o08h9i0j1k2l3m4n5o6p7q", "option": "b", "text": "[string, number]", "correct": true, "selected": false },
            { "id": "s3o09i0j1k2l3m4n5o6p7q8r", "option": "c", "text": "(string | number)[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q04d5e6f7g8h9i0j1k2l3m",
          "title": "Function Types",
          "question": "type Greet = (name: string) => string;\nWhat does this type define?",
          "options": [
            { "id": "s3o10j0k1l2m3n4o5p6q7r8s", "option": "a", "text": "A function that takes a string and returns a string", "correct": true, "selected": false },
            { "id": "s3o11k1l2m3n4o5p6q7r8s9t", "option": "b", "text": "A function that takes a number and returns a string", "correct": false, "selected": false },
            { "id": "s3o12l2m3n4o5p6q7r8s9t0u", "option": "c", "text": "A function that takes a string and returns void", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q05e6f7g8h9i0j1k2l3m4n",
          "title": "typeof Type Guard",
          "question": "function printId(id: string | number): void {\n  if (typeof id === 'string') {\n    // What does TypeScript know here?\n  }\n}\nWhat type does TypeScript narrow 'id' to inside the if block?",
          "options": [
            { "id": "s3o13m3n4o5p6q7r8s9t0u1v", "option": "a", "text": "string | number", "correct": false, "selected": false },
            { "id": "s3o14n4o5p6q7r8s9t0u1v2w", "option": "b", "text": "string", "correct": true, "selected": false },
            { "id": "s3o15o5p6q7r8s9t0u1v2w3x", "option": "c", "text": "number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q06f7g8h9i0j1k2l3m4n5o",
          "title": "in Operator Type Guard",
          "question": "type Car = { wheels: number };\ntype Boat = { sails: number };\nfunction print(vehicle: Car | Boat) {\n  if ('wheels' in vehicle) {\n    // What does TypeScript know here?\n  }\n}\nWhat type does TypeScript narrow 'vehicle' to inside the if block?",
          "options": [
            { "id": "s3o16p6q7r8s9t0u1v2w3x4y", "option": "a", "text": "Car | Boat", "correct": false, "selected": false },
            { "id": "s3o17q7r8s9t0u1v2w3x4y5z", "option": "b", "text": "Car", "correct": true, "selected": false },
            { "id": "s3o18r8s9t0u1v2w3x4y5z6a", "option": "c", "text": "Boat", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q07g8h9i0j1k2l3m4n5o6p",
          "title": "Unknown Type",
          "question": "let data: unknown = 'hello';\nlet message: string = data;\nWhat does TypeScript say about this assignment?",
          "options": [
            { "id": "s3o19s9t0u1v2w3x4y5z6a7b", "option": "a", "text": "It allows it because data is a string", "correct": false, "selected": false },
            { "id": "s3o20t0u1v2w3x4y5z6a7b8c", "option": "b", "text": "It shows an error because unknown cannot be assigned to string", "correct": true, "selected": false },
            { "id": "s3o21u1v2w3x4y5z6a7b8c9d", "option": "c", "text": "It converts data to string automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q08h9i0j1k2l3m4n5o6p7q",
          "title": "Non-null Assertion",
          "question": "let user: { name: string } | null = { name: 'Mike' };\nlet userName = user!.name;\nWhat does the ! operator tell TypeScript?",
          "options": [
            { "id": "s3o22v2w3x4y5z6a7b8c9d0e", "option": "a", "text": "That user is definitely not null", "correct": true, "selected": false },
            { "id": "s3o23w3x4y5z6a7b8c9d0e1f", "option": "b", "text": "That user might be null", "correct": false, "selected": false },
            { "id": "s3o24x4y5z6a7b8c9d0e1f2g", "option": "c", "text": "That user is undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q09i0j1k2l3m4n5o6p7q8r",
          "title": "Truthiness Narrowing",
          "question": "function getLength(str: string | 0): number {\n  if (str) {\n    // What does TypeScript know here?\n  }\n}\nWhat type does TypeScript narrow 'str' to inside the if block?",
          "options": [
            { "id": "s3o25y5z6a7b8c9d0e1f2g3h", "option": "a", "text": "string | 0", "correct": false, "selected": false },
            { "id": "s3o26z6a7b8c9d0e1f2g3h4i", "option": "b", "text": "string (falsy values like 0 are narrowed out)", "correct": true, "selected": false },
            { "id": "s3o27a7b8c9d0e1f2g3h4i5j", "option": "c", "text": "0", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q10j1k2l3m4n5o6p7q8r9s",
          "title": "Equality Narrowing",
          "question": "function move(direction: 'left' | 'right' | 'up') {\n  if (direction === 'up') {\n    // What does TypeScript know here?\n  }\n}\nWhat type does TypeScript narrow 'direction' to inside the if block?",
          "options": [
            { "id": "s3o28b8c9d0e1f2g3h4i5j6k", "option": "a", "text": "'left' | 'right' | 'up'", "correct": false, "selected": false },
            { "id": "s3o29c9d0e1f2g3h4i5j6k7l", "option": "b", "text": "'up'", "correct": true, "selected": false },
            { "id": "s3o30d0e1f2g3h4i5j6k7l8m", "option": "c", "text": "'left' | 'right'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q11k2l3m4n5o6p7q8r9s0t",
          "title": "Intersection Type with Conflict",
          "question": "type X = { id: string };\ntype Y = { id: number };\ntype Z = X & Y;\nWhat happens to the 'id' property in type Z?",
          "options": [
            { "id": "s3o31e1f2g3h4i5j6k7l8m9n", "option": "a", "text": "It becomes string", "correct": false, "selected": false },
            { "id": "s3o32f2g3h4i5j6k7l8m9n0o", "option": "b", "text": "It becomes never (impossible type)", "correct": true, "selected": false },
            { "id": "s3o33g3h4i5j6k7l8m9n0o1p", "option": "c", "text": "It becomes number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q12l3m4n5o6p7q8r9s0t1u",
          "title": "Tuple with Optional Elements",
          "question": "type T = [string, number?];\nWhat does the ? after number mean?",
          "options": [
            { "id": "s3o34h4i5j6k7l8m9n0o1p2q", "option": "a", "text": "The number is required", "correct": false, "selected": false },
            { "id": "s3o35i5j6k7l8m9n0o1p2q3r", "option": "b", "text": "The number is optional", "correct": true, "selected": false },
            { "id": "s3o36j6k7l8m9n0o1p2q3r4s", "option": "c", "text": "The number can be any type", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q13m4n5o6p7q8r9s0t1u2v",
          "title": "Function Type with Optional Parameter",
          "question": "type Greet = (name: string, greeting?: string) => string;\nWhat does the ? after greeting mean?",
          "options": [
            { "id": "s3o37k7l8m9n0o1p2q3r4s5t", "option": "a", "text": "The greeting parameter is required", "correct": false, "selected": false },
            { "id": "s3o38l8m9n0o1p2q3r4s5t6u", "option": "b", "text": "The greeting parameter is optional", "correct": true, "selected": false },
            { "id": "s3o39m9n0o1p2q3r4s5t6u7v", "option": "c", "text": "The greeting must be a string", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q14n5o6p7q8r9s0t1u2v3w",
          "title": "Unknown with Type Guard",
          "question": "let data: unknown = 'TypeScript';\nif (typeof data === 'string') {\n  // What does TypeScript know here?\n}\nWhat type does TypeScript narrow 'data' to inside the if block?",
          "options": [
            { "id": "s3o40n0o1p2q3r4s5t6u7v8w", "option": "a", "text": "unknown", "correct": false, "selected": false },
            { "id": "s3o41o1p2q3r4s5t6u7v8w9x", "option": "b", "text": "string", "correct": true, "selected": false },
            { "id": "s3o42p2q3r4s5t6u7v8w9x0y", "option": "c", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q15o6p7q8r9s0t1u2v3w4x",
          "title": "Non-null Assertion with Arrays",
          "question": "let numbers: number[] | null = [1, 2, 3];\nlet first = numbers![0];\nWhat does the ! operator tell TypeScript?",
          "options": [
            { "id": "s3o43q3r4s5t6u7v8w9x0y1z", "option": "a", "text": "That numbers is definitely not null", "correct": true, "selected": false },
            { "id": "s3o44r4s5t6u7v8w9x0y1z2a", "option": "b", "text": "That numbers might be null", "correct": false, "selected": false },
            { "id": "s3o45s5t6u7v8w9x0y1z2a3b", "option": "c", "text": "That numbers is undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q16p7q8r9s0t1u2v3w4x5y",
          "title": "Type Alias with Union",
          "question": "type ID = string | number;\nWhat types can ID represent?",
          "options": [
            { "id": "s3o46t6u7v8w9x0y1z2a3b4c", "option": "a", "text": "Only string", "correct": false, "selected": false },
            { "id": "s3o47u7v8w9x0y1z2a3b4c5d", "option": "b", "text": "Either string or number", "correct": true, "selected": false },
            { "id": "s3o48v8w9x0y1z2a3b4c5d6e", "option": "c", "text": "Only number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q17q8r9s0t1u2v3w4x5y6z",
          "title": "Intersection with Union Types",
          "question": "type A = { value: string | number };\ntype B = { value: number | boolean };\ntype C = A & B;\nWhat type does 'value' become in type C?",
          "options": [
            { "id": "s3o49w9x0y1z2a3b4c5d6e7f", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "s3o50x0y1z2a3b4c5d6e7f8g", "option": "b", "text": "number", "correct": true, "selected": false },
            { "id": "s3o51y1z2a3b4c5d6e7f8g9h", "option": "c", "text": "boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q18r9s0t1u2v3w4x5y6z7a",
          "title": "Function Type Return Type",
          "question": "type Logger = (message: string) => void;\nWhat does 'void' represent in this type?",
          "options": [
            { "id": "s3o52z2a3b4c5d6e7f8g9h0i", "option": "a", "text": "The function returns a string", "correct": false, "selected": false },
            { "id": "s3o53a3b4c5d6e7f8g9h0i1j", "option": "b", "text": "The function returns nothing (undefined)", "correct": true, "selected": false },
            { "id": "s3o54b4c5d6e7f8g9h0i1j2k", "option": "c", "text": "The function returns a number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q19s0t1u2v3w4x5y6z7a8b",
          "title": "Tuple Type with Mixed Types",
          "question": "type User = [number, string, boolean];\nWhat is the type of the second element in this tuple?",
          "options": [
            { "id": "s3o55c5d6e7f8g9h0i1j2k3l", "option": "a", "text": "number", "correct": false, "selected": false },
            { "id": "s3o56d6e7f8g9h0i1j2k3l4m", "option": "b", "text": "string", "correct": true, "selected": false },
            { "id": "s3o57e7f8g9h0i1j2k3l4m5n", "option": "c", "text": "boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q20t1u2v3w4x5y6z7a8b9c",
          "title": "Type Alias for Object",
          "question": "type User = { name: string; age: number };\nWhat does this type define?",
          "options": [
            { "id": "s3o58f8g9h0i1j2k3l4m5n6o", "option": "a", "text": "An object with a name and age", "correct": true, "selected": false },
            { "id": "s3o59g9h0i1j2k3l4m5n6o7p", "option": "b", "text": "An array of names and ages", "correct": false, "selected": false },
            { "id": "s3o60h0i1j2k3l4m5n6o7p8q", "option": "c", "text": "A function that takes name and age", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q21u2v3w4x5y6z7a8b9c0d",
          "title": "typeof Guard with Number",
          "question": "function process(value: string | number) {\n  if (typeof value === 'number') {\n    // What does TypeScript know here?\n  }\n}\nWhat type does TypeScript narrow 'value' to inside the if block?",
          "options": [
            { "id": "s3o61i1j2k3l4m5n6o7p8q9r", "option": "a", "text": "string | number", "correct": false, "selected": false },
            { "id": "s3o62j2k3l4m5n6o7p8q9r0s", "option": "b", "text": "number", "correct": true, "selected": false },
            { "id": "s3o63k3l4m5n6o7p8q9r0s1t", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q22v3w4x5y6z7a8b9c0d1e",
          "title": "in Operator with Different Objects",
          "question": "type Phone = { battery: number };\ntype Laptop = { ram: number };\nfunction print(device: Phone | Laptop) {\n  if ('battery' in device) {\n    // What does TypeScript know here?\n  }\n}\nWhat type does TypeScript narrow 'device' to inside the if block?",
          "options": [
            { "id": "s3o64l4m5n6o7p8q9r0s1t2u", "option": "a", "text": "Phone", "correct": true, "selected": false },
            { "id": "s3o65m5n6o7p8q9r0s1t2u3v", "option": "b", "text": "Laptop", "correct": false, "selected": false },
            { "id": "s3o66n6o7p8q9r0s1t2u3v4w", "option": "c", "text": "Phone | Laptop", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q23w4x5y6z7a8b9c0d1e2f",
          "title": "Unknown Assignment",
          "question": "let data: unknown = 'hello';\nlet message: string = data;\nWhy does TypeScript show an error?",
          "options": [
            { "id": "s3o67o7p8q9r0s1t2u3v4w5x", "option": "a", "text": "Because unknown cannot be assigned to string", "correct": true, "selected": false },
            { "id": "s3o68p8q9r0s1t2u3v4w5x6y", "option": "b", "text": "Because data is not a string", "correct": false, "selected": false },
            { "id": "s3o69q9r0s1t2u3v4w5x6y7z", "option": "c", "text": "Because TypeScript doesn't allow any assignments", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q25y6z7a8b9c0d1e2f3g4h",
          "title": "Function Type with Default Parameter",
          "question": "type Greet = (name: string, greeting?: string) => string;\nWhat does the optional parameter allow?",
          "options": [
            { "id": "s3o73u3v4w5x6y7z8a9b0c1d", "option": "a", "text": "The function can be called without the greeting", "correct": true, "selected": false },
            { "id": "s3o74v4w5x6y7z8a9b0c1d2e", "option": "b", "text": "The function must always include the greeting", "correct": false, "selected": false },
            { "id": "s3o75w5x6y7z8a9b0c1d2e3f", "option": "c", "text": "The greeting must be a number", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q26z7a8b9c0d1e2f3g4h5i",
          "title": "Truthiness Narrowing with String",
          "question": "function getLength(str: string | 0): number {\n  if (str) {\n    // What does TypeScript know here?\n  }\n}\nWhat type does TypeScript narrow 'str' to inside the if block?",
          "options": [
            { "id": "s3o76x6y7z8a9b0c1d2e3f4g", "option": "a", "text": "string | 0", "correct": false, "selected": false },
            { "id": "s3o77y7z8a9b0c1d2e3f4g5h", "option": "b", "text": "string (truthy values only)", "correct": true, "selected": false },
            { "id": "s3o78z8a9b0c1d2e3f4g5h6i", "option": "c", "text": "0", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q27a8b9c0d1e2f3g4h5i6j",
          "title": "Intersection Type with Objects",
          "question": "type Person = { name: string };\ntype Employee = { id: number };\ntype Worker = Person & Employee;\nWhat properties does Worker have?",
          "options": [
            { "id": "s3o79a9b0c1d2e3f4g5h6i7j", "option": "a", "text": "Only 'name'", "correct": false, "selected": false },
            { "id": "s3o80b0c1d2e3f4g5h6i7j8k", "option": "b", "text": "Both 'name' and 'id'", "correct": true, "selected": false },
            { "id": "s3o81c1d2e3f4g5h6i7j8k9l", "option": "c", "text": "Only 'id'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q28b9c0d1e2f3g4h5i6j7k",
          "title": "Tuple with Optional Elements Order",
          "question": "type T = [string, number?, boolean?];\nWhich elements are optional in this tuple?",
          "options": [
            { "id": "s3o82d2e3f4g5h6i7j8k9l0m", "option": "a", "text": "Only the second and third elements", "correct": true, "selected": false },
            { "id": "s3o83e3f4g5h6i7j8k9l0m1n", "option": "b", "text": "Only the first element", "correct": false, "selected": false },
            { "id": "s3o84f4g5h6i7j8k9l0m1n2o", "option": "c", "text": "All elements are optional", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q29c0d1e2f3g4h5i6j7k8l",
          "title": "Type Guard with typeof",
          "question": "function process(value: string | number | boolean) {\n  if (typeof value === 'string') {\n    // What does TypeScript know here?\n  }\n}\nWhat type does TypeScript narrow 'value' to inside the if block?",
          "options": [
            { "id": "s3o85g5h6i7j8k9l0m1n2o3p", "option": "a", "text": "string | number | boolean", "correct": false, "selected": false },
            { "id": "s3o86h6i7j8k9l0m1n2o3p4q", "option": "b", "text": "string", "correct": true, "selected": false },
            { "id": "s3o87i7j8k9l0m1n2o3p4q5r", "option": "c", "text": "number | boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s3q30d1e2f3g4h5i6j7k8l9m",
          "title": "Function Type with Multiple Parameters",
          "question": "type MathOp = (a: number, b: number) => number;\nWhat does this type define?",
          "options": [
            { "id": "s3o88j8k9l0m1n2o3p4q5r6s", "option": "a", "text": "A function that takes two numbers and returns a number", "correct": true, "selected": false },
            { "id": "s3o89k9l0m1n2o3p4q5r6s7t", "option": "b", "text": "A function that takes two strings and returns a number", "correct": false, "selected": false },
            { "id": "s3o90l0m1n2o3p4q5r6s7t8u", "option": "c", "text": "A function that takes two numbers and returns void", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q31e2f3g4h5i6j7k8l9m0n",
          "title": "Unknown Operations",
          "question": "let data: unknown = 'hello';\nconsole.log(data.length);\nWhy does TypeScript show an error?",
          "options": [
            { "id": "s3o91m1n2o3p4q5r6s7t8u9v", "option": "a", "text": "Because unknown cannot be used without type checking", "correct": true, "selected": false },
            { "id": "s3o92n2o3p4q5r6s7t8u9v0w", "option": "b", "text": "Because data is not a string", "correct": false, "selected": false },
            { "id": "s3o93o3p4q5r6s7t8u9v0w1x", "option": "c", "text": "Because TypeScript doesn't allow console.log", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q32f3g4h5i6j7k8l9m0n1o",
          "title": "Non-null Assertion Safety",
          "question": "let user: { name: string } | null = null;\nlet userName = user!.name;\nWhat is the risk of using ! here?",
          "options": [
            { "id": "s3o94p4q5r6s7t8u9v0w1x2y", "option": "a", "text": "It can cause a runtime error if user is null", "correct": true, "selected": false },
            { "id": "s3o95q5r6s7t8u9v0w1x2y3z", "option": "b", "text": "It will always work correctly", "correct": false, "selected": false },
            { "id": "s3o96r6s7t8u9v0w1x2y3z4a", "option": "c", "text": "It converts user to a string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q33g4h5i6j7k8l9m0n1o2p",
          "title": "Type Alias with Arrays",
          "question": "type Hobbies = string[];\nWhat does this type alias define?",
          "options": [
            { "id": "s3o97s7t8u9v0w1x2y3z4a5b", "option": "a", "text": "An array of strings", "correct": true, "selected": false },
            { "id": "s3o98t8u9v0w1x2y3z4a5b6c", "option": "b", "text": "An array of numbers", "correct": false, "selected": false },
            { "id": "s3o99u9v0w1x2y3z4a5b6c7d", "option": "c", "text": "A single string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q34h5i6j7k8l9m0n1o2p3q",
          "title": "Intersection Type Purpose",
          "question": "type A = { a: string };\ntype B = { b: number };\ntype C = A & B;\nWhat does the & operator do in this example?",
          "options": [
            { "id": "s3o100v0w1x2y3z4a5b6c7d8e", "option": "a", "text": "Combines both types into one", "correct": true, "selected": false },
            { "id": "s3o101w1x2y3z4a5b6c7d8e9f", "option": "b", "text": "Creates a union of types", "correct": false, "selected": false },
            { "id": "s3o102x2y3z4a5b6c7d8e9f0g", "option": "c", "text": "Removes properties from types", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q35i6j7k8l9m0n1o2p3q4r",
          "title": "Tuple vs Array",
          "question": "const tuple: [string, number] = ['hello', 42];\nconst arr: (string | number)[] = ['hello', 42];\nWhat is the difference in TypeScript?",
          "options": [
            { "id": "s3o103y3z4a5b6c7d8e9f0g1h", "option": "a", "text": "Tuple has fixed length, array can have any length", "correct": true, "selected": false },
            { "id": "s3o104z4a5b6c7d8e9f0g1h2i", "option": "b", "text": "They are exactly the same", "correct": false, "selected": false },
            { "id": "s3o105a5b6c7d8e9f0g1h2i3j", "option": "c", "text": "Tuple can only hold strings", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q36j7k8l9m0n1o2p3q4r5s",
          "title": "typeof Guard with Boolean",
          "question": "function process(value: string | number | boolean) {\n  if (typeof value === 'boolean') {\n    // What does TypeScript know here?\n  }\n}\nWhat type does TypeScript narrow 'value' to inside the if block?",
          "options": [
            { "id": "s3o106b6c7d8e9f0g1h2i3j4k", "option": "a", "text": "boolean", "correct": true, "selected": false },
            { "id": "s3o107c7d8e9f0g1h2i3j4k5l", "option": "b", "text": "string | number", "correct": false, "selected": false },
            { "id": "s3o108d8e9f0g1h2i3j4k5l6m", "option": "c", "text": "string | number | boolean", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q37k8l9m0n1o2p3q4r5s6t",
          "title": "Optional Parameter Function",
          "question": "type Greet = (name: string, greeting?: string) => string;\nWhat does the optional parameter allow?",
          "options": [
            { "id": "s3o109e9f0g1h2i3j4k5l6m7n", "option": "a", "text": "Calling the function without the greeting parameter", "correct": true, "selected": false },
            { "id": "s3o110f0g1h2i3j4k5l6m7n8o", "option": "b", "text": "Calling the function without any parameters", "correct": false, "selected": false },
            { "id": "s3o111g1h2i3j4k5l6m7n8o9p", "option": "c", "text": "The function must always include the greeting", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q38l9m0n1o2p3q4r5s6t7u",
          "title": "Intersection with Conflicting Types",
          "question": "type X = { id: string };\ntype Y = { id: number };\ntype Z = X & Y;\nWhat happens to the 'id' property in type Z?",
          "options": [
            { "id": "s3o112h2i3j4k5l6m7n8o9p0q", "option": "a", "text": "It becomes never (impossible type)", "correct": true, "selected": false },
            { "id": "s3o113i3j4k5l6m7n8o9p0q1r", "option": "b", "text": "It becomes string", "correct": false, "selected": false },
            { "id": "s3o114j4k5l6m7n8o9p0q1r2s", "option": "c", "text": "It becomes number", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q39m0n1o2p3q4r5s6t7u8v",
          "title": "Type Alias Benefits",
          "question": "type User = { id: number; name: string };\nWhat is the benefit of using this type alias?",
          "options": [
            { "id": "s3o115k5l6m7n8o9p0q1r2s3t", "option": "a", "text": "It can be reused for multiple objects", "correct": true, "selected": false },
            { "id": "s3o116l6m7n8o9p0q1r2s3t4u", "option": "b", "text": "It makes the code run faster", "correct": false, "selected": false },
            { "id": "s3o117m7n8o9p0q1r2s3t4u5v", "option": "c", "text": "It creates a new primitive type", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s3q40n1o2p3q4r5s6t7u8v9w",
          "title": "Unknown Type Safety",
          "question": "let data: unknown = 42;\nif (typeof data === 'number') {\n  // What does TypeScript know here?\n}\nWhat type does TypeScript narrow 'data' to inside the if block?",
          "options": [
            { "id": "s3o118n8o9p0q1r2s3t4u5v6w", "option": "a", "text": "unknown", "correct": false, "selected": false },
            { "id": "s3o119o9p0q1r2s3t4u5v6w7x", "option": "b", "text": "number", "correct": true, "selected": false },
            { "id": "s3o120p0q1r2s3t4u5v6w7x8y", "option": "c", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "s3t01a2b3c4d5e6f7g8h9i0j",
          "title": "Create a User Object with Type Alias",
          "description": "Create a variable called %user%. It should have properties: %id% (can be a number or string), %name% (string), %age% (number), and %email% (optional string). Assign values to this object.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type User = {\n  id: number | string,\n  name: string,\n  age: number,\n  email?: string\n};\nconst user: User = {\n  id: 1,\n  name: 'Mike',\n  age: 23\n};",
          "done": false
        },
        {
          "id": "s3t02b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Tuple for API Response",
          "description": "Create a variable called %response%. It should be a tuple with exactly 3 elements: a %string%, a %number%, and a %boolean%. Assign values to it.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const response: [string, number, boolean] = ['success', 200, true];",
          "done": false
        },
        {
          "id": "s3t03c4d5e6f7g8h9i0j1k2l",
          "title": "Create a Function Type for Calculator",
          "description": "Create a function called %calculate%. It should take two numbers and return a number. The function should multiply the two numbers and return the result.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Calculator = (a: number, b: number) => number;\nconst calculate: Calculator = (a, b) => a * b;",
          "done": false
        },
        {
          "id": "s3t04d5e6f7g8h9i0j1k2l3m",
          "title": "Create a Function with Union Type Parameter",
          "description": "Create a function called %printValue%. It should take one parameter that can be either a string or a number. If it's a string, log it in uppercase. If it's a number, log it with 2 decimal places.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function printValue(value: string | number): void {\n  if (typeof value === 'string') {\n    console.log(value.toUpperCase());\n  } else {\n    console.log(value.toFixed(2));\n  }\n}",
          "done": false
        },
        {
          "id": "s3t05e6f7g8h9i0j1k2l3m4n",
          "title": "Create an Intersection Type",
          "description": "Create two objects: %person% with %name% (string) and %age% (number), and %employee% with %id% (number) and %department% (string). Create a third object %worker% that combines both objects.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Person = { name: string; age: number };\ntype Employee = { id: number; department: string };\ntype Worker = Person & Employee;\nconst worker: Worker = {\n  name: 'Mike',\n  age: 30,\n  id: 123,\n  department: 'Engineering'\n};",
          "done": false
        },
        {
          "id": "s3t06f7g8h9i0j1k2l3m4n5o",
          "title": "Create a Function with Optional Parameter",
          "description": "Create a function called %greet%. It should take a %name% (string) and an optional %greeting% (string). If greeting is provided, log 'greeting, name'. If not, log 'Hello, name'.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Greet = (name: string, greeting?: string) => string;\nconst greet: Greet = (name, greeting = 'Hello') => `${greeting}, ${name}`;",
          "done": false
        },
        {
          "id": "s3t07g8h9i0j1k2l3m4n5o6p",
          "title": "Create a Type Guard Function",
          "description": "Create a function called %process% that takes a parameter that can be a string or a number. Use a type guard to check the type. If it's a string, return its length. If it's a number, return its square.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function process(value: string | number): number {\n  if (typeof value === 'string') {\n    return value.length;\n  } else {\n    return value * value;\n  }\n}",
          "done": false
        },
        {
          "id": "s3t08h9i0j1k2l3m4n5o6p7q",
          "title": "Create a Function with Tuple Return Type",
          "description": "Create a function called %getUserInfo%. It should return a tuple with 3 elements: a %string% (name), a %number% (age), and a %boolean% (isActive). Return values for these.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function getUserInfo(): [string, number, boolean] {\n  return ['Mike', 23, true];\n}",
          "done": false
        },
        {
          "id": "s3t09i0j1k2l3m4n5o6p7q8r",
          "title": "Create an Unknown Type Variable",
          "description": "Create a variable called %data% that can hold any value but is type-safe. Assign it a string. Then use a type guard to safely log its length.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let data: unknown = 'TypeScript';\nif (typeof data === 'string') {\n  console.log(data.length);\n}",
          "done": false
        },
        {
          "id": "s3t10j1k2l3m4n5o6p7q8r9s",
          "title": "Create Objects with Intersection Type",
          "description": "Create a type %Admin% with %isAdmin% (boolean) and %permissions% (array of strings). Create a type %User% with %id% (number) and %username% (string). Create an object %adminUser% that combines both types and has all properties.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type User = { id: number; username: string };\ntype Admin = { isAdmin: boolean; permissions: string[] };\ntype AdminUser = User & Admin;\nconst adminUser: AdminUser = {\n  id: 1,\n  username: 'admin',\n  isAdmin: true,\n  permissions: ['read', 'write', 'delete']\n};",
          "done": false
        }
      ]
    },
    {
      "id": "42234i7solwwyst5v8cay",
      "type": "title",
      "title": "Section 4: ",
      "videoID": "414234",
      "questionsTotal": 0,
      "tasksTotal": 0,
      "totalCorrect": 0,
      "totalFalse": 0,
      "totalTasksDone": 0,
      "section": 4,
      "sectionExercisesIndex": "13-24",
      "questions": [
      ],
      "tasks": [
      ]
    },
    {
      "id": "in1t2e3r4f5a6c7e8s9e0c",
      "title": "Interfaces",
      "videoID": "32",
      "section": 4,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "ifq1a2b3c4d5e6f7g8h9i0j",
          "title": "Interface Syntax",
          "question": "Which of the following correctly defines an interface?",
          "options": [
            { "id": "ifo1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "interface Person { name: string; age: number; }", "correct": true, "selected": false },
            { "id": "ifo2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "type Person = { name: string; age: number; }", "correct": false, "selected": false },
            { "id": "ifo3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "interface Person = { name: string; age: number; }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ifq2b3c4d5e6f7g8h9i0j1k",
          "title": "Method in Interface",
          "question": "interface Person {\n  name: string;\n  greet(): void;\n}\nWhat does this interface define?",
          "options": [
            { "id": "ifo6f7g8h9i0j1k2l3m4n5o", "option": "a", "text": "An object with only a name property", "correct": false, "selected": false },
            { "id": "ifo7g8h9i0j1k2l3m4n5o6p", "option": "b", "text": "A function that returns void", "correct": false, "selected": false },
            { "id": "ifo5e6f7g8h9i0j1k2l3m4n", "option": "c", "text": "An object with a name property and a greet method", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "ifq3c4d5e6f7g8h9i0j1k2l",
          "title": "Interface Method Syntax",
          "question": "interface User {\n  name: string;\n  printName(): void;\n  logName(): void;\n}\nWhich is the correct way to implement this interface?",
          "options": [
            { "id": "ifo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "{ name: 'Mike', printName: () => {}, logName() {} }", "correct": true, "selected": false },
            { "id": "ifo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "{ name: 'Mike', printName: {}, logName: {} }", "correct": false, "selected": false },
            { "id": "ifo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "{ name: 'Mike', printName: '', logName: '' }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ifq4d5e6f7g8h9i0j1k2l3m",
          "title": "Interface with Array",
          "question": "interface Product {\n  id: number;\n  name: string;\n}\nlet products: Product[] = [{ id: 1, name: 'Laptop' }];\nWhat does Product[] mean?",
          "options": [
            { "id": "ifo3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "An array of Product objects", "correct": true, "selected": false },
            { "id": "ifo4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "A single Product object", "correct": false, "selected": false },
            { "id": "ifo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "A string array", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ifq5e6f7g8h9i0j1k2l3m4n",
          "title": "Extending Interfaces",
          "question": "interface Person {\n  name: string;\n}\ninterface Employee extends Person {\n  id: number;\n}\nWhat properties does Employee have?",
          "options": [
            { "id": "ifo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "Only name", "correct": false, "selected": false },
            { "id": "ifo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "Both name and id", "correct": true, "selected": false },
            { "id": "ifo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "Only id", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ifq6f7g8h9i0j1k2l3m4n5o",
          "title": "Multiple Inheritance",
          "question": "interface A { a: string; }\ninterface B { b: number; }\ninterface C extends A, B { c: boolean; }\nWhat properties does C have?",
          "options": [
            { "id": "ifo1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "Only c", "correct": false, "selected": false },
            { "id": "ifo2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "a, b, and c", "correct": true, "selected": false },
            { "id": "ifo3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "Only a and b", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ifq8h9i0j1k2l3m4n5o6p7q",
          "title": "Function Type Interface",
          "question": "interface MathOperation {\n  (a: number, b: number): number;\n}\nWhat does this interface define?",
          "options": [
            { "id": "ifo0d1e2f3g4h5i6j7k8l9m", "option": "a", "text": "An object with two number properties", "correct": false, "selected": false },
            { "id": "ifo1e2f3g4h5i6j7k8l9m0n", "option": "b", "text": "A function that returns void", "correct": false, "selected": false },
            { "id": "ifo9c0d1e2f3g4h5i6j7k8l", "option": "c", "text": "A function type that takes two numbers and returns a number", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "ifq9i0j1k2l3m4n5o6p7q8r",
          "title": "Interface Inheritance",
          "question": "interface Animal {\n  name: string;\n}\ninterface Dog extends Animal {\n  breed: string;\n}\nconst dog: Dog = { name: 'Rex', breed: 'Labrador' };\nIs this valid?",
          "options": [
            { "id": "ifo3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "Yes, because Dog extends Animal and has all required properties", "correct": true, "selected": false },
            { "id": "ifo4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "No, because Dog is missing properties", "correct": false, "selected": false },
            { "id": "ifo5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "Only if the name is a string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ifq0j1k2l3m4n5o6p7q8r9s",
          "title": "Interface Implementation",
          "question": "interface Task {\n  id: number;\n  title: string;\n}\nlet tasks: Task[] = [{ id: 1, title: 'A' }, { id: 2, title: 'B' }];\nIs this code valid?",
          "options": [
            { "id": "ifo8l9m0n1o2p3q4r5s6t7u", "option": "a", "text": "No, because id should be a string", "correct": false, "selected": false },
            { "id": "ifo9m0n1o2p3q4r5s6t7u8v", "option": "b", "text": "No, because title is missing", "correct": false, "selected": false },
            { "id": "ifo7k8l9m0n1o2p3q4r5s6t", "option": "c", "text": "Yes, both objects match the Task interface", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "ift1a2b3c4d5e6f7g8h9i0j",
          "title": "Create an Interface for Book",
          "description": "Create an interface called %Book% with properties: %title% (string), %author% (string), %pages% (number). Then create a book object using this interface.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Book {\n  title: string;\n  author: string;\n  pages: number;\n}\nconst book: Book = {\n  title: 'TypeScript Guide',\n  author: 'Mike',\n  pages: 200\n};",
          "done": false
        },
        {
          "id": "ift2b3c4d5e6f7g8h9i0j1k",
          "title": "Create an Interface with Method",
          "description": "Create an interface called %Calculator% with a method %calculate% that takes two numbers and returns a number. Then create an object that implements this interface.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Calculator {\n  calculate(a: number, b: number): number;\n}\nconst add: Calculator = {\n  calculate: (a, b) => a + b\n};",
          "done": false
        },
        {
          "id": "ift3c4d5e6f7g8h9i0j1k2l",
          "title": "Extend an Interface",
          "description": "Create an interface %Vehicle% with %brand% (string) and %year% (number). Then create an interface %Car% that extends %Vehicle% and adds %doors% (number). Create a car object.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Vehicle {\n  brand: string;\n  year: number;\n}\ninterface Car extends Vehicle {\n  doors: number;\n}\nconst myCar: Car = {\n  brand: 'Toyota',\n  year: 2022,\n  doors: 4\n};",
          "done": false
        }
      ]
    },
    {
      "id": "iv1t2y3p4e5v6s7t8y9p0e",
      "title": "Interface vs Type",
      "videoID": "33",
      "section": 4,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "ivq1a2b3c4d5e6f7g8h9i0j",
          "title": "Interface vs Type - Syntax",
          "question": "Which of the following correctly defines an interface?",
          "options": [
            { "id": "ivo1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "interface User { name: string; age: number; }", "correct": true, "selected": false },
            { "id": "ivo2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "type User { name: string; age: number; }", "correct": false, "selected": false },
            { "id": "ivo3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "interface User = { name: string; age: number; }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ivq2b3c4d5e6f7g8h9i0j1k",
          "title": "Type for Union",
          "question": "Which of the following can define a union type?",
          "options": [
            { "id": "ivo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "Only type can define union types", "correct": true, "selected": false },
            { "id": "ivo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "Only interface can define union types", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "ivq3c4d5e6f7g8h9i0j1k2l",
          "title": "Type for Tuple",
          "question": "Which of the following can define a tuple?",
          "options": [
            { "id": "ivo0j1k2l3m4n5o6p7q8r9s", "option": "a", "text": "Only interface can define tuples", "correct": false, "selected": false },
            { "id": "ivo9i0j1k2l3m4n5o6p7q8r", "option": "b", "text": "Only type can define tuples", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ivq4d5e6f7g8h9i0j1k2l3m",
          "title": "Interface Merging",
          "question": "interface Animal {\n  name: string;\n}\ninterface Animal {\n  age: number;\n}\nWhat happens to the Animal interface?",
          "options": [
            { "id": "ivo3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "It merges and has both name and age", "correct": true, "selected": false },
            { "id": "ivo4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "It throws an error because duplicates are not allowed", "correct": false, "selected": false },
            { "id": "ivo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "It keeps only the first one", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ivq5e6f7g8h9i0j1k2l3m4n",
          "title": "Type Duplicate Error",
          "question": "type Animal = { name: string; };\ntype Animal = { age: number; };\nWhat happens when you run this code?",
          "options": [
            { "id": "ivo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "TypeScript shows an error for duplicate identifier", "correct": true, "selected": false },
            { "id": "ivo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "It merges and has both name and age", "correct": false, "selected": false },
            { "id": "ivo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "It keeps only the second one", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ivq6f7g8h9i0j1k2l3m4n5o",
          "title": "Interface Extension",
          "question": "interface A { a: string; }\ninterface C extends A { b: string; }\nconst obj: C = { a: 'hello', b: 'world' };\nIs this valid?",
          "options": [
            { "id": "ivo1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "Yes, C extends A and has all required properties", "correct": true, "selected": false },
            { "id": "ivo2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "No, because C is missing properties", "correct": false, "selected": false },
            { "id": "ivo3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "Only if a and b are strings", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ivq7g8h9i0j1k2l3m4n5o6p",
          "title": "Interface vs Type - Incompatible Properties",
          "question": "type C = { x: string } & { x: number };\nWhat happens to the x property?",
          "options": [
            { "id": "ivo5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "It becomes string", "correct": false, "selected": false },
            { "id": "ivo6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "It becomes never (impossible type)", "correct": true, "selected": false },
            { "id": "ivo7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "It becomes number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ivq8h9i0j1k2l3m4n5o6p7q",
          "title": "Interface vs Type - Extension Error",
          "question": "interface D extends { x: string }, { x: number } { }\nWhat happens when you run this code?",
          "options": [
            { "id": "ivo9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "It merges and x becomes string | number", "correct": false, "selected": false },
            { "id": "ivo0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "TypeScript shows a compiler error immediately", "correct": true, "selected": false },
            { "id": "ivo1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "It works and x becomes never", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ivq9i0j1k2l3m4n5o6p7q8r",
          "title": "What Interfaces Can Do",
          "question": "Which of the following can interfaces do that types cannot?",
          "options": [
            { "id": "ivo3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "Create union types", "correct": false, "selected": false },
            { "id": "ivo4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "Automatically merge declarations", "correct": true, "selected": false },
            { "id": "ivo5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "Create tuple types", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ivq0j1k2l3m4n5o6p7q8r9s",
          "title": "What Types Can Do",
          "question": "Which of the following can types do that interfaces cannot?",
          "options": [
            { "id": "ivo7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "Create unions and tuples", "correct": true, "selected": false },
            { "id": "ivo8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "Extend other interfaces", "correct": false, "selected": false },
            { "id": "ivo9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "Automatically merge declarations", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "ivt1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Status Type",
          "description": "Create a variable called %taskStatus%. It should only allow three possible values: %'pending'%, %'approved'%, or %'rejected'%. Figure out how to restrict it to only these three values.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Status = 'pending' | 'approved' | 'rejected';\nconst taskStatus: Status = 'pending';",
          "done": false
        },
        {
          "id": "ivt2b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Product Interface with Merging",
          "description": "Create a variable called %product%. It should have %id% (number), %name% (string), and %price% (number). First, declare an interface with %id% and %name%. Then declare the same interface again with %price% to demonstrate interface merging. Finally, create the product object.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Product {\n  id: number;\n  name: string;\n}\ninterface Product {\n  price: number;\n}\nconst product: Product = {\n  id: 1,\n  name: 'Laptop',\n  price: 999\n};",
          "done": false
        }
      ]
    },
    {
      "id": "ty1p2e3o4f5t6y7p8e9o0f",
      "title": "typeof",
      "videoID": "34",
      "section": 4,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "tyq1a2b3c4d5e6f7g8h9i0j",
          "title": "typeof with Primitives",
          "question": "const name = 'Mike';\ntype NameType = typeof name;\nWhat type does NameType represent?",
          "options": [
            { "id": "tyo2b3c4d5e6f7g8h9i0j1k", "option": "a", "text": "'Mike'", "correct": false, "selected": false },
            { "id": "tyo3c4d5e6f7g8h9i0j1k2l", "option": "b", "text": "any", "correct": false, "selected": false },
            { "id": "tyo1a2b3c4d5e6f7g8h9i0j", "option": "c", "text": "string", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "tyq2b3c4d5e6f7g8h9i0j1k",
          "title": "typeof with Objects",
          "question": "const user = { name: 'Mike', age: 23 };\ntype UserType = typeof user;\nWhat type does UserType represent?",
          "options": [
            { "id": "tyo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "{ name: string; age: number; }", "correct": true, "selected": false },
            { "id": "tyo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "object", "correct": false, "selected": false },
            { "id": "tyo7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "tyq3c4d5e6f7g8h9i0j1k2l",
          "title": "typeof with Arrays",
          "question": "const numbers = [1, 2, 3, 4];\ntype NumbersType = typeof numbers;\nWhat type does NumbersType represent?",
          "options": [
            { "id": "tyo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "number[]", "correct": true, "selected": false },
            { "id": "tyo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "any[]", "correct": false, "selected": false },
            { "id": "tyo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "Array", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "tyq4d5e6f7g8h9i0j1k2l3m",
          "title": "typeof with Functions",
          "question": "function greet(name: string): string {\n  return 'Hello ' + name;\n}\ntype GreetType = typeof greet;\nWhat type does GreetType represent?",
          "options": [
            { "id": "tyo4n5o6p7q8r9s0t1u2v3w", "option": "a", "text": "Function", "correct": false, "selected": false },
            { "id": "tyo5o6p7q8r9s0t1u2v3w4x", "option": "b", "text": "any", "correct": false, "selected": false },
            { "id": "tyo3m4n5o6p7q8r9s0t1u2v", "option": "c", "text": "(name: string) => string", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "tyq5e6f7g8h9i0j1k2l3m4n",
          "title": "typeof for Reusing Types",
          "question": "const config = { apiUrl: 'https://api.com', timeout: 5000 };\ntype Config = typeof config;\nconst newConfig: Config = { apiUrl: 'https://newapi.com', timeout: 3000 };\nIs this valid?",
          "options": [
            { "id": "tyo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "Yes, Config matches the shape of config", "correct": true, "selected": false },
            { "id": "tyo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "No, because Config is not a valid type", "correct": false, "selected": false },
            { "id": "tyo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "Only if the values are the same", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "tyq6f7g8h9i0j1k2l3m4n5o",
          "title": "typeof with Nested Objects",
          "question": "const data = { user: { name: 'Mike', age: 23 }, isActive: true };\ntype DataType = typeof data;\nWhat is the type of DataType.user?",
          "options": [
            { "id": "tyo1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "{ name: string; age: number; }", "correct": true, "selected": false },
            { "id": "tyo2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "any", "correct": false, "selected": false },
            { "id": "tyo3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "object", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "tyq7g8h9i0j1k2l3m4n5o6p",
          "title": "typeof with Literal Types",
          "question": "const status = 'pending';\ntype StatusType = typeof status;\nWhat type does StatusType represent?",
          "options": [
            { "id": "tyo5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "tyo6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "'pending'", "correct": true, "selected": false },
            { "id": "tyo7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "tyq9i0j1k2l3m4n5o6p7q8r",
          "title": "typeof vs Runtime typeof",
          "question": "What is the difference between TypeScript's typeof and JavaScript's typeof?",
          "options": [
            { "id": "tyo3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "TypeScript typeof works at compile-time, JavaScript typeof works at runtime", "correct": true, "selected": false },
            { "id": "tyo4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "They are exactly the same", "correct": false, "selected": false },
            { "id": "tyo5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "JavaScript typeof works at compile-time", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "tyq0j1k2l3m4n5o6p7q8r9s",
          "title": "typeof for Extracting Types",
          "question": "const user = { id: 1, name: 'Mike', isActive: true };\ntype User = typeof user;\nfunction printUser(user: User) { }\nprintUser({ id: 2, name: 'Jane', isActive: false });\nIs this valid?",
          "options": [
            { "id": "tyo7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "Yes, User matches the shape of the user object", "correct": true, "selected": false },
            { "id": "tyo8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "No, because User is not a valid type", "correct": false, "selected": false },
            { "id": "tyo9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "Only if the id is the same", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "tyt1a2b3c4d5e6f7g8h9i0j",
          "title": "Extract Type from Object",
          "description": "Create a object called %settings% with properties %theme% (string), %language% (string), and %notifications% (boolean). Use typeof to create a type from this object. Then create another object called %userSettings% with the same shape.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const settings = { theme: 'dark', language: 'en', notifications: true };\ntype Settings = typeof settings;\nconst userSettings: Settings = { theme: 'light', language: 'es', notifications: false };",
          "done": false
        },
        {
          "id": "tyt2b3c4d5e6f7g8h9i0j1k",
          "title": "Extract Type from Function",
          "description": "Create a function called %calculate% that takes two numbers and returns their sum. Use typeof to extract its type into a type alias called %CalculateFn%. Then create another function %multiply% that has the same type.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function calculate(a: number, b: number): number {\n  return a + b;\n}\ntype CalculateFn = typeof calculate;\nconst multiply: CalculateFn = (a, b) => a * b;",
          "done": false
        }
      ]
    },
    {
      "id": "tp1r2e3d4i5c6a7t8e9p0r",
      "title": "Type Predicate (is)",
      "videoID": "36",
      "section": 4,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "tpq2b3c4d5e6f7g8h9i0j1k",
          "title": "Type Predicate Syntax",
          "question": "function isString(value: unknown): value is string {\n  return typeof value === 'string';\n}\nWhat does 'value is string' represent?",
          "options": [
            { "id": "tpo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "A type predicate that tells TypeScript to narrow the type to string", "correct": true, "selected": false },
            { "id": "tpo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "A function that converts value to string", "correct": false, "selected": false },
            { "id": "tpo7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "A type alias for string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "tpq3c4d5e6f7g8h9i0j1k2l",
          "title": "Type Predicate with Objects",
          "question": "type Cat = { meow: () => void };\ntype Dog = { bark: () => void };\nfunction isCat(animal: Cat | Dog): animal is Cat {\n  return (animal as Cat).meow !== undefined;\n}\nWhat does this function do?",
          "options": [
            { "id": "tpo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "It checks if animal has a meow method and narrows to Cat type", "correct": true, "selected": false },
            { "id": "tpo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "It converts animal to Cat", "correct": false, "selected": false },
            { "id": "tpo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "It creates a new Cat object", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
      ]
    },
    {
      "id": "ta1s2s3e4r5t6i7o8n9a0s",
      "title": "Type Assertion (as)",
      "videoID": "37",
      "section": 4,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "taq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is Type Assertion",
          "question": "What does the 'as' keyword do in TypeScript?",
          "options": [
            { "id": "tao1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "It tells TypeScript to treat a value as a different type", "correct": true, "selected": false },
            { "id": "tao2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "It converts the value to a different type at runtime", "correct": false, "selected": false },
            { "id": "tao3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "It creates a new type alias", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "taq2b3c4d5e6f7g8h9i0j1k",
          "title": "Type Assertion Syntax",
          "question": "Which of the following correctly uses type assertion?",
          "options": [
            { "id": "tao5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "let value = someValue as string;", "correct": true, "selected": false },
            { "id": "tao6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "let value = someValue is string;", "correct": false, "selected": false },
            { "id": "tao7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "let value = someValue like string;", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "taq3c4d5e6f7g8h9i0j1k2l",
          "title": "Type Assertion with Union",
          "question": "let value: string | number = 'hello';\nlet str = value as string;\nWhat does this code do?",
          "options": [
            { "id": "tao9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "It tells TypeScript value is a string", "correct": true, "selected": false },
            { "id": "tao0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "It converts value to a string at runtime", "correct": false, "selected": false },
            { "id": "tao1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "It throws an error", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "taq5e6f7g8h9i0j1k2l3m4n",
          "title": "Type Assertion with Objects",
          "question": "interface User { name: string; age: number; }\nconst data = { name: 'Mike', age: 23 } as User;\nWhy would you use 'as User' here?",
          "options": [
            { "id": "tao7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "To tell TypeScript the object matches the User interface", "correct": true, "selected": false },
            { "id": "tao8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "To convert the object to a User at runtime", "correct": false, "selected": false },
            { "id": "tao9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "To create a new User object", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "taq7g8h9i0j1k2l3m4n5o6p",
          "title": "Type Assertion with Unknown",
          "question": "let data: unknown = 'hello';\nlet str = data as string;\nconsole.log(str.toUpperCase());\nWhy does this code work?",
          "options": [
            { "id": "tao5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "Because 'as string' tells TypeScript to treat data as a string", "correct": true, "selected": false },
            { "id": "tao6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "Because unknown can be used without type checking", "correct": false, "selected": false },
            { "id": "tao7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "Because toUpperCase works on any type", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "taq0j1k2l3m4n5o6p7q8r9s",
          "title": "Type Assertion Risk",
          "question": "let value = 'hello' as number;\nWhat is the risk of this code?",
          "options": [
            { "id": "tao7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "It can cause runtime errors if the value isn't actually a number", "correct": true, "selected": false },
            { "id": "tao8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "It will always work correctly", "correct": false, "selected": false },
            { "id": "tao9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "It converts 'hello' to a number automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "tat2b3c4d5e6f7g8h9i0j1k",
          "title": "Type Assertion with Unknown",
          "description": "Create a variable called %data% with type %unknown% and assign it a string value. Then use type assertion to tell TypeScript it's a string. Finally, log its length.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let data: unknown = 'TypeScript';\nconst str = data as string;\nconsole.log(str.length);",
          "done": false
        }
      ]
    },
    {
      "id": "re1a2d3o4n5l6y7p8e9r0o",
      "title": "Readonly",
      "videoID": "38",
      "section": 4,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "req1a2b3c4d5e6f7g8h9i0j",
          "title": "What is readonly",
          "question": "What does the 'readonly' keyword do in TypeScript?",
          "options": [
            { "id": "reo2b3c4d5e6f7g8h9i0j1k", "option": "a", "text": "It makes a property optional", "correct": false, "selected": false },
            { "id": "reo1a2b3c4d5e6f7g8h9i0j", "option": "b", "text": "It prevents a property from being modified after initialization", "correct": true, "selected": false },
            { "id": "reo3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "It makes a property required", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "req2b3c4d5e6f7g8h9i0j1k",
          "title": "readonly Property",
          "question": "interface User {\n  readonly id: number;\n  name: string;\n}\nconst user: User = { id: 1, name: 'Mike' };\nuser.id = 2;\nWhat happens?",
          "options": [
            { "id": "reo6f7g8h9i0j1k2l3m4n5o", "option": "a", "text": "It works fine and id becomes 2", "correct": false, "selected": false },
            { "id": "reo7g8h9i0j1k2l3m4n5o6p", "option": "b", "text": "It throws a runtime error", "correct": false, "selected": false },
            { "id": "reo5e6f7g8h9i0j1k2l3m4n", "option": "c", "text": "TypeScript shows an error because id is readonly", "correct": true, "selected": false },
          ],
          "correctAnswer": "c"
        },
        {
          "id": "req3c4d5e6f7g8h9i0j1k2l",
          "title": "readonly Array",
          "question": "const numbers: readonly number[] = [1, 2, 3];\nnumbers.push(4);\nWhat happens?",
          "options": [
            { "id": "reo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "TypeScript shows an error because push is not allowed on readonly arrays", "correct": true, "selected": false },
            { "id": "reo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "It works and 4 is added to the array", "correct": false, "selected": false },
            { "id": "reo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "It creates a new array", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "req4d5e6f7g8h9i0j1k2l3m",
          "title": "readonly Tuple",
          "question": "const tuple: readonly [string, number] = ['hello', 42];\ntuple[0] = 'world';\nWhat happens?",
          "options": [
            { "id": "reo3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "TypeScript shows an error because tuples are readonly", "correct": true, "selected": false },
            { "id": "reo4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "It works and tuple becomes ['world', 42]", "correct": false, "selected": false },
            { "id": "reo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "It creates a new tuple", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "req9i0j1k2l3m4n5o6p7q8r",
          "title": "readonly in Interface",
          "question": "interface Config {\n  readonly apiUrl: string;\n  timeout: number;\n}\nconst config: Config = { apiUrl: 'https://api.com', timeout: 5000 };\nconfig.apiUrl = 'https://newapi.com';\nWhat happens?",
          "options": [
            { "id": "reo4h5i6j7k8l9m0n1o2p3q", "option": "a", "text": "It works and apiUrl changes", "correct": false, "selected": false },
            { "id": "reo3g4h5i6j7k8l9m0n1o2p", "option": "b", "text": "TypeScript shows an error because apiUrl is readonly", "correct": true, "selected": false },
            { "id": "reo5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "It throws a runtime error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "req0j1k2l3m4n5o6p7q8r9s",
          "title": "readonly with Type Alias",
          "question": "type Point = {\n  readonly x: number;\n  readonly y: number;\n};\nconst point: Point = { x: 10, y: 20 };\npoint.x = 30;\nWhat happens?",
          "options": [
            { "id": "reo7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "TypeScript shows an error because x is readonly", "correct": true, "selected": false },
            { "id": "reo8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "It works and x becomes 30", "correct": false, "selected": false },
            { "id": "reo9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "It creates a new point", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "ret1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Readonly Interface",
          "description": "Create an interface called %Product% with %id% (readonly number), %name% (string), and %price% (number). Then create a product object and try to change the id to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Product {\n  readonly id: number;\n  name: string;\n  price: number;\n}\nconst product: Product = { id: 1, name: 'Laptop', price: 999 };\n// product.id = 2; // Error: Cannot assign to 'id' because it is a read-only property",
          "done": false
        },
        {
          "id": "ret2b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Readonly Array",
          "description": "Create a readonly array called %colors% with values %'red'%, %'green'%, and %'blue'%. Try to push a new value to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const colors: readonly string[] = ['red', 'green', 'blue'];\n// colors.push('yellow'); // Error: Property 'push' does not exist on type 'readonly string[]'",
          "done": false
        }
      ]
    },
    {
      "id": "as1c2o3n4s5t6e7r8t9y0p",
      "title": "as const",
      "videoID": "39",
      "section": 4,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "asq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is as const",
          "question": "What does 'as const' do in TypeScript?",
          "options": [
            { "id": "aso1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "It makes a value mutable", "correct": false, "selected": false },
            { "id": "aso2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "It converts a value to a string", "correct": false, "selected": false },
            { "id": "aso3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "It makes a value readonly with literal types", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "asq2b3c4d5e6f7g8h9i0j1k",
          "title": "as const with Array",
          "question": "const colors = ['red', 'green', 'blue'] as const;\nWhat type does TypeScript infer for colors?",
          "options": [
            { "id": "aso5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "string[]", "correct": false, "selected": false },
            { "id": "aso6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "any[]", "correct": false, "selected": false },
            { "id": "aso7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "readonly ['red', 'green', 'blue']", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "asq3c4d5e6f7g8h9i0j1k2l",
          "title": "as const with Object",
          "question": "const config = { apiUrl: 'https://api.com', timeout: 5000 } as const;\nWhat type does TypeScript infer for config?",
          "options": [
            { "id": "aso9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "{ apiUrl: string; timeout: number; }", "correct": false, "selected": false },
            { "id": "aso0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "any", "correct": false, "selected": false },
            { "id": "aso1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "{ readonly apiUrl: 'https://api.com'; readonly timeout: 5000; }", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "asq4d5e6f7g8h9i0j1k2l3m",
          "title": "as const vs const",
          "question": "What is the difference between 'const' and 'as const'?",
          "options": [
            { "id": "aso3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "const makes the variable immutable, as const makes the value readonly with literal types", "correct": true, "selected": false },
            { "id": "aso4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "They are exactly the same", "correct": false, "selected": false },
            { "id": "aso5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "as const makes the variable mutable", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "asq5e6f7g8h9i0j1k2l3m4n",
          "title": "as const with Tuple",
          "question": "const tuple = [10, 'hello'] as const;\nWhat type does TypeScript infer for tuple?",
          "options": [
            { "id": "aso7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "(number | string)[]", "correct": false, "selected": false },
            { "id": "aso8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "readonly [10, 'hello']", "correct": true, "selected": false },
            { "id": "aso9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "any[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "asq6f7g8h9i0j1k2l3m4n5o",
          "title": "as const with Nested Object",
          "question": "const data = { user: { name: 'Mike', age: 23 } } as const;\nCan you change data.user.name?",
          "options": [
            { "id": "aso1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "Yes, because only the top level is readonly", "correct": false, "selected": false },
            { "id": "aso2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "Yes, because as const doesn't affect nested objects", "correct": false, "selected": false },
            { "id": "aso3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "No, because as const makes all properties readonly", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "asq7g8h9i0j1k2l3m4n5o6p",
          "title": "as const with String",
          "question": "const greeting = 'hello' as const;\nWhat type does TypeScript infer for greeting?",
          "options": [
            { "id": "aso5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "aso6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "any", "correct": false, "selected": false },
            { "id": "aso7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "'hello'", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "asq8h9i0j1k2l3m4n5o6p7q",
          "title": "as const with Number",
          "question": "const count = 42 as const;\nWhat type does TypeScript infer for count?",
          "options": [
            { "id": "aso9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "number", "correct": false, "selected": false },
            { "id": "aso0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "42", "correct": true, "selected": false },
            { "id": "aso1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "asq0j1k2l3m4n5o6p7q8r9s",
          "title": "as const with Boolean",
          "question": "const isActive = true as const;\nWhat type does TypeScript infer for isActive?",
          "options": [
            { "id": "aso7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "boolean", "correct": false, "selected": false },
            { "id": "aso8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "any", "correct": false, "selected": false },
            { "id": "aso9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "true", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "ast1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Readonly Array with as const",
          "description": "Create an array called %directions% with values %'up'%, %'down'%, %'left'%, and %'right'%. Use %as const% to make it readonly with literal types. Then try to push a new value to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const directions = ['up', 'down', 'left', 'right'] as const;\n// directions.push('diagonal'); // Error: Property 'push' does not exist on type",
          "done": false
        },
        {
          "id": "ast2b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Readonly Object with as const",
          "description": "Create an object called %settings% with properties %theme% (string), %language% (string), and %notifications% (boolean). Use %as const% to make all properties readonly with literal types. Try to change a property to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const settings = { theme: 'dark', language: 'en', notifications: true } as const;\n// settings.theme = 'light'; // Error: Cannot assign to 'theme' because it is a read-only property",
          "done": false
        }
      ]
    },
    {
      "id": "s4m1a2b3c4d5e6f7g8h9i0j",
      "title": "Section 4 Milestone - All Concepts",
      "videoID": "40",
      "section": 4,
      "done": false,
      "milestone": true,
      "inProgress": false,
      "questions": [
        {
          "id": "s4q01a2b3c4d5e6f7g8h9i0j",
          "title": "Interface Syntax",
          "question": "Which of the following correctly defines an interface?",
          "options": [
            { "id": "s4o01a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "interface User { name: string; age: number; }", "correct": true, "selected": false },
            { "id": "s4o02b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "type User { name: string; age: number; }", "correct": false, "selected": false },
            { "id": "s4o03c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "interface User = { name: string; age: number; }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q02b3c4d5e6f7g8h9i0j1k",
          "title": "Interface Method",
          "question": "interface Person {\n  name: string;\n  greet(): void;\n}\nWhat does this interface define?",
          "options": [
            { "id": "s4o04d5e6f7g8h9i0j1k2l3m", "option": "a", "text": "An object with a name property and a greet method", "correct": true, "selected": false },
            { "id": "s4o05e6f7g8h9i0j1k2l3m4n", "option": "b", "text": "An object with only a name property", "correct": false, "selected": false },
            { "id": "s4o06f7g8h9i0j1k2l3m4n5o", "option": "c", "text": "A function that returns void", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q03c4d5e6f7g8h9i0j1k2l",
          "title": "Extending Interfaces",
          "question": "interface Animal { name: string; }\ninterface Dog extends Animal { breed: string; }\nWhat properties does Dog have?",
          "options": [
            { "id": "s4o07g8h9i0j1k2l3m4n5o6p", "option": "a", "text": "Only name", "correct": false, "selected": false },
            { "id": "s4o08h9i0j1k2l3m4n5o6p7q", "option": "b", "text": "Only breed", "correct": false, "selected": false },
            { "id": "s4o09i0j1k2l3m4n5o6p7q8r", "option": "c", "text": "Both name and breed", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s4q04d5e6f7g8h9i0j1k2l3m",
          "title": "Interface Merging",
          "question": "interface Car { brand: string; }\ninterface Car { year: number; }\nWhat happens to the Car interface?",
          "options": [
            { "id": "s4o10j0k1l2m3n4o5p6q7r8s", "option": "a", "text": "It merges and has both brand and year", "correct": true, "selected": false },
            { "id": "s4o11k1l2m3n4o5p6q7r8s9t", "option": "b", "text": "It throws an error", "correct": false, "selected": false },
            { "id": "s4o12l2m3n4o5p6q7r8s9t0u", "option": "c", "text": "It keeps only the first one", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q05e6f7g8h9i0j1k2l3m4n",
          "title": "Type Alias for Union",
          "question": "Which of the following can define a union type?",
          "options": [
            { "id": "s4o13m3n4o5p6q7r8s9t0u1v", "option": "a", "text": "Type can define union types, interface cannot", "correct": true, "selected": false },
            { "id": "s4o14n4o5p6q7r8s9t0u1v2w", "option": "b", "text": "Both type and interface can define union types", "correct": false, "selected": false },
            { "id": "s4o15o5p6q7r8s9t0u1v2w3x", "option": "c", "text": "Only interface can define union types", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s4q06f7g8h9i0j1k2l3m4n5o",
          "title": "typeof with Object",
          "question": "const user = { name: 'Mike', age: 23 };\ntype UserType = typeof user;\nWhat type does UserType represent?",
          "options": [
            { "id": "s4o16p6q7r8s9t0u1v2w3x4y", "option": "a", "text": "{ name: string; age: number; }", "correct": true, "selected": false },
            { "id": "s4o17q7r8s9t0u1v2w3x4y5z", "option": "b", "text": "object", "correct": false, "selected": false },
            { "id": "s4o18r8s9t0u1v2w3x4y5z6a", "option": "c", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q07g8h9i0j1k2l3m4n5o6p",
          "title": "keyof Operator",
          "question": "interface Product {\n  id: number;\n  name: string;\n  price: number;\n}\ntype ProductKeys = keyof Product;\nWhat type does ProductKeys represent?",
          "options": [
            { "id": "s4o19s9t0u1v2w3x4y5z6a7b", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "s4o20t0u1v2w3x4y5z6a7b8c", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "s4o21u1v2w3x4y5z6a7b8c9d", "option": "c", "text": "'id' | 'name' | 'price'", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s4q08h9i0j1k2l3m4n5o6p7q",
          "title": "Type Predicate",
          "question": "function isString(value: unknown): value is string {\n  return typeof value === 'string';\n}\nWhat does 'value is string' represent?",
          "options": [
            { "id": "s4o22v2w3x4y5z6a7b8c9d0e", "option": "a", "text": "A type alias for string", "correct": false, "selected": false },
            { "id": "s4o23w3x4y5z6a7b8c9d0e1f", "option": "b", "text": "A type predicate that tells TypeScript to narrow the type", "correct": true, "selected": false },
            { "id": "s4o24x4y5z6a7b8c9d0e1f2g", "option": "c", "text": "A function that converts value to string", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s4q09i0j1k2l3m4n5o6p7q8r",
          "title": "Type Assertion",
          "question": "let value: string | number = 'hello';\nlet str = value as string;\nWhat does this code do?",
          "options": [
            { "id": "s4o25y5z6a7b8c9d0e1f2g3h", "option": "a", "text": "It tells TypeScript value is a string", "correct": true, "selected": false },
            { "id": "s4o26z6a7b8c9d0e1f2g3h4i", "option": "b", "text": "It converts value to a string at runtime", "correct": false, "selected": false },
            { "id": "s4o27a7b8c9d0e1f2g3h4i5j", "option": "c", "text": "It throws an error", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q10j1k2l3m4n5o6p7q8r9s",
          "title": "readonly Property",
          "question": "interface User {\n  readonly id: number;\n  name: string;\n}\nconst user: User = { id: 1, name: 'Mike' };\nuser.id = 2;\nWhat happens?",
          "options": [
            { "id": "s4o28b8c9d0e1f2g3h4i5j6k", "option": "a", "text": "It throws a runtime error", "correct": false, "selected": false },
            { "id": "s4o29c9d0e1f2g3h4i5j6k7l", "option": "b", "text": "It works fine and id becomes 2", "correct": false, "selected": false },
            { "id": "s4o30d0e1f2g3h4i5j6k7l8m", "option": "c", "text": "TypeScript shows an error because id is readonly", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s4q11k2l3m4n5o6p7q8r9s0t",
          "title": "as const with Array",
          "question": "const colors = ['red', 'green', 'blue'] as const;\nWhat type does TypeScript infer for colors?",
          "options": [
            { "id": "s4o31e1f2g3h4i5j6k7l8m9n", "option": "a", "text": "readonly ['red', 'green', 'blue']", "correct": true, "selected": false },
            { "id": "s4o32f2g3h4i5j6k7l8m9n0o", "option": "b", "text": "string[]", "correct": false, "selected": false },
            { "id": "s4o33g3h4i5j6k7l8m9n0o1p", "option": "c", "text": "any[]", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q12l3m4n5o6p7q8r9s0t1u",
          "title": "Interface vs Type - Syntax",
          "question": "Which of the following correctly defines a type alias?",
          "options": [
            { "id": "s4o34h4i5j6k7l8m9n0o1p2q", "option": "a", "text": "type User = { name: string; age: number; }", "correct": true, "selected": false },
            { "id": "s4o35i5j6k7l8m9n0o1p2q3r", "option": "b", "text": "type User { name: string; age: number; }", "correct": false, "selected": false },
            { "id": "s4o36j6k7l8m9n0o1p2q3r4s", "option": "c", "text": "interface User = { name: string; age: number; }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q13m4n5o6p7q8r9s0t1u2v",
          "title": "keyof with typeof",
          "question": "const settings = { theme: 'dark', language: 'en' };\ntype SettingsKeys = keyof typeof settings;\nWhat type does SettingsKeys represent?",
          "options": [
            { "id": "s4o37k7l8m9n0o1p2q3r4s5t", "option": "a", "text": "'theme' | 'language'", "correct": true, "selected": false },
            { "id": "s4o38l8m9n0o1p2q3r4s5t6u", "option": "b", "text": "string", "correct": false, "selected": false },
            { "id": "s4o39m9n0o1p2q3r4s5t6u7v", "option": "c", "text": "'dark' | 'en'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q14n5o6p7q8r9s0t1u2v3w",
          "title": "Type Predicate with Unknown",
          "question": "function isNumber(value: unknown): value is number {\n  return typeof value === 'number';\n}\nlet data: unknown = 42;\nif (isNumber(data)) {\n  console.log(data.toFixed(2));\n}\nWhy does this code work?",
          "options": [
            { "id": "s4o40n0o1p2q3r4s5t6u7v8w", "option": "a", "text": "Because unknown can be used without type checking", "correct": false, "selected": false },
            { "id": "s4o41o1p2q3r4s5t6u7v8w9x", "option": "b", "text": "Because isNumber narrows data to number", "correct": true, "selected": false },
            { "id": "s4o42p2q3r4s5t6u7v8w9x0y", "option": "c", "text": "Because toFixed works on any type", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s4q16p7q8r9s0t1u2v3w4x5y",
          "title": "readonly Array",
          "question": "const numbers: readonly number[] = [1, 2, 3];\nnumbers.push(4);\nWhat happens?",
          "options": [
            { "id": "s4o46t6u7v8w9x0y1z2a3b4c", "option": "a", "text": "It works and 4 is added", "correct": false, "selected": false },
            { "id": "s4o47u7v8w9x0y1z2a3b4c5d", "option": "b", "text": "It creates a new array", "correct": false, "selected": false },
            { "id": "s4o48v8w9x0y1z2a3b4c5d6e", "option": "c", "text": "TypeScript shows an error because push is not allowed", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s4q17q8r9s0t1u2v3w4x5y6z",
          "title": "as const with Object",
          "question": "const config = { apiUrl: 'https://api.com', timeout: 5000 } as const;\nWhat type does TypeScript infer for config?",
          "options": [
            { "id": "s4o49w9x0y1z2a3b4c5d6e7f", "option": "a", "text": "{ apiUrl: string; timeout: number; }", "correct": false, "selected": false },
            { "id": "s4o50x0y1z2a3b4c5d6e7f8g", "option": "b", "text": "any", "correct": false, "selected": false },
            { "id": "s4o51y1z2a3b4c5d6e7f8g9h", "option": "c", "text": "{ readonly apiUrl: 'https://api.com'; readonly timeout: 5000; }", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s4q18r9s0t1u2v3w4x5y6z7a",
          "title": "What Types Can Do",
          "question": "Which of the following can types do that interfaces cannot?",
          "options": [
            { "id": "s4o52z2a3b4c5d6e7f8g9h0i", "option": "a", "text": "Create unions and tuples", "correct": true, "selected": false },
            { "id": "s4o53a3b4c5d6e7f8g9h0i1j", "option": "b", "text": "Extend other interfaces", "correct": false, "selected": false },
            { "id": "s4o54b4c5d6e7f8g9h0i1j2k", "option": "c", "text": "Automatically merge declarations", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q19s0t1u2v3w4x5y6z7a8b",
          "title": "typeof with Function",
          "question": "function greet(name: string): string {\n  return 'Hello ' + name;\n}\ntype GreetType = typeof greet;\nWhat type does GreetType represent?",
          "options": [
            { "id": "s4o55c5d6e7f8g9h0i1j2k3l", "option": "a", "text": "(name: string) => string", "correct": true, "selected": false },
            { "id": "s4o56d6e7f8g9h0i1j2k3l4m", "option": "b", "text": "Function", "correct": false, "selected": false },
            { "id": "s4o57e7f8g9h0i1j2k3l4m5n", "option": "c", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q22v3w4x5y6z7a8b9c0d1e",
          "title": "as const with String",
          "question": "const greeting = 'hello' as const;\nWhat type does TypeScript infer for greeting?",
          "options": [
            { "id": "s4o64l4m5n6o7p8q9r0s1t2u", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "s4o65m5n6o7p8q9r0s1t2u3v", "option": "b", "text": "'hello'", "correct": true, "selected": false },
            { "id": "s4o66n6o7p8q9r0s1t2u3v4w", "option": "c", "text": "any", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s4q23w4x5y6z7a8b9c0d1e2f",
          "title": "Interface with Array",
          "question": "interface Product {\n  id: number;\n  name: string;\n}\nlet products: Product[] = [{ id: 1, name: 'Laptop' }];\nWhat does Product[] mean?",
          "options": [
            { "id": "s4o67o7p8q9r0s1t2u3v4w5x", "option": "a", "text": "An array of Product objects", "correct": true, "selected": false },
            { "id": "s4o68p8q9r0s1t2u3v4w5x6y", "option": "b", "text": "A single Product object", "correct": false, "selected": false },
            { "id": "s4o69q9r0s1t2u3v4w5x6y7z", "option": "c", "text": "A string array", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q25y6z7a8b9c0d1e2f3g4h",
          "title": "keyof with Optional Properties",
          "question": "interface Config {\n  url: string;\n  timeout?: number;\n  retries?: number;\n}\ntype ConfigKeys = keyof Config;\nWhat type does ConfigKeys represent?",
          "options": [
            { "id": "s4o73u3v4w5x6y7z8a9b0c1d", "option": "a", "text": "'url' | 'timeout' | 'retries'", "correct": true, "selected": false },
            { "id": "s4o74v4w5x6y7z8a9b0c1d2e", "option": "b", "text": "'timeout' | 'retries'", "correct": false, "selected": false },
            { "id": "s4o75w5x6y7z8a9b0c1d2e3f", "option": "c", "text": "'url'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s4q28b9c0d1e2f3g4h5i6j7k",
          "title": "keyof with Interface",
          "question": "interface Animal {\n  name: string;\n  age: number;\n  sound(): void;\n}\ntype AnimalKeys = keyof Animal;\nWhat type does AnimalKeys represent?",
          "options": [
            { "id": "s4o82d2e3f4g5h6i7j8k9l0m", "option": "a", "text": "'name' | 'age'", "correct": false, "selected": false },
            { "id": "s4o83e3f4g5h6i7j8k9l0m1n", "option": "b", "text": "'name' | 'age' | 'sound'", "correct": true, "selected": false },
            { "id": "s4o84f4g5h6i7j8k9l0m1n2o", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s4q29c0d1e2f3g4h5i6j7k8l",
          "title": "Type Predicate vs Type Guard",
          "question": "What is the difference between a type predicate and a type guard?",
          "options": [
            { "id": "s4o85g5h6i7j8k9l0m1n2o3p", "option": "a", "text": "A type guard uses 'is', a type predicate uses 'typeof'", "correct": false, "selected": false },
            { "id": "s4o86h6i7j8k9l0m1n2o3p4q", "option": "b", "text": "They are exactly the same", "correct": false, "selected": false },
            { "id": "s4o87i7j8k9l0m1n2o3p4q5r", "option": "c", "text": "A type predicate uses 'is' and narrows types, a type guard uses 'typeof' or 'in'", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s4q30d1e2f3g4h5i6j7k8l9m",
          "title": "Interface vs Type - Incompatible Properties",
          "question": "type C = { x: string } & { x: number };\nWhat happens to the x property?",
          "options": [
            { "id": "s4o88j8k9l0m1n2o3p4q5r6s", "option": "a", "text": "It becomes number", "correct": false, "selected": false },
            { "id": "s4o89k9l0m1n2o3p4q5r6s7t", "option": "b", "text": "It becomes string", "correct": false, "selected": false },
            { "id": "s4o90l0m1n2o3p4q5r6s7t8u", "option": "c", "text": "It becomes never (impossible type)", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "s4t01a2b3c4d5e6f7g8h9i0j",
          "title": "Create an Interface for Book",
          "description": "Create a variable called %book%. It should have %title% (string), %author% (string), %pages% (number), and an optional %genre% (string). Use an interface to define the shape.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Book {\n  title: string;\n  author: string;\n  pages: number;\n  genre?: string;\n}\nconst book: Book = {\n  title: 'TypeScript Guide',\n  author: 'Mike',\n  pages: 200\n};",
          "done": false
        },
        {
          "id": "s4t02b3c4d5e6f7g8h9i0j1k",
          "title": "Extract Type from Object",
          "description": "Create a variable called %settings% with properties %theme% (string) and %language% (string). Use %typeof% to create a type from this variable. Then create another variable called %userSettings% with the same shape.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const settings = { theme: 'dark', language: 'en' };\ntype Settings = typeof settings;\nconst userSettings: Settings = { theme: 'light', language: 'es' };",
          "done": false
        },
        {
          "id": "s4t03c4d5e6f7g8h9i0j1k2l",
          "title": "Extract Keys from Interface",
          "description": "Create an interface called %Movie% with %title% (string), %year% (number), and %rating% (number). Then create a type that represents all the keys of the Movie interface.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Movie {\n  title: string;\n  year: number;\n  rating: number;\n}\ntype MovieKeys = keyof Movie;",
          "done": false
        },
        {
          "id": "s4t05e6f7g8h9i0j1k2l3m4n",
          "title": "Create a Readonly Interface",
          "description": "Create an interface called %Car% with %id% (readonly number), %brand% (string), and %year% (number). Then create a car object and try to change the id to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Car {\n  readonly id: number;\n  brand: string;\n  year: number;\n}\nconst car: Car = { id: 1, brand: 'Toyota', year: 2022 };\n// car.id = 2; // Error: Cannot assign to 'id' because it is a read-only property",
          "done": false
        },
        {
          "id": "s4t06f7g8h9i0j1k2l3m4n5o",
          "title": "Create a Type Alias for Union",
          "description": "Create a variable called %status%. It should only allow three possible values: %'pending'%, %'approved'%, or %'rejected'%. Figure out how to restrict it to only these three values.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Status = 'pending' | 'approved' | 'rejected';\nconst status: Status = 'pending';",
          "done": false
        },
        {
          "id": "s4t07g8h9i0j1k2l3m4n5o6p",
          "title": "Type Assertion with Unknown",
          "description": "Create a variable called %data% with type %unknown% and assign it a string value. Then use type assertion to tell TypeScript it's a string. Finally, log its length.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "let data: unknown = 'TypeScript';\nconst str = data as string;\nconsole.log(str.length);",
          "done": false
        },
        {
          "id": "s4t08h9i0j1k2l3m4n5o6p7q",
          "title": "Create a Readonly Array with as const",
          "description": "Create an array called %directions% with values %'up'%, %'down'%, %'left'%, and %'right'%. Use %as const% to make it readonly with literal types. Then try to push a new value to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const directions = ['up', 'down', 'left', 'right'] as const;\n// directions.push('diagonal'); // Error: Property 'push' does not exist on type",
          "done": false
        },
        {
          "id": "s4t09i0j1k2l3m4n5o6p7q8r",
          "title": "Extract Type from Function",
          "description": "Create a function called %multiply% that takes two numbers and returns their product. Use %typeof% to extract its type into a type alias. Then create another function %divide% that has the same type.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function multiply(a: number, b: number): number {\n  return a * b;\n}\ntype MathFn = typeof multiply;\nconst divide: MathFn = (a, b) => a / b;",
          "done": false
        },
        {
          "id": "s4t10j1k2l3m4n5o6p7q8r9s",
          "title": "Create a Product Interface with Merging",
          "description": "Create a variable called %product%. It should have %id% (number), %name% (string), and %price% (number). First, declare an interface with %id% and %name%. Then declare the same interface again with %price% to demonstrate interface merging. Finally, create the product object.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Product {\n  id: number;\n  name: string;\n}\ninterface Product {\n  price: number;\n}\nconst product: Product = {\n  id: 1,\n  name: 'Laptop',\n  price: 999\n};",
          "done": false
        }
      ]
    },
    {
      "id": "z52344i7solwwyst5v8cay",
      "type": "title",
      "title": "Section 5: ",
      "videoID": "414234",
      "questionsTotal": 0,
      "tasksTotal": 0,
      "totalCorrect": 0,
      "totalFalse": 0,
      "totalTasksDone": 0,
      "section": 5,
      "sectionExercisesIndex": "13-24",
      "questions": [
      ],
      "tasks": [
      ]
    },
    {
      "id": "ls1i2t3e4r5a6l7s8t9r0i",
      "title": "Literal String Merging",
      "videoID": "41",
      "section": 5,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "lsq1a2b3c4d5e6f7g8h9i0j",
          "title": "Literal String Merging",
          "question": "What does merging literal strings mean in TypeScript?",
          "options": [
            { "id": "lso1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "Combining two literal strings into one type", "correct": false, "selected": false },
            { "id": "lso2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "Creating a new string by concatenating literals", "correct": false, "selected": false },
            { "id": "lso3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "Combining string literal types into a union", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "lsq2b3c4d5e6f7g8h9i0j1k",
          "title": "Union of Literal Strings",
          "question": "type Color = 'red' | 'green' | 'blue';\ntype Primary = 'red' | 'blue';\ntype Merged = Color | Primary;\nWhat type does Merged represent?",
          "options": [
            { "id": "lso5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "'red' | 'green' | 'blue'", "correct": true, "selected": false },
            { "id": "lso6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "'red' | 'blue'", "correct": false, "selected": false },
            { "id": "lso7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "lsq3c4d5e6f7g8h9i0j1k2l",
          "title": "Merging with Template Literals",
          "question": "type Prefix = 'get' | 'set';\ntype Suffix = 'User' | 'Product';\ntype MethodName = `${Prefix}${Suffix}`;\nWhat type does MethodName represent?",
          "options": [
            { "id": "lso9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "'getUser' | 'getProduct' | 'setUser' | 'setProduct'", "correct": true, "selected": false },
            { "id": "lso0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "'get' | 'set' | 'User' | 'Product'", "correct": false, "selected": false },
            { "id": "lso1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "lsq4d5e6f7g8h9i0j1k2l3m",
          "title": "Union Type Merging",
          "question": "type Status = 'pending' | 'approved' | 'rejected';\ntype ExtendedStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';\ntype MergedStatus = Status | ExtendedStatus;\nWhat type does MergedStatus represent?",
          "options": [
            { "id": "lso3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "'pending' | 'approved' | 'rejected'", "correct": false, "selected": false },
            { "id": "lso4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "'pending' | 'approved' | 'rejected' | 'cancelled'", "correct": true, "selected": false },
            { "id": "lso5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "lsq6f7g8h9i0j1k2l3m4n5o",
          "title": "Merging with Intersection",
          "question": "type A = 'a' | 'b' | 'c';\ntype B = 'b' | 'c' | 'd';\ntype C = A & B;\nWhat type does C represent?",
          "options": [
            { "id": "lso1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "'a' | 'b' | 'c' | 'd'", "correct": false, "selected": false },
            { "id": "lso2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "'b' | 'c'", "correct": true, "selected": false },
            { "id": "lso3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "never", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "lsq7g8h9i0j1k2l3m4n5o6p",
          "title": "Merging Literal Strings",
          "question": "type A = 'hello' | 'world';\ntype B = 'world' | '!';\ntype C = A | B;\nWhat type does C represent?",
          "options": [
            { "id": "lso5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "'hello' | 'world'", "correct": false, "selected": false },
            { "id": "lso6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "'world' | '!'", "correct": false, "selected": false },
            { "id": "lso7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "'hello' | 'world' | '!'", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "lsq8h9i0j1k2l3m4n5o6p7q",
          "title": "Template Literal with Multiple Suffixes",
          "question": "type Prefix = 'get';\ntype Suffix = 'User' | 'Product' | 'Order';\ntype Method = `${Prefix}${Suffix}`;\nWhat type does Method represent?",
          "options": [
            { "id": "lso9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "'getUser' | 'getProduct'", "correct": false, "selected": false },
            { "id": "lso0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "'getUser' | 'getProduct' | 'getOrder'", "correct": true, "selected": false },
            { "id": "lso1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "lsq9i0j1k2l3m4n5o6p7q8r",
          "title": "Merging with Never",
          "question": "type A = 'a' | 'b';\ntype B = 'c' | 'd';\ntype C = A & B;\nWhat type does C represent?",
          "options": [
            { "id": "lso3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "'a' | 'b' | 'c' | 'd'", "correct": false, "selected": false },
            { "id": "lso4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "'a' | 'b'", "correct": false, "selected": false },
            { "id": "lso5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "never", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "lsq0j1k2l3m4n5o6p7q8r9s",
          "title": "Merging with Similar Types",
          "question": "type A = 'a' | 'b' | 'c';\ntype B = 'a' | 'b';\ntype C = A & B;\nWhat type does C represent?",
          "options": [
            { "id": "lso7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "'a' | 'b' | 'c'", "correct": false, "selected": false },
            { "id": "lso8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "'a' | 'b'", "correct": true, "selected": false },
            { "id": "lso9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "'c'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "lst1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Type by Merging Literal Strings",
          "description": "Create two types: %Color% with values %'red'%, %'green'%, and %'blue'%, and %SecondaryColor% with values %'yellow'%, %'purple'%, and %'green'%. Then create a type %AllColors% that merges both types.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Color = 'red' | 'green' | 'blue';\ntype SecondaryColor = 'yellow' | 'purple' | 'green';\ntype AllColors = Color | SecondaryColor;",
          "done": false
        },
        {
          "id": "lst2b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Template Literal Type",
          "description": "Create a type %Endpoint% by combining %Method% ('get' | 'post' | 'put' | 'delete') and %Path% ('/users' | '/posts' | '/comments'). Use template literal syntax.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Method = 'get' | 'post' | 'put' | 'delete';\ntype Path = '/users' | '/posts' | '/comments';\ntype Endpoint = `${Method}${Path}`;",
          "done": false
        }
      ]
    },
    {
      "id": "nt1u2p3l4e5s6e7c8t9i0o",
      "title": "Named Tuples",
      "videoID": "42",
      "section": 5,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "ntq2b3c4d5e6f7g8h9i0j1k",
          "title": "Named Tuple Syntax",
          "question": "Which of the following correctly defines a named tuple?",
          "options": [
            { "id": "nto5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "type User = [name: string, age: number];", "correct": true, "selected": false },
            { "id": "nto6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "type User = { name: string; age: number; };", "correct": false, "selected": false },
            { "id": "nto7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "type User = (name: string, age: number);", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ntq3c4d5e6f7g8h9i0j1k2l",
          "title": "Named Tuple Usage",
          "question": "type Point = [x: number, y: number];\nconst point: Point = [10, 20];\nHow do you access the x value?",
          "options": [
            { "id": "nto9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "point.x", "correct": false, "selected": false },
            { "id": "nto0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "point[0]", "correct": true, "selected": false },
            { "id": "nto1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "point['x']", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "ntq4d5e6f7g8h9i0j1k2l3m",
          "title": "Named Tuple Labels",
          "question": "type Person = [firstName: string, lastName: string, age: number];\nWhat are the labels in this tuple?",
          "options": [
            { "id": "nto3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "'firstName', 'lastName', 'age'", "correct": true, "selected": false },
            { "id": "nto4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "0, 1, 2", "correct": false, "selected": false },
            { "id": "nto5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "string, string, number", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ntq5e6f7g8h9i0j1k2l3m4n",
          "title": "Named Tuple with Optional Elements",
          "question": "type Config = [url: string, timeout?: number, retries?: number];\nWhich of the following is valid?",
          "options": [
            { "id": "nto7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "['https://api.com']", "correct": false, "selected": false },
            { "id": "nto8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "['https://api.com', 5000]", "correct": false, "selected": false },
            { "id": "nto9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "All of the above", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "ntq6f7g8h9i0j1k2l3m4n5o",
          "title": "Named Tuple vs Object",
          "question": "What is the main difference between a named tuple and an object?",
          "options": [
            { "id": "nto1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "Named tuples are arrays with labels, objects have named properties", "correct": true, "selected": false },
            { "id": "nto2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "They are exactly the same", "correct": false, "selected": false },
            { "id": "nto3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "Named tuples can only hold strings", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ntq7g8h9i0j1k2l3m4n5o6p",
          "title": "Named Tuple with Rest Elements",
          "question": "type StringTuple = [first: string, ...rest: string[]];\nWhat does this tuple allow?",
          "options": [
            { "id": "nto5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "At least one string, followed by any number of strings", "correct": true, "selected": false },
            { "id": "nto6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "Exactly two strings", "correct": false, "selected": false },
            { "id": "nto7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "Only one string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ntq8h9i0j1k2l3m4n5o6p7q",
          "title": "Named Tuple with Different Types",
          "question": "type Response = [status: number, data: string | null, error?: string];\nconst res: Response = [200, 'Success'];\nWhat is the type of res[1]?",
          "options": [
            { "id": "nto9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "string | null", "correct": true, "selected": false },
            { "id": "nto0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "nto1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ntq9i0j1k2l3m4n5o6p7q8r",
          "title": "Named Tuple Benefits",
          "question": "What is the benefit of using named tuples over regular tuples?",
          "options": [
            { "id": "nto3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "They make code more readable with descriptive labels", "correct": true, "selected": false },
            { "id": "nto4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "They are faster than regular tuples", "correct": false, "selected": false },
            { "id": "nto5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "They can hold more elements", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "ntq0j1k2l3m4n5o6p7q8r9s",
          "title": "Named Tuple with Optional Label",
          "question": "type Mixed = [string, age?: number, name?: string];\nIs this a valid named tuple?",
          "options": [
            { "id": "nto7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "No, because the first element doesn't have a label", "correct": false, "selected": false },
            { "id": "nto8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "Yes, labels are optional for each element", "correct": true, "selected": false },
            { "id": "nto9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "No, because labels must be on all elements", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "ntt1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Named Tuple",
          "description": "Create a type called %Employee% that is a named tuple with %id% (number), %name% (string), and %department% (string). Then create an employee tuple.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Employee = [id: number, name: string, department: string];\nconst employee: Employee = [1, 'Mike', 'Engineering'];",
          "done": false
        },
        {
          "id": "ntt2b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Named Tuple with Optional Elements",
          "description": "Create a type called %ApiResponse% that is a named tuple with %status% (number), %data% (string), and an optional %error% (string). Then create two responses: one with and one without the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type ApiResponse = [status: number, data: string, error?: string];\nconst success: ApiResponse = [200, 'Success'];\nconst failure: ApiResponse = [404, 'Not Found', 'Resource missing'];",
          "done": false
        }
      ]
    },
    {
      "id": "is1n2d3e4x5s6i7g8n9a0t",
      "title": "Index Signatures",
      "videoID": "43",
      "section": 5,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "isq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is an Index Signature",
          "question": "What does an index signature do in TypeScript?",
          "options": [
            { "id": "iso1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "It creates a new type alias", "correct": false, "selected": false },
            { "id": "iso2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "It allows objects to have dynamic property names", "correct": true, "selected": false },
            { "id": "iso3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "It makes all properties readonly", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "isq2b3c4d5e6f7g8h9i0j1k",
          "title": "Index Signature Syntax",
          "question": "Which of the following correctly defines an index signature?",
          "options": [
            { "id": "iso5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "interface Dict { [key: string]: string; }", "correct": true, "selected": false },
            { "id": "iso6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "interface Dict { key: string; }", "correct": false, "selected": false },
            { "id": "iso7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "interface Dict { [string]: string; }", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "isq3c4d5e6f7g8h9i0j1k2l",
          "title": "Dynamic Properties",
          "question": "interface Settings {\n  [key: string]: boolean;\n}\nconst settings: Settings = { theme: true, notifications: false };\nIs this valid?",
          "options": [
            { "id": "iso9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "No, because theme is not a valid key", "correct": false, "selected": false },
            { "id": "iso0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "No, because index signatures only work with number keys", "correct": false, "selected": false },
            { "id": "iso1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "Yes, any string key with boolean value is allowed", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "isq4d5e6f7g8h9i0j1k2l3m",
          "title": "Index Signature with Mixed Types",
          "question": "interface Config {\n  appName: string;\n  [key: string]: string | number;\n}\nconst config: Config = { appName: 'MyApp', version: 1.0 };\nIs this valid?",
          "options": [
            { "id": "iso3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "Yes, appName matches string and version matches string | number", "correct": true, "selected": false },
            { "id": "iso4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "No, because version should be a string", "correct": false, "selected": false },
            { "id": "iso5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "No, because appName doesn't match the index signature", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "isq5e6f7g8h9i0j1k2l3m4n",
          "title": "Index Signature with Specific Properties",
          "question": "interface User {\n  id: number;\n  name: string;\n  [key: string]: string | number;\n}\nconst user: User = { id: 1, name: 'Mike', age: 23 };\nIs this valid?",
          "options": [
            { "id": "iso7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "No, because index signature must be the last property", "correct": false, "selected": false },
            { "id": "iso8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "Yes, id and name match, age is allowed by index signature", "correct": true, "selected": false },
            { "id": "iso9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "No, because age is not a defined property", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "isq6f7g8h9i0j1k2l3m4n5o",
          "title": "Readonly Index Signature",
          "question": "interface Dictionary {\n  readonly [key: string]: string;\n}\nconst dict: Dictionary = { greeting: 'Hello' };\ndict.greeting = 'Hi';\nWhat happens?",
          "options": [
            { "id": "iso1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "It works fine and greeting becomes 'Hi'", "correct": false, "selected": false },
            { "id": "iso2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "It creates a new property", "correct": false, "selected": false },
            { "id": "iso3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "TypeScript shows an error because the index signature is readonly", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "isq7g8h9i0j1k2l3m4n5o6p",
          "title": "Index Signature with Number Keys",
          "question": "interface NumberDict {\n  [key: number]: string;\n}\nconst dict: NumberDict = { 1: 'one', 2: 'two' };\nIs this valid?",
          "options": [
            { "id": "iso5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "No, index signatures only work with string keys", "correct": false, "selected": false },
            { "id": "iso6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "No, because the values should be numbers", "correct": false, "selected": false },
            { "id": "iso7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "Yes, number keys with string values are allowed", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "isq8h9i0j1k2l3m4n5o6p7q",
          "title": "Index Signature with Union Values",
          "question": "interface Cache {\n  [key: string]: string | number | boolean;\n}\nconst cache: Cache = { user: 'Mike', count: 10, isActive: true };\nIs this valid?",
          "options": [
            { "id": "iso9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "Yes, all values match the union type", "correct": true, "selected": false },
            { "id": "iso0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "No, because boolean is not allowed", "correct": false, "selected": false },
            { "id": "iso1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "No, because all values must be the same type", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "isq0j1k2l3m4n5o6p7q8r9s",
          "title": "Index Signature with Required Properties",
          "question": "interface Product {\n  id: number;\n  name: string;\n  [key: string]: string | number;\n}\nconst product: Product = { id: 1, name: 'Laptop' };\nIs this valid?",
          "options": [
            { "id": "iso7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "No, because index signature conflicts with id", "correct": false, "selected": false },
            { "id": "iso8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "No, because name must be a number", "correct": false, "selected": false },
            { "id": "iso9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "Yes, both required properties are present", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "ist1a2b3c4d5e6f7g8h9i0j",
          "title": "Create an Interface with Index Signature",
          "description": "Create an interface called %Translations% with an index signature that allows any string key with a string value. Then create a translations object with some key-value pairs.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Translations {\n  [key: string]: string;\n}\nconst translations: Translations = {\n  hello: 'Hola',\n  goodbye: 'Adios',\n  thankYou: 'Gracias'\n};",
          "done": false
        },
        {
          "id": "ist2b3c4d5e6f7g8h9i0j1k",
          "title": "Create an Interface with Index Signature and Specific Properties",
          "description": "Create an interface called %AppConfig% with specific properties %appName% (string) and %version% (number). Then add an index signature that allows any string key with string or number values. Create a config object.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface AppConfig {\n  appName: string;\n  version: number;\n  [key: string]: string | number;\n}\nconst config: AppConfig = {\n  appName: 'MyApp',\n  version: 1.0,\n  maxRetries: 3,\n  apiUrl: 'https://api.com'\n};",
          "done": false
        }
      ]
    },
    {
      "id": "br1a2n3d4e5d6t7y8p9e0s",
      "title": "Branded Types",
      "videoID": "44",
      "section": 5,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "brq1a2b3c4d5e6f7g8h9i0j",
          "title": "What are Branded Types",
          "question": "What is a branded type in TypeScript?",
          "options": [
            { "id": "bro1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "A type that creates a new primitive", "correct": false, "selected": false },
            { "id": "bro2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "A type that only works with strings", "correct": false, "selected": false },
            { "id": "bro3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "A type that adds a unique brand to distinguish similar types", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "brq2b3c4d5e6f7g8h9i0j1k",
          "title": "Branded Type Syntax",
          "question": "Which of the following correctly defines a branded type?",
          "options": [
            { "id": "bro5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "type UserId = string & { __brand: 'UserId' };", "correct": true, "selected": false },
            { "id": "bro6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "type UserId = string;", "correct": false, "selected": false },
            { "id": "bro7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "type UserId = { __brand: 'UserId' };", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "brq3c4d5e6f7g8h9i0j1k2l",
          "title": "Branded Type Purpose",
          "question": "Why would you use a branded type?",
          "options": [
            { "id": "bro9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "To make code run faster", "correct": false, "selected": false },
            { "id": "bro0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "To create new primitive types", "correct": false, "selected": false },
            { "id": "bro1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "To prevent mixing up values that have the same underlying type", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "brq4d5e6f7g8h9i0j1k2l3m",
          "title": "Branded Type with Functions",
          "question": "type UserId = string & { __brand: 'UserId' };\nfunction createUserId(id: string): UserId {\n  return id as UserId;\n}\nfunction getUser(id: UserId) {}\ngetUser('123');\nWhat happens?",
          "options": [
            { "id": "bro3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "It works fine because '123' is a string", "correct": false, "selected": false },
            { "id": "bro4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "It converts '123' to UserId automatically", "correct": false, "selected": false },
            { "id": "bro5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "TypeScript shows an error because '123' is not a UserId", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "brq5e6f7g8h9i0j1k2l3m4n",
          "title": "Branded Type with Different Brands",
          "question": "type UserId = string & { __brand: 'UserId' };\ntype ProductId = string & { __brand: 'ProductId' };\nconst userId: UserId = 'user-123' as UserId;\nconst productId: ProductId = 'product-456' as ProductId;\nuserId = productId;\nWhat happens?",
          "options": [
            { "id": "bro7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "It works because both are strings", "correct": false, "selected": false },
            { "id": "bro8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "It converts productId to UserId automatically", "correct": false, "selected": false },
            { "id": "bro9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "TypeScript shows an error because UserId and ProductId are different types", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "brq7g8h9i0j1k2l3m4n5o6p",
          "title": "Branded Type with Optional Brand",
          "question": "type Email = string & { __brand?: 'Email' };\nconst email: Email = 'test@email.com';\nIs this valid?",
          "options": [
            { "id": "bro5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "No, because the brand is required", "correct": false, "selected": false },
            { "id": "bro6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "No, because you must use 'as' to assign", "correct": false, "selected": false },
            { "id": "bro7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "Yes, because the brand is optional", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
      ],
      "tasks": [
        {
          "id": "brt1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Branded Type for User ID",
          "description": "Create a branded type called %UserId% that is a string with a brand %'UserId'%. Then create a function %createUserId% that takes a string and returns a %UserId%. Finally, try to assign a plain string to a %UserId% variable to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type UserId = string & { __brand: 'UserId' };\nfunction createUserId(id: string): UserId {\n  return id as UserId;\n}\nconst userId: UserId = createUserId('123');\n// const invalid: UserId = '456'; // Error: Type 'string' is not assignable to type 'UserId'",
          "done": false
        }
      ]
    },
    {
      "id": "sp1r2e3a4d5r6e7s8t9o0p",
      "title": "Spread and Rest",
      "videoID": "45",
      "section": 5,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "spq1a2b3c4d5e6f7g8h9i0j",
          "title": "Rest Parameters",
          "question": "function sum(...numbers: number[]) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3);\nWhat does the ...numbers parameter represent?",
          "options": [
            { "id": "spo1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "An array of all remaining arguments", "correct": true, "selected": false },
            { "id": "spo2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "A single number", "correct": false, "selected": false },
            { "id": "spo3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "A string value", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "spq2b3c4d5e6f7g8h9i0j1k",
          "title": "Rest Parameters Type Safety",
          "question": "function greet(name: string, ...messages: string[]) {}\ngreet('Alice', 'Hello', 'Hi', 123);\nWhat happens?",
          "options": [
            { "id": "spo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "It works because rest parameters can hold any type", "correct": false, "selected": false },
            { "id": "spo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "TypeScript shows an error because 123 is not a string", "correct": true, "selected": false },
            { "id": "spo7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "It converts 123 to a string automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "spq3c4d5e6f7g8h9i0j1k2l",
          "title": "Spread with Objects",
          "question": "const user = { id: 1, name: 'Alice' };\nconst details = { age: 25, city: 'NYC' };\nconst combined = { ...user, ...details };\nWhat properties does combined have?",
          "options": [
            { "id": "spo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "Only id and name", "correct": false, "selected": false },
            { "id": "spo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "id, name, age, and city", "correct": true, "selected": false },
            { "id": "spo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "Only age and city", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "spq4d5e6f7g8h9i0j1k2l3m",
          "title": "Spread Override",
          "question": "const defaults = { theme: 'dark', notifications: true };\nconst prefs = { theme: 'light' };\nconst settings = { ...defaults, ...prefs };\nWhat is settings.theme?",
          "options": [
            { "id": "spo3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "'dark'", "correct": false, "selected": false },
            { "id": "spo4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "'light'", "correct": true, "selected": false },
            { "id": "spo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "spq5e6f7g8h9i0j1k2l3m4n",
          "title": "Rest with Tuple",
          "question": "type Combined = [...string[], number];\nconst data: Combined = ['a', 'b', 'c', 42];\nWhat does this tuple allow?",
          "options": [
            { "id": "spo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "Any number of strings followed by a number", "correct": true, "selected": false },
            { "id": "spo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "Exactly three strings and a number", "correct": false, "selected": false },
            { "id": "spo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "Only strings", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "spq6f7g8h9i0j1k2l3m4n5o",
          "title": "Spread with Array",
          "question": "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nWhat does combined equal?",
          "options": [
            { "id": "spo1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "[1, 2, 3, 4, 5, 6]", "correct": true, "selected": false },
            { "id": "spo2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "[4, 5, 6, 1, 2, 3]", "correct": false, "selected": false },
            { "id": "spo3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "[1, 2, 3]", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "spq7g8h9i0j1k2l3m4n5o6p",
          "title": "Spread with Override Order",
          "question": "const base = { a: 1, b: 2 };\nconst override = { b: 3, c: 4 };\nconst result = { ...base, ...override };\nWhat is result?",
          "options": [
            { "id": "spo5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "{ a: 1, b: 2, c: 4 }", "correct": false, "selected": false },
            { "id": "spo6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "{ a: 1, b: 3, c: 4 }", "correct": true, "selected": false },
            { "id": "spo7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "{ a: 1, c: 4 }", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "spq8h9i0j1k2l3m4n5o6p7q",
          "title": "Rest Parameters with Type",
          "question": "function log(message: string, ...args: (string | number)[]) {}\nlog('Error', 404, 'Not Found', true);\nWhat happens?",
          "options": [
            { "id": "spo9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "It works because true is allowed", "correct": false, "selected": false },
            { "id": "spo0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "TypeScript shows an error because true is not a string or number", "correct": true, "selected": false },
            { "id": "spo1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "It converts true to a string", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "spq0j1k2l3m4n5o6p7q8r9s",
          "title": "Rest with Mixed Types",
          "question": "function process(name: string, ...scores: number[]) {}\nprocess('Alice', 90, 85, '92');\nWhat happens?",
          "options": [
            { "id": "spo7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "It works because rest parameters can hold any type", "correct": false, "selected": false },
            { "id": "spo8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "It converts '92' to a number", "correct": false, "selected": false },
            { "id": "spo9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "TypeScript shows an error because '92' is not a number", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "spt5e6f7g8h9i0j1k2l3m4n",
          "title": "Combine Arrays with Spread",
          "description": "Create two arrays: %fruits% with values %'apple'%, %'banana'%, and %'orange'%, and %vegetables% with values %'carrot'%, %'broccoli'%, and %'spinach'%. Use spread to combine them into a single array called %groceries%.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "const fruits = ['apple', 'banana', 'orange'];\nconst vegetables = ['carrot', 'broccoli', 'spinach'];\nconst groceries = [...fruits, ...vegetables];",
          "done": false
        },
        {
          "id": "spt6f7g8h9i0j1k2l3m4n5o",
          "title": "Function with Rest Parameters for Sum",
          "description": "Create a function called %addAll% that takes any number of numbers and returns their total sum. Call it with different amounts of numbers.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function addAll(...numbers: number[]): number {\n  return numbers.reduce((total, num) => total + num, 0);\n}\naddAll(1, 2, 3); // 6\naddAll(10, 20, 30, 40); // 100",
          "done": false
        }
      ]
    },
    {
      "id": "du1n2i3o4n5s6e7c8t9i0o",
      "title": "Discriminated Unions",
      "videoID": "46",
      "section": 5,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "duq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is a Discriminated Union",
          "question": "What is a discriminated union in TypeScript?",
          "options": [
            { "id": "duo2b3c4d5e6f7g8h9i0j1k", "option": "a", "text": "A type that combines two interfaces", "correct": false, "selected": false },
            { "id": "duo3c4d5e6f7g8h9i0j1k2l", "option": "b", "text": "A type that only works with strings", "correct": false, "selected": false },
            { "id": "duo1a2b3c4d5e6f7g8h9i0j", "option": "c", "text": "A union type with a common property to distinguish between types", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "duq2b3c4d5e6f7g8h9i0j1k",
          "title": "Discriminated Union Syntax",
          "question": "Which of the following is a discriminated union?",
          "options": [
            { "id": "duo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "type Shape = { kind: 'circle'; radius: number } | { kind: 'square'; side: number };", "correct": true, "selected": false },
            { "id": "duo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "type Shape = { kind: string; radius: number; side: number };", "correct": false, "selected": false },
            { "id": "duo7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "type Shape = { radius: number } | { side: number };", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "duq3c4d5e6f7g8h9i0j1k2l",
          "title": "Discriminated Union Discriminator",
          "question": "type Result = \n  | { status: 'success'; data: string }\n  | { status: 'error'; error: string };\nfunction handle(result: Result) {\n  if (result.status === 'success') {\n    console.log(result.data);\n  }\n}\nWhat is the discriminator property in this union?",
          "options": [
            { "id": "duo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "data", "correct": false, "selected": false },
            { "id": "duo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "status", "correct": true, "selected": false },
            { "id": "duo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "duq4d5e6f7g8h9i0j1k2l3m",
          "title": "Discriminated Union with Type Narrowing",
          "question": "type Response = \n  | { type: 'success'; value: number }\n  | { type: 'failure'; reason: string };\nfunction process(res: Response) {\n  if (res.type === 'success') {\n    console.log(res.value * 2);\n  }\n}\nWhat does TypeScript know inside the if block?",
          "options": [
            { "id": "duo3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "res is the 'success' type and has a value property", "correct": true, "selected": false },
            { "id": "duo4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "res is the 'failure' type", "correct": false, "selected": false },
            { "id": "duo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "res could be either type", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "duq5e6f7g8h9i0j1k2l3m4n",
          "title": "Discriminated Union with Switch",
          "question": "type Status = \n  | { state: 'loading' }\n  | { state: 'success'; data: string[] }\n  | { state: 'error'; error: string };\nfunction render(status: Status) {\n  switch (status.state) {\n    case 'loading':\n      return 'Loading...';\n    case 'success':\n      return status.data;\n    case 'error':\n      return status.error;\n  }\n}\nWhat does the switch statement do?",
          "options": [
            { "id": "duo8r9s0t1u2v3w4x5y6z7a", "option": "a", "text": "It converts the union to an object", "correct": false, "selected": false },
            { "id": "duo9s0t1u2v3w4x5y6z7a8b", "option": "b", "text": "It creates a new union type", "correct": false, "selected": false },
            { "id": "duo7q8r9s0t1u2v3w4x5y6z", "option": "c", "text": "It narrows the type based on the state property", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "duq6f7g8h9i0j1k2l3m4n5o",
          "title": "Discriminated Union Benefits",
          "question": "What is the main benefit of using discriminated unions?",
          "options": [
            { "id": "duo1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "They allow TypeScript to automatically narrow types", "correct": true, "selected": false },
            { "id": "duo2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "They make code run faster", "correct": false, "selected": false },
            { "id": "duo3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "They create new primitive types", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
      ],
      "tasks": [
        {
          "id": "dut1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Discriminated Union for API Response",
          "description": "Create a type called %ApiResponse% that is a discriminated union with %status% as the discriminator. It should have %'success'% with %data% (string) and %'error'% with %message% (string). Then create a function that handles both cases.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type ApiResponse = \n  | { status: 'success'; data: string }\n  | { status: 'error'; message: string };\nfunction handleResponse(response: ApiResponse) {\n  if (response.status === 'success') {\n    console.log('Data:', response.data);\n  } else {\n    console.log('Error:', response.message);\n  }\n}\nhandleResponse({ status: 'success', data: 'Hello' });\nhandleResponse({ status: 'error', message: 'Something went wrong' });",
          "done": false
        },
        {
          "id": "dut2b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Discriminated Union for Shape",
          "description": "Create a type called %Shape% that is a discriminated union with %kind% as the discriminator. It should have %'circle'% with %radius% (number) and %'rectangle'% with %width% and %height% (both numbers). Create a function that calculates area for both shapes.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Shape = \n  | { kind: 'circle'; radius: number }\n  | { kind: 'rectangle'; width: number; height: number };\nfunction getArea(shape: Shape): number {\n  if (shape.kind === 'circle') {\n    return Math.PI * shape.radius ** 2;\n  } else {\n    return shape.width * shape.height;\n  }\n}\ngetArea({ kind: 'circle', radius: 5 });\ngetArea({ kind: 'rectangle', width: 4, height: 6 });",
          "done": false
        }
      ]
    },
    {
      "id": "fo1v2e3r4l5o6a7d8s9t0y",
      "title": "Function Overloads",
      "videoID": "47",
      "section": 5,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "foq1a2b3c4d5e6f7g8h9i0j",
          "title": "What are Function Overloads",
          "question": "What are function overloads in TypeScript?",
          "options": [
            { "id": "foo1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "Multiple function signatures with the same name but different parameters", "correct": true, "selected": false },
            { "id": "foo2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "A way to create multiple functions with different names", "correct": false, "selected": false },
            { "id": "foo3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "A way to override functions in classes", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "foq3c4d5e6f7g8h9i0j1k2l",
          "title": "Function Overloads Example",
          "question": "function greet(name: string): string;\nfunction greet(name: string, age: number): string;\nfunction greet(name: string, age?: number): string {\n  if (age) {\n    return `Hello ${name}, you are ${age} years old`;\n  }\n  return `Hello ${name}`;\n}\ngreet('Alice');\ngreet('Bob', 25);\nHow many overload signatures does this function have?",
          "options": [
            { "id": "foo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "1", "correct": false, "selected": false },
            { "id": "foo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "2", "correct": true, "selected": false },
            { "id": "foo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "3", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "foq4d5e6f7g8h9i0j1k2l3m",
          "title": "Function Overloads Type Safety",
          "question": "function process(value: string): string;\nfunction process(value: number): number;\nfunction process(value: string | number): string | number {\n  if (typeof value === 'string') {\n    return value.toUpperCase();\n  }\n  return value * 2;\n}\nprocess('hello');\nWhat is the return type of process('hello')?",
          "options": [
            { "id": "foo4n5o6p7q8r9s0t1u2v3w", "option": "a", "text": "number", "correct": false, "selected": false },
            { "id": "foo5o6p7q8r9s0t1u2v3w4x", "option": "b", "text": "string | number", "correct": false, "selected": false },
            { "id": "foo3m4n5o6p7q8r9s0t1u2v", "option": "c", "text": "string", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "foq5e6f7g8h9i0j1k2l3m4n",
          "title": "Function Overloads with Different Return Types",
          "question": "function getValue(id: number): { id: number; name: string };\nfunction getValue(id: string): { id: string; label: string };\nfunction getValue(id: number | string): { id: number | string; name?: string; label?: string } {\n  if (typeof id === 'number') {\n    return { id, name: 'Item' };\n  }\n  return { id, label: 'Label' };\n}\nconst result = getValue(1);\nWhat property does result have?",
          "options": [
            { "id": "foo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "name", "correct": true, "selected": false },
            { "id": "foo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "label", "correct": false, "selected": false },
            { "id": "foo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "Both name and label", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "foq6f7g8h9i0j1k2l3m4n5o",
          "title": "Function Overloads with Optional Parameters",
          "question": "function log(message: string): void;\nfunction log(message: string, level: 'info' | 'error'): void;\nfunction log(message: string, level?: 'info' | 'error'): void {\n  console.log(level ? `[${level}] ${message}` : message);\n}\nlog('Hello');\nlog('Error!', 'error');\nHow many ways can you call this function?",
          "options": [
            { "id": "foo1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "1 way", "correct": false, "selected": false },
            { "id": "foo2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "2 ways", "correct": true, "selected": false },
            { "id": "foo3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "3 ways", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "foq7g8h9i0j1k2l3m4n5o6p",
          "title": "Function Overloads with Different Parameter Count",
          "question": "function format(value: string): string;\nfunction format(value: string, prefix: string): string;\nfunction format(value: string, prefix?: string): string {\n  return prefix ? `${prefix}: ${value}` : value;\n}\nformat('Hello');\nformat('World', 'Msg');\nWhat does format('Hello') return?",
          "options": [
            { "id": "foo5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "'Hello'", "correct": true, "selected": false },
            { "id": "foo6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "'Msg: Hello'", "correct": false, "selected": false },
            { "id": "foo7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
      ],
      "tasks": [
        {
          "id": "fot1a2b3c4d5e6f7g8h9i0j",
          "title": "Create Function Overloads for String/Number Conversion",
          "description": "Create a function called %parseValue% with two overloads: one that takes a string and returns a number, and another that takes a number and returns a string. Implement the function to convert between types.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function parseValue(value: string): number;\nfunction parseValue(value: number): string;\nfunction parseValue(value: string | number) {\n  if (typeof value === 'string') {\n    return Number(value);\n  }\n  return String(value);\n}\nparseValue('123'); // returns number\nparseValue(456); // returns string",
          "done": false
        },
      ]
    },
    {
      "id": "s5m1a2b3c4d5e6f7g8h9i0j",
      "title": "Section 5 Milestone - All Concepts",
      "videoID": "48",
      "section": 5,
      "done": false,
      "milestone": true,
      "inProgress": false,
      "questions": [
        {
          "id": "s5q01a2b3c4d5e6f7g8h9i0j",
          "title": "Literal String Merging",
          "question": "type Status = 'pending' | 'approved';\ntype Extended = 'approved' | 'rejected';\ntype Merged = Status | Extended;\nWhat type does Merged represent?",
          "options": [
            { "id": "s5o02b3c4d5e6f7g8h9i0j1k", "option": "a", "text": "'pending' | 'approved' | 'rejected'", "correct": true, "selected": false },
            { "id": "s5o03c4d5e6f7g8h9i0j1k2l", "option": "b", "text": "'approved' | 'rejected'", "correct": false, "selected": false },
            { "id": "s5o01a2b3c4d5e6f7g8h9i0j", "option": "c", "text": "'pending' | 'approved'", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s5q02b3c4d5e6f7g8h9i0j1k",
          "title": "Template Literal Merging",
          "question": "type Prefix = 'get' | 'set';\ntype Suffix = 'User' | 'Product';\ntype Method = `${Prefix}${Suffix}`;\nWhat type does Method represent?",
          "options": [
            { "id": "s5o05e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "'get' | 'set' | 'User' | 'Product'", "correct": false, "selected": false },
            { "id": "s5o04d5e6f7g8h9i0j1k2l3m", "option": "b", "text": "'getUser' | 'getProduct' | 'setUser' | 'setProduct'", "correct": true, "selected": false },
            { "id": "s5o06f7g8h9i0j1k2l3m4n5o", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s5q03c4d5e6f7g8h9i0j1k2l",
          "title": "Named Tuples",
          "question": "type Point = [x: number, y: number];\nconst point: Point = [10, 20];\nHow do you access the x value?",
          "options": [
            { "id": "s5o07g8h9i0j1k2l3m4n5o6p", "option": "a", "text": "point[0]", "correct": true, "selected": false },
            { "id": "s5o08h9i0j1k2l3m4n5o6p7q", "option": "b", "text": "point.x", "correct": false, "selected": false },
            { "id": "s5o09i0j1k2l3m4n5o6p7q8r", "option": "c", "text": "point['x']", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s5q04d5e6f7g8h9i0j1k2l3m",
          "title": "Named Tuples with Optional Elements",
          "question": "type Config = [url: string, timeout?: number];\nWhich of the following is valid?",
          "options": [
            { "id": "s5o10j0k1l2m3n4o5p6q7r8s", "option": "a", "text": "['https://api.com']", "correct": false, "selected": false },
            { "id": "s5o11k1l2m3n4o5p6q7r8s9t", "option": "b", "text": "['https://api.com', 5000]", "correct": false, "selected": false },
            { "id": "s5o12l2m3n4o5p6q7r8s9t0u", "option": "c", "text": "All of the above", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s5q05e6f7g8h9i0j1k2l3m4n",
          "title": "Index Signatures",
          "question": "interface Settings {\n  [key: string]: boolean;\n}\nconst settings: Settings = { theme: true, notifications: false };\nIs this valid?",
          "options": [
            { "id": "s5o13m3n4o5p6q7r8s9t0u1v", "option": "a", "text": "No, because theme is not a valid key", "correct": false, "selected": false },
            { "id": "s5o14n4o5p6q7r8s9t0u1v2w", "option": "b", "text": "No, because index signatures only work with number keys", "correct": false, "selected": false },
            { "id": "s5o15o5p6q7r8s9t0u1v2w3x", "option": "c", "text": "Yes, any string key with boolean value is allowed", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s5q06f7g8h9i0j1k2l3m4n5o",
          "title": "Index Signatures with Specific Properties",
          "question": "interface User {\n  id: number;\n  name: string;\n  [key: string]: string | number;\n}\nconst user: User = { id: 1, name: 'Mike', age: 23 };\nIs this valid?",
          "options": [
            { "id": "s5o16p6q7r8s9t0u1v2w3x4y", "option": "a", "text": "No, because age is not a defined property", "correct": false, "selected": false },
            { "id": "s5o17q7r8s9t0u1v2w3x4y5z", "option": "b", "text": "Yes, id and name match, age is allowed by index signature", "correct": true, "selected": false },
            { "id": "s5o18r8s9t0u1v2w3x4y5z6a", "option": "c", "text": "No, because index signature must be the last property", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s5q07g8h9i0j1k2l3m4n5o6p",
          "title": "Branded Types",
          "question": "type UserId = string & { __brand: 'UserId' };\nconst userId: UserId = '123' as UserId;\nconst str: string = userId;\nIs this valid?",
          "options": [
            { "id": "s5o19s9t0u1v2w3x4y5z6a7b", "option": "a", "text": "Yes, UserId is a string so it can be assigned to string", "correct": true, "selected": false },
            { "id": "s5o20t0u1v2w3x4y5z6a7b8c", "option": "b", "text": "No, because UserId is a branded type", "correct": false, "selected": false },
            { "id": "s5o21u1v2w3x4y5z6a7b8c9d", "option": "c", "text": "Only if you use type assertion", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s5q08h9i0j1k2l3m4n5o6p7q",
          "title": "Branded Types with Different Brands",
          "question": "type UserId = string & { __brand: 'UserId' };\ntype ProductId = string & { __brand: 'ProductId' };\nconst userId: UserId = 'user-123' as UserId;\nconst productId: ProductId = 'product-456' as ProductId;\nuserId = productId;\nWhat happens?",
          "options": [
            { "id": "s5o22v2w3x4y5z6a7b8c9d0e", "option": "a", "text": "It works because both are strings", "correct": false, "selected": false },
            { "id": "s5o23w3x4y5z6a7b8c9d0e1f", "option": "b", "text": "TypeScript shows an error because UserId and ProductId are different types", "correct": true, "selected": false },
            { "id": "s5o24x4y5z6a7b8c9d0e1f2g", "option": "c", "text": "It converts productId to UserId automatically", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s5q09i0j1k2l3m4n5o6p7q8r",
          "title": "Rest Parameters",
          "question": "function sum(...numbers: number[]) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3);\nWhat does the ...numbers parameter represent?",
          "options": [
            { "id": "s5o25y5z6a7b8c9d0e1f2g3h", "option": "a", "text": "An array of all remaining arguments", "correct": true, "selected": false },
            { "id": "s5o26z6a7b8c9d0e1f2g3h4i", "option": "b", "text": "A single number", "correct": false, "selected": false },
            { "id": "s5o27a7b8c9d0e1f2g3h4i5j", "option": "c", "text": "A string value", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s5q10j1k2l3m4n5o6p7q8r9s",
          "title": "Spread with Objects",
          "question": "const user = { id: 1, name: 'Alice' };\nconst details = { age: 25, city: 'NYC' };\nconst combined = { ...user, ...details };\nWhat properties does combined have?",
          "options": [
            { "id": "s5o28b8c9d0e1f2g3h4i5j6k", "option": "a", "text": "Only id and name", "correct": false, "selected": false },
            { "id": "s5o29c9d0e1f2g3h4i5j6k7l", "option": "b", "text": "id, name, age, and city", "correct": true, "selected": false },
            { "id": "s5o30d0e1f2g3h4i5j6k7l8m", "option": "c", "text": "Only age and city", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s5q11k2l3m4n5o6p7q8r9s0t",
          "title": "Spread Override",
          "question": "const defaults = { theme: 'dark', notifications: true };\nconst prefs = { theme: 'light' };\nconst settings = { ...defaults, ...prefs };\nWhat is settings.theme?",
          "options": [
            { "id": "s5o31e1f2g3h4i5j6k7l8m9n", "option": "a", "text": "'dark'", "correct": false, "selected": false },
            { "id": "s5o32f2g3h4i5j6k7l8m9n0o", "option": "b", "text": "'light'", "correct": true, "selected": false },
            { "id": "s5o33g3h4i5j6k7l8m9n0o1p", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s5q12l3m4n5o6p7q8r9s0t1u",
          "title": "Discriminated Unions",
          "question": "type Result = \n  | { status: 'success'; data: string }\n  | { status: 'error'; error: string };\nWhat is the discriminator in this union?",
          "options": [
            { "id": "s5o34h4i5j6k7l8m9n0o1p2q", "option": "a", "text": "data", "correct": false, "selected": false },
            { "id": "s5o35i5j6k7l8m9n0o1p2q3r", "option": "b", "text": "status", "correct": true, "selected": false },
            { "id": "s5o36j6k7l8m9n0o1p2q3r4s", "option": "c", "text": "error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s5q13m4n5o6p7q8r9s0t1u2v",
          "title": "Discriminated Unions with Type Narrowing",
          "question": "type Response = \n  | { type: 'success'; value: number }\n  | { type: 'failure'; reason: string };\nfunction process(res: Response) {\n  if (res.type === 'success') {\n    console.log(res.value * 2);\n  }\n}\nWhat does TypeScript know inside the if block?",
          "options": [
            { "id": "s5o37k7l8m9n0o1p2q3r4s5t", "option": "a", "text": "res is the 'success' type and has a value property", "correct": true, "selected": false },
            { "id": "s5o38l8m9n0o1p2q3r4s5t6u", "option": "b", "text": "res is the 'failure' type", "correct": false, "selected": false },
            { "id": "s5o39m9n0o1p2q3r4s5t6u7v", "option": "c", "text": "res could be either type", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s5q14n5o6p7q8r9s0t1u2v3w",
          "title": "Function Overloads",
          "question": "function greet(name: string): string;\nfunction greet(name: string, age: number): string;\nfunction greet(name: string, age?: number): string {\n  if (age) {\n    return `Hello ${name}, you are ${age} years old`;\n  }\n  return `Hello ${name}`;\n}\ngreet('Alice');\ngreet('Bob', 25);\nHow many overload signatures does this function have?",
          "options": [
            { "id": "s5o40n0o1p2q3r4s5t6u7v8w", "option": "a", "text": "1", "correct": false, "selected": false },
            { "id": "s5o41o1p2q3r4s5t6u7v8w9x", "option": "b", "text": "2", "correct": true, "selected": false },
            { "id": "s5o42p2q3r4s5t6u7v8w9x0y", "option": "c", "text": "3", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s5q16p7q8r9s0t1u2v3w4x5y",
          "title": "Rest with Tuple",
          "question": "type Combined = [...string[], number];\nconst data: Combined = ['a', 'b', 'c', 42];\nWhat does this tuple allow?",
          "options": [
            { "id": "s5o46t6u7v8w9x0y1z2a3b4c", "option": "a", "text": "Any number of strings followed by a number", "correct": true, "selected": false },
            { "id": "s5o47u7v8w9x0y1z2a3b4c5d", "option": "b", "text": "Exactly three strings and a number", "correct": false, "selected": false },
            { "id": "s5o48v8w9x0y1z2a3b4c5d6e", "option": "c", "text": "Only strings", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s5q17q8r9s0t1u2v3w4x5y6z",
          "title": "Readonly Index Signature",
          "question": "interface Dictionary {\n  readonly [key: string]: string;\n}\nconst dict: Dictionary = { greeting: 'Hello' };\ndict.greeting = 'Hi';\nWhat happens?",
          "options": [
            { "id": "s5o49w9x0y1z2a3b4c5d6e7f", "option": "a", "text": "It works fine and greeting becomes 'Hi'", "correct": false, "selected": false },
            { "id": "s5o50x0y1z2a3b4c5d6e7f8g", "option": "b", "text": "TypeScript shows an error because the index signature is readonly", "correct": true, "selected": false },
            { "id": "s5o51y1z2a3b4c5d6e7f8g9h", "option": "c", "text": "It creates a new property", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s5q19s0t1u2v3w4x5y6z7a8b",
          "title": "Branded Type with Number",
          "question": "type Age = number & { __brand: 'Age' };\nfunction createAge(age: number): Age {\n  return age as Age;\n}\nconst myAge: Age = createAge(25);\nconst num: number = myAge;\nIs this valid?",
          "options": [
            { "id": "s5o55c5d6e7f8g9h0i1j2k3l", "option": "a", "text": "No, because Age is a branded type", "correct": false, "selected": false },
            { "id": "s5o56d6e7f8g9h0i1j2k3l4m", "option": "b", "text": "Yes, Age is a number so it can be assigned to number", "correct": true, "selected": false },
            { "id": "s5o57e7f8g9h0i1j2k3l4m5n", "option": "c", "text": "Only if you use type assertion", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s5q20t1u2v3w4x5y6z7a8b9c",
          "title": "Discriminated Union with Switch",
          "question": "type Status = \n  | { state: 'loading' }\n  | { state: 'success'; data: string[] }\n  | { state: 'error'; error: string };\nfunction render(status: Status) {\n  switch (status.state) {\n    case 'loading':\n      return 'Loading...';\n    case 'success':\n      return status.data;\n    case 'error':\n      return status.error;\n  }\n}\nWhat does the switch statement do?",
          "options": [
            { "id": "s5o58f8g9h0i1j2k3l4m5n6o", "option": "a", "text": "It narrows the type based on the state property", "correct": true, "selected": false },
            { "id": "s5o59g9h0i1j2k3l4m5n6o7p", "option": "b", "text": "It converts the union to an object", "correct": false, "selected": false },
            { "id": "s5o60h0i1j2k3l4m5n6o7p8q", "option": "c", "text": "It creates a new union type", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "s5t01a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Discriminated Union for Payment",
          "description": "Create a type called %Payment% with %method% as the discriminator. It should have %'card'% with %cardNumber% (string) and %'cash'% with %amount% (number). Create a function that handles both payment types.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Payment = \n  | { method: 'card'; cardNumber: string }\n  | { method: 'cash'; amount: number };\nfunction processPayment(payment: Payment) {\n  if (payment.method === 'card') {\n    console.log('Processing card:', payment.cardNumber);\n  } else {\n    console.log('Processing cash:', payment.amount);\n  }\n}\nprocessPayment({ method: 'card', cardNumber: '1234-5678' });\nprocessPayment({ method: 'cash', amount: 50 });",
          "done": false
        },
        {
          "id": "s5t03c4d5e6f7g8h9i0j1k2l",
          "title": "Create an Index Signature Interface",
          "description": "Create an interface called %Config% with an index signature that allows any string key with %string | number% values. Create a config object with some key-value pairs.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Config {\n  [key: string]: string | number;\n}\nconst config: Config = {\n  appName: 'MyApp',\n  version: 1.0,\n  maxRetries: 3\n};",
          "done": false
        },
        {
          "id": "s5t04d5e6f7g8h9i0j1k2l3m",
          "title": "Create a Branded Type for Product ID",
          "description": "Create a branded type called %ProductId% that is a string with a brand %'ProductId'%. Create a function %createProductId% that takes a string and returns a %ProductId%.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type ProductId = string & { __brand: 'ProductId' };\nfunction createProductId(id: string): ProductId {\n  return id as ProductId;\n}\nconst productId: ProductId = createProductId('prod-123');",
          "done": false
        },
        {
          "id": "s5t05e6f7g8h9i0j1k2l3m4n",
          "title": "Create a Named Tuple",
          "description": "Create a type called %Employee% that is a named tuple with %id% (number), %name% (string), and %department% (string). Then create an employee tuple.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Employee = [id: number, name: string, department: string];\nconst employee: Employee = [1, 'Mike', 'Engineering'];",
          "done": false
        }
      ]
    },
    {
      "id": "z2f124i7solwwyst5v8cay",
      "type": "title",
      "title": "Section 6: Utility Types",
      "videoID": "414234",
      "questionsTotal": 0,
      "tasksTotal": 0,
      "totalCorrect": 0,
      "totalFalse": 0,
      "totalTasksDone": 0,
      "section": 6,
      "sectionExercisesIndex": "13-24",
      "questions": [
      ],
      "tasks": [
      ]
    },
    {
      "id": "pr1r2e3q4u5i6r7e8d9o0n",
      "title": "Partial, Required & Readonly",
      "videoID": "49",
      "section": 6,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "prq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is Partial",
          "question": "What does the Partial utility type do in TypeScript?",
          "options": [
            { "id": "pro2b3c4d5e6f7g8h9i0j1k", "option": "a", "text": "It makes all properties of a type required", "correct": false, "selected": false },
            { "id": "pro3c4d5e6f7g8h9i0j1k2l", "option": "b", "text": "It makes all properties readonly", "correct": false, "selected": false },
            { "id": "pro1a2b3c4d5e6f7g8h9i0j", "option": "c", "text": "It makes all properties of a type optional", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "prq2b3c4d5e6f7g8h9i0j1k",
          "title": "What is Required",
          "question": "What does the Required utility type do in TypeScript?",
          "options": [
            { "id": "pro5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "It makes all properties optional", "correct": false, "selected": false },
            { "id": "pro6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "It makes all properties required", "correct": true, "selected": false },
            { "id": "pro7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "It makes all properties readonly", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "prq3c4d5e6f7g8h9i0j1k2l",
          "title": "What is Readonly",
          "question": "What does the Readonly utility type do in TypeScript?",
          "options": [
            { "id": "pro9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "It makes all properties mutable", "correct": false, "selected": false },
            { "id": "pro0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "It makes all properties readonly", "correct": true, "selected": false },
            { "id": "pro1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "It makes all properties optional", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "prq4d5e6f7g8h9i0j1k2l3m",
          "title": "Partial Usage",
          "question": "interface User {\n  id: number;\n  name: string;\n  email: string;\n}\ntype PartialUser = Partial<User>;\nconst user: PartialUser = { name: 'Mike' };\nIs this valid?",
          "options": [
            { "id": "pro3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "Yes, all properties become optional", "correct": true, "selected": false },
            { "id": "pro4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "No, because id is required", "correct": false, "selected": false },
            { "id": "pro5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "No, because email is required", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "prq5e6f7g8h9i0j1k2l3m4n",
          "title": "Required Usage",
          "question": "interface Config {\n  url?: string;\n  timeout?: number;\n}\ntype RequiredConfig = Required<Config>;\nconst config: RequiredConfig = { url: 'https://api.com' };\nIs this valid?",
          "options": [
            { "id": "pro7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "Yes, because url is provided", "correct": false, "selected": false },
            { "id": "pro8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "No, because timeout is required now", "correct": true, "selected": false },
            { "id": "pro9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "No, because url should be optional", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "prq6f7g8h9i0j1k2l3m4n5o",
          "title": "Readonly Usage",
          "question": "interface Product {\n  id: number;\n  name: string;\n}\ntype ReadonlyProduct = Readonly<Product>;\nconst product: ReadonlyProduct = { id: 1, name: 'Laptop' };\nproduct.name = 'Phone';\nWhat happens?",
          "options": [
            { "id": "pro1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "It works fine and name becomes 'Phone'", "correct": false, "selected": false },
            { "id": "pro2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "TypeScript shows an error because properties are readonly", "correct": true, "selected": false },
            { "id": "pro3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "It creates a new product", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "prq7g8h9i0j1k2l3m4n5o6p",
          "title": "Partial with Nested Objects",
          "question": "interface Settings {\n  theme: { dark: boolean; colors: string[] };\n  notifications: boolean;\n}\ntype PartialSettings = Partial<Settings>;\nconst settings: PartialSettings = { theme: { dark: true } };\nIs this valid?",
          "options": [
            { "id": "pro6z7a8b9c0d1e2f3g4h5i", "option": "a", "text": "No, because colors is required in theme", "correct": false, "selected": false },
            { "id": "pro7a8b9c0d1e2f3g4h5i6j", "option": "b", "text": "No, because notifications is required", "correct": false, "selected": false },
            { "id": "pro5y6z7a8b9c0d1e2f3g4h", "option": "c", "text": "Yes, Partial makes all properties optional", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "prq8h9i0j1k2l3m4n5o6p7q",
          "title": "Combining Utility Types",
          "question": "interface User {\n  id: number;\n  name: string;\n  email?: string;\n}\ntype PartialReadonlyUser = Readonly<Partial<User>>;\nconst user: PartialReadonlyUser = { name: 'Mike' };\nuser.name = 'John';\nWhat happens?",
          "options": [
            { "id": "pro9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "It works and name becomes 'John'", "correct": false, "selected": false },
            { "id": "pro0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "TypeScript shows an error because properties are readonly", "correct": true, "selected": false },
            { "id": "pro1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "It creates a new user", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "prq9i0j1k2l3m4n5o6p7q8r",
          "title": "Required vs Partial",
          "question": "interface Post {\n  title: string;\n  content?: string;\n  author: string;\n}\nWhich type would make all properties required?",
          "options": [
            { "id": "pro3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "Partial<Post>", "correct": false, "selected": false },
            { "id": "pro4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "Required<Post>", "correct": true, "selected": false },
            { "id": "pro5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "Readonly<Post>", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "prq0j1k2l3m4n5o6p7q8r9s",
          "title": "Readonly vs Partial",
          "question": "interface Task {\n  id: number;\n  title: string;\n  completed: boolean;\n}\nWhich type would allow updating the completed property?",
          "options": [
            { "id": "pro7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "Partial<Task>", "correct": true, "selected": false },
            { "id": "pro8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "Readonly<Task>", "correct": false, "selected": false },
            { "id": "pro9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "Required<Task>", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "prt1a2b3c4d5e6f127g8h9i0j",
          "title": "Create a Partial Update Function",
          "description": "Create an interface called %User% with %id% (number), %name% (string), and %email% (string). Create a function called %updateUser% that takes an %id% (number) and %updates% (Partial<User>). The function should return a new object that merges the original user with the updates. Log the result.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface User {\n  id: number;\n  name: string;\n  email: string;\n}\nfunction updateUser(id: number, updates: Partial<User>): User {\n  const originalUser: User = { id, name: 'Default Name', email: 'default@email.com' };\n  return { ...originalUser, ...updates };\n}\nconst updated = updateUser(1, { name: 'Mike' });\nconsole.log(updated);\nconst updated2 = updateUser(2, { email: 'new@email.com' });\nconsole.log(updated2);",
          "done": false
        },
        {
          "id": "prt2b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Readonly Config",
          "description": "Create an interface %AppConfig% with %apiUrl% (string), %timeout% (number), and %retries% (number). Create a readonly version of this type and try to modify a property to see the error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface AppConfig {\n  apiUrl: string;\n  timeout: number;\n  retries: number;\n}\ntype ReadonlyConfig = Readonly<AppConfig>;\nconst config: ReadonlyConfig = {\n  apiUrl: 'https://api.com',\n  timeout: 5000,\n  retries: 3\n};\n// config.timeout = 6000; // Error: Cannot assign to 'timeout' because it is a read-only property",
          "done": false
        }
      ]
    },
    {
      "id": "po1p2i3c4k5o6m7i8t9o0n",
      "title": "Pick and Omit",
      "videoID": "50",
      "section": 6,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "poq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is Pick",
          "question": "What does the Pick utility type do in TypeScript?",
          "options": [
            { "id": "poo1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "It creates a new type by excluding specific properties", "correct": false, "selected": false },
            { "id": "poo2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "It creates a new type by selecting specific properties", "correct": true, "selected": false },
            { "id": "poo3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "It makes all properties optional", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "poq2b3c4d5e6f7g8h9i0j1k",
          "title": "What is Omit",
          "question": "What does the Omit utility type do in TypeScript?",
          "options": [
            { "id": "poo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "It creates a new type by selecting specific properties", "correct": false, "selected": false },
            { "id": "poo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "It makes all properties required", "correct": false, "selected": false },
            { "id": "poo7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "It creates a new type by excluding specific properties", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "poq3c4d5e6f7g8h9i0j1k2l",
          "title": "Pick Syntax",
          "question": "interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\ntype UserPreview = Pick<User, 'id' | 'name'>;\nWhat properties does UserPreview have?",
          "options": [
            { "id": "poo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "id, name, and email", "correct": false, "selected": false },
            { "id": "poo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "All properties", "correct": false, "selected": false },
            { "id": "poo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "id and name", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "poq4d5e6f7g8h9i0j1k2l3m",
          "title": "Omit Syntax",
          "question": "interface Product {\n  id: number;\n  name: string;\n  price: number;\n  description: string;\n}\ntype ProductSummary = Omit<Product, 'description'>;\nWhat properties does ProductSummary have?",
          "options": [
            { "id": "poo4n5o6p7q8r9s0t1u2v3w", "option": "a", "text": "Only id, name, and price", "correct": true, "selected": false },
            { "id": "poo3m4n5o6p7q8r9s0t1u2v", "option": "b", "text": "All properties including description", "correct": false, "selected": false },
            { "id": "poo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "Only description", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "poq5e6f7g8h9i0j1k2l3m4n",
          "title": "Pick with Multiple Properties",
          "question": "interface Post {\n  id: number;\n  title: string;\n  content: string;\n  author: string;\n  createdAt: Date;\n}\ntype PostPreview = Pick<Post, 'title' | 'author' | 'createdAt'>;\nconst post: PostPreview = { title: 'Hello', author: 'Mike', createdAt: new Date() };\nIs this valid?",
          "options": [
            { "id": "poo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "No, because id is missing", "correct": false, "selected": false },
            { "id": "poo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "Yes, all picked properties are present", "correct": true, "selected": false },
            { "id": "poo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "No, because content is missing", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "poq6f7g8h9i0j1k2l3m4n5o",
          "title": "Omit with Multiple Properties",
          "question": "interface Employee {\n  id: number;\n  name: string;\n  salary: number;\n  department: string;\n  password: string;\n}\ntype PublicEmployee = Omit<Employee, 'salary' | 'password'>;\nconst employee: PublicEmployee = { id: 1, name: 'Alice', department: 'Engineering' };\nIs this valid?",
          "options": [
            { "id": "poo1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "No, because salary is required", "correct": false, "selected": false },
            { "id": "poo2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "Yes, salary and password are omitted", "correct": true, "selected": false },
            { "id": "poo3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "No, because password is required", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "poq7g8h9i0j1k2l3m4n5o6p",
          "title": "Pick vs Omit",
          "question": "interface Car {\n  brand: string;\n  model: string;\n  year: number;\n  price: number;\n  vin: string;\n}\nWhich type would you use to create a type with only brand, model, and year?",
          "options": [
            { "id": "poo5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "Omit<Car, 'brand' | 'model' | 'year'>", "correct": false, "selected": false },
            { "id": "poo6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "Pick<Car, 'brand' | 'model' | 'year'>", "correct": true, "selected": false },
            { "id": "poo7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "Partial<Car>", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "poq8h9i0j1k2l3m4n5o6p7q",
          "title": "Omit Use Case",
          "question": "interface User {\n  id: number;\n  username: string;\n  password: string;\n  email: string;\n}\ntype SafeUser = Omit<User, 'password'>;\nconst user: SafeUser = { id: 1, username: 'john', email: 'john@email.com' };\nIs this valid?",
          "options": [
            { "id": "poo0d1e2f3g4h5i6j7k8l9m", "option": "a", "text": "Yes, password is omitted so it's safe", "correct": true, "selected": false },
            { "id": "poo9c0d1e2f3g4h5i6j7k8l", "option": "b", "text": "No, because password is required", "correct": false, "selected": false },
            { "id": "poo1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "No, because id is missing", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
      ],
      "tasks": [
        {
          "id": "pot1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Pick Type for User Preview",
          "description": "Create an interface called %User% with %id% (number), %name% (string), %email% (string), and %age% (number). Then create a type called %UserPreview% using %Pick% that only includes %id%, %name%, and %email%. Create a variable using this type.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\ntype UserPreview = Pick<User, 'id' | 'name' | 'email'>;\nconst user: UserPreview = { id: 1, name: 'Mike', email: 'mike@email.com' };",
          "done": false
        },
        {
          "id": "pot2b3c4d5e6f7g8h9i0j1k",
          "title": "Create an Omit Type for Sensitive Data",
          "description": "Create an interface called %Employee% with %id% (number), %name% (string), %salary% (number), %department% (string), and %password% (string). Then create a type called %PublicEmployee% using %Omit% that excludes %salary% and %password%. Create a variable using this type.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Employee {\n  id: number;\n  name: string;\n  salary: number;\n  department: string;\n  password: string;\n}\ntype PublicEmployee = Omit<Employee, 'salary' | 'password'>;\nconst employee: PublicEmployee = { id: 1, name: 'Alice', department: 'Engineering' };",
          "done": false
        }
      ]
    },
    {
      "id": "ne1x2c3l4u5d6e7n8o9n0e",
      "title": "NonNullable & Exclude",
      "videoID": "52",
      "section": 6,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "neq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is NonNullable",
          "question": "What does the NonNullable utility type do in TypeScript?",
          "options": [
            { "id": "neo1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "It removes null and undefined from a type", "correct": true, "selected": false },
            { "id": "neo2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "It makes all properties required", "correct": false, "selected": false },
            { "id": "neo3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "It removes specific types from a union", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "neq2b3c4d5e6f7g8h9i0j1k",
          "title": "What is Exclude",
          "question": "What does the Exclude utility type do in TypeScript?",
          "options": [
            { "id": "neo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "It removes null and undefined from a type", "correct": false, "selected": false },
            { "id": "neo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "It removes specific types from a union", "correct": true, "selected": false },
            { "id": "neo7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "It makes all properties optional", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "neq3c4d5e6f7g8h9i0j1k2l",
          "title": "NonNullable Syntax",
          "question": "type T = string | null | undefined;\ntype U = NonNullable<T>;\nWhat type does U represent?",
          "options": [
            { "id": "neo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "string | null", "correct": false, "selected": false },
            { "id": "neo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "string", "correct": true, "selected": false },
            { "id": "neo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "string | undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "neq4d5e6f7g8h9i0j1k2l3m",
          "title": "Exclude Syntax",
          "question": "type Status = 'pending' | 'approved' | 'rejected' | 'cancelled';\ntype ActiveStatus = Exclude<Status, 'cancelled'>;\nWhat type does ActiveStatus represent?",
          "options": [
            { "id": "neo3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "'pending' | 'approved' | 'rejected'", "correct": true, "selected": false },
            { "id": "neo4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "'pending' | 'approved' | 'rejected' | 'cancelled'", "correct": false, "selected": false },
            { "id": "neo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "'cancelled'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "neq5e6f7g8h9i0j1k2l3m4n",
          "title": "NonNullable with Union",
          "question": "type Value = number | string | null | undefined;\ntype NonNullValue = NonNullable<Value>;\nWhat type does NonNullValue represent?",
          "options": [
            { "id": "neo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "number | string | null", "correct": false, "selected": false },
            { "id": "neo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "number | string | undefined", "correct": false, "selected": false },
            { "id": "neo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "number | string", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "neq6f7g8h9i0j1k2l3m4n5o",
          "title": "Exclude with Multiple Types",
          "question": "type AllTypes = string | number | boolean | null | undefined;\ntype Primitives = Exclude<AllTypes, null | undefined>;\nWhat type does Primitives represent?",
          "options": [
            { "id": "neo1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "string | number | boolean", "correct": true, "selected": false },
            { "id": "neo2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "string | number | boolean | null", "correct": false, "selected": false },
            { "id": "neo3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "string | number | boolean | undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "neq8h9i0j1k2l3m4n5o6p7q",
          "title": "Exclude with String Literals",
          "question": "type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'purple';\ntype PrimaryColors = Exclude<Colors, 'yellow' | 'purple'>;\nWhat type does PrimaryColors represent?",
          "options": [
            { "id": "neo9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "'red' | 'green' | 'blue'", "correct": true, "selected": false },
            { "id": "neo0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "'yellow' | 'purple'", "correct": false, "selected": false },
            { "id": "neo1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "'red' | 'green' | 'blue' | 'yellow' | 'purple'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "neq0j1k2l3m4n5o6p7q8r9s",
          "title": "Exclude with Union Types",
          "question": "type Response = 'success' | 'error' | 'loading' | 'idle';\ntype ReadyResponse = Exclude<Response, 'loading' | 'idle'>;\nconst status: ReadyResponse = 'success';\nIs this valid?",
          "options": [
            { "id": "neo7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "Yes, 'success' is not excluded", "correct": true, "selected": false },
            { "id": "neo8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "No, because 'success' is excluded", "correct": false, "selected": false },
            { "id": "neo9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "No, because status must be 'loading'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "net1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a NonNullable Type for Form Data",
          "description": "Create a type called %FormData% that can be %string | number | null | undefined%. Then create a type called %SafeData% using %NonNullable%. Create a variable using SafeData.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type FormData = string | number | null | undefined;\ntype SafeData = NonNullable<FormData>;\nconst data: SafeData = 'hello';",
          "done": false
        },
        {
          "id": "net2b3c4d5e6f7g8h9i0j1k",
          "title": "Create an Exclude Type for Status",
          "description": "Create a type called %OrderStatus% with values %'pending'%, %'processing'%, %'shipped'%, %'delivered'%, and %'cancelled'%. Then create a type called %ActiveStatus% using %Exclude% to remove %'cancelled'% and %'delivered'%. Create a variable using ActiveStatus.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';\ntype ActiveStatus = Exclude<OrderStatus, 'cancelled' | 'delivered'>;\nconst status: ActiveStatus = 'processing';",
          "done": false
        }
      ]
    },
    {
      "id": "rp1r2e3t4u5r6n7p8a9r0a",
      "title": "ReturnType & Parameters",
      "videoID": "53",
      "section": 6,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "rpq1a2b3c4d5e6f7g8h9i0j",
          "title": "What is ReturnType",
          "question": "What does the ReturnType utility type do in TypeScript?",
          "options": [
            { "id": "rpo2b3c4d5e6f7g8h9i0j1k", "option": "a", "text": "It extracts the parameter types of a function", "correct": false, "selected": false },
            { "id": "rpo3c4d5e6f7g8h9i0j1k2l", "option": "b", "text": "It makes all properties required", "correct": false, "selected": false },
            { "id": "rpo1a2b3c4d5e6f7g8h9i0j", "option": "c", "text": "It extracts the return type of a function", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "rpq2b3c4d5e6f7g8h9i0j1k",
          "title": "What is Parameters",
          "question": "What does the Parameters utility type do in TypeScript?",
          "options": [
            { "id": "rpo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "It extracts the return type of a function", "correct": false, "selected": false },
            { "id": "rpo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "It extracts the parameter types of a function as a tuple", "correct": true, "selected": false },
            { "id": "rpo7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "It makes all properties optional", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "rpq3c4d5e6f7g8h9i0j1k2l",
          "title": "ReturnType Syntax",
          "question": "function greet(name: string): string {\n  return 'Hello ' + name;\n}\ntype GreetReturn = ReturnType<typeof greet>;\nWhat type does GreetReturn represent?",
          "options": [
            { "id": "rpo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "string", "correct": true, "selected": false },
            { "id": "rpo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "void", "correct": false, "selected": false },
            { "id": "rpo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "number", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "rpq4d5e6f7g8h9i0j1k2l3m",
          "title": "Parameters Syntax",
          "question": "function add(a: number, b: number): number {\n  return a + b;\n}\ntype AddParams = Parameters<typeof add>;\nWhat type does AddParams represent?",
          "options": [
            { "id": "rpo3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "[a: number, b: number]", "correct": true, "selected": false },
            { "id": "rpo4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "rpo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "rpq5e6f7g8h9i0j1k2l3m4n",
          "title": "ReturnType with Void",
          "question": "function log(message: string): void {\n  console.log(message);\n}\ntype LogReturn = ReturnType<typeof log>;\nWhat type does LogReturn represent?",
          "options": [
            { "id": "rpo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "rpo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "void", "correct": true, "selected": false },
            { "id": "rpo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "rpq6f7g8h9i0j1k2l3m4n5o",
          "title": "Parameters with Multiple Parameters",
          "question": "function process(id: number, name: string, active: boolean): void {\n  console.log(id, name, active);\n}\ntype ProcessParams = Parameters<typeof process>;\nWhat type does ProcessParams represent?",
          "options": [
            { "id": "rpo2v3w4x5y6z7a8b9c0d1e", "option": "a", "text": "number | string | boolean", "correct": false, "selected": false },
            { "id": "rpo3w4x5y6z7a8b9c0d1e2f", "option": "b", "text": "void", "correct": false, "selected": false },
            { "id": "rpo1u2v3w4x5y6z7a8b9c0d", "option": "c", "text": "[id: number, name: string, active: boolean]", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "rpq7g8h9i0j1k2l3m4n5o6p",
          "title": "ReturnType with Object",
          "question": "function getUser(): { id: number; name: string } {\n  return { id: 1, name: 'Mike' };\n}\ntype User = ReturnType<typeof getUser>;\nWhat type does User represent?",
          "options": [
            { "id": "rpo5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "{ id: number; name: string }", "correct": true, "selected": false },
            { "id": "rpo6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "rpo7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "rpq8h9i0j1k2l3m4n5o6p7q",
          "title": "Parameters with Optional Parameters",
          "question": "function greet(name: string, greeting?: string): string {\n  return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;\n}\ntype GreetParams = Parameters<typeof greet>;\nWhat type does GreetParams represent?",
          "options": [
            { "id": "rpo9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "[name: string, greeting?: string]", "correct": true, "selected": false },
            { "id": "rpo0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "[name: string, greeting: string]", "correct": false, "selected": false },
            { "id": "rpo1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "rpq9i0j1k2l3m4n5o6p7q8r",
          "title": "ReturnType with Async Function",
          "question": "async function fetchData(): Promise<string> {\n  return 'data';\n}\ntype Data = ReturnType<typeof fetchData>;\nWhat type does Data represent?",
          "options": [
            { "id": "rpo4h5i6j7k8l9m0n1o2p3q", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "rpo3g4h5i6j7k8l9m0n1o2p", "option": "b", "text": "Promise<string>", "correct": true, "selected": false },
            { "id": "rpo5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "void", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "rpq0j1k2l3m4n5o6p7q8r9s",
          "title": "ReturnType vs Parameters Use Case",
          "question": "function calculate(a: number, b: number): number {\n  return a + b;\n}\ntype CalcParams = Parameters<typeof calculate>;\ntype CalcReturn = ReturnType<typeof calculate>;\nWhat types do CalcParams and CalcReturn represent?",
          "options": [
            { "id": "rpo7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "CalcParams is [a: number, b: number], CalcReturn is number", "correct": true, "selected": false },
            { "id": "rpo8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "CalcParams is number, CalcReturn is [a: number, b: number]", "correct": false, "selected": false },
            { "id": "rpo9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "Both are number", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "rpt1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a ReturnType for a Function",
          "description": "Create a function called %getProduct% that returns an object with %id% (number) and %name% (string). Then use %ReturnType% to extract the return type into a type called %Product%. Create a variable using this type.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function getProduct() {\n  return { id: 1, name: 'Laptop' };\n}\ntype Product = ReturnType<typeof getProduct>;\nconst product: Product = { id: 2, name: 'Phone' };",
          "done": false
        },
        {
          "id": "rpt2b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Parameters Type for a Function",
          "description": "Create a function called %updateUser% that takes %id% (number), %name% (string), and %email% (string). Then use %Parameters% to extract the parameter types into a type called %UpdateUserParams%. Create a variable using this type as a tuple.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function updateUser(id: number, name: string, email: string) {\n  console.log(`Updating user ${id} with name ${name} and email ${email}`);\n}\ntype UpdateUserParams = Parameters<typeof updateUser>;\nconst params: UpdateUserParams = [1, 'Mike', 'mike@email.com'];",
          "done": false
        }
      ]
    },
    {
      "id": "re1c2o3r4d5u6t7y8p9e0s",
      "title": "Record",
      "videoID": "54",
      "section": 6,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "req2b3c4d5e6f7g8h9i0j1k",
          "title": "Record Syntax with String Keys",
          "question": "type UserRoles = Record<string, string>;\nconst roles: UserRoles = { admin: 'Admin', user: 'User' };\nIs this valid?",
          "options": [
            { "id": "reo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "Yes, Record<string, string> allows any string key with string value", "correct": true, "selected": false },
            { "id": "reo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "No, because the keys must be numbers", "correct": false, "selected": false },
            { "id": "reo7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "No, because the values must be numbers", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "req3c4d5e6f7g8h9i0j1k2l",
          "title": "Record with Union Keys",
          "question": "type Status = 'pending' | 'approved' | 'rejected';\ntype StatusMessages = Record<Status, string>;\nconst messages: StatusMessages = {\n  pending: 'Waiting for review',\n  approved: 'Approved',\n  rejected: 'Rejected'\n};\nIs this valid?",
          "options": [
            { "id": "reo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "No, because you can't use union types as keys", "correct": false, "selected": false },
            { "id": "reo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "Yes, all union members are valid keys", "correct": true, "selected": false },
            { "id": "reo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "No, because the values must be numbers", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "req4d5e6f7g8h9i0j1k2l3m",
          "title": "Record with Number Keys",
          "question": "type NumberMap = Record<number, string>;\nconst map: NumberMap = { 1: 'one', 2: 'two' };\nIs this valid?",
          "options": [
            { "id": "reo3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "No, because Record only works with string keys", "correct": false, "selected": false },
            { "id": "reo4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "Yes, Record works with number keys too", "correct": true, "selected": false },
            { "id": "reo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "No, because the values must be numbers", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "req5e6f7g8h9i0j1k2l3m4n",
          "title": "Record with Object Values",
          "question": "type User = { id: number; name: string };\ntype UserMap = Record<string, User>;\nconst users: UserMap = {\n  user1: { id: 1, name: 'Mike' },\n  user2: { id: 2, name: 'Jane' }\n};\nIs this valid?",
          "options": [
            { "id": "reo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "Yes, Record allows any type as value", "correct": true, "selected": false },
            { "id": "reo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "No, because the values must be primitives", "correct": false, "selected": false },
            { "id": "reo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "No, because the keys must be numbers", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "req6f7g8h9i0j1k2l3m4n5o",
          "title": "Record vs Index Signature",
          "question": "What is the difference between Record<string, string> and { [key: string]: string }?",
          "options": [
            { "id": "reo1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "They are exactly the same", "correct": false, "selected": false },
            { "id": "reo2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "Record is more concise and can work with unions", "correct": true, "selected": false },
            { "id": "reo3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "Record only works with string keys", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "req7g8h9i0j1k2l3m4n5o6p",
          "title": "Record with Literal Keys",
          "question": "type Config = Record<'apiUrl' | 'timeout' | 'retries', string | number>;\nconst config: Config = {\n  apiUrl: 'https://api.com',\n  timeout: 5000,\n  retries: 3\n};\nIs this valid?",
          "options": [
            { "id": "reo5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "Yes, all keys are present with valid types", "correct": true, "selected": false },
            { "id": "reo6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "No, because timeout must be a string", "correct": false, "selected": false },
            { "id": "reo7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "No, because retries must be a string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "req8h9i0j1k2l3m4n5o6p7q",
          "title": "Record with Optional Keys",
          "question": "type Permissions = Record<'read' | 'write' | 'delete', boolean>;\nconst permissions: Permissions = { read: true, write: false };\nIs this valid?",
          "options": [
            { "id": "reo9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "Yes, because optional keys are allowed", "correct": false, "selected": false },
            { "id": "reo0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "No, because 'delete' is missing from the object", "correct": true, "selected": false },
            { "id": "reo1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "No, because 'write' should be true", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "req9i0j1k2l3m4n5o6p7q8r",
          "title": "Record with Mapped Types",
          "question": "type Color = 'red' | 'green' | 'blue';\ntype ColorCode = Record<Color, string>;\nconst codes: ColorCode = { red: '#FF0000', green: '#00FF00', blue: '#0000FF' };\nHow many keys does ColorCode require?",
          "options": [
            { "id": "reo3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "1", "correct": false, "selected": false },
            { "id": "reo4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "2", "correct": false, "selected": false },
            { "id": "reo5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "3", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
      ],
      "tasks": [
        {
          "id": "ret1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Record for User Roles",
          "description": "Create a type called %Role% with values %'admin'%, %'editor'%, and %'viewer'%. Then create a type called %RolePermissions% using %Record% where each role maps to an array of strings (permissions). Create a variable using this type.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Role = 'admin' | 'editor' | 'viewer';\ntype RolePermissions = Record<Role, string[]>;\nconst permissions: RolePermissions = {\n  admin: ['read', 'write', 'delete'],\n  editor: ['read', 'write'],\n  viewer: ['read']\n};",
          "done": false
        },
        {
          "id": "ret2b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Record for Product Catalog",
          "description": "Create a type called %ProductId% as %string%. Create a type called %Product% with %name% (string) and %price% (number). Then use %Record% to create a type called %Catalog% that maps product IDs to products. Create a variable using this type.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type ProductId = string;\ntype Product = { name: string; price: number };\ntype Catalog = Record<ProductId, Product>;\nconst catalog: Catalog = {\n  'p1': { name: 'Laptop', price: 999 },\n  'p2': { name: 'Phone', price: 599 }\n};",
          "done": false
        }
      ]
    },
    {
      "id": "sm1t2r3i4n5g6m7a8n9i0p",
      "title": "String Manipulation Types",
      "videoID": "55",
      "section": 6,
      "done": false,
      "milestone": false,
      "inProgress": false,
      "questions": [
        {
          "id": "smq1a2b3c4d5e6f7g8h9i0j",
          "title": "Uppercase Type",
          "question": "type Upper = Uppercase<'hello'>;\nWhat type does Upper represent?",
          "options": [
            { "id": "smo1a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "'HELLO'", "correct": true, "selected": false },
            { "id": "smo2b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "'hello'", "correct": false, "selected": false },
            { "id": "smo3c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "'Hello'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq2b3c4d5e6f7g8h9i0j1k",
          "title": "Lowercase Type",
          "question": "type Lower = Lowercase<'WORLD'>;\nWhat type does Lower represent?",
          "options": [
            { "id": "smo5e6f7g8h9i0j1k2l3m4n", "option": "a", "text": "'WORLD'", "correct": false, "selected": false },
            { "id": "smo6f7g8h9i0j1k2l3m4n5o", "option": "b", "text": "'world'", "correct": true, "selected": false },
            { "id": "smo7g8h9i0j1k2l3m4n5o6p", "option": "c", "text": "'World'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "smq3c4d5e6f7g8h9i0j1k2l",
          "title": "Capitalize Type",
          "question": "type Cap = Capitalize<'typescript'>;\nWhat type does Cap represent?",
          "options": [
            { "id": "smo9i0j1k2l3m4n5o6p7q8r", "option": "a", "text": "'Typescript'", "correct": true, "selected": false },
            { "id": "smo0j1k2l3m4n5o6p7q8r9s", "option": "b", "text": "'typescript'", "correct": false, "selected": false },
            { "id": "smo1k2l3m4n5o6p7q8r9s0t", "option": "c", "text": "'TYPESCRIPT'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq4d5e6f7g8h9i0j1k2l3m",
          "title": "Uncapitalize Type",
          "question": "type Uncap = Uncapitalize<'Hello'>;\nWhat type does Uncap represent?",
          "options": [
            { "id": "smo3m4n5o6p7q8r9s0t1u2v", "option": "a", "text": "'Hello'", "correct": false, "selected": false },
            { "id": "smo4n5o6p7q8r9s0t1u2v3w", "option": "b", "text": "'hELLO'", "correct": false, "selected": false },
            { "id": "smo5o6p7q8r9s0t1u2v3w4x", "option": "c", "text": "'hello'", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "smq5e6f7g8h9i0j1k2l3m4n",
          "title": "Uppercase with Template Literal",
          "question": "type Greeting = `Hello ${Uppercase<'world'>}`;\nWhat type does Greeting represent?",
          "options": [
            { "id": "smo7q8r9s0t1u2v3w4x5y6z", "option": "a", "text": "'Hello WORLD'", "correct": true, "selected": false },
            { "id": "smo8r9s0t1u2v3w4x5y6z7a", "option": "b", "text": "'Hello world'", "correct": false, "selected": false },
            { "id": "smo9s0t1u2v3w4x5y6z7a8b", "option": "c", "text": "'Hello World'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq6f7g8h9i0j1k2l3m4n5o",
          "title": "Lowercase with Template Literal",
          "question": "type Message = `Error: ${Lowercase<'FOUND'>}`;\nWhat type does Message represent?",
          "options": [
            { "id": "smo1u2v3w4x5y6z7a8b9c0d", "option": "a", "text": "'Error: FOUND'", "correct": false, "selected": false },
            { "id": "smo2v3w4x5y6z7a8b9c0d1e", "option": "b", "text": "'Error: found'", "correct": true, "selected": false },
            { "id": "smo3w4x5y6z7a8b9c0d1e2f", "option": "c", "text": "'Error: Found'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "smq7g8h9i0j1k2l3m4n5o6p",
          "title": "Capitalize with Multiple Words",
          "question": "type Name = Capitalize<'john doe'>;\nWhat type does Name represent?",
          "options": [
            { "id": "smo5y6z7a8b9c0d1e2f3g4h", "option": "a", "text": "'John doe'", "correct": true, "selected": false },
            { "id": "smo6z7a8b9c0d1e2f3g4h5i", "option": "b", "text": "'john doe'", "correct": false, "selected": false },
            { "id": "smo7a8b9c0d1e2f3g4h5i6j", "option": "c", "text": "'John Doe'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq8h9i0j1k2l3m4n5o6p7q",
          "title": "Uncapitalize with Multiple Words",
          "question": "type LowerName = Uncapitalize<'HelloWorld'>;\nWhat type does LowerName represent?",
          "options": [
            { "id": "smo9c0d1e2f3g4h5i6j7k8l", "option": "a", "text": "'helloWorld'", "correct": true, "selected": false },
            { "id": "smo0d1e2f3g4h5i6j7k8l9m", "option": "b", "text": "'HelloWorld'", "correct": false, "selected": false },
            { "id": "smo1e2f3g4h5i6j7k8l9m0n", "option": "c", "text": "'helloworld'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "smq9i0j1k2l3m4n5o6p7q8r",
          "title": "Combining String Manipulations",
          "question": "type Result = Uncapitalize<Uppercase<'hello'>>;\nWhat type does Result represent?",
          "options": [
            { "id": "smo3g4h5i6j7k8l9m0n1o2p", "option": "a", "text": "'HELLO'", "correct": false, "selected": false },
            { "id": "smo4h5i6j7k8l9m0n1o2p3q", "option": "b", "text": "'hello'", "correct": true, "selected": false },
            { "id": "smo5i6j7k8l9m0n1o2p3q4r", "option": "c", "text": "'Hello'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "smq0j1k2l3m4n5o6p7q8r9s",
          "title": "Capitalize vs Uppercase",
          "question": "What is the difference between Capitalize<'hello'> and Uppercase<'hello'>?",
          "options": [
            { "id": "smo7k8l9m0n1o2p3q4r5s6t", "option": "a", "text": "Capitalize makes first letter uppercase, Uppercase makes all letters uppercase", "correct": true, "selected": false },
            { "id": "smo8l9m0n1o2p3q4r5s6t7u", "option": "b", "text": "They do the same thing", "correct": false, "selected": false },
            { "id": "smo9m0n1o2p3q4r5s6t7u8v", "option": "c", "text": "Capitalize makes all letters uppercase, Uppercase makes first letter uppercase", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "smt1a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Uppercase Type for Status",
          "description": "Create a type called %Status% with values %'pending'%, %'approved'%, and %'rejected'%. Then create a type %UpperStatus% using %Uppercase% on each status. Create a variable using UpperStatus.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Status = 'pending' | 'approved' | 'rejected';\ntype UpperStatus = Uppercase<Status>;\nconst status: UpperStatus = 'PENDING';",
          "done": false
        },
        {
          "id": "smt2b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Capitalized Name Type",
          "description": "Create a type called %Name% with values %'john'%, %'jane'%, and %'bob'%. Then create a type %CapitalizedName% using %Capitalize% on each name. Create a variable using CapitalizedName.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Name = 'john' | 'jane' | 'bob';\ntype CapitalizedName = Capitalize<Name>;\nconst name: CapitalizedName = 'John';",
          "done": false
        }
      ]
    },
    {
      "id": "s6m1a2b3c4d5e6f7g8h9i0j",
      "title": "Section 6 Milestone - Utility Types",
      "videoID": "56",
      "section": 6,
      "done": false,
      "milestone": true,
      "inProgress": false,
      "questions": [
        {
          "id": "s6q01a2b3c4d5e6f7g8h9i0j",
          "title": "Partial Type",
          "question": "interface User {\n  id: number;\n  name: string;\n  email: string;\n}\ntype PartialUser = Partial<User>;\nWhich of the following is valid for PartialUser?",
          "options": [
            { "id": "s6o01a2b3c4d5e6f7g8h9i0j", "option": "a", "text": "{ id: 1, name: 'Mike' }", "correct": false, "selected": false },
            { "id": "s6o02b3c4d5e6f7g8h9i0j1k", "option": "b", "text": "{ name: 'Mike' }", "correct": false, "selected": false },
            { "id": "s6o03c4d5e6f7g8h9i0j1k2l", "option": "c", "text": "Both of the above", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s6q02b3c4d5e6f7g8h9i0j1k",
          "title": "Required Type",
          "question": "interface Config {\n  url?: string;\n  timeout?: number;\n}\ntype RequiredConfig = Required<Config>;\nconst config: RequiredConfig = { url: 'https://api.com' };\nIs this valid?",
          "options": [
            { "id": "s6o04d5e6f7g8h9i0j1k2l3m", "option": "a", "text": "Yes, because url is provided", "correct": false, "selected": false },
            { "id": "s6o05e6f7g8h9i0j1k2l3m4n", "option": "b", "text": "No, because timeout is required", "correct": true, "selected": false },
            { "id": "s6o06f7g8h9i0j1k2l3m4n5o", "option": "c", "text": "No, because url should be optional", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s6q03c4d5e6f7g8h9i0j1k2l",
          "title": "Readonly Type",
          "question": "interface Task {\n  id: number;\n  title: string;\n}\ntype ReadonlyTask = Readonly<Task>;\nconst task: ReadonlyTask = { id: 1, title: 'Work' };\ntask.title = 'Play';\nWhat happens?",
          "options": [
            { "id": "s6o07g8h9i0j1k2l3m4n5o6p", "option": "a", "text": "It works and title becomes 'Play'", "correct": false, "selected": false },
            { "id": "s6o08h9i0j1k2l3m4n5o6p7q", "option": "b", "text": "TypeScript shows an error because title is readonly", "correct": true, "selected": false },
            { "id": "s6o09i0j1k2l3m4n5o6p7q8r", "option": "c", "text": "It creates a new task", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s6q04d5e6f7g8h9i0j1k2l3m",
          "title": "Pick Type",
          "question": "interface Product {\n  id: number;\n  name: string;\n  price: number;\n  description: string;\n}\ntype ProductPreview = Pick<Product, 'id' | 'name'>;\nconst product: ProductPreview = { id: 1, name: 'Laptop' };\nIs this valid?",
          "options": [
            { "id": "s6o10j0k1l2m3n4o5p6q7r8s", "option": "a", "text": "Yes, only id and name are required", "correct": true, "selected": false },
            { "id": "s6o11k1l2m3n4o5p6q7r8s9t", "option": "b", "text": "No, because price is missing", "correct": false, "selected": false },
            { "id": "s6o12l2m3n4o5p6q7r8s9t0u", "option": "c", "text": "No, because description is missing", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s6q05e6f7g8h9i0j1k2l3m4n",
          "title": "Omit Type",
          "question": "interface Employee {\n  id: number;\n  name: string;\n  salary: number;\n  password: string;\n}\ntype PublicEmployee = Omit<Employee, 'salary' | 'password'>;\nconst employee: PublicEmployee = { id: 1, name: 'Alice' };\nIs this valid?",
          "options": [
            { "id": "s6o13m3n4o5p6q7r8s9t0u1v", "option": "a", "text": "No, because salary is missing", "correct": false, "selected": false },
            { "id": "s6o14n4o5p6q7r8s9t0u1v2w", "option": "b", "text": "No, because password is missing", "correct": false, "selected": false },
            { "id": "s6o15o5p6q7r8s9t0u1v2w3x", "option": "c", "text": "Yes, salary and password are omitted", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s6q06f7g8h9i0j1k2l3m4n5o",
          "title": "Record Type",
          "question": "type Status = 'pending' | 'done';\ntype StatusMessage = Record<Status, string>;\nconst messages: StatusMessage = { pending: 'Waiting', done: 'Complete' };\nIs this valid?",
          "options": [
            { "id": "s6o16p6q7r8s9t0u1v2w3x4y", "option": "a", "text": "No, because you can't use union types as keys", "correct": false, "selected": false },
            { "id": "s6o17q7r8s9t0u1v2w3x4y5z", "option": "b", "text": "Yes, all union members are valid keys", "correct": true, "selected": false },
            { "id": "s6o18r8s9t0u1v2w3x4y5z6a", "option": "c", "text": "No, because the values must be numbers", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s6q07g8h9i0j1k2l3m4n5o6p",
          "title": "NonNullable Type",
          "question": "type T = string | number | null | undefined;\ntype U = NonNullable<T>;\nWhat type does U represent?",
          "options": [
            { "id": "s6o19s9t0u1v2w3x4y5z6a7b", "option": "a", "text": "string | number | null", "correct": false, "selected": false },
            { "id": "s6o20t0u1v2w3x4y5z6a7b8c", "option": "b", "text": "string | number", "correct": true, "selected": false },
            { "id": "s6o21u1v2w3x4y5z6a7b8c9d", "option": "c", "text": "string | number | undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s6q08h9i0j1k2l3m4n5o6p7q",
          "title": "Exclude Type",
          "question": "type Colors = 'red' | 'green' | 'blue' | 'yellow';\ntype Primary = Exclude<Colors, 'yellow'>;\nWhat type does Primary represent?",
          "options": [
            { "id": "s6o22v2w3x4y5z6a7b8c9d0e", "option": "a", "text": "'red' | 'green' | 'blue'", "correct": true, "selected": false },
            { "id": "s6o23w3x4y5z6a7b8c9d0e1f", "option": "b", "text": "'yellow'", "correct": false, "selected": false },
            { "id": "s6o24x4y5z6a7b8c9d0e1f2g", "option": "c", "text": "'red' | 'green' | 'blue' | 'yellow'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s6q09i0j1k2l3m4n5o6p7q8r",
          "title": "ReturnType Type",
          "question": "function greet(): string {\n  return 'Hello';\n}\ntype GreetReturn = ReturnType<typeof greet>;\nWhat type does GreetReturn represent?",
          "options": [
            { "id": "s6o25y5z6a7b8c9d0e1f2g3h", "option": "a", "text": "void", "correct": false, "selected": false },
            { "id": "s6o26z6a7b8c9d0e1f2g3h4i", "option": "b", "text": "string", "correct": true, "selected": false },
            { "id": "s6o27a7b8c9d0e1f2g3h4i5j", "option": "c", "text": "number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s6q10j1k2l3m4n5o6p7q8r9s",
          "title": "Parameters Type",
          "question": "function add(a: number, b: number): number {\n  return a + b;\n}\ntype AddParams = Parameters<typeof add>;\nWhat type does AddParams represent?",
          "options": [
            { "id": "s6o28b8c9d0e1f2g3h4i5j6k", "option": "a", "text": "[a: number, b: number]", "correct": true, "selected": false },
            { "id": "s6o29c9d0e1f2g3h4i5j6k7l", "option": "b", "text": "number", "correct": false, "selected": false },
            { "id": "s6o30d0e1f2g3h4i5j6k7l8m", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s6q11k2l3m4n5o6p7q8r9s0t",
          "title": "Uppercase Type",
          "question": "type Upper = Uppercase<'typescript'>;\nWhat type does Upper represent?",
          "options": [
            { "id": "s6o31e1f2g3h4i5j6k7l8m9n", "option": "a", "text": "'TYPESCRIPT'", "correct": true, "selected": false },
            { "id": "s6o32f2g3h4i5j6k7l8m9n0o", "option": "b", "text": "'typescript'", "correct": false, "selected": false },
            { "id": "s6o33g3h4i5j6k7l8m9n0o1p", "option": "c", "text": "'Typescript'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s6q12l3m4n5o6p7q8r9s0t1u",
          "title": "Lowercase Type",
          "question": "type Lower = Lowercase<'HELLO'>;\nWhat type does Lower represent?",
          "options": [
            { "id": "s6o34h4i5j6k7l8m9n0o1p2q", "option": "a", "text": "'HELLO'", "correct": false, "selected": false },
            { "id": "s6o35i5j6k7l8m9n0o1p2q3r", "option": "b", "text": "'hello'", "correct": true, "selected": false },
            { "id": "s6o36j6k7l8m9n0o1p2q3r4s", "option": "c", "text": "'Hello'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s6q13m4n5o6p7q8r9s0t1u2v",
          "title": "Capitalize Type",
          "question": "type Cap = Capitalize<'javascript'>;\nWhat type does Cap represent?",
          "options": [
            { "id": "s6o37k7l8m9n0o1p2q3r4s5t", "option": "a", "text": "'javascript'", "correct": false, "selected": false },
            { "id": "s6o38l8m9n0o1p2q3r4s5t6u", "option": "b", "text": "'JAVASCRIPT'", "correct": false, "selected": false },
            { "id": "s6o39m9n0o1p2q3r4s5t6u7v", "option": "c", "text": "'Javascript'", "correct": true, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "s6q14n5o6p7q8r9s0t1u2v3w",
          "title": "Combining Utility Types",
          "question": "interface Post {\n  id: number;\n  title: string;\n  content: string;\n  author: string;\n}\ntype PostUpdate = Partial<Omit<Post, 'id'>>;\nconst update: PostUpdate = { title: 'New Title' };\nIs this valid?",
          "options": [
            { "id": "s6o40n0o1p2q3r4s5t6u7v8w", "option": "a", "text": "Yes, id is omitted and all other properties are optional", "correct": true, "selected": false },
            { "id": "s6o41o1p2q3r4s5t6u7v8w9x", "option": "b", "text": "No, because id is required", "correct": false, "selected": false },
            { "id": "s6o42p2q3r4s5t6u7v8w9x0y", "option": "c", "text": "No, because title must be a number", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s6q15o6p7q8r9s0t1u2v3w4x",
          "title": "Record with String Values",
          "question": "type UserRoles = Record<string, string>;\nconst roles: UserRoles = { admin: 'Admin' };\nIs this valid?",
          "options": [
            { "id": "s6o43q3r4s5t6u7v8w9x0y1z", "option": "a", "text": "Yes, Record<string, string> allows any string key and value", "correct": true, "selected": false },
            { "id": "s6o44r4s5t6u7v8w9x0y1z2a", "option": "b", "text": "No, because the key must be a number", "correct": false, "selected": false },
            { "id": "s6o45s5t6u7v8w9x0y1z2a3b", "option": "c", "text": "No, because the value must be a number", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s6q16p7q8r9s0t1u2v3w4x5y",
          "title": "Exclude with Union",
          "question": "type Response = 'success' | 'error' | 'loading';\ntype Ready = Exclude<Response, 'loading'>;\nconst status: Ready = 'loading';\nIs this valid?",
          "options": [
            { "id": "s6o46t6u7v8w9x0y1z2a3b4c", "option": "a", "text": "Yes, 'loading' is valid", "correct": false, "selected": false },
            { "id": "s6o47u7v8w9x0y1z2a3b4c5d", "option": "b", "text": "No, because 'loading' is excluded", "correct": true, "selected": false },
            { "id": "s6o48v8w9x0y1z2a3b4c5d6e", "option": "c", "text": "No, because status must be 'error'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s6q17q8r9s0t1u2v3w4x5y6z",
          "title": "ReturnType with Async",
          "question": "async function fetchData(): Promise<number> {\n  return 42;\n}\ntype Data = ReturnType<typeof fetchData>;\nWhat type does Data represent?",
          "options": [
            { "id": "s6o49w9x0y1z2a3b4c5d6e7f", "option": "a", "text": "number", "correct": false, "selected": false },
            { "id": "s6o50x0y1z2a3b4c5d6e7f8g", "option": "b", "text": "Promise<number>", "correct": true, "selected": false },
            { "id": "s6o51y1z2a3b4c5d6e7f8g9h", "option": "c", "text": "void", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s6q18r9s0t1u2v3w4x5y6z7a",
          "title": "Uncapitalize Type",
          "question": "type Uncap = Uncapitalize<'World'>;\nWhat type does Uncap represent?",
          "options": [
            { "id": "s6o52z2a3b4c5d6e7f8g9h0i", "option": "a", "text": "'world'", "correct": true, "selected": false },
            { "id": "s6o53a3b4c5d6e7f8g9h0i1j", "option": "b", "text": "'World'", "correct": false, "selected": false },
            { "id": "s6o54b4c5d6e7f8g9h0i1j2k", "option": "c", "text": "'wORLD'", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "s6q19s0t1u2v3w4x5y6z7a8b",
          "title": "Readonly with Array",
          "question": "type Numbers = readonly number[];\nconst nums: Numbers = [1, 2, 3];\nnums.push(4);\nWhat happens?",
          "options": [
            { "id": "s6o55c5d6e7f8g9h0i1j2k3l", "option": "a", "text": "It works and 4 is added", "correct": false, "selected": false },
            { "id": "s6o56d6e7f8g9h0i1j2k3l4m", "option": "b", "text": "TypeScript shows an error because push is not allowed", "correct": true, "selected": false },
            { "id": "s6o57e7f8g9h0i1j2k3l4m5n", "option": "c", "text": "It creates a new array", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "s6q20t1u2v3w4x5y6z7a8b9c",
          "title": "Parameters with Optional",
          "question": "function log(message: string, level?: string): void {\n  console.log(message);\n}\ntype LogParams = Parameters<typeof log>;\nWhat type does LogParams represent?",
          "options": [
            { "id": "s6o58f8g9h0i1j2k3l4m5n6o", "option": "a", "text": "[message: string, level?: string]", "correct": true, "selected": false },
            { "id": "s6o59g9h0i1j2k3l4m5n6o7p", "option": "b", "text": "[message: string, level: string]", "correct": false, "selected": false },
            { "id": "s6o60h0i1j2k3l4m5n6o7p8q", "option": "c", "text": "string", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "s6t01a2b3c4d5e6f7g8h9i0j",
          "title": "Create a Partial Update Function",
          "description": "Create an interface called %User% with %id% (number), %name% (string), and %email% (string). Then create a function called %updateUser% that takes an %id% (number) and a %updates% parameter. The %updates% parameter should use %Partial% so the caller can update any combination of properties. The function should create a default user object with the provided id, then merge the updates onto it using the spread operator, and finally return the merged object. Call the function with different updates to test it.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface User {\n  id: number;\n  name: string;\n  email: string;\n}\nfunction updateUser(id: number, updates: Partial<User>): User {\n  const defaultUser: User = { id, name: 'Default Name', email: 'default@email.com' };\n  return { ...defaultUser, ...updates };\n}\nconst result1 = updateUser(1, { name: 'Mike' });\nconsole.log(result1);\nconst result2 = updateUser(2, { email: 'new@email.com' });\nconsole.log(result2);\nconst result3 = updateUser(3, { name: 'Jane', email: 'jane@email.com' });\nconsole.log(result3);",
          "done": false
        },
        {
          "id": "s6t02b3c4d5e6f7g8h9i0j1k",
          "title": "Create a Readonly Config",
          "description": "Create an interface called %AppConfig% with %apiUrl% (string), %timeout% (number), and %retries% (number). Then create a type called %ReadonlyConfig% using the %Readonly% utility type. Create a constant variable called %config% using this readonly type and assign it values. Finally, try to change the %timeout% property to a different value and observe the TypeScript error.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface AppConfig {\n  apiUrl: string;\n  timeout: number;\n  retries: number;\n}\ntype ReadonlyConfig = Readonly<AppConfig>;\nconst config: ReadonlyConfig = {\n  apiUrl: 'https://api.com',\n  timeout: 5000,\n  retries: 3\n};\n// config.timeout = 6000; // Error: Cannot assign to 'timeout' because it is a read-only property",
          "done": false
        },
        {
          "id": "s6t03c4d5e6f7g8h9i0j1k2l",
          "title": "Create a Pick Type for User Preview",
          "description": "Create an interface called %User% with %id% (number), %name% (string), %email% (string), and %age% (number). Then create a type called %UserPreview% using the %Pick% utility type that only includes %id%, %name%, and %email%. Finally, create a variable called %user% using this new type and assign it values for the picked properties.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\ntype UserPreview = Pick<User, 'id' | 'name' | 'email'>;\nconst user: UserPreview = { id: 1, name: 'Mike', email: 'mike@email.com' };",
          "done": false
        },
        {
          "id": "s6t04d5e6f7g8h9i0j1k2l3m",
          "title": "Create an Omit Type for Safe Employee",
          "description": "Create an interface called %Employee% with %id% (number), %name% (string), %salary% (number), and %password% (string). Then create a type called %PublicEmployee% using the %Omit% utility type to exclude %salary% and %password% (since these are sensitive). Finally, create a variable called %employee% using this new type and assign it values.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "interface Employee {\n  id: number;\n  name: string;\n  salary: number;\n  password: string;\n}\ntype PublicEmployee = Omit<Employee, 'salary' | 'password'>;\nconst employee: PublicEmployee = { id: 1, name: 'Alice' };",
          "done": false
        },
        {
          "id": "s6t05e6f7g8h9i0j1k2l3m4n",
          "title": "Create a Record for Product Catalog",
          "description": "Create a type called %ProductId% which is a %string%. Create a type called %Product% with %name% (string) and %price% (number). Then use the %Record% utility type to create a type called %Catalog% that maps %ProductId% keys to %Product% values. Finally, create a variable called %catalog% using this type and populate it with at least two products with different IDs.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type ProductId = string;\ntype Product = { name: string; price: number };\ntype Catalog = Record<ProductId, Product>;\nconst catalog: Catalog = {\n  'p1': { name: 'Laptop', price: 999 },\n  'p2': { name: 'Phone', price: 599 }\n};",
          "done": false
        },
        {
          "id": "s6t06f7g8h9i0j1k2l3m4n5o",
          "title": "Create a ReturnType for a Function",
          "description": "Create a function called %getProduct% that returns an object with %id% (number) and %name% (string) (you can hardcode the values). Then use the %ReturnType% utility type to extract the return type into a type called %Product%. Finally, create a variable called %product% using this new type and assign it different values (not using the function).",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "function getProduct() {\n  return { id: 1, name: 'Laptop' };\n}\ntype Product = ReturnType<typeof getProduct>;\nconst product: Product = { id: 2, name: 'Phone' };",
          "done": false
        },
        {
          "id": "s6t07g8h9i0j1k2l3m4n5o6p",
          "title": "Create a Capitalized Name Type",
          "description": "Create a type called %Name% that is a union of %'john'%, %'jane'%, and %'bob'%. Then create a type called %CapitalizedName% using the %Capitalize% utility type on the %Name% type. Finally, create a variable called %name% using %CapitalizedName% and assign it one of the capitalized values.",
          "result": "",
          "note": "implement in your editor / console",
          "solution": "type Name = 'john' | 'jane' | 'bob';\ntype CapitalizedName = Capitalize<Name>;\nconst name: CapitalizedName = 'John';",
          "done": false
        }
      ]
    }
  ]
}