import { useState } from "react";

import S from "./styles";

import useLoginModalOpenState from "@shared/states/UseLoginModalOpenAtom";
import useFetchPost from "@shared/hooks/UseFetchPost";

const JoinModal = () => {
  const [, clickModalOpen] = useLoginModalOpenState();
  const [id, setId] = useState("");
  const [pw, setPassword] = useState("");
  const [name, setName] = useState("");
  const [data, fetchData] = useFetchPost("http://www.stageus.co.kr:3000/channel");

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.ModalCloseBtn onClick={() => clickModalOpen()}>X</S.ModalCloseBtn>
        <S.ModalTitle>회원가입</S.ModalTitle>
        <S.ModalInput placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
        <S.ModalInput placeholder="비밀번호" value={pw} onChange={(e) => setPassword(e.target.value)} />
        <S.ModalInput placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <S.ModalBtn onClick={() => fetchData && fetchData(id, pw, name)}>회원가입</S.ModalBtn>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default JoinModal;
