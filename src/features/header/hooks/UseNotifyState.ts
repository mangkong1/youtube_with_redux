import { useState } from "react";

const useNotifyState = (): [boolean, () => void] => {
  const [notify, setNotify] = useState(true);

  const notifyAction = () => {
    setNotify((prev) => !prev);
  };

  return [notify, notifyAction];
};

export default useNotifyState;
