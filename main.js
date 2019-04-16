
/* Exercício 7 */

const nome = "Diego";
const idade = 23;

const usuario = {
  nome,
  idade,
  cidade: "Rio do Sul"
};

console.log(usuario);

/* Exercício 1


class Usuario {
    constructor (email, senha){
        this.email = email;
        this.senha = senha;
    }

    IsAdmin(){
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor (email, senha){
        super(email, senha);

        this.admin = true;
    }
} */

/*
2° EXERCÍCIO 

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

const rockseat18 = usuarios.filter(
    usuario => usuario.idade >= 18 && usuario.empresa === 'Rocketseat'
);
console.log(rockseat18);

const funcionario = usuarios.find(usuario =>usuarios.empresa === 'Google');
console.log(funcionario);

const calcula = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2  }))
    .filter(usuario => usuario.idade <= 50);
console.log(calcula);


*/

/* // 3° EXERCÍCIO

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);
console.log(newArr);

// 3.2
const usuario = { nome: "Diego", idade: 23 };

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario); */

/* // 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = ( nome = "Diego", idade = 18) => ({ nome, idade });

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4

const promise = () => new Promise((resolve, reject) => resolve());

 */

/* // 4ª EXERCÍCIO

const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);


//4.2

function mostraInfo( { nome, idade } ) {
    return `${nome} tem ${idade} anos.`;
    }
    mostraInfo({ nome: 'Diego', idade: 23 }) */

/* EXERCÍCIO 5

5.1 

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);


function soma (...params) {
    return params.reduce((total, proximo) => total + proximo);
}

console.log(soma(1, 2, 3, 4, 5));


/* 5.2 

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel'};

const usuario3 = { ...usuario, nome: 'Lontra'};

console.log(usuario2);
console.log(usuario3);
*/

/* Exercício 6 */

/*
const usuario = "Diego";
const idade = 23;
console.log(`O usuário ${usuario} possui ${idade} anos`);
*/