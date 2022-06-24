

const room = (state = 0, action) => {

  switch(action.type){
    case "INCREMENTION":
      return state + 1; 
    case "DECREMENTION":
      return state - 1;
    default:
      return state;
  }
  
}

export default room;