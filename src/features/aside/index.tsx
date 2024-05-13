import { Link } from "react-router-dom";
import { SetterOrUpdater } from "recoil";

import S from "./styles";
import AsideData from "./services/AsideData";
import AsideElem from "./views/AsideElem";
import AsideExpandElem from "./views/AsideExpandElem";
// import useAsideExpand from "./hooks/UseAsideExpand";
import useAsideExpandState from "../../shared/states/aside_expand_state/UseAsideExpandAtom";

const Aside = () => {
  // const [asideExpanded, toggleAsideExpand] = useAsideExpand();
  const [asideExpanded] = useAsideExpandState() as [boolean, SetterOrUpdater<boolean>];

  return (
    <>
      <S.AsideContainer>
        {AsideData.map((data) => (
          <Link key={data.id} to={data.path}>
            {asideExpanded ? <AsideExpandElem data={data} /> : <AsideElem data={data} />}
          </Link>
        ))}
      </S.AsideContainer>
    </>
  );
};

export default Aside;
