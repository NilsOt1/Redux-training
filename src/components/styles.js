import { styled } from "styled-components";

export const StyledAppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr;
`;

export const StyledNavigation = styled.nav`
  justify-self: center;
  display: flex;
  gap: 10px;
`;

export const StyledFoodItem = styled.li`
  border: solid 1.5px gray;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  list-style-type: none;
`;
