import S from "./styles";
import tabs from "./services/ChannelTabData";

import useChangeTab from "@shared/UseChangeTabAtom";

const ChannelTab = () => {
  const [activeTab, handleActiveTab] = useChangeTab();

  return (
    <>
      <S.ChannelTabContainer>
        {tabs.map((elem, index) => (
          <S.ChannelTabBtn
            key={elem.path}
            $active={activeTab === elem.path} // Add the $active prop here
            onClick={() => handleActiveTab(index)}
          >
            {elem.name}
          </S.ChannelTabBtn>
        ))}
      </S.ChannelTabContainer>
    </>
  );
};

export default ChannelTab;
