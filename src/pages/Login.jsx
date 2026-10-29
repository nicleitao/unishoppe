import { Link, useNavigate } from "react-router-dom";
import LayoutAuth from "../components/LayoutAuth";

export default function Login() {
  // useNavigate devolve uma função que troca de tela pelo código
  const navigate = useNavigate();

  function entrar(e) {
    e.preventDefault(); // impede o formulário de recarregar a página
    navigate("/inicio");
  }

  return (
    <LayoutAuth>
      <span className="sobretitulo">BEM-VINDO DE VOLTA</span>
      <h2 className="titulo-form mt-2">Bem-vindo à Loja UNIFOR</h2>
      <p className="texto-cinza mb-4">Entre com seus dados para continuar.</p>

      <form onSubmit={entrar}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label rotulo">E-mail institucional</label>
          <input
            id="email"
            type="email"
            className="form-control campo"
            placeholder="nome@unifor.br"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="senha" className="form-label rotulo">Senha</label>
          <input
            id="senha"
            type="password"
            className="form-control campo"
            placeholder="••••••••"
          />
        </div>

        <div className="text-end mb-4">
          <Link to="/esqueceu-senha" className="link-unifor small">Esqueceu a senha?</Link>
        </div>

        <button type="submit" className="btn btn-unifor w-100 mb-3">
          Entrar
        </button>

        <button
          type="button"
          onClick={() => navigate("/admin")}
          className="btn btn-contorno w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <i className="bi bi-person"></i>
          Acessar demonstração administrativa
        </button>
      </form>

      <p className="text-center texto-cinza small mt-4">
        Ainda não tem uma conta? <Link to="/cadastro" className="link-unifor">Criar uma conta</Link>
      </p>

      <p className="text-center termos mb-0">
        Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade.
      </p>
    </LayoutAuth>
  );
}
