import Cabecalho from "../components/Cabecalho";
import CardProduto from "../components/CardProduto";
import Camiseta from "../components/Camiseta";
import Logo from "../components/Logo";
import produtos from "../data/produtos";
import "./Inicio.css";

// Página inicial da loja.
// <Inicio /> é a versão do cliente; <Inicio admin /> é a do administrador.
export default function Inicio({ admin = false }) {
  // Os 3 diferenciais em uma lista, para não repetir o mesmo HTML 3 vezes
  const diferenciais = [
    { icone: "bi-bag", titulo: "Retire no campus", texto: "Sem custo de entrega" },
    { icone: "bi-check2", titulo: "Produtos oficiais", texto: "Qualidade UNIFOR" },
    { icone: "bi-clock", titulo: "Compra rápida", texto: "Processo simples e seguro" },
  ];

  return (
    <>
      <Cabecalho admin={admin} />

      {/* ===== Faixa da área administrativa (só no modo admin) ===== */}
      {admin && (
        <div className="faixa-admin">
          <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-box-seam fs-5"></i>
              <strong>Área administrativa</strong>
              <span className="faixa-admin-texto d-none d-md-inline">
                Você está gerenciando a Loja UNIFOR.
              </span>
            </div>
            <button type="button" className="btn btn-faixa" disabled title="Em breve">
              Ver dashboard
            </button>
          </div>
        </div>
      )}

      <main>
        {/* ===== HERO (destaque principal) ===== */}
        <section className="hero">
          <div className="container">
            <div className="row align-items-center gy-5 gx-lg-5">

              <div className="col-lg-6">
                <span className="etiqueta">COLEÇÃO UNIVERSITÁRIA 2025</span>
                <h1 className="hero-titulo mt-4">
                  Produtos que fazem parte da sua{" "}
                  <span className="text-azul">vida universitária.</span>
                </h1>
                <p className="hero-texto mt-4">
                  Itens exclusivos, pensados para acompanhar sua rotina e celebrar o orgulho
                  de ser UNIFOR.
                </p>

                <div className="d-flex align-items-center gap-4 mt-4">
                  <a href="#destaques" className="btn btn-unifor btn-hero">
                    Ver produtos <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                  <div className="hero-selo ps-4">
                    <strong>Compra segura</strong>
                    <span>Retire no campus</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-circulo mx-auto">
                  <Camiseta comTexto className="hero-camiseta" />
                  <span className="tag-flutuante tag-1">100% algodão</span>
                  <span className="tag-flutuante tag-2">Coleção oficial</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== Diferenciais (o card que "sobe" sobre o hero) ===== */}
        <section className="container">
          <div className="diferenciais row g-0">
            {diferenciais.map((item) => (
              <div key={item.titulo} className="col-md-4 diferencial">
                <i className={`bi ${item.icone}`}></i>
                <div>
                  <strong>{item.titulo}</strong>
                  <span>{item.texto}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Produtos em destaque ===== */}
        <section id="destaques" className="container secao">
          <span className="sobretitulo">SELEÇÃO ESPECIAL</span>
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mt-2 mb-4">
            <div>
              <h2 className="secao-titulo">Produtos em destaque</h2>
              <p className="texto-cinza mb-0">Os favoritos da comunidade universitária.</p>
            </div>
            <span className="link-unifor">
              Ver todos <i className="bi bi-arrow-right"></i>
            </span>
          </div>

          {/* .map() transforma cada produto da lista em um card */}
          <div className="row g-4">
            {produtos.map((produto) => (
              <div key={produto.id} className="col-sm-6 col-xl-3">
                <CardProduto produto={produto} />
              </div>
            ))}
          </div>
        </section>

        {/* ===== Banner final ===== */}
        <section className="container secao pt-0">
          <div className="banner">
            <span className="sobretitulo text-azul-claro">FEITO PARA QUEM FAZ ACONTECER</span>
            <h2 className="banner-titulo mt-3">Leve o orgulho UNIFOR com você.</h2>
            <p className="banner-texto">Conheça a coleção completa de produtos oficiais.</p>
            <a href="#destaques" className="btn btn-light btn-banner">Explorar coleção</a>
            <span className="banner-u" aria-hidden="true">U</span>
          </div>
        </section>
      </main>

      {/* ===== Rodapé ===== */}
      <footer className="rodape">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-4 py-5">
          <div className="d-flex flex-wrap align-items-center gap-4">
            <Logo clara />
            <span className="rodape-texto">Produtos oficiais para a comunidade UNIFOR.</span>
          </div>
          <span className="rodape-texto small">
            © 2025 Universidade de Fortaleza. Protótipo acadêmico.
          </span>
        </div>
      </footer>
    </>
  );
}
