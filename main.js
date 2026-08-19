const numeroSenha = document.querySelector('.parametro-senha__texto');//selaciona o 
let tamanhoSenha=12;//variael que pode ser alterada

numeroSenha.textContent=tamanhoSenha;//atribui o tamnho Senha ao numeroSenha
const botoes=document.querySelectorAll('parametro-senha__botao');//selecionando todas as classes "parametro-senha__botao"

botoes[0].onclick=diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
if(tamanhoSenha >1){
      tamanhoSenha=tamanhoSenha-1;  //diminui de 1 o valor do tamanhoSenha
}
  numeroSenha.textContent=tamanhoSenha;//atribui o tamanho Senha ao numeroSenha
}

function aumentaTamanho() {
    if(tamanhoSenha<20){
        tamanhoSenha = tamanhoSenha+1;  //aumenta de 1 o valor do tamanhoSenha
    }
  numeroSenha.textContent = tamanhoSenha;//atribui o tamanho Senha ao numeroSenha
}