import styled from "styled-components";

export default {
  ModalContainer: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  ModalContent: styled.div`
    width: 300px;
    height: 350px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  `,

  ModalCloseBtn: styled.button`
    align-self: flex-end;
    background-color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin: 8px;
  `,

  ModalTitle: styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin: 16px;
  `,

  ModalInput: styled.input`
    width: 70%;
    height: 40px;
    margin: 8px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 8px;
  `,

  ModalBtn: styled.button`
    width: 50%;
    border-radius: 10px;
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 16px;
    cursor: pointer;
    color: white;
    background-color: black;
    border: 2px solid white;
  `,
};
