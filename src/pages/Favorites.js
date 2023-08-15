import { useDispatch, useSelector } from "react-redux";
import { StyledFoodItem } from "../components/styles";

export default function Favorites() {
  const favs = useSelector((state) => state.reducer.favorites);
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
              </StyledFoodItem>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
