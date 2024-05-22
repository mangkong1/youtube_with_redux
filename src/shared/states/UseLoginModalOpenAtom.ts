import { atom, useRecoilState } from "recoil";

const modalOpenState = atom({
  key: "modalOpenState",
  default: false,
});

const useLoginModalOpenState = (): [boolean, () => void] => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);

  const clickModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  return [modalOpen, clickModalOpen];
};

export default useLoginModalOpenState;
