import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Navigation from "./components/Navigation";
import { StyledAppGrid } from "./components/styles";

function App() {
  return (
    <StyledAppGrid>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </StyledAppGrid>
  );
}

export default App;
