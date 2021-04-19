import { useSelector } from "react-redux";

function CartItemsSelector() {
  const currentstate = useSelector((state) => state.menuReducer);
  return currentstate.menudata.filter((item) => item.counter > 0);
}

export default CartItemsSelector;
