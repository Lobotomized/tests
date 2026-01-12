import type { QuestionFull } from '$lib/quiz/types';
import { textSources, videoSources } from '$lib/server/quiz/sources';



const questions: QuestionFull[] = [
    {
        id: 1,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

const greet = obj.greet;
greet();
obj.greet();
        `,
        correctIndex: 2,
        textSource: textSources.implicitThis,
                options: [
            'Logs "Alice" "Alice"',
            'Logs "Alice" "undefined"',
            'Logs "undefined" "Alice"',
            'Logs "undefined" "undefined"',
            'Logs "Alice"',
            'Logs "undefined"'
        ],
    },

    {
        id: 2,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `function k(){
  this.a = "test";
  this.b = "test2"
}

let obj = {
  a:5,
  b:10
}

let boundK = k.bind(obj)
let p = new boundK()
console.log(p)`,
        correctIndex: 1,
        textSource: textSources.thisHierarchy,
        options: [
            'Logs k { a: 5, b: 10 }',
            'Logs k { a: "test", b: "test2" }',
            'Logs undefined',
            'Logs k { a: 5, b: 10, a: "test", b: "test2" }',
            'Throws an error'
        ],
    },

    {
        id: 3,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `function k(){

}

let obj = {
  a:5,
  b:10
}

let boundK =  k.bind(obj)
let p = new boundK()
console.log(p)`,
        correctIndex: 0,
        textSource: textSources.thisHierarchy,
        options: [
            'Logs k {}',
            'Logs undefined',
            'Logs k { a: 5, b: 10 }',
            'Logs k { a: undefined, b: undefined }',
            'Throws an error'
        ],
    },
    
];

export default questions;