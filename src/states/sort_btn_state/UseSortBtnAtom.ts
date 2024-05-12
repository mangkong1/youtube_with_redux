import { atom, useRecoilState } from "recoil";

type SetterOrUpdater<T> = (value: T | ((prevValue: T) => T)) => void;

const useSortState = (): [string, SetterOrUpdater<string>] => {
  const sortState = atom({
    key: "sortViewState",
    default: "time", //초깃값 time으로 되어있도록 함
  });
  const [sort, setSort] = useRecoilState(sortState);

  return [sort, setSort];
};

export default useSortState;
