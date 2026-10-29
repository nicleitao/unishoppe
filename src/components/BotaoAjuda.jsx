import { useState } from "react";
import "./BotaoAjuda.css";

// Botão "?" que fica fixo no canto da tela em todas as páginas.
// Ao clicar, abre uma janelinha com a opção de falar com o suporte.
export default function BotaoAjuda() {
  const [aberto, setAberto] = useState(false);
  // etapa controla o que aparece dentro da janela:
  // "inicio" → opções | "formulario" → mensagem | "enviado" → confirmação
  const [etapa, setEtapa] = useState("inicio");
  const [mensagem, setMensagem] = useState("");

  function fechar() {
    setAberto(false);
    setEtapa("inicio");
    setMensagem("");
  }

  function enviar(e) {
    e.preventDefault();
    // Aqui, num sistema real, a mensagem seria enviada para a API do suporte.
    setEtapa("enviado");
  }

  return (
    <div className="ajuda">
      {aberto && (
        <div className="ajuda-janela" role="dialog" aria-label="Ajuda">
          <div className="ajuda-topo">
            <div>
              <strong>Precisa de ajuda?</strong>
              <small>Atendimento de seg. a sex., das 8h às 18h</small>
            </div>
            <button type="button" className="ajuda-fechar" onClick={fechar} aria-label="Fechar">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <div className="ajuda-corpo">
            {etapa === "inicio" && (
              <>
                <button type="button" className="ajuda-opcao" onClick={() => setEtapa("formulario")}>
                  <span className="ajuda-icone"><i className="bi bi-chat-dots"></i></span>
                  <span>
                    <strong>Falar com o suporte</strong>
                    <small>Envie uma mensagem para nossa equipe</small>
                  </span>
                  <i className="bi bi-chevron-right ms-auto"></i>
                </button>
                <div className="ajuda-opcao ajuda-info">
                  <span className="ajuda-icone"><i className="bi bi-geo-alt"></i></span>
                  <span>
                    <strong>Retirada no campus</strong>
                    <small>Seus pedidos ficam na loja do campus por até 7 dias</small>
                  </span>
                </div>
              </>
            )}

            {etapa === "formulario" && (
              <form onSubmit={enviar}>
                <label htmlFor="ajuda-email" className="form-label rotulo">Seu e-mail</label>
                <input id="ajuda-email" type="email" className="form-control mb-3"
                  placeholder="nome@unifor.br" required />

                <label htmlFor="ajuda-assunto" className="form-label rotulo">Assunto</label>
                <select id="ajuda-assunto" className="form-select mb-3" defaultValue="Pedido">
                  <option>Pedido</option>
                  <option>Pagamento</option>
                  <option>Retirada no campus</option>
                  <option>Minha conta</option>
                  <option>Outro</option>
                </select>

                <label htmlFor="ajuda-mensagem" className="form-label rotulo">Mensagem</label>
                <textarea id="ajuda-mensagem" className="form-control mb-3" rows={3}
                  placeholder="Conte como podemos ajudar" required
                  value={mensagem} onChange={(e) => setMensagem(e.target.value)} />

                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-light flex-fill"
                    onClick={() => setEtapa("inicio")}>
                    Voltar
                  </button>
                  <button type="submit" className="btn btn-unifor flex-fill" style={{ height: "auto" }}>
                    Enviar
                  </button>
                </div>
              </form>
            )}

            {etapa === "enviado" && (
              <div className="text-center py-3">
                <div className="ajuda-sucesso mx-auto mb-3">
                  <i className="bi bi-check-lg"></i>
                </div>
                <strong className="d-block mb-1">Mensagem enviada!</strong>
                <p className="texto-cinza small mb-3">
                  Nossa equipe vai responder no seu e-mail em até 1 dia útil.
                </p>
                <button type="button" className="btn btn-light w-100" onClick={fechar}>
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        className="ajuda-botao"
        aria-label="Ajuda"
        onClick={() => (aberto ? fechar() : setAberto(true))}
      >
        {aberto ? <i className="bi bi-x-lg"></i> : "?"}
      </button>
    </div>
  );
}
