import styled from "styled-components";

export default {
  ChannelVideoContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-wrap: wrap;
    border-bottom: 1px solid black;
  `,

  HomeIndex: styled.h1`
    font-size: 20px;
    font-weight: 700;
    display: inline-block;
    width: 100%;
    margin-top: 24px;
  `,

  Thumbnail: styled.img`
    width: 190px;
    height: 118px;
    border: 1px solid white;
    border-radius: 10px;
    object-fit: cover;
    aspect-ratio: 16/9;
    margin-bottom: 5px;
  `,

  VideoInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    margin: 12px 0 24px 0;
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
