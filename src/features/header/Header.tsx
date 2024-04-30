import React from "react";
import * as S from "./styles/HeaderStyle";
import ListIcon from "./assets/images/list.png";
import YoutubeLogo from "./assets/images/yt_logo.png";
import KeyBoard from "./assets/images/keyboard.png";
import SearchIcon from "./assets/images/search.png";
import Profile from "./assets/images/profile.jpeg";
import Camcoder from "./assets/images/camcoder.png";
import Bell from "./assets/images/bell.png";
import SoundSearchIcon from "./assets/images/mic.png";
import { Link } from "react-router-dom";

const Header = () => {
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
          <S.Profile src={Profile} />
        </S.HeaderRight>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
