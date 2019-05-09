const defaultState = {
	friends: []
};

export function manageFriends(preState = defaultState, action) {
	switch (action.type) {
		case 'ADD_FRIEND':
			return { ...preState, friends: [ ...preState.friends, action.friend ] };
		case 'REMOVE_FRIEND':
			const removalIndex = preState.friends.findIndex((friend) => friend.id === action.id);
			return {
				...preState,
				friends: [ ...preState.friends.slice(0, removalIndex), ...preState.friends.slice(removalIndex + 1) ]
			};
		default:
			return preState;
	}
}
