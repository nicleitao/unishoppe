import { Link } from "react-router-dom";
import LayoutAuth from "../components/LayoutAuth";

export default function EsqueceuSenha() {
  return (
    <LayoutAuth>
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
        Lembrou a senha? <Link to="/login" className="link-unifor">Voltar ao login</Link>
      </p>
    </LayoutAuth>
  );
}
