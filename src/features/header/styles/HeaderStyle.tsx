import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  position: fixed; /* fixed는 left와 right로 width:100% 조절 */
  top: 0;
  left: 0;
  padding: 0 22px;
  box-sizing: border-box; /* 어떤 속성을 주던 width보다는 커지지 않게 하는 설정 */
  background-color: white;
  z-index: 1;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const YoutubeLogo = styled.img`
  height: 30px;
  padding: 0 18px 0 14px;
`;

export const Country = styled.p`
  font-size: 10px;
  height: 30px;
  margin-left: -16px;
`;

export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 600px;
`;

export const SearchBar = styled.div`
  border: 1px solid black;
  border-radius: 40px;
  margin-left: 40px;
  height: 40px;
  display: flex;
  flex-grow: 1;
`;

export const SearchInfo = styled.div`
  display: flex;
  align-items: center;
  width: 99%;
`;

export const SearchWord = styled.p`
  display: inline-block;
  text-align: start;
  width: 99%;
  font-size: 16px;
  padding-left: 16px;
`;

export const KeyboardIcon = styled.img`
  display: inline-block;
  text-align: end;
  width: 24px;
  height: 24px;
  padding: 10px;
`;

export const SearchBtn = styled.button`
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 40px;
  z-index: -1;
  border: 1px solid black;
  border-top: none;
  border-bottom: none;
  border-right: none;
  border-radius: 0 40px 40px 0;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const SoundSearchBtn = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 40px 0 12px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.img`
  width: 32px;
  height: 32px;
  border: 1px solid white;
  border-radius: 50%;
  margin: 8px;
`;

export const HeaderIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const LoginBtn = styled.button`
  border: 2px solid black;
  border-radius: 20px;
  padding: 8px;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
  cursor: pointer;
`;
