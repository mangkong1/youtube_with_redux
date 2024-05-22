// import { useCookies } from "react-cookie";
import { useState } from "react";

import S from "./styles";

import useLoginState from "@shared/states/UseLoginAtom";
import useLoginModalOpenState from "@shared/states/UseLoginModalOpenAtom";
import JoinModal from "@features/join_modal";

const LoginModal = () => {
  const [, loginAction] = useLoginState();
  const [, clickModalOpen] = useLoginModalOpenState();
  const [openJoinPage, setOpenJoinPage] = useState(false);
  // const [cookies, setCookie] = useCookies(["userId", "password"]);

  // const handleIdChange = (e: string) => {
  //   setCookie("userId", e.target.value);
  // };

  // const handelPasswordChange = (e: string) => {
  //   setCookie("password", e.target.value);
  // };

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.ModalCloseBtn onClick={() => clickModalOpen()}>X</S.ModalCloseBtn>
        <S.ModalTitle>로그인</S.ModalTitle>
        {/* <S.ModalInput placeholder="아이디" value={cookies.userId || ""} onChange={handleIdChange} /> */}
        {/* <S.ModalInput placeholder="비밀번호" value={cookies.password || ""} onChange={handelPasswordChange} /> */}
        <S.ModalInput placeholder="아이디" />
        <S.ModalInput placeholder="비밀번호" />
        <S.ModalBtn
          onClick={() => {
            clickModalOpen();
            loginAction();
          }}
        >
          로그인
        </S.ModalBtn>
        <S.ModalBtn
          onClick={() => {
            setOpenJoinPage(true);
          }}
        >
          회원가입
        </S.ModalBtn>
        {openJoinPage && <JoinModal />}
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default LoginModal;
