import bg_hero from "../../svg/bg-hero.svg";
import hero_img_peoples from "../../img/fig10-paybank.png";

const Home = () => {
  return (
    <>
      <section className="bg-black relative hidden py-5">
        <div className="bg-hero">
          <img src={bg_hero} alt="Picture" />
        </div>
        <main className="container">
          <div className="row border-g">
            <div className="grid-7 border">
              <h6 className="h7 uppercase color-gradient bold">Uma nova era</h6>
              <h1 className="color-white">
                O banco <span className="icon1-hero"></span> pra chamar de{" "}
                <span className="icon2-hero"></span>{" "}
                <span className="color-gradient">seu</span>
              </h1>
              <p className="mt-3">
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

            <div className="grid-5 border"></div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
