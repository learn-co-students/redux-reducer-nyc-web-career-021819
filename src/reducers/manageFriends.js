export function manageFriends(state, action){
  // { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Joe', hometown: 'Boston', id: 101 } ]

  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let newFriends = state.friends.filter(function( obj ) {
      return obj.id !== action.id;
      })
      return {...state, friends: [...newFriends]}
    default:
      return state;
  }
}

// {
//   type: "ADD_FRIEND",
//   friend: {
//     name: 'Joe',
//     hometown: 'Boston',
//     id: 101
//   }
