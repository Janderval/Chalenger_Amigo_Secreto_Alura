//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaNomes=[];

//Função para adixionar um amigo na lista 
function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    nome = nome.toUpperCase();

    // Verifica se o nome ja esta na lista de nomes
    if(listaNomes.includes(nome)){
        alert(`O nome ${nome} ja esta na lista!!`);

    // Verifica se o valor é valido
    }else if(nome.trim() === ""){
        alert('INSIRA UM NOME VALIDO!');

    //  Insere um nome na lista de nomes     
    }else{
        listaNomes.push(nome);
        mostrarNomes(listaNomes);
    }
    limparCampo('amigo');
   
}

//Sorteia um nome da lista 
function sortearAmigo(){
    let qtdNomes = listaNomes.length;
    let campo = document.getElementById('resultado');

    // verifica se a nome na lista, se houver sorteia um nome;
    if(qtdNomes == 0){
        alert("NÃO HÁ AMIGOS NA LISTA");
        campo.innerHTML = "";
    }else{
        let numeroSorteado = parseInt(Math.random()*qtdNomes);
        campo.innerHTML = "O amigo sorteado foi: " + listaNomes[numeroSorteado];
        listaNomes.splice(numeroSorteado, 1);
        mostrarNomes(listaNomes);
    }
}

// mostra os nome inseridos na lista de nomes;
function mostrarNomes(listaNomes){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    let listaHTML= [];
    let nomes;
    for(let i=0; i < listaNomes.length; i++ ){
        nomes = '<li>'+listaNomes[i]+ '</li>';
        listaHTML.push(nomes);
        console.log(listaNomes[i]);
    }
    lista.innerHTML = listaHTML.join("");
}

//limpa o campo de inserção de nomes após clicar em inserir
function limparCampo(id) {
    campo = document.getElementById(id);
    campo.value='';
}