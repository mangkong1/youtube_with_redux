import S from "./styles";
import { Link } from "react-router-dom";

import ListIcon from "./assets/images/list.png";
import YoutubeLogo from "./assets/images/yt_logo.png";
import KeyBoard from "./assets/images/keyboard.png";
import SearchIcon from "./assets/images/search.png";
import Profile from "./assets/images/profile.jpeg";
import Camcoder from "./assets/images/camcoder.png";
import SoundSearchIcon from "./assets/images/mic.png";
import NotifyIcon from "./assets/images/notify.svg";
import NotifyOffIcon from "./assets/images/notify_off.svg";
import useNotifyState from "./hooks/UseNotifyState";

import useLoginState from "@shared/states/UseLoginAtom";
import useAsideExpandState from "@shared/states/UseAsideExpandAtom";

const Header = () => {
  const [login, loginAction, logoutAction] = useLoginState();
  const [, toggleAsideExpand] = useAsideExpandState();
  const [notify, notifyAction] = useNotifyState();

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderLeft>
          <S.MenuIcon onClick={toggleAsideExpand} src={ListIcon} />
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
          {notify ? <S.HeaderIcon src={NotifyIcon} onClick={notifyAction} /> : <S.HeaderIcon src={NotifyOffIcon} onClick={notifyAction} />}
          {login ? (
            <>
              <S.Profile src={Profile} />
              <S.LoginBtn $logout onClick={logoutAction}>
                로그아웃
              </S.LoginBtn>
            </>
          ) : (
            <S.LoginBtn $login onClick={loginAction}>
              로그인
            </S.LoginBtn>
          )}
        </S.HeaderRight>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
