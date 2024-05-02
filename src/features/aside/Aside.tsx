import React from "react";
import * as S from "./styles/AsideStyle";
import AsideData from "./services/AsideData";
import AsideElem from "./views/AsideElem";

const Aside = () => {
  return (
    <>
      <S.AsideContainer>
        {AsideData.map((data) => {
          return <AsideElem data={data} />;
        })}
      </S.AsideContainer>
    </>
  );
};

export default Aside;
