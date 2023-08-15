import { StyledFoodItem } from "./styles";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices";
import { useState } from "react";
import InfoModal from "./InfoModal";
import { useSelector } from "react-redux";
import { addtoFavorite } from "../redux/slices";

export default function FoodCard({ food }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleLikeClick = (item) => {
    dispatch(addtoFavorite(item));
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
        <button txpe="button" onClick={() => handleLikeClick(food)}>
          Like
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
