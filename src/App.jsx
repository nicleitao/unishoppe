import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Cadastro from "./pages/Cadastro";
import Inicio from "./pages/Inicio";
import BotaoAjuda from "./components/BotaoAjuda";

export default function App() {
  return (
    <>
      {/* Cada Route liga um endereço (path) a uma tela (element) */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/admin" element={<Inicio admin />} />
        {/* Qualquer endereço desconhecido volta para o login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

      {/* Fora das Routes: aparece em TODAS as telas */}
      <BotaoAjuda />
    </>
  );
}
