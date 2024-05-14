import styled from "styled-components";

export default {
  MainChannelContainer: styled.main`
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    margin-top: 56px;
    padding: 0 72px;

    @media (max-width: 1200px) {
      width: 100%;
    }
  `,

  ChannelContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* max-width: 1000px; */
    margin: 0 60px 0 60px;
  `,
};
