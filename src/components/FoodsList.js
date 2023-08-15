import { useGetAllFoodsQuery } from "../api/foodsApi";
import FoodCard from "./FoodCard";
import { useState } from "react";

export default function FoodsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const { data, error, isLoading } = useGetAllFoodsQuery(currentPage, perPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
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
          <button onClick={handlePrevPage}>Previous Page</button>
          <button onClick={handleNextPage}>Next Page</button>
        </>
      ) : null}
    </div>
  );
}
