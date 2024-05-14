import { Link } from "react-router-dom";
import { SetterOrUpdater } from "recoil";

import S from "./styles";
import AsideData from "./services/AsideData";
import AsideElem from "./views/AsideElem";
import AsideExpandElem from "./views/AsideExpandElem";

import useAsideExpandState from "../../shared/UseAsideExpandAtom";

const Aside = () => {
  const [asideExpanded] = useAsideExpandState() as [boolean, SetterOrUpdater<boolean>];

  return (
    <>
      {asideExpanded ? (
        <S.AsideContainer>
          {AsideData.map((data) => (
            <Link key={data.id} to={data.path}>
              <AsideElem data={data} />
            </Link>
          ))}
        </S.AsideContainer>
      ) : (
        <S.AsideExpandContainer>
          {AsideData.map((data) => (
            <Link key={data.id} to={data.path}>
              <AsideExpandElem data={data} />
            </Link>
          ))}
        </S.AsideExpandContainer>
      )}
      {/* <S.AsideContainer asideExpanded={asideExpanded}>
        {AsideData.map((data) => (
          <Link key={data.id} to={data.path}>
            <AsideElem data={data} />
          </Link>
        ))}
      </S.AsideContainer> */}
    </>
  );
};

export default Aside;
