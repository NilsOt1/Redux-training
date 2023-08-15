import { StyledFoodItem } from "./styles";

export default function FoodCard({ food }) {
  return (
    <StyledFoodItem>
      <p>Gericht: {food.name}</p>
      <p>Preis: {food.phone}</p>
    </StyledFoodItem>
  );
}
