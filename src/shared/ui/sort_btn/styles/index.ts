import styled, { css } from "styled-components";

export default {
  SortBtnContainer: styled.div`
    display: flex;
    width: 100%;
    padding: 12px 0 0 0;
  `,

  SortBtn: styled.button<{ $isActive: boolean }>`
    margin-right: 12px;
    padding: 8px 12px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    ${(props) =>
      props.$isActive &&
      css`
        background-color: gray;
        color: white;
        border: 1px solid gray;
      `}
  `,
};
