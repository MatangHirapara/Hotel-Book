const notify = (state = 0, action) => {
  
  switch(action.type){
    case "INCREMENTAL":
      return state + 1; 
    case "DECREMENTAL":
      return state - 1;
    default:
      return state;
  }
}

export default notify;