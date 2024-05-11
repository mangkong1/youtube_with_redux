import styled from "styled-components";

export default {
  MainChannelContainer: styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    margin-top: 56px;
    margin-left: 72px;
  `,

  ChannelContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin: 0 60px 0 60px;
  `,

  ChannelMainImg: styled.img`
    width: 100%;
    aspect-ratio: 6 / 1;
    border-radius: 10px;
    object-fit: cover;
  `,

  ChannelMainInfo: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 16px;
  `,

  ChannelProfileImg: styled.img`
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 20px;
  `,

  ChannelProfileInfo: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  ChannelProfileName: styled.h1`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
  `,

  ChannelProfileContent: styled.p`
    font-size: 14px;
    margin-bottom: 10px;
  `,

  ChannelTabContainer: styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-top: 30px;
    border-bottom: 1px solid gray;
  `,

  ChannelTabBtn: styled.div<{ $active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    height: 48px;
    margin: 0 12px;
    cursor: pointer;
    border-bottom: ${(props) => (props.$active ? "2px solid black" : "none")};
  `,
};
