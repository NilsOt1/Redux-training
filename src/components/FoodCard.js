import { StyledFoodItem } from "./styles";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices";
import { useState } from "react";
import InfoModal from "./InfoModal";

export default function FoodCard({ food }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <StyledFoodItem>
        <p>Gericht: {food.name}</p>
        <p>Preis: {food.phone}</p>
        <button type="button" onClick={() => handleAddToCart(food)}>
          In den Warenkorb
        </button>
        <button type="button" onClick={handleModalOpen}>
          Infos
        </button>
        <InfoModal
          food={food}
          showModal={showModal}
          handleModalClose={handleModalClose}
        />
      </StyledFoodItem>
    </>
  );
}
