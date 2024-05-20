import S from "./styles";
// import tabs from "./services/ChannelTabData";

import useChangeTab from "./hooks/UseChangeTabHook";
import useFetch from "@shared/hooks/UseFetch";

const ChannelTab = () => {
  const [activeTab, handleActiveTab] = useChangeTab();
  const [tab] = useFetch("http://localhost:3001/tab"); // data객체에 tab속성이 정의되지 않은 상태일 수 있다

  return (
    <>
      <S.ChannelTabContainer>
        {tab &&
          (tab as any[]).map((elem: any, index: any) => (
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
