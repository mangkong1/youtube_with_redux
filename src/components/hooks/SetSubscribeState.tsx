import { useEffect, useRef, useState } from "react";

interface SetSubscribeStateProps {
  subscribeState: boolean;
}

// 구독 버튼 클릭시 alert뜨는 기능
export const useSetSubscribeState = (props: SetSubscribeStateProps) => {
  const { subscribeState } = props;
  const [isSubscribe, setIsSubscribe] = useState(subscribeState);
  // useRef는 컴포넌트가 리렌더링될 때마다 초기화되지 않는 값을 저장할 때 사용
  // 따라서 현재 상태를 저장해 이전 상태를 추적하는 데 사용
  const currentSubscribe = useRef(isSubscribe);

  const handleSubscribe = () => {
    setIsSubscribe(!isSubscribe);
  };

  useEffect(() => {
    currentSubscribe.current = isSubscribe;
    // 현재 상태가 true로 변했으므로 다시 currentSubscribe에 저장
  }, [isSubscribe]);

  return { isSubscribe, handleSubscribe };
};
