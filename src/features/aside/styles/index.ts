import styled from "styled-components";

// interface ExpandedProps {
//   asideExpanded: boolean;
// }

export default {
  AsideContainer: styled.aside`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    /* css변수 선언으로 header-height값과 동일하게 맞춰줘야함 */
    margin-top: 56px;
    top: 56px;
    z-index: 1;
  `,

  AsideExpandContainer: styled.aside`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: sticky;
    /* css변수 선언으로 header-height값과 동일하게 맞춰줘야함 */
    margin-top: 56px;
    top: 56px;
    z-index: 1;
  `,

  // AsideContainer: styled.aside<ExpandedProps>`
  //   height: 100vh;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: ${({ asideExpanded }) => (asideExpanded ? "flex-start" : "center")};
  //   position: sticky;
  //   margin-top: 56px;
  //   top: 56px;
  //   z-index: 1;
  // `,

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

  AsideExpandInfo: styled.div`
    display: flex;
    width: 180px;
    align-items: center;
    padding: 16px 22px;

    &:hover {
      background-color: #d3d3d3;
      border-radius: 10px;
    }
  `,

  // AsideInfo: styled.div<ExpandedProps>`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: ${({ asideExpanded }) => (asideExpanded ? "flex-start" : "center")};
  //   width: ${({ asideExpanded }) => (asideExpanded ? "180px" : "auto")};
  //   padding: 16px 22px;

  //   &:hover {
  //     background-color: #d3d3d3;
  //     border-radius: 10px;
  //   }
  // `,

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

  AsideExpandName: styled.p`
    font-size: 16px;
    margin: 0 0 0 10px;
    color: black;
  `,

  // AsideName: styled.p<ExpandedProps>`
  //   font-size: ${({ asideExpanded }) => (asideExpanded ? "16px" : "12px")};
  //   margin: ${({ asideExpanded }) => (asideExpanded ? "0 0 0 10px" : "0")};
  //   color: black;
  // `,
};
