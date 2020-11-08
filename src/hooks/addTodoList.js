// React
import { useContext, useEffect } from 'react';
// Contexts
import { firebase } from '../lib/firebase.prod';
import { TodoContentContext } from '../contexts/todosContext';

function AddTodoList(newList, userId) {
	const [todoContext] = useContext(TodoContentContext);
	useEffect(() => {
		const addData = async () => {
			const db = firebase.firestore();
			todoContext.fetchTodoListsStart();
			db.collection('todolists')
				.doc(newList.listId)
				.set(newList)
				.then(function () {
					console.log('We successfullly written');
				})
				.catch(function (error) {
					console.log('We have an error: ', error);
				});
		};
		addData();
	}, [userId, firebase, newList]);
}

export default AddTodoList;
