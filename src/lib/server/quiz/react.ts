import type { QuestionFull } from '$lib/quiz/types';
import { textSources } from '$lib/server/quiz/sources';



const questions: QuestionFull[] = [
	{
		id: 1,
		prompt: 'What does the following code log?',
		topic: 'react',
		code: `
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Inner() {
	useEffect(() => {
		console.log('Inner');
	}, []);

	return null;
}

function Middle() {
	useEffect(() => {
		console.log('Middle');
	}, []);

	return <Inner />;
}
function Outer() {
	useEffect(() => {
		console.log('Outer');
	}, []);

  	return <Middle />;
}

ReactDOM.render(<Outer />, document.getElementById('root'));
		`,
		correctIndex: 0,
		sources: [textSources.useEffect],
        		options: [
			'Logs "Inner", "Middle", "Outer"',
			'Logs "Middle", "Outer", "Inner"',
			'Logs "Outer", "Middle", "Inner"',
			'Logs "Outer", "Inner", "Middle"',
			'Logs "Inner", "Outer", "Middle"',
			'Logs "Middle", "Inner", "Outer"'
		],
	},
	{
		id: 2,
		prompt: 'What does the following code log?',
		topic: 'react',
		code: `
import React, { useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'

function Inner() {
	useEffect(() => {
		console.log('Inner');
	}, []);

	return null;
}

function Middle() {
	useEffect(() => {
		console.log('Middle 1');
	}, []);

	useLayoutEffect(() => {
		console.log('Middle 2');
	}, [])
	return <Inner />;
}
function Outer() {
	useEffect(() => {
		console.log('Outer 1');
	}, []);

	useEffect(() => {
		console.log('Outer 2')
	}, [])

	return <Middle />;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Outer />)
`,

		correctIndex: 2,
		sources: [textSources.useEffect],
        		options: [
			'Logs "Middle 2", "Inner", "Outer 1", "Outer 2", "Middle 1"',
			'Logs "Outer 1", "Outer 2", "Middle 1", "Middle 2", "Inner"',
			'Logs "Middle 2", "Inner", "Middle 1", "Outer 1", "Outer 2"',
			'Logs "Outer 1", "Outer 2", "Middle 1", "Middle 2", "Inner"',
			'Logs "Middle 1", "Inner", "Outer 1", "Outer 2", "Middle 2"',
			'Logs "Middle 2", "Inner", "Middle 1", "Outer 2", "Outer 1"'
		],
	},
	{
		id: 3,
		prompt: 'What does the following code log?',
		topic: 'react',
		code: `
import React, { useState, useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'

function Inner({setCounter}) {
	useEffect(() => {
		console.log('Inner');
    	setCounter(1);
	}, []);

	return null;
}

function Middle({ setCounter }) {
	useLayoutEffect(() => {
		console.log('Middle 2');
	}, [])
	return <Inner setCounter={setCounter} />;
}
function Outer() {
  const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log('Outer ' + counter);
	}, [counter]);

	useEffect(() => {
		console.log('Outer 2')
	}, [])

	useLayoutEffect(() => {
		console.log('Outer 3');
	}, [])
  
	return <Middle setCounter={setCounter} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Outer />)
`,

		correctIndex: 5,
		sources: [textSources.useEffect],
        		options: [
			'Logs "Outer 0", "Outer 1", "Outer 2", "Outer 3", "Middle", "Inner"',
			'Logs "Inner", "Middle", "Outer 3", "Outer 0", "Outer 2", "Outer 1"',
			'Logs "Middle", "Outer 3", "Inner", "Outer 0", "Outer 1", "Outer 2"',
			'Logs "Inner", "Middle", "Outer 0", "Outer 2", "Outer 3", "Outer 1"',
			'Logs "Outer 3", "Middle", "Inner", "Outer 0", "Outer 2", "Outer 1"',
			'Logs "Middle", "Outer 3", "Inner", "Outer 0", "Outer 2", "Outer 1"'
		],
	},
	{
		id: 4,
		prompt: 'What does the following code log?',
		topic: 'react',
		code: `
import React, { useState, useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'

function Inner({ setCounter }) {
	useEffect(() => {
		console.log('Inner');
    	setCounter(5);
	}, []);

	return null;
}

function Middle({ setCounter }) {
	useEffect(() => {
		console.log('Middle');
		setCounter(10);
	}, [])
	return <Inner setCounter={setCounter} />;
}

function Outer() {
  const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log('Outer ' + counter);
	}, [counter]);
  
	return <Middle setCounter={setCounter} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Outer />)
`,

		correctIndex: 0,
		sources: [textSources.useEffect],
		options: [
			'Logs "Inner", "Middle", "Outer 0", "Outer 10"',
			'Logs "Outer 0", "Middle", "Inner", "Outer 10"',
			'Logs "Middle", "Outer 0", "Inner", "Outer 10"',
			'Logs "Inner", "Outer 0", "Middle", "Outer 10"',
			'Logs "Inner", "Middle", "Outer 0", "Inner", "Middle", "Outer 10"',
			'Logs "Inner", "Middle", "Outer 10"',
		],
	},
	{
		id: 5,
		prompt: 'What does the following code log?',
		topic: 'react',
		code: `import React, { useState, useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'

function Inner({ setCounter }) {
	useEffect(() => {
		console.log('Inner');
		setCounter(5);
		return () => {
			console.log('Inner Cleanup')
		}
	}, []);

	return null;
}

function Middle({ setCounter }) {
  useEffect(() => {
    console.log('Middle');
    	setCounter(10);
    return () => {
      console.log('Middle Cleanup')
    }
  }, [])
	return <Inner setCounter={setCounter} />;
}

function Outer() {
  const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log('Outer ' + counter);

		return () => {
			console.log('Outer Cleanup ' + counter)
		}
	}, [counter]);
  
	return <Middle setCounter={setCounter} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Outer />)
`,

		correctIndex: 1,
		sources: [textSources.useEffect, textSources.useState],
		options: [
			'Logs "Outer 0", "Middle", "Inner", "Outer 10"',
			'Logs "Inner", "Middle", "Outer 0", "Outer Cleanup 0", "Outer 10"',
			'Logs "Inner", "Middle", "Outer 0", "Outer Cleanup 0", "Outer 5", "Outer Cleanup 5", "Outer 10"',
			'Logs "Inner", "Middle", "Outer 0", "Middle Cleanup", "Outer Cleanup 0", "Outer 10"',
			'Logs "Inner", "Middle", "Outer 0", "Inner Cleanup", "Middle Cleanup", "Outer Cleanup 0", "Outer 10"',
			'Logs "Outer 0", "Outer Cleanup 0", "Middle", "Inner",  "Outer 10"',
			'Logs "Inner", "Middle", "Outer 0", "Outer Cleanup 10", "Outer 10"',
		],
	},
	{
		id: 6,
		prompt: 'What does the following code log?',
		topic: 'react',
		code: `import React, { useState, useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'

function Inner() {
	console.log('Inner');

	useEffect(() => {
		console.log('Inner Effect');
	}, []);
  
	useLayoutEffect(() => {
		console.log('Inner Layout Effect');
	}, []);

	return null;
}

function Middle() {
  	console.log('Middle');

	useEffect(() => {
		console.log('Middle Effect');
	}, []);
  
	useLayoutEffect(() => {
		console.log('Middle Layout Effect');
	}, []);
	return <Inner />;
}

function Outer() {
	console.log('Outer');
 
	useEffect(() => {
		console.log('Outer Effect');
	}, []);
  
	useLayoutEffect(() => {
		console.log('Outer Layout Effect');
	}, []);

	return <Middle />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Outer />)
`,

		correctIndex: 4,
		sources: [textSources.useEffect, textSources.useLayoutEffect],
		options: [
			'Logs "Inner", "Middle", "Outer", "Inner Layout Effect", "Middle Layout Effect", "Outer Layout Effect", "Inner Effect", "Middle Effect", "Outer Effect"',
			'Logs "Inner", "Middle", "Outer", "Inner Effect", "Middle Effect", "Outer Effect", "Inner Layout Effect", "Middle Layout Effect", "Outer Layout Effect"',
			'Logs "Inner", "Middle", "Outer", "Outer Layout Effect", "Middle Layout Effect", "Inner Layout Effect", "Outer Effect", "Middle Effect", "Inner Effect"',
			'Logs "Outer", "Middle", "Inner", "Outer Layout Effect", "Middle Layout Effect", "Inner Layout Effect", "Inner Effect", "Middle Effect", "Outer Effect"',
			'Logs "Outer", "Middle", "Inner", "Inner Layout Effect", "Middle Layout Effect", "Outer Layout Effect", "Inner Effect", "Middle Effect", "Outer Effect"',
			'Logs "Outer", "Middle", "Inner", "Outer Layout Effect", "Middle Layout Effect", "Inner Layout Effect", "Outer Effect", "Middle Effect", "Inner Effect"',
		],
	},
	{
		id: 7,
		prompt: 'What does the following code log?',
		topic: 'react',
		code: `import React, { useState, useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'

function Middle({ setCounter }) {

	useEffect(() => {
    	setCounter(2);
	}, []);
  
	return null;
}

function Outer() {
  const [counter, setCounter] = useState(0)
 
	useEffect(() => {
		console.log('First Effect ' + counter);

    	return () => console.log('Cleanup First')
	}, [counter]);

	useEffect(() => {
		console.log('Second Effect ' + counter);

    	return () => console.log('Cleanup Second')
	}, [counter]);

	return <Middle setCounter={setCounter} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Outer />)i
`,

		correctIndex: 2,
		sources: [textSources.useEffect, textSources.useLayoutEffect],
		options: [
			'Logs "Second Effect 0", "First Effect 0", "Cleanup First", "Cleanup Second", "Second Effect 2", "First Effect 2"',
			'Logs "Second Effect 2", "First Effect 2", "Cleanup First", "Cleanup Second"',
			'Logs "First Effect 0", "Second Effect 0", "Cleanup First", "Cleanup Second", "First Effect 2", "Second Effect 2"',
			'Logs "Second Effect 0", "First Effect 0", "Second Effect 2", "First Effect 2", "Cleanup First", "Cleanup Second"',
			'Logs "First Effect 0", "Second Effect 0", "Cleanup Second", "Cleanup First", "First Effect 2", "Second Effect 2"',
			'Logs "Cleanup First", "Cleanup Second", "Second Effect 2", "First Effect 2"',
		],
	},
	{
		id: 8,
		prompt: 'What does the following code log?',
		topic: 'react',
		code: `import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';

function Component() {
	const [counter, setCounter] = useState(0);

	console.log("Rerender");

	useEffect(() => {
		console.log('Effect');
		setCounter(c => c+=1);

		return () => console.log('Cleanup');
	}, []);

	const memoized = useMemo(() => {
		console.log("Memo");
		return 'Counter is ' + counter;
	}, [counter])
	
	return <div>{memoized}</div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Component />)
`,

		correctIndex: 4,
		sources: [textSources.useEffect],
		options: [
			'Logs "Rerender", "Effect", "Memo", "Rerender", "Effect", "Memo"',
			'Logs "Rerender", "Effect", "Memo", "Rerender", "Memo"',
			'Logs "Rerender", "Memo", "Effect", "Rerender", "Memo", "Rerender"',
			'Logs "Rerender", "Memo", "Effect", "Memo"',
			'Logs "Rerender", "Memo", "Effect", "Rerender", "Memo"',
			'Logs "Rerender", "Memo", "Effect", "Rerender", "Memo", "Effect"',
		],
	},
	{
		id: 9,
		prompt: 'What does the following code log?',
		topic: 'react',
		code: `import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';

function Component() {
  	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log('Effect 1');
    	setCounter(c => c+=1);
	}, []);

	const memoized = useMemo(() => {
		console.log("Memo " + counter);
		return 'Counter is + counter';
	}, [counter])

	useLayoutEffect(() => {
		console.log('Effect 2');
    	setCounter(c => c+=2);
	}, []);

 
	return <div></div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Component />)
`,

		correctIndex: 4,
		sources: [textSources.useEffect],
		options: [
			'"Memo 0", "Effect 1", "Effect 2", "Memo 1", "Memo 2"',
			'"Memo 0", "Effect 2", "Effect 1", "Memo 1", "Memo 2"',
			'"Memo 0", "Effect 2", "Effect 1", "Memo 2"',
			'"Memo 0", "Effect 2", "Memo 1", "Effect 1", "Memo 2"',
			'"Memo 0", "Effect 2", "Memo 1", "Memo 2", "Effect 1"',
			'"Memo 0", "Effect 1", "Memo 2", "Effect 2", "Memo 1"',
		],
	},
	{
		id: 10,
		prompt: 'What does the following code log?',
		topic: 'react',
		code: `import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

function Inner() {
  	useEffect(() => {
      console.log('Inner Effect')
  	}, []);

  	return null;
}

function Middle() {
  	useEffect(() => {
  		  console.log('Middle Effect');
  	}, []);

    useMemo(() => {
      console.log('Middle Memo')
    })

	  return <Inner />;
}

function Outer() {

  	useEffect(() => {
  		  console.log('Outer Effect');
  	}, []);

    useLayoutEffect(() => {
      console.log('Outer Layout')
    }, [])

    useMemo(() => {
      console.log('Outer Memo')
    }, [])

  	return <Middle />;
}

ReactDOM.render(<Outer />, document.getElementById('root'));
`,

		correctIndex: 0,
		sources: [textSources.useEffect],
		options: [
			'"Outer Memo", "Middle Memo", "Outer Layout", "Inner Effect", "Middle Effect", "Outer Effect"', // true answer
			'"Middle Memo", "Outer Memo", "Outer Layout", "Inner Effect", "Middle Effect", "Outer Effect"',
			'"Outer Memo", "Middle Memo", "Outer Layout", "Outer Effect", "Middle Effect", "Inner Effect"',
			'"Outer Memo", "Middle Memo", "Outer Effect", "Middle Effect", "Inner Effect", "Outer Layout"',
			'"Outer Layout", "Outer Memo", "Middle Memo", "Inner Effect", "Middle Effect", "Outer Effect"',
			'"Outer Layout", "Middle Memo", "Outer Memo", "Inner Effect", "Middle Effect", "Outer Effect"',

		],
	}
];

export default questions;