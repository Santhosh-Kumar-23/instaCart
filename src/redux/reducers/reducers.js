

const counterReducer = (state = 1, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + action.payload;
      case "DECREMENT":
        return state -action.payload
      case "RESET":
        return (state = 0);
      default:
        return state;
    }
  };
  export default counterReducer;

  
