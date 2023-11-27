import ButtonIcon from "./Button/ButtonIcon.jsx";
import { HiOutlineMoon } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import { HiOutlineSun } from "react-icons/hi";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {!isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
