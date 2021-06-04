const FETCH_MENU = "FETCH_MENU";
const SET_CATEGORY = "SET_CATEGORY";
const ADD_COUNTER = "ADD_COUNTER";
const SUBTRACT_COUNTER = "SUBTRACT_COUNTER";
const REMOVE_ITEM_COUNTER = "REMOVE_ITEM_COUNTER";
const RESET = "RESET";

export const fetchMenuData = () => async (dispatch, getState) => {
  const res = await fetch("https://menu-server-json.herokuapp.com/menu");
  const json = await res.json();
  const jsondata = [
    ...json.map((item) => {
      return { ...item, counter: 0 };
    }),
  ];

  dispatch({
    type: FETCH_MENU,
    payload: jsondata,
  });
};

export const setCategory = (selectedCategory) => (dispatch, getState) => {
  const currentData = getState().menuReducer.menudata;

  dispatch({
    type: SET_CATEGORY,
    payload: {
      state: currentData,
      category: selectedCategory,
    },
  });
};

export const addCounter = (id) => (dispatch, getState) => {
  dispatch({
    type: ADD_COUNTER,
    payload: id,
  });
};

export const subtractCounter = (id) => (dispatch, getState) => {
  dispatch({
    type: SUBTRACT_COUNTER,
    payload: id,
  });
};

export const removeItemCounter = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM_COUNTER,
    payload: id,
  });
};

export const reset = () => (dispatch, getState) => {
  dispatch({
    type: RESET,
    payload: "",
  });
};
