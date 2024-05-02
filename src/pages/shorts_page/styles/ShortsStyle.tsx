import styled from "styled-components";

export const MainShortsContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  margin-top: 56px;
  margin-left: 70px;
`;

export const ShortsContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
`;

export const ShortsVideoContainer = styled.article`
  background-color: black;
  border-radius: 10px;
  width: 450px;
`;

export const ShortsVideoImg = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: contain;
  aspect-ratio: 9/16;
`;

export const ShortsVideoInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 10px 0;
`;

export const ShortsProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 0 12px 0 24px;
  object-fit: cover;
`;

export const ShortsProfileName = styled.p`
  font-size: 14px;
  margin-right: 12px;
  color: white;
`;
