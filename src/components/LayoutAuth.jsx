import Logo from "./Logo";
import "./LayoutAuth.css";

// Molde das telas de autenticação (Login, Esqueceu a Senha, Criar Conta...).
// O painel azul é sempre igual. O lado direito recebe o conteúdo de cada
// tela através da prop "children".
export default function LayoutAuth({ children }) {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">

        {/* ===== LADO ESQUERDO: painel azul (igual em todas as telas) ===== */}
        <div className="col-lg-6 painel-azul text-white d-none d-lg-flex flex-column justify-content-between p-5">

          {/* Logo */}
          <Logo clara />

          {/* Texto principal */}
          <div>
            <span className="selo">LOJA UNIVERSITÁRIA</span>
            <h1 className="titulo-grande mt-4">
              Mais perto do que faz parte da sua história.
            </h1>
            <p className="texto-apoio mt-4">
              Produtos oficiais para levar a UNIFOR com você, dentro e fora do campus.
            </p>
          </div>

          {/* Citação */}
          <blockquote className="citacao mb-0">
            <p className="mb-2">Educação que transforma, experiências que ficam.</p>
            <small>UNIVERSIDADE DE FORTALEZA</small>
          </blockquote>
        </div>

        {/* ===== LADO DIREITO: cada tela coloca o seu conteúdo aqui ===== */}
        <div className="col-lg-6 lado-form d-flex align-items-center justify-content-center p-4">
          <div className="area-form w-100">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}
