import { atom, useRecoilState } from "recoil";

const loginState = atom({
  key: "loginState",
  default: false,
});

const useLoginState = (): [boolean, () => void, () => void] => {
  const [login, setLogin] = useRecoilState(loginState);

  const loginAction = () => {
    setLogin(true);
    alert("로그인 되었습니다.");
  };

  const logoutAction = () => {
    setLogin(false);
  };

  return [login, loginAction, logoutAction];
};

export default useLoginState;
