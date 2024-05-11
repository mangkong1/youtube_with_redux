import S from "./styles";
import useChangeTab from "./hooks/ChangeTabHook";
import tabs from "./services/ChannelTabData";
// import ChannelRouter from "../../../pages/channel/views/ChannelRouter";

const ChannelTab = () => {
  const { activeTab, handleTabNavigation } = useChangeTab(tabs[0].path);

  return (
    <>
      <S.ChannelTabContainer>
        {tabs.map((elem) => (
          <S.ChannelTabBtn
            key={elem.path}
            $active={activeTab === elem.path} // Add the $active prop here
            onClick={() => handleTabNavigation(elem.path)}
          >
            {elem.name}
          </S.ChannelTabBtn>
        ))}
      </S.ChannelTabContainer>
      {/* <ChannelRouter /> */}
    </>
  );
};

export default ChannelTab;
