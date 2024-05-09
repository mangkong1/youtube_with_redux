import styled from "styled-components";

export const ShortsBtnContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 12px;
`;

export const ShortsBtn = styled.button`
  width: 48px;
  height: 48px;
  border: 2px solid gray;
  border-radius: 50%;
  margin-top: 16px;
  font-size: 12px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
    border: none;
  }

  &.active {
    background-color: lightgray;
    border: none;
  }
`;

export const ShortsBtnImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const ShortsBtnInfo = styled.p`
  margin-top: 5px;
  text-align: center;
  font-size: 14px;
`;
