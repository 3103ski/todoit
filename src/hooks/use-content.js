import { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../contexts/firebase';

function UseCollectionContent(target) {
	const [content, setContent] = useState([]);
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		firebase
			.firestore()
			.collection(target)
			.get()
			.then((snapshot) => {
				const allContent = snapshot.docs.map((contentObj) => ({
					...contentObj.data(),
					docId: contentObj.id,
				}));
				setContent(allContent);
			})
			.catch((error) => console.log(error.message));
	}, [target, firebase]);
	return { [target]: content };
}

export default UseCollectionContent;
