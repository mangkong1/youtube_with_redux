import { useState } from "react";

import S from "./styles";

import useLoginModalOpenState from "@shared/states/UseLoginModalOpenAtom";

const JoinModal = () => {
  const [, clickModalOpen] = useLoginModalOpenState();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleJoin = async () => {
    const response = await fetch("http://localhost:3000/channel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "id",
        password: "password",
        name: "name",
      }),
    });

    const result = await response.json();
  };

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.ModalCloseBtn onClick={() => clickModalOpen()}>X</S.ModalCloseBtn>
        <S.ModalTitle>회원가입</S.ModalTitle>
        <S.ModalInput placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
        <S.ModalInput placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        <S.ModalInput placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <S.ModalBtn onClick={handleJoin}>회원가입</S.ModalBtn>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default JoinModal;
