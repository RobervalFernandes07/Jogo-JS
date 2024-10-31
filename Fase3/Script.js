function jogo(){

    var a1 = parseInt(document.getElementsByName("a1")[0].value);
    var b1 = parseInt(document.getElementsByName("b1")[0].value);
    var c1 = parseInt(document.getElementsByName("c1")[0].value);
    var d1 = parseInt(document.getElementsByName("d1")[0].value);
    var e1 = parseInt(2);

    var a2 = parseInt(document.getElementsByName("a2")[0].value);
    var b2 = parseInt(document.getElementsByName("b2")[0].value);
    var c2 = parseInt(document.getElementsByName("c2")[0].value);
    var d2 = parseInt(1);
    var e2 = parseInt(document.getElementsByName("e2")[0].value);
   
    var a3 = parseInt(document.getElementsByName("a3")[0].value);
    var b3 = parseInt(document.getElementsByName("b3")[0].value);
    var c3 = parseInt(3);
    var d3 = parseInt(document.getElementsByName("d3")[0].value);
    var e3 = parseInt(document.getElementsByName("e3")[0].value);

    var a4 = parseInt(document.getElementsByName("a4")[0].value);
    var b4 = parseInt(5);
    var c4 = parseInt(document.getElementsByName("c4")[0].value);
    var d4 = parseInt(document.getElementsByName("d4")[0].value);
    var e4 = parseInt(document.getElementsByName("e4")[0].value);

    var a5 = parseInt(4);
    var b5 = parseInt(document.getElementsByName("b5")[0].value);
    var c5 = parseInt(document.getElementsByName("c5")[0].value);
    var d5 = parseInt(document.getElementsByName("d5")[0].value);
    var e5 = parseInt(document.getElementsByName("e5")[0].value);


    if((a1 + b1 + c1 + d1 + e1) == 15 && (a2 + b2 + c2 + d2 + e2) == 15 && (a3 + b3 + c3 + d3 + e3) == 15 && (a4 + b4 + c4 + d4 + e4) == 15 && (a5 + b5 + c5 + d5 + e5) == 15 && (a1 + a2 + a3 + a4 + a5) == 15 && (b1 + b2 + b3 + b4 + b5) == 15 && (c1 + c2 + c3 + c4 + c5) == 15 && (d1 + d2 + d3 + d4 + d5) == 15 && (e1 + e2 + e3 + e4 + e5) == 15 && (a1 + b2 + c3 + d4 + e5) == 15 && (a5 + b4 + c3 + d2 + e1) == 15){
        var jogo = "<p class='verd'>Você Conseguiu!</p><br> <a href='jogojs4.html' target='_self'><button>Proxima Fase</button></a>";
        document.querySelector('#resu').innerHTML = jogo;
    }
    else{
        document.querySelector('#resu').innerHTML = "<p class='verm'>Tente novamente!</p>";
    }
}