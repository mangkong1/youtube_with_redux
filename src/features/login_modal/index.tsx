import { useCookies } from "react-cookie";
import { useState } from "react";

import S from "./styles";

import useLoginState from "@shared/states/UseLoginAtom";
import useLoginModalOpenState from "@shared/states/UseLoginModalOpenAtom";
import JoinModal from "@features/join_modal";
// import useFetchPost from "@shared/hooks/UseFetchPost";
import useFetch from "@shared/hooks/UseFetch";

const LoginModal = () => {
  const [, loginAction] = useLoginState();
  const [, clickModalOpen] = useLoginModalOpenState();
  const [openJoinPage, setOpenJoinPage] = useState(false);
  const [cookies, setCookie] = useCookies(["id", "pw"]);
  // const [data, fetchData] = useFetchPost("http://www.stageus.co.kr:3000/auth");
  const [data, fetchData] = useFetch("http://www.stageus.co.kr:3000/auth");

  const handleIdChange = (props: string) => {
    setCookie("id", props);
  };

  const handelpwChange = (props: string) => {
    setCookie("pw", props);
  };

  const handleLogin = async () => {
    if (fetchData) {
      const response = await fetchData("POST", { id: cookies.id, pw: cookies.pw });
      console.log(response);
    }
    clickModalOpen();
    // loginAction();
  };

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.ModalCloseBtn onClick={() => clickModalOpen()}>X</S.ModalCloseBtn>
        <S.ModalTitle>로그인</S.ModalTitle>
        <S.ModalInput
          placeholder="아이디"
          value={cookies.id}
          onChange={(e) => {
            handleIdChange(e.target.value);
          }}
        />
        <S.ModalInput
          placeholder="비밀번호"
          value={cookies.pw}
          onChange={(e) => {
            handelpwChange(e.target.value);
          }}
        />
        <S.ModalBtn onClick={handleLogin}>로그인</S.ModalBtn>
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
