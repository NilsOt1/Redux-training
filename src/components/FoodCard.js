import { StyledFoodItem } from "./styles";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices";

export default function FoodCard({ food }) {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <>
      <StyledFoodItem>
        <p>Gericht: {food.name}</p>
        <p>Preis: {food.phone}</p>
        <button type="button" onClick={() => handleAddToCart(food)}>
          In den Warenkorb
        </button>
      </StyledFoodItem>
    </>
  );
}
