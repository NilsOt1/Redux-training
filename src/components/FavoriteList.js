import { useDispatch, useSelector } from "react-redux";
import { StyledFoodItem } from "../components/styles";
import { removeFromFavorite } from "../redux/slices";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.reducer.favorites);

  const handleRemoveLike = (item) => {
    dispatch(removeFromFavorite(item));
  };
  return (
    <div>
      <h3>Lieblinge</h3>
      {favs.length === 0 ? (
        <p>Du hast zur Zeit keine Favoriten</p>
      ) : (
        <>
          <ul>
            {favs.map((item) => (
              <StyledFoodItem key={item.id}>
                {item.name} - Preis: {item.phone}
                <button type="button" onClick={() => handleRemoveLike(item)}>
                  Unlike
                </button>
              </StyledFoodItem>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
