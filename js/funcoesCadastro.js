dados = [];
storage = window.localStorage;

$(document).ready(function(){
    dados = JSON.parse(storage.getItem('dados'));
    if(dados == null){
        dados = [];
    }
    cadastrar();
});

function cadastrar(){
    $("#btnCadastrar").click(function(){
        if(verificaCampos()){
            if(verificaSenha()){
                if(verificaUsuario()){
                    salvarInformacoes();
                }else{
                    alert("Este usuário já existe!");
                }
                
            }else{
                alert("As senhas preenchidas são diferentes.");
            }
        }else{
            alert("Preencha todos os campos.");
        }
    });
}

function verificaUsuario(){
    for(var i = 0; i < dados.length; i++){
        if(dados[i][3] == $("#usuario").val()){
            return 0;
        }
    }
    return 1;
}

function salvarInformacoes(){
    
    var aux = [];
    aux.push($("#nome").val());
    aux.push($("#sobrenome").val());
    aux.push($("#email").val());
    aux.push($("#usuario").val());
    aux.push($("#senha").val());

    dados.push(aux);
    storage.setItem("dados", JSON.stringify(dados));

    alert("Salvo!");
}

function verificaSenha(){
    if($("#senha").val() == $("#confirmarSenha").val()){
        return 1;
    }else{
        return 0;
    }
}

function verificaCampos(){
    if(
        $("#nome").val() != "" &&
        $("#sobrenome").val() != "" &&
        $("#email").val() != "" &&
        $("#usuario").val() != "" &&
        $("#senha").val() != "" &&
        $("#confirmarSenha").val() != ""
    ){
        return 1;
    }else{
        return 0;
    }
}