import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  margin-top: 56px;
  margin-left: 72px;
`;

export const MainSection = styled.section`
  margin: 24px 12px;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 350px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  border: 1px solid white;
  border-radius: 10px;
  object-fit: cover;
  aspect-ratio: 16/9;
`;

export const VideoInfoContainer = styled.article`
  display: flex;
  margin-top: 10px;
`;

export const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const VideoInfo = styled.div``;

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const ChannelName = styled.p`
  font-size: 14px;
  margin: 4px 0 4px 0;
`;

export const UploadInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Views = styled.p`
  font-size: 14px;
`;

export const DotIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const UploadDate = styled.p`
  font-size: 14px;
`;
