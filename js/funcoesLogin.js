dados = [];
storage = window.localStorage;

$(document).ready(function(){
    dados = JSON.parse(storage.getItem('dados'));
    if(dados == null){
        dados = [];
    }
    login();
});

function login(){
    $("#btnLogin").click(function(){
        if($("#usuario").val() != "" && $("#senha").val() != "" ){
            if(verificaLogin()){
                alert("Login OK");
            }else{
                alert("Usuário ou senha incorretos!");
            }
        }else{
            alert("Preencha os campos!");
        }
    });
}

function verificaLogin(){
    for(var i = 0; i < dados.length; i++){
        if(
            dados[i][3] == $("#usuario").val() &&
            dados[i][4] == $("#senha").val()
        ){
            return 1;
        }
    }
    return 0;
}


