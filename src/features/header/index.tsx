import S from "./styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ListIcon from "./assets/images/list.png";
import YoutubeLogo from "./assets/images/yt_logo.png";
import KeyBoard from "./assets/images/keyboard.png";
import SearchIcon from "./assets/images/search.png";
import Profile from "./assets/images/profile.jpeg";
import Camcoder from "./assets/images/camcoder.png";
import Bell from "./assets/images/bell.png";
import SoundSearchIcon from "./assets/images/mic.png";
import useLogin from "./hooks/UseLogin";
import useLogout from "./hooks/UseLogout";

interface HeaderProps {
  userReducer: UserDataProps;
}

interface UserDataProps {
  user_data: any | null;
}

const Header = () => {
  const userData = useSelector((state: HeaderProps) => state.userReducer.user_data); //combineReducers 사용시 state를 이런 식으로 불러오는
  const requestLogin = useLogin();
  const requestLogout = useLogout();
  //userData현재 null값으로 나옴

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderLeft>
          <S.MenuIcon src={ListIcon} />
          <Link to="/">
            <S.YoutubeLogo src={YoutubeLogo} />
          </Link>
          <S.Country>KR</S.Country>
        </S.HeaderLeft>

        <S.HeaderCenter>
          <S.SearchBar>
            <S.SearchInfo>
              <S.SearchWord>검색</S.SearchWord>
              <S.KeyboardIcon src={KeyBoard} />
            </S.SearchInfo>
            <S.SearchBtn>
              <S.SearchIcon src={SearchIcon} />
            </S.SearchBtn>
          </S.SearchBar>
          <S.SoundSearchBtn>
            <S.HeaderIcon src={SoundSearchIcon} />
          </S.SoundSearchBtn>
        </S.HeaderCenter>

        <S.HeaderRight>
          <S.HeaderIcon src={Camcoder} />
          <S.HeaderIcon src={Bell} />
          {userData ? (
            <>
              <S.Profile src={Profile} />
              <S.LoginBtn logout onClick={requestLogout}>
                로그아웃
              </S.LoginBtn>
            </>
          ) : (
            <S.LoginBtn login onClick={requestLogin}>
              로그인
            </S.LoginBtn>
          )}
        </S.HeaderRight>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
