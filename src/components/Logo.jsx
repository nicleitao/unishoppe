// Logo da loja, reaproveitada no painel azul, no cabeçalho e no rodapé.
// A prop "clara" deixa o texto branco (para fundos escuros).
export default function Logo({ clara = false }) {
  return (
    <div className="d-flex align-items-center gap-3">
      <div className="logo-u">U</div>
      <div className={clara ? "text-white" : "logo-texto-escuro"}>
        <div className="logo-titulo">UNIFOR</div>
        <div className="logo-sub">LOJA OFICIAL</div>
      </div>
    </div>
  );
}
