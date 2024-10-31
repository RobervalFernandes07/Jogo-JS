function jogo(){

    var a1 = parseInt(document.getElementsByName("a1")[0].value);
    var b1 = parseInt(document.getElementsByName("b1")[0].value);
    var c1 = parseInt(document.getElementsByName("c1")[0].value);
    var d1 = parseInt(document.getElementsByName("d1")[0].value);

    var a2 = parseInt(document.getElementsByName("a2")[0].value);
    var b2 = parseInt(document.getElementsByName("b2")[0].value);
    var c2 = parseInt(document.getElementsByName("c2")[0].value);
    var d2 = parseInt(document.getElementsByName("d2")[0].value);
   
    var a3 = parseInt(document.getElementsByName("a3")[0].value);
    var b3 = parseInt(document.getElementsByName("b3")[0].value);
    var c3 = parseInt(document.getElementsByName("c3")[0].value);
    var d3 = parseInt(document.getElementsByName("d3")[0].value);

    var a4 = parseInt(document.getElementsByName("a4")[0].value);
    var b4 = parseInt(document.getElementsByName("b4")[0].value);
    var c4 = parseInt(document.getElementsByName("c4")[0].value);
    var d4 = parseInt(document.getElementsByName("d4")[0].value);


    if((a1 + b1 + c1 + d1) == 10 && (a2 + b2 + c2 + d2) == 10 && (a3 + b3 + c3 + d3) == 10 && (a4 + b4 + c4 + d4) == 10 && (a1 + a2 + a3 + a4) == 10 && (b1 + b2 + b3 + b4) == 10 && (c1 + c2 + c3 + c4) == 10 && (d1 + d2 + d3 + d4) == 10 && (a1 + b1 + a2 + b2) == 10 && (a3 + b3 + a4 + b4) == 10 && (c1 + d1 + c2 + d2) == 10 && (c3 + d3 + c4 + d4) == 10 && (a1 + b2 + c3 + d4) == 10 && (a4 + b3 + c2 + d1) == 10){
        var jogo = "<p class='verd'>Você Conseguiu!</p><br> <a href='jogojs3.html' target='_self'><button>Proxima Fase</button></a>";
        document.querySelector('#resu').innerHTML = jogo;
    }
    else{
        document.querySelector('#resu').innerHTML = "<p class='verm'>Tente novamente!</p>";
    }
}