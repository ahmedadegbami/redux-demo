const initialState = {
  user: {
    name: ""
  },
  counter: {
    count: 0
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        counter: {
          ...state.counter,
          count: state.counter.count + 1
        }
      };
    case "DECREASE_COUNTER":
      return {
        ...state,
        counter: {
          ...state.counter,
          count: state.counter.count - 1
        }
      };
    case "CHANGE_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
        }
      };
    case "INPUT_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
        }
      };

    default:
      return state;
  }
};

export default mainReducer;
