import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slices";
import { StyledFoodItem } from "./styles";

export default function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer.cart);

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.phone, 0);
  };

  return (
    <div>
      <h3>Warenkorb</h3>
      {cartItems.length === 0 ? (
        <p>Der Warenkorb ist leer.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <StyledFoodItem key={item.id}>
                {item.name} - Preis: {item.phone}
                <button onClick={() => handleRemoveFromCart(item)}>
                  Aus dem Warenkorb entfernen
                </button>
              </StyledFoodItem>
            ))}
          </ul>
          <p>Gesamtpreis: {calculateTotalPrice()}</p>
        </>
      )}
    </div>
  );
}
