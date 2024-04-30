import React from "react";
import * as S from "./styles/AsideStyle";
import AsideData from "./services/AsideData";
import AsideElem from "./views/AsideElem";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <>
      <S.AsideContainer>
        {AsideData.map((data) => {
          return (
            <Link key={data.id} to={data.path}>
              <AsideElem data={data} />
            </Link>
          );
        })}
      </S.AsideContainer>
    </>
  );
};

export default Aside;
