import icon_chart from "../../../svg/icon-chart.svg";
import icon_investment from "../../../svg/icon-investment.svg";

import img_resolva from "../../../img/fig4-paybank.png";

const Resolva = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="grid-5">
            <h6 className="h7 uppercase color-gradient">
              Feito pensando em você
            </h6>
            <h3 className="mt-2">
              Resolva tudo pelo <span className="color-gradient">App.</span>
            </h3>
            <p className="mt-3 max-width-p">
              Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis
              tristique. Vitae consequat vel tortor aenean imperdiet posuere
              neque.
            </p>

            <div className="flex-start-row mt-4">
              <div>
                <img src={icon_chart} alt="Conta" className="icon" />
              </div>
              <div className="ml-2">
                <h6 className="bold">Controle total sobre seus gastos</h6>
                <p className="mt-1">Tudo na palma da sua mão</p>
              </div>
            </div>

            <div className="flex-start-row mt-4">
              <div>
                <img src={icon_investment} alt="Conta" className="icon" />
              </div>
              <div className="ml-2">
                <h6 className="bold">Acesso a uma carteira de investimentos</h6>
                <p className="mt-1">Tudo na palma da sua mão</p>
              </div>
            </div>
          </div>
          <div className="grid-1 disappear"></div>
          <div className="grid-6">
            <img src={img_resolva} alt="Resolva sem burocracias" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Resolva;
