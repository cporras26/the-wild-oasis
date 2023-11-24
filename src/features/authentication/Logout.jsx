import ButtonIcon from "../../ui/Button/ButtonIcon.jsx";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./hooks/useLogout.js";
import SpinnerMini from "../../ui/Spinner/SpinnerMini.jsx";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
