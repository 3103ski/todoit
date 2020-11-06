const fakeTodoListOne = {
	id: 50,
	name: 'fake list one',
	owner: '128934hjggh42387gf',
	createdOn: `${new Date().getMonth} - ${new Date().getDate} - ${new Date().getFullYear}`,
	todos: [
		{ isComplete: false, name: 'do something', list: 'fake list one', id: 1 },
		{ isComplete: false, name: 'do something again', list: 'fake list one', id: 2 },
		{ isComplete: true, name: 'do something for the third time', list: 'fake list one', id: 3 },
		{ isComplete: false, name: 'do something tomorrow instead', list: 'fake list one', id: 4 },
	],
};
const fakeTodoListTwo = {
	id: 51,
	name: 'fake list two',
	owner: '128934hjggh42387gf',
	createdOn: `${new Date().getMonth} - ${new Date().getDate} - ${new Date().getFullYear}`,
	todos: [
		{ isComplete: true, name: 'Pick up dry cleaning', list: 'fake list two', id: 5 },
		{ isComplete: false, name: 'Get groceries', list: 'fake list two', id: 6 },
		{ isComplete: true, name: 'Study', list: 'fake list two', id: 7 },
		{ isComplete: false, name: 'Gym', list: 'fake list two', id: 8 },
	],
};

export const fakeData = {
	username: 'bjastski',
	name: 'Bryan',
	email: 'bjastski@gmail.com',
	userId: '128934hjggh42387gf',
	allTodoLists: [fakeTodoListOne, fakeTodoListTwo],
};
