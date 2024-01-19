import icon_cardCred_bg from "../../../svg/icon-cardCred-bg.svg";
import icon_download_bg from "../../../svg/icon-download-bg.svg";

const Futuro = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="grid-6">
            <h6 className="h7 uppercase color-gradient">O Futuro</h6>
            <h3 className="mt-2">
              É a onda do <span className="color-gradient">futuro</span>
            </h3>
            <p className="mt-3 max-width-p">
              Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis
              tristique. Vitae consequat vel tortor aenean imperdiet posuere
              neque. Sollicitudin at at volutpat scelerisque ut aliquet velit
              tempor.
            </p>
            <div className="flex-start-row mt-4">
              <a href="#" className="btn-apple">
                Apple pay
              </a>
              <a href="#" className="btn-google ml-3">
                Google pay
              </a>
            </div>
            <div className="flex-start-row mt-6">
              <div>
                <img src={icon_cardCred_bg} alt="Cartão" className="icon" />
              </div>
              <div className="ml-2">
                <h6 className="bold">Cartão de Crédito</h6>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="flex-start-row mt-4">
              <div>
                <img src={icon_download_bg} alt="Conta" className="icon" />
              </div>
              <div className="ml-2">
                <h6 className="bold">Fazer Depósito</h6>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className="grid-1 disappear"></div>
          <div className="grid-5"> </div>
        </div>
      </section>
    </>
  );
};

export default Futuro;
