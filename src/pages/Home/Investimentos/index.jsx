import img_investimentos from "../../../img/fig6-paybank.png";

const Investimentos = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="grid-6">
            <h6 className="h7 uppercase color-gradient">Investimentos</h6>
            <h3 className="mt-2">A sua segurança é nossa prioridade</h3>
            <p className="mt-3 max-width-p">
              Sua segurança, confiabilidade, controle de suas finanças é o
              principal compromisso da Paybank.
            </p>
            <div className="my-4 pb-5 bb-black">
              <div className="flex-start-row">
                <a href="#" className="btn-apple">
                  Apple Pay
                </a>
                <a href="#" className="btn-google ml-3">
                  Google Pay
                </a>
              </div>

              <div className="mt-4">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Excepturi culpa maiores adipisci at animi quis vero reiciendis
                  ex? Fugit eaque quam dolorem esse commodi eum fugiat aliquam
                  officiis sunt aut.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="bold">Pague com o celular</h4>
              <p className="mt-3 max-width-p">
                Acompanhe cada movimentação, saques e compras feitas por você.
                Tudo na hora e pelo celular.
              </p>
            </div>
          </div>
          <div className="grid-6 img-invest">
            <img src={img_investimentos} alt="Investimentos" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Investimentos;
