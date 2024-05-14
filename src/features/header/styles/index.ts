import styled from "styled-components";

//객체 내부에 선언하면 안됨
interface LoginButtonProps {
  $login?: boolean;
  $logout?: boolean;
}

export default {
  HeaderContainer: styled.header`
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
  `,

  HeaderLeft: styled.div`
    display: flex;
    align-items: center;
  `,

  MenuIcon: styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
  `,

  YoutubeLogo: styled.img`
    height: 30px;
    padding: 0 18px 0 14px;
  `,

  Country: styled.p`
    font-size: 10px;
    height: 30px;
    margin-left: -16px;
  `,

  HeaderCenter: styled.div`
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 600px;
  `,

  SearchBar: styled.div`
    border: 1px solid black;
    border-radius: 40px;
    margin-left: 40px;
    height: 40px;
    display: flex;
    flex-grow: 1;
  `,

  SearchInfo: styled.div`
    display: flex;
    align-items: center;
    width: 99%;
  `,

  SearchWord: styled.p`
    white-space: nowrap;
    display: inline-block;
    text-align: start;
    width: 99%;
    font-size: 16px;
    padding-left: 16px;
  `,

  KeyboardIcon: styled.img`
    display: inline-block;
    text-align: end;
    width: 24px;
    height: 24px;
    padding: 10px;
  `,

  SearchBtn: styled.button`
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
  `,

  SearchIcon: styled.img`
    width: 24px;
    height: 24px;
  `,

  SoundSearchBtn: styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 40px 0 12px;
  `,

  HeaderRight: styled.div`
    display: flex;
    align-items: center;
  `,

  Profile: styled.img`
    width: 32px;
    height: 32px;
    border: 1px solid white;
    border-radius: 50%;
    margin: 8px;
  `,

  HeaderIcon: styled.img`
    width: 24px;
    height: 24px;
    margin: 8px;
  `,

  LoginBtn: styled.button<LoginButtonProps>`
    white-space: nowrap;
    border-radius: 20px;
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    margin: 8px;
    cursor: pointer;
    //styled-components가 알 수 없는 속성 'login'을 전달하려 해 React콘솔에서 오류를 일으킬 수 있다.
    //transient props를 사용해 앞에 $를 붙여 해결
    ${({ $login, $logout }) => {
      if ($login) {
        return `color: black; background-color: white; border: 2px solid black;`;
      } else if ($logout) {
        return `color: white; background-color: black; border: 2px solid black;`;
      }
    }}
  `,
};
