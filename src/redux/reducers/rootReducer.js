const rootReducer = (state = {number: 0}, action)=> {
    // if (action.type === 'ADD_NUMBER'){
    //     return{
    //         number: state.number + 1
    //     }
    // }
    // else
    // return state
    // }
    switch (action.type) {
        case "ADD_NUMBER":
          return {number: state.number+1};
        case "SUB_NUMBER":
          return {number: state.number-1};
        default:
          return state;
      }
    };
    
    export default rootReducer