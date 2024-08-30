// dados temporários
export const colunasUsuarios = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "usuario",
    headerName: "Usuário",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "idade",
    headerName: "Idade",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];


export const linhasUsuarios = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "ativo",
    email: "1snow@gmail.com",
    idade: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passivo",
    idade: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pendente",
    idade: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "ativo",
    idade: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passivo",
    idade: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "ativo",
    idade: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passivo",
    idade: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "ativo",
    idade: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pendente",
    idade: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "ativo",
    idade: 65,
  },
];
// Definição das colunas para produtos de vestuário
export const colunasProdutos = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "produto",
    headerName: "Produto",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="produto" />
          {params.row.nome}
        </div>
      );
    },
  },
  {
    field: "categoria",
    headerName: "Categoria",
    width: 160,
  },
  {
    field: "preco",
    headerName: "Preço",
    width: 100,
    renderCell: (params) => {
      return `R$ ${params.row.preco.toFixed(2)}`;
    },
  },
  {
    field: "disponibilidade",
    headerName: "Disponibilidade",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.disponibilidade}`}>
          {params.row.disponibilidade}
        </div>
      );
    },
  },
];

// Dados temporários para produtos de vestuário
export const linhasProdutos = [
  {
    id: 1,
    nome: "Camiseta Básica",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categoria: "Camisetas",
    preco: 39.90,
    disponibilidade: "disponível",
  },
  {
    id: 2,
    nome: "Calça Jeans",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categoria: "Calças",
    preco: 119.90,
    disponibilidade: "esgotado",
  },
  {
    id: 3,
    nome: "Jaqueta de Couro",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categoria: "Jaquetas",
    preco: 299.90,
    disponibilidade: "disponível",
  },
  {
    id: 4,
    nome: "Tênis Esportivo",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categoria: "Calçados",
    preco: 199.90,
    disponibilidade: "disponível",
  },
  {
    id: 5,
    nome: "Vestido Floral",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categoria: "Vestidos",
    preco: 149.90,
    disponibilidade: "esgotado",
  },
  {
    id: 6,
    nome: "Boné Trucker",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categoria: "Acessórios",
    preco: 49.90,
    disponibilidade: "disponível",
  },
  {
    id: 7,
    nome: "Mochila Escolar",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categoria: "Bolsas",
    preco: 89.90,
    disponibilidade: "disponível",
  },
  {
    id: 8,
    nome: "Óculos de Sol",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categoria: "Acessórios",
    preco: 99.90,
    disponibilidade: "esgotado",
  },
  {
    id: 9,
    nome: "Relógio de Pulso",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categoria: "Acessórios",
    preco: 249.90,
    disponibilidade: "disponível",
  },
  {
    id: 10,
    nome: "Meias de Algodão",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categoria: "Meias",
    preco: 19.90,
    disponibilidade: "disponível",
  },
];
