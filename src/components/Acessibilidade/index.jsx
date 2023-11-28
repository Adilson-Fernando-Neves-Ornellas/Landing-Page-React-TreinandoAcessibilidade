import { useState, useEffect , useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext";

import iconeAcessibilidade from "../../Imagens/acesibilidade/acessibilidadeIcon.png"
import iconeContrasteBranco from "../../Imagens/acesibilidade/contrastIconWhite.png"

import "./index.css";

export default function Acessibilidade() {
  const {altoContraste, handleAltoContraste} = useContext(ThemeContext);
 const [menu, setMenu] = useState(false);


 function abrirMenu() {
    const estado = !menu;
    setMenu(estado);
    const containerButoes = document.getElementsByClassName("containerAcessibilidade")[0];
    if (menu) {
        containerButoes.style.display = "block"; 
    } else {
        containerButoes.style.display = "none"; 
    }
}


  function alterarTamnhoLetra(updateSize){
    const selectors = "h1, h2, p, a, span, li, label, input, button,figcaption";
    var elements = document.querySelectorAll(selectors);
    elements.forEach((element) => {
      var size = getComputedStyle(element).fontSize;
      var value = parseFloat(size); 
      var newValue = value + updateSize;
      element.style.fontSize = `${newValue}px`;   
    })
  }

  return (
    <>
    <section className="buttonAbrirMenuAcessibilidade">
        <button className="buttonIconAcessibilidade" onClick={abrirMenu}>
            <img
            src={iconeAcessibilidade}
            alt="Icone mundial de acessibilidade."
            />
        </button>
    </section>
    <section className="containerAcessibilidade">
      <section className="conteinerButtonTamletra">
          <button
          className="buttonAumentarTam"
              role="button"
              aria-label="Diminuir Tamanho do Texto -A"
              id="diminuir"
              onClick={() => alterarTamnhoLetra(-1)}
              >
              -A
          </button>

          <button
          className="buttonAumentarTam"
              role="button"
              aria-label="Aumentar Tamanho do Texto +A"
              onClick={() => alterarTamnhoLetra(1)}
              >
              +A
          </button>
        </section>
        <button
              role="button"
              aria-label="Ativar alto contraste"
              aria-pressed={altoContraste}
              className="btnAceC"
              onClick={handleAltoContraste}
            >
              <img
                id="icone-contraste"
                src={iconeContrasteBranco}
                alt="Icone de contraste"
              />
            </button>
    </section>
    </>
  );
}