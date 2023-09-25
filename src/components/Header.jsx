import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import { Logo } from "./logo";
import logo from "assets/images/logo.png";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="row hContainer">
      <div className="col-xs-12 col-sm-4">
        <Logo
          title="Notomatic"
          subtitle="Manage your notes"
          image={logo}
          onClick={() => navigate("/")}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate("/note/new")}>
          Add note +
        </ButtonPrimary>
      </div>
    </header>
  );
}
export default Header;
