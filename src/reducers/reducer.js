const initialState = {
  loading: true,
  menudata: [],
  category: "all",
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MENU":
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        menudata: [...action.payload],
        category: "all",
      };
    case "SET_CATEGORY":
      return {
        ...state,
        loading: false,
        menudata: action.payload.state,
        category: action.payload.category,
      };
    case "ADD_COUNTER":
      const newSetState = [
        ...state.menudata.map((item) => {
          if (item.title === action.payload) {
            return { ...item, counter: item.counter + 1 };
          } else {
            return { ...item };
          }
        }),
      ];

      return {
        ...state,
        loading: false,
        menudata: [...newSetState],
        category: state.category,
      };

    case "SUBTRACT_COUNTER":
      const newState = [
        ...state.menudata.map((item) => {
          if (item.title === action.payload && item.counter > 0) {
            return { ...item, counter: item.counter - 1 };
          } else {
            return { ...item };
          }
        }),
      ];

      return {
        ...state,
        loading: false,
        menudata: [...newState],
        category: state.category,
      };

    case "REMOVE_ITEM_COUNTER":
      const removeitemstate = [
        ...state.menudata.map((item) => {
          if (item.title === action.payload) {
            return { ...item, counter: 0 };
          } else {
            return { ...item };
          }
        }),
      ];

      return {
        ...state,
        loading: false,
        menudata: [...removeitemstate],
        category: state.category,
      };

    case "RESET":
      const resetstate = [
        ...state.menudata.map((item) => {
          return { ...item, counter: 0 };
        }),
      ];

      return {
        ...state,
        loading: false,
        menudata: [...resetstate],
        category: state.category,
      };

    default:
      return initialState;
  }
};
