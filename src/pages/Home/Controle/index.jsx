// Cartões
import icon_mastercard from "../../../svg/icon-mastercard.svg";
import icon_contactless from "../../../svg/icon-contactless.svg";
import logo_card from "../../../svg/logo-card.svg";
import icon_account_bg from "../../../svg/icon-account-bg.svg";
import icon_bar_bg from "../../../svg/icon-bar-bg.svg";
import icon_swap_bg from "../../../svg/icon-swap-bg.svg";
import icon_noTax_bg from "../../../svg/icon-noTax-bg.svg";
import icon_card_bg from "../../../svg/icon-card-bg.svg";

const Controle = () => {
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="grid-5 ">
            <h6 className="h7 uppercase color-gradient">Controle Total</h6>
            <h3 className="mt-2">Todo o controle financeiro em um só lugar</h3>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur. Et ut tempus facilisis
              tristique. Vitae consequat vel tortor aenean imperdiet posuere
              neque.
            </p>
            <div className="relative div-card">
              <div className="card-fig card-verse card-transform-verse-2 card-black mt-5">
                <div className="card-number p-2">
                  <img
                    src={icon_mastercard}
                    className="icon"
                    alt="Mastercard"
                  />
                  <h6 className="color-white h7 text-right mt-1">•••• 4859</h6>
                </div>
              </div>

              <div className="card-fig card-front card-transform-front-2">
                <div className="card-logo p-2">
                  <img src={logo_card} className="icon" alt="Logo" />
                </div>
                <div className="card-contactless p-2">
                  <img src={icon_contactless} className="icon-s" alt="" />
                </div>
                <div className="card-content-description p-2">
                  <h6 className="color-white h7">MARCUS SILVA</h6>
                  <img
                    src={icon_mastercard}
                    className="icon mt-3"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid-1 disappear"></div>

          <div className="grid-3">
            {/* card 1 */}
            <div>
              <div>
                <img src={icon_account_bg} alt="Conta" className="icon" />
              </div>
              <div className="mt-2">
                <h6 className="bold">Acompanhe sua conta</h6>
                <p className="mt-1">
                  Acompanhar sua conta, fazer transferências e pagamentos de
                  onde estiver.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="mt-5">
              <div>
                <img src={icon_bar_bg} alt="Conta" className="icon" />
              </div>
              <div className="mt-2">
                <h6 className="bold">Investimentos</h6>
                <p className="mt-1">
                  Diversas opções de investimentos, de acordo com o seu perfil
                  de investidor.
                </p>
              </div>
            </div>
            {/* card 3 */}
            <div className="mt-5">
              <div>
                <img src={icon_swap_bg} alt="Conta" className="icon" />
              </div>
              <div className="mt-2">
                <h6 className="bold">Câmbio</h6>
                <p className="mt-1">
                  Diversas opções de investimentos, de acordo com o seu perfil
                  de investidor
                </p>
              </div>
            </div>
          </div>

          <div className="grid-3">
            <div>
              <div>
                <img src={icon_noTax_bg} alt="Conta" className="icon" />
              </div>
              <div className="mt-2">
                <h6 className="bold">Sem taxas</h6>
                <p className="mt-1">
                  Soluções de empréstimos e renegociação para organizar suas
                  finanças.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="mt-5">
              <div>
                <img src={icon_card_bg} alt="Conta" className="icon" />
              </div>
              <div className="mt-2">
                <h6 className="bold">Cartão virtual</h6>
                <p className="mt-1">
                  Acompanhe a fatura do seu cartão de crédito e faça compras
                  online com seu cartão virtual.
                </p>
              </div>
            </div>

            <a href="#" className="btn-freq mt-6 ml-3">
              Perguntas Frequentes
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Controle;
