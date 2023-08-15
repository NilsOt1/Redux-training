import { NavLink } from "react-router-dom";
import { StyledNavigation } from "./styles";

export default function Navigation() {
  return (
    <StyledNavigation>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Cart">Warenkorb</NavLink>
      <NavLink to="/Favorites">Favorites</NavLink>
    </StyledNavigation>
  );
}
