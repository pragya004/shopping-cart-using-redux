import { useSelector } from "react-redux";

function MenuSelector() {
  const currentstate = useSelector((state) => state.menuReducer);
  const selectedCategory = currentstate.category;

  if (selectedCategory === "all") {
    return currentstate.menudata;
  } else {
    const ret = currentstate.menudata.filter(
      (item) => item.type === selectedCategory
    );
    return ret;
  }
}

export default MenuSelector;
