alert('Bem-vindo ao nosso site!');
let nome = "Gabriel";
let idade = 18;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let chuteNome = prompt('Digite o seu nome:');
prompt('Digite a sua idade:');

if(idade >= 18 && chuteNome == nome) {
    alert('Seja Bem-vindo! '+nome+', você pode tirar habilitação!');
} else {
    alert('Você não é o '+nome+', e não pode tirar habilitação!');
}