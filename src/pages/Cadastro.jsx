import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutAuth from "../components/LayoutAuth";

export default function Cadastro() {
  const navigate = useNavigate();

  // Guardamos as duas senhas para conferir se são iguais
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [erro, setErro] = useState("");

  function criarConta(e) {
    e.preventDefault();
    if (senha !== confirmar) {
      setErro("As senhas não coincidem.");
      return; // para aqui e não troca de tela
    }
    navigate("/inicio");
  }

  return (
    <LayoutAuth>
      <span className="sobretitulo">FAÇA PARTE</span>
      <h2 className="titulo-form mt-2">Crie sua conta</h2>
      <p className="texto-cinza mb-4">Preencha seus dados acadêmicos para começar.</p>

      <form onSubmit={criarConta}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label rotulo">Nome completo</label>
          <input id="nome" type="text" className="form-control campo"
            placeholder="Seu nome completo" required />
        </div>

        <div className="mb-3">
          <label htmlFor="matricula" className="form-label rotulo">Matrícula</label>
          <input id="matricula" type="text" inputMode="numeric" maxLength={8}
            className="form-control campo" placeholder="00000000" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label rotulo">E-mail institucional</label>
          <input id="email" type="email" className="form-control campo"
            placeholder="nome@unifor.br" required />
        </div>

        <div className="mb-3">
          <label htmlFor="senha" className="form-label rotulo">Senha</label>
          <input id="senha" type="password" className="form-control campo"
            placeholder="••••••••" required
            value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmar" className="form-label rotulo">Confirmar senha</label>
          <input id="confirmar" type="password" className="form-control campo"
            placeholder="••••••••" required
            value={confirmar} onChange={(e) => setConfirmar(e.target.value)} />
        </div>

        {/* Só aparece quando "erro" tem algum texto */}
        {erro && <div className="alert alert-danger py-2 small">{erro}</div>}

        <button type="submit" className="btn btn-unifor w-100">
          Criar conta
        </button>
      </form>

      <p className="text-center texto-cinza small mt-4">
        Já possui uma conta? <Link to="/login" className="link-unifor">Entrar</Link>
      </p>

      <p className="text-center termos mb-0">
        Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade.
      </p>
    </LayoutAuth>
  );
}
