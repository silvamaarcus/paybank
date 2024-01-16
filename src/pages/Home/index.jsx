import bg_hero from "../../svg/bg-hero.svg";
import hero_img_peoples from "../../img/fig10-paybank.png";

// Cartões
import icon_mastercard from "../../svg/icon-mastercard.svg";
import icon_contactless from "../../svg/icon-contactless.svg";
import logo_card from "../../svg/logo-card.svg";

const Home = () => {
  return (
    <>
      <section className="bg-black relative hidden">
        <div className="bg-hero">
          <img src={bg_hero} alt="Picture" />
        </div>

        <main className="container">
          <div className="row">
            <div className="grid-7">
              <h6 className="h7 uppercase color-gradient bold">Uma nova era</h6>
              <h1 className="color-white">
                O banco <span className="icon1-hero"></span> pra chamar de{" "}
                <span className="icon2-hero"></span>{" "}
                <span className="color-gradient">seu</span>
              </h1>
              <p className="mt-3 max-width-p">
                Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis
                tristique. Vitae consequat vel tortor aenean imperdiet posuere
                neque.
              </p>
              <a href="#" className="btn mt-4">
                Junte-se a nós
              </a>
              <div className="mt-4">
                <img
                  src={hero_img_peoples}
                  alt=""
                  className="icon-xxl"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid-5 relative div-card">
              {/* Cartão Verso */}
              <div className="card-fig card-verse card-transform-verse card-black">
                <div className="card-number p-2">
                  <img src={icon_mastercard} alt="Mastercad" class="icon" />
                  <h6 class="color-white h7 text-right mt-1">•••• 4859</h6>
                </div>
              </div>

              {/* Cartão Frente */}
              <div className="card-fig card-front card-transform-front">
                <div class="card-logo p-2">
                  <img src={logo_card} class="icon" alt="Logo" />
                </div>
                <div class="card-contactless p-2">
                  <img src={icon_contactless} class="icon-s" alt="Aproximacao" />
                </div>
                <div class="card-content-description p-2">
                  <h6 class="color-white h7">MARCUS SILVA</h6>
                  <img src={icon_mastercard} class="icon mt-3" alt="Mastercad" />
                </div>
              </div>

            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
