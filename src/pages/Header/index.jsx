import logo from "../../svg/logo-white.svg";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <a href="/">
            <img src={logo} alt="" />
          </a>

          <div>
            <div className="flex-start-row">
              <div>
                <a href="#" className="disappear link-menu">
                  Features
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className="disappear link-menu">
                  Nosso App
                </a>
              </div>
              <div className="ml-3">
                <a href="#" className="btn-small">
                  Junte-se a nós
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
