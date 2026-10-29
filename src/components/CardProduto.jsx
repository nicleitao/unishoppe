import Camiseta from "./Camiseta";

// Formata número como dinheiro brasileiro: 89.9 → "R$ 89,90"
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Card de um produto. Recebe o objeto "produto" como prop.
export default function CardProduto({ produto }) {
  return (
    <article className="card-produto h-100">
      <div className="card-produto-imagem">
        {produto.imagem === "camiseta" ? (
          <Camiseta className="card-produto-camiseta" />
        ) : (
          <i className={`bi ${produto.imagem}`}></i>
        )}
        <button type="button" className="btn-adicionar" aria-label={`Adicionar ${produto.nome}`}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <div className="p-4 d-flex flex-column flex-grow-1">
        <span className="sobretitulo">{produto.categoria.toUpperCase()}</span>
        <h3 className="card-produto-nome mt-2">{produto.nome}</h3>
        <p className="card-produto-descricao">{produto.descricao}</p>

        <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-auto">
          <span className="card-produto-preco">{formatarPreco(produto.preco)}</span>
          <span className="card-produto-ver">
            Ver produto <i className="bi bi-chevron-right"></i>
          </span>
        </div>
      </div>
    </article>
  );
}
