import "./EsqueceuSenha.css";

export default function EsqueceuSenha() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">

        {/* ===== LADO ESQUERDO: painel azul ===== */}
        <div className="col-lg-6 painel-azul text-white d-none d-lg-flex flex-column justify-content-between p-5">

          {/* Logo */}
          <div className="d-flex align-items-center gap-3">
            <div className="logo-u">U</div>
            <div>
              <div className="logo-titulo">UNIFOR</div>
              <div className="logo-sub">LOJA OFICIAL</div>
            </div>
          </div>

          
          <div>
            <span className="selo">LOJA UNIVERSITÁRIA</span>
            <h1 className="titulo-grande mt-4">
              Mais perto do que faz parte da sua história.
            </h1>
            <p className="texto-apoio mt-4">
              Produtos oficiais para levar a UNIFOR com você, dentro e fora do campus.
            </p>
          </div>

          
          <blockquote className="citacao mb-0">
            <p className="mb-2">Educação que transforma, experiências que ficam.</p>
            <small>UNIVERSIDADE DE FORTALEZA</small>
          </blockquote>
        </div>

        
                
        <div className="col-lg-6 lado-form d-flex align-items-center justify-content-center p-4">
          <div className="area-form w-100">

            <span className="sobretitulo">RECUPERAR ACESSO</span>
            <h2 className="titulo-form mt-2">Esqueceu sua senha?</h2>
            <p className="texto-cinza mb-4">
              Informe seu e-mail institucional e enviaremos um link para você criar uma nova senha.
            </p>

            <form>
              <div className="mb-4">
                <label htmlFor="email" className="form-label rotulo">E-mail institucional</label>
                <input
                  id="email"
                  type="email"
                  className="form-control campo"
                  placeholder="nome@unifor.br"
                />
              </div>

              <button type="submit" className="btn btn-unifor w-100">
                Enviar link de recuperação
              </button>
            </form>

            <p className="text-center texto-cinza small mt-4 mb-0">
              Lembrou a senha? <a href="#" className="link-unifor">Voltar ao login</a>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}