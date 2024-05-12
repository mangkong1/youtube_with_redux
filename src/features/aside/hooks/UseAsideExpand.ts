import { SetterOrUpdater } from "recoil";
import UseAsideExpandState from "../../../states/aside_expand_state/UseAsideExpandAtom";

const useAsideExpand = (): [boolean, () => void] => {
  const [asideExpand, setAsideExpand] = UseAsideExpandState() as [boolean, SetterOrUpdater<boolean>];

  const toggleAsideExpand = () => {
    setAsideExpand(!asideExpand);
  };

  return [asideExpand, toggleAsideExpand];
};

export default useAsideExpand;
