import styled from "styled-components";

export default {
  MainSection: styled.section`
    margin: 24px 24px 24px 0;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 350px;
  `,

  Thumbnail: styled.img`
    width: 100%;
    border: 1px solid white;
    border-radius: 10px;
    object-fit: cover;
    aspect-ratio: 16/9;
  `,

  VideoInfoContainer: styled.article`
    display: flex;
    margin-top: 10px;
  `,

  ChannelImg: styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 12px;
    object-fit: cover;
  `,

  VideoInfo: styled.div``,

  VideoTitle: styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 6px;
  `,

  ChannelName: styled.p`
    font-size: 14px;
    margin: 4px 0 4px 0;
  `,

  UploadInfo: styled.div`
    display: flex;
    align-items: center;
  `,

  Views: styled.p`
    font-size: 14px;
  `,

  DotIcon: styled.img`
    width: 14px;
    height: 14px;
  `,

  UploadDate: styled.p`
    font-size: 14px;
  `,
};
