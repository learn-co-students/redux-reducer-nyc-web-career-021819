const prevState = {
  numberOfPresents: 0
}


export function managePresents(prevState, action) {
  switch (action.type) {
    case "INCREASE":
      return { ...prevState, numberOfPresents: prevState.numberOfPresents+ 1 }
      break;
  
    default:
      return prevState
      break;
  }
}
