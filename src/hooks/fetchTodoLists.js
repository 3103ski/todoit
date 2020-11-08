// React
import { useContext, useEffect } from 'react';
// Contexts
import { firebase } from '../lib/firebase.prod';
import { TodoContentContext } from '../contexts/todosContext';

function GetUserCollection(target, userId) {
	const [todoContext] = useContext(TodoContentContext);
	useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			todoContext.fetchTodoListsStart();
			db.collection(target)
				.where('ownerId', '==', `${userId}`)
				.onSnapshot(function (data) {
					const allLists = data.docs.map((doc) => {
						return { ...doc.data(), id: doc.id };
					});
					todoContext.fetchTodoListsSuccess(allLists);
				});
		};
		fetchData();
	}, [target, userId, firebase]);
}

export default GetUserCollection;
