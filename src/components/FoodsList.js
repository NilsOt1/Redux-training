import { useGetAllFoodsQuery } from "../api/foodsApi";
import FoodCard from "./FoodCard";

export default function FoodsList() {
  const { data, error, isLoading } = useGetAllFoodsQuery();
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
              <FoodCard key={food.id} food={food} />
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
