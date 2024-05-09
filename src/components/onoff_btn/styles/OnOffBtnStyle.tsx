import styled from "styled-components";

export const ToggleBtnContainer = styled.button<{ $active: boolean }>`
  background-color: ${(props) => (props.$active ? "black" : "white")};
  color: ${(props) => (props.$active ? "white" : "black")};
  width: 56px;
  height: 36px;
  border: ${(props) => (props.$active ? "1px solid white" : "1px solid black")};
  border-radius: 18px;
  cursor: pointer;
  font-size: ${(props) => (props.$active ? "10px" : "initial")};
`;
