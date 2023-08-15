export default function InfoModal({ handleModalClose, food, showModal }) {
  if (!showModal) return null;
  return (
    <section>
      <p>{food.name}</p>
      <p>{food.state}</p>
      <p>{food.street}</p>
      <button type="button" onClick={handleModalClose}>
        Schließen
      </button>
    </section>
  );
}
