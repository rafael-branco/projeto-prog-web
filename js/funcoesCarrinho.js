var suplementosBase = 
[['whey-protein.jpg', 'Whey Protein', 'ON', false, 119.99],
['malto.webp', 'Malto', 'Integralmédica', false, 49.99],
['creatina.jpg', 'Creatina', 'MAX', false, 29.99],
['palatinose.png', 'Palatinose', 'Integralmédica', false, 41.99],
['glutamina.png', 'Glutamina','Vitafor', false, 51.99],
['cafeina.jpg', 'Cafeína', 'Integralmédica', false, 19.99],
['bcaa.png','BCAA','MAX', false, 79.99],
['albumina.jpg', 'Albumina', 'Naturalovos', false, 29.99],
['whey-integral.webp','Whey Protein','Integralmédica', false, 89.99]]
storage = window.localStorage;

$(document).ready(function(){
    suplementos = JSON.parse(storage.getItem('suplementos'));
    if(suplementos == null){
        suplementos = suplementosBase;
    }
    listaSuplementos();
});

var carrinho = [];



function listaSuplementos(){
    $(".produtos").html("");
    atualizarPreco();
    for(var i = 0; i < suplementos.length; i++){
        if(suplementos[i][3] == true){
            var conteudo = `
            <div class="card div-card bg-light border-dark mb-3">
            <div class="div-img">
                <img src="../img/`+suplementos[i][0]+`">
            </div>
            <div class="div-titulo">
                <h3>`+suplementos[i][1]+`</h3>
            </div>
            <div class="div-descricao">
            `+suplementos[i][2]+" - R$ "+suplementos[i][4]+`
            </div>
            <div class="div-add-carrinho">`;
            if(suplementos[i][3] == false){
                conteudo += '<button type="button" class=" div-botao-add-carrinho btn btn-dark" id="'+i+'">Comprar</button>';
            }else{
                conteudo += '<button type="button" class=" div-botao-add-carrinho btn btn-success" id="'+i+'">No carrinho</button>';
            }
            conteudo += `</div></div>`;
            $(".produtos").append(conteudo);
        }
        
    }

    $(".div-botao-add-carrinho").click(function(){
        var id = $(this).attr("id");

        suplementos[id].splice(3,1,!suplementos[id][3]);
        atualizaCarrinho();
        console.log(carrinho);
        listaSuplementos();
    });
}

function atualizaCarrinho(){
    carrinho = [];
    for(var i = 0; i < suplementos.length; i++){
        if(suplementos[i][3] == true){
            carrinho.push(suplementos[i]);
        }
    }
    storage.removeItem("suplementos");
    storage.setItem("suplementos", JSON.stringify(suplementos));
    
}


function atualizarPreco(){
    $("#footer").html("");
    var conteudo = 
    `<div class="footer list-group-item d-flex justify-content-between align-items-center">
        <h5>Total: R$ `+somaProdutos().toFixed(2)+`</h5>
        <span><button type="button" class=" div-botao-comprar btn btn-success">Comprar</button></span>
    </div>`;
    $("#footer").append(conteudo);
}

function somaProdutos(){
    var soma = 0;
    for(var i = 0; i < suplementos.length; i++){
        if(suplementos[i][3] == true){
            soma += suplementos[i][4];
        }
    }
    return soma;
}
