// Lista de produtos em destaque.
// Por enquanto é um arquivo fixo. Quando tiver back-end, esses dados
// virão da API, e as telas não precisam mudar.
const produtos = [
  {
    id: 1,
    nome: "Camiseta Essential UNIFOR",
    categoria: "Vestuário",
    descricao: "Algodão premium, modelagem unissex.",
    preco: 89.9,
    imagem: "camiseta",
  },
  {
    id: 2,
    nome: "Caneca Campus",
    categoria: "Presentes",
    descricao: "Cerâmica branca com identidade UNIFOR.",
    preco: 49.9,
    imagem: "bi-cup-hot",
  },
  {
    id: 3,
    nome: "Mochila Urban Azul",
    categoria: "Acessórios",
    descricao: "Conforto e espaço para sua rotina.",
    preco: 219.9,
    imagem: "bi-backpack2",
  },
  {
    id: 4,
    nome: "Caderno Universitário",
    categoria: "Papelaria",
    descricao: "Capa dura e 200 folhas pautadas.",
    preco: 39.9,
    imagem: "bi-journal-bookmark",
  },
];

export default produtos;
