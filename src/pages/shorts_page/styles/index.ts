import styled from "styled-components";

export default {
  MainShortsContainer: styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    margin-top: 56px;
    margin-left: 70px;
  `,

  ShortsContainer: styled.section`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
  `,

  ShortsVideoContainer: styled.article`
    background-color: black;
    border-radius: 10px;
    width: 450px;
  `,

  ShortsVideoImg: styled.img`
    width: 100%;
    border-radius: 10px;
    object-fit: contain;
    aspect-ratio: 9/16;
  `,

  ShortsVideoInfo: styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 10px 0;
  `,

  ShortsProfileImg: styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin: 0 12px 0 24px;
    object-fit: cover;
  `,

  ShortsProfileName: styled.p`
    font-size: 14px;
    margin-right: 12px;
    color: white;
  `,
};
