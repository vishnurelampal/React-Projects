import { useDispatch } from "react-redux";
import { addItem, deleteItem, clearItem } from "../utils/Redux/cartSlice";
export default function ItemList({ items }) {
  const dispatch = useDispatch();
  function handleAddItem(itemAdded) {
    dispatch(addItem(itemAdded));
  }
  function handleDeleteItem(itemAdded) {
    dispatch(deleteItem(itemAdded));
  }
  return (
    <div className="">
      {items.map((val) => (
        <span
          key={val.itemId}
          className="flex justify-between border-b-2 border-amber-200"
        >
          <div>
            <h1 className="font-semibold">{val.name}</h1>
            <h1 className="font-semibold">RS {val.price} /-</h1>
            <p className="italic">{val.description}</p>
          </div>
          <span id="imageSpan" className="">
            <img src={val.imageUrl} alt="Loading" />
            <span className="w-[25px] h-[20px] bg-white border-amber-50 rounded-sm">
              <button
                onClick={() => handleAddItem(val.name)}
                className="cursor-pointer"
              >
                Add +
              </button>
              <button
                onClick={() => handleDeleteItem(val.name)}
                className="cursor-pointer"
              >
                Remove +
              </button>
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}
