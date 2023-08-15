import { useGetAllFoodsQuery } from "../api/foodsApi";
import { StyledFoodItem } from "./styles";

export default function FoodsList() {
  const { data, error, isLoading } = useGetAllFoodsQuery();
  console.log(data);
  return (
    <div>
      {error ? (
        <>oh no, error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>Gerichte</h3>
          <ul>
            {data.map((food) => (
              <StyledFoodItem key={food.id}>
                <p>Gericht: {food.name}</p>
                <p>Preis: {food.phone}</p>
              </StyledFoodItem>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
