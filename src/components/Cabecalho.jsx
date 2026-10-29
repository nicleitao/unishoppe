import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";

// Cabeçalho da loja. Com a prop "admin" mostra a versão do administrador
// (botão de menu + Caio Alves); sem ela, a versão do cliente
// (Início/Produtos, carrinho e Marina).
export default function Cabecalho({ admin = false }) {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const usuario = admin
    ? { iniciais: "CA", linha1: "Administrador", linha2: "Caio Alves" }
    : { iniciais: "MC", linha1: "Olá, Marina", linha2: "Meu perfil" };

  // Fecha o menu e vai para outra tela
  function irPara(caminho) {
    setMenuAberto(false);
    navigate(caminho);
  }

  return (
    <header className="cabecalho sticky-top">
      <div className="container d-flex align-items-center justify-content-between py-3">
        <Link to={admin ? "/admin" : "/inicio"} className="text-decoration-none">
          <Logo />
        </Link>

        {/* Navegação do cliente (some no celular: d-none d-md-flex) */}
        {!admin && (
          <nav className="d-none d-md-flex gap-2">
            <NavLink to="/inicio" className="nav-loja">Início</NavLink>
            <span className="nav-loja nav-loja-breve" title="Em breve">Produtos</span>
          </nav>
        )}

        <div className="d-flex align-items-center gap-3 position-relative">
          {admin ? (
            <button type="button" className="btn-redondo" aria-label="Abrir menu"
              onClick={() => setMenuAberto(!menuAberto)}>
              <i className="bi bi-list"></i>
            </button>
          ) : (
            <button type="button" className="btn-redondo" aria-label="Carrinho">
              <i className="bi bi-cart3"></i>
            </button>
          )}

          <button type="button" className="perfil" onClick={() => setMenuAberto(!menuAberto)}>
            <span className="avatar">{usuario.iniciais}</span>
            <span className="text-start d-none d-sm-block">
              <small className="perfil-linha1">{usuario.linha1}</small>
              <strong className="perfil-linha2">{usuario.linha2}</strong>
            </span>
            <i className="bi bi-chevron-right perfil-seta"></i>
          </button>

          {/* Menu suspenso: só existe na tela quando menuAberto é true */}
          {menuAberto && (
            <>
              {/* Camada invisível: clicar fora do menu fecha ele */}
              <div className="menu-fundo" onClick={() => setMenuAberto(false)}></div>

              <div className="menu-suspenso">
                <button type="button" onClick={() => irPara(admin ? "/admin" : "/inicio")}>
                  <i className="bi bi-house"></i> Início
                </button>
                {admin ? (
                  <button type="button" onClick={() => irPara("/inicio")}>
                    <i className="bi bi-shop"></i> Ver loja como cliente
                  </button>
                ) : (
                  <button type="button" onClick={() => irPara("/admin")}>
                    <i className="bi bi-shield-lock"></i> Área administrativa
                  </button>
                )}
                <hr className="my-1" />
                <button type="button" className="text-danger" onClick={() => irPara("/login")}>
                  <i className="bi bi-box-arrow-right"></i> Sair
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
