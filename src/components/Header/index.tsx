import Logo from "../../assets/logo.svg";
import HeaderButton from "./HeaderButton";

import { Content, HeaderWrapper } from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      <Content>
        <img src={Logo} alt="Logo CalculateYourJourney" />
        <HeaderButton />
      </Content>
    </HeaderWrapper>
  );
}

export default Header;
