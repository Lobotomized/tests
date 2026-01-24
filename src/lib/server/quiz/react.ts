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
	}
];

export default questions;