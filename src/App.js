import React from 'react';
import './App.css'

import img1 from "./Imagens/Rectangle 9.png"
import img2 from "./Imagens/Rectangle 9 pq.png"
import img3 from "./Imagens/Imagem 3 computadores.png"
import img4 from "./Imagens/imagem lojinha.png"
import img5 from "./Imagens/imagem sacolinha.png"
import img6 from "./Imagens/imagem mão com dinheiro.png"
import img7 from "./Imagens/Rectangle 13.png"
import img8 from "./Imagens/Rectangle 16.png"
import img9 from "./Imagens/Rectangle 17.png"
import img10 from "./Imagens/money (1) 2.png"
import img11 from "./Imagens/imagem mão com dinheiro.png"
import img12 from "./Imagens/laptop 1.png"
import img13 from "./Imagens/celular.png"
import img14 from "./Imagens/oculos grande.png"
import img15 from "./Imagens/oculos pequeno.png"
import img16 from "./Imagens/instagram icone.png"
import img17 from "./Imagens/facebook icone.png"
import img18 from "./Imagens/youtube icone.png"
import Acessibilidade from './components/Acessibilidade';




function App() {
  return (
    <>
    <Acessibilidade/>
      <header>
        <a className="icone" href="/">
          <h1 className="logo">HOME</h1>
        </a>
      </header>
      <main>
        <figure>
          <img className="imgbanner" src={img1} alt="banner principal - Imagem computador" />
          <img className="imgbannerpq" src={img2} alt=" banner principal - Imagem Pequena" />
        </figure>
        <section className="parte2">
          <div className="tdtextopart2">
            <h2 className="subtitlepart2">
              Lorem ipsum
            </h2>
            <h1 className="titlepart2">
              dolor sit amet
            </h1>
            <p className="paragpart2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Curabitur ut tortor sed lacus egestas vulputate vel sit amet velit. Nulla suscipit magna dui.
            </p>
          </div>
          <figure className="figtotal">
            <img className="imgparte2" src={img3} alt="Foto dos 3 computadores interligados" />
          </figure>
        </section>
        <div className="tdscaixotes">
          <figure className="cadacaixote">
            <img className="imgcaixote" src={img4} alt="Imagem lojinha" />
            <figcaption className="legendcaixote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.
            </figcaption>
          </figure>
          <figure className="cadacaixote">
              <img className="imgcaixote" src={img5} alt="Imagem Sacolinha"/>
              <figcaption className="legendcaixote">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. 
              </figcaption>
          </figure>
          <figure className="cadacaixote">
              <img className="imgcaixote" src={img6} alt="Imagem Mãozinha com dinheiro"/>
              <figcaption className="legendcaixote">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. 
              </figcaption>
          </figure>
        </div>
        <div className="parte4">
          <figure className="img1">
            <img className="imgparte4" src={img7} alt="IMAGEM COMPUTADOR 1" />
          </figure>
          <figure className="img2">
            <img className="imgparte4" src={img8} alt="IMAGEM COMPUTADOR 2" />
          </figure>
          <figure className="img3">
            <img className="imgparte4" src={img9} alt="IMAGEM COMPUTADOR 3" />
          </figure>
        </div>
        <div className="caixotes2">
        <figure className="cdcaixote2">
            <img className="imgcaixote2" src={img10} alt="Imagem Dinheiro" />
            <figcaption className="legendcaixote2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.
            </figcaption>
          </figure>
          <figure className="cdcaixote2">
            <img className="imgcaixote2" src={img11} alt="Imagem mão com Dinheiro" />
            <figcaption className="legendcaixote2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.
            </figcaption>
          </figure>
          <figure className="cdcaixote2">
            <img className="imgcaixote2" src={img12} alt="Imagem Laptop" />
            <figcaption className="legendcaixote2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.
            </figcaption>
          </figure>
          <figure className="cdcaixote2">
            <img className="imgcaixote2" src={img13} alt="Imagem Celular" />
            <figcaption className="legendcaixote2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.
            </figcaption>
          </figure>
        </div>
        <article className="parte06">
          <div className="tdtextpart6">
            <h1 className="titlepart6">Lorem ipsum dolor sit amet</h1>
            <p className="paragrafpart6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate sapien non libero faucibus interdum. In eget tincidunt ipsum.
              Quisque a tellus at lectus blandit tempor. Ut tristique auctor mi eget hendrerit. Curabitur venenatis felis vitae sagittis venenatis.
              Donec finibus turpis vitae lectus interdum rutrum vitae sed augue.
            </p>
          </div>
          <figure className="figpart6">
            <img className="imgparte6" src={img14} alt="imagem oculos grande" />
            <img className="imgparte06pq" src={img15} alt="imagem oculos pequeno" />
          </figure>
        </article>
      </main>
      <footer>
        <section className="faixafinal">
          <ul className="icones">
            <li>
              <a href="index.html">
                <img className="imgicon" src={img16} alt="Instagram icone" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <img className="imgicon" src={img17} alt="Facebook icone" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <img className="imgicon" src={img18} alt="you tube icone" />
              </a>
            </li>
          </ul>
          <p className="textofinal">
            Copyright © 2020 - Loja Comércio Eletrônico CNPJ: 000.000.000/0001-00
          </p>
        </section>
      </footer>
    </>
  );
}  
export default App;
