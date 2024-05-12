import { Link } from "react-router-dom";

import S from "./styles";
import AsideData from "./services/AsideData";
import AsideElem from "./views/AsideElem";
import AsideExpandElem from "./views/AsideExpandElem";
import useAsideExpand from "./hooks/UseAsideExpand";

const Aside = () => {
  const [asideExpanded, toggleAsideExpand] = useAsideExpand();

  return (
    <>
      <S.AsideContainer>
        {AsideData.map((data) => (
          <Link key={data.id} to={data.path}>
            {asideExpanded ? <AsideExpandElem /> : <AsideElem data={data} />}
          </Link>
        ))}
      </S.AsideContainer>
    </>
  );
};

export default Aside;
