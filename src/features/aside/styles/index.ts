import styled from "styled-components";

export default {
  AsideContainer: styled.aside`
    width: 72px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    /* css변수 선언으로 header-height값과 동일하게 맞춰줘야함 */
    top: 56px;
    z-index: 1;
  `,

  AsideInfo: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 22px;

    &:hover {
      background-color: #d3d3d3;
      border-radius: 10px;
    }
  `,

  AsideIcon: styled.img`
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  `,

  AsideName: styled.p`
    font-size: 12px;
    margin: 0;
    color: black;
  `,
};
