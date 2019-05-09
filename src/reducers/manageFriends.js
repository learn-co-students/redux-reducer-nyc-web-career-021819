const prevState = {
  friends: []
}

export function manageFriends(state = prevState, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return (
        {...state,
          friends: [
            ...state.friends,
            action.friend
          ]
        }
      )
      break;
    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id)
      return (
        {...state,
          friends: [
            ...state.friends.slice(0, removalIndex),
            ...state.friends.slice(removalIndex + 1)
          ]
        }
      )
    default:
      return state
  }
}
