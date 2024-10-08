//console.log('Olá Mundo!');

var nome = 'Elias';//string
var sobrenome = 'de Abreu';//variavel numerica
var idade = 41;

const i = 41;

var aprovado = false;

//nome = 'Elias de Abreu';

var nomeCompleto = nome + ' ' + sobrenome;

var numero1 = 10;
var numero2 = 5;
var soma = numero1 + numero2;
var sub = numero1 - numero2;
var div = numero1 / numero2;
var mult = numero1 * numero2;
var mod = 11 % 2;
var exp = 3 ** 2;


/*
+ soma
- subtração
* multiplicação 
/ divisao
% módulo = resto da divisao
** expoente
*/

var a = 10;
var b = '10';

if(b.isNaN){
    console.log('Não é número')
}
else{
    console.log('É número')

}

/* 
== : valor
=== : valor e tipo de dado
*/ 

if(a == b || a < 10)
{
    console.log('São iguais');
}
else{
    console.log('Não são iguais');
}

/*if(exp < 10)
{
    console.log('Menor que 10');
}
else{
    console.log('Maior que 10');
}*/

console.log(nomeCompleto);
console.log(typeof idade);

console.log (`A soma é ${soma}`);
console.log (`A subtração é ${sub}`);
console.log (`A divisão é ${div}`);
console.log(`A multiplicação é ${mult}`);
console.log(`O módulo é ${mod}`);
console.log(`O expoente é ${exp}`);
//console.log(nome, idade);