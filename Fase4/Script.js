function jogo() {
    var a1 = parseInt(document.getElementsByName("a1")[0].value);
    var b1 = parseInt(document.getElementsByName("b1")[0].value);
    var c1 = parseInt(document.getElementsByName("c1")[0].value);
    var d1 = parseInt(document.getElementsByName("d1")[0].value);
    var e1 = parseInt(document.getElementsByName("e1")[0].value);
    var f1 = parseInt(document.getElementsByName("f1")[0].value);
    var g1 = parseInt(7);
    var h1 = parseInt(document.getElementsByName("h1")[0].value);
    var i1 = parseInt(document.getElementsByName("i1")[0].value);

    var a2 = parseInt(document.getElementsByName("a2")[0].value);
    var b2 = parseInt(document.getElementsByName("b2")[0].value);
    var c2 = parseInt(document.getElementsByName("c2")[0].value);
    var d2 = parseInt(document.getElementsByName("d2")[0].value);
    var e2 = parseInt(8);
    var f2 = parseInt(document.getElementsByName("f2")[0].value);
    var g2 = parseInt(document.getElementsByName("g2")[0].value);
    var h2 = parseInt(document.getElementsByName("h2")[0].value);
    var i2 = parseInt(document.getElementsByName("i2")[0].value);

    var a3 = parseInt(document.getElementsByName("a3")[0].value);
    var b3 = parseInt(document.getElementsByName("b3")[0].value);
    var c3 = parseInt(9);
    var d3 = parseInt(document.getElementsByName("d3")[0].value);
    var e3 = parseInt(document.getElementsByName("e3")[0].value);
    var f3 = parseInt(document.getElementsByName("f3")[0].value);
    var g3 = parseInt(document.getElementsByName("g3")[0].value);
    var h3 = parseInt(document.getElementsByName("h3")[0].value);
    var i3 = parseInt(document.getElementsByName("i3")[0].value);

    var a4 = parseInt(document.getElementsByName("a4")[0].value);
    var b4 = parseInt(document.getElementsByName("b4")[0].value);
    var c4 = parseInt(document.getElementsByName("c4")[0].value);
    var d4 = parseInt(5);
    var e4 = parseInt(document.getElementsByName("e4")[0].value);
    var f4 = parseInt(document.getElementsByName("f4")[0].value);
    var g4 = parseInt(document.getElementsByName("g4")[0].value);
    var h4 = parseInt(document.getElementsByName("h4")[0].value);
    var i4 = parseInt(document.getElementsByName("i4")[0].value);

    var a5 = parseInt(document.getElementsByName("a5")[0].value);
    var b5 = parseInt(6);
    var c5 = parseInt(document.getElementsByName("c5")[0].value);
    var d5 = parseInt(document.getElementsByName("d5")[0].value);
    var e5 = parseInt(document.getElementsByName("e5")[0].value);
    var f5 = parseInt(document.getElementsByName("f5")[0].value);
    var g5 = parseInt(document.getElementsByName("g5")[0].value);
    var h5 = parseInt(document.getElementsByName("h5")[0].value);
    var i5 = parseInt(4);

    var a6 = parseInt(document.getElementsByName("a6")[0].value);
    var b6 = parseInt(document.getElementsByName("b6")[0].value);
    var c6 = parseInt(document.getElementsByName("c6")[0].value);
    var d6 = parseInt(document.getElementsByName("d6")[0].value);
    var e6 = parseInt(document.getElementsByName("e6")[0].value);
    var f6 = parseInt(document.getElementsByName("f6")[0].value);
    var g6 = parseInt(document.getElementsByName("g6")[0].value);
    var h6 = parseInt(document.getElementsByName("h6")[0].value);
    var i6 = parseInt(document.getElementsByName("i6")[0].value);

    var a7 = parseInt(3);
    var b7 = parseInt(document.getElementsByName("b7")[0].value);
    var c7 = parseInt(document.getElementsByName("c7")[0].value);
    var d7 = parseInt(document.getElementsByName("d7")[0].value);
    var e7 = parseInt(document.getElementsByName("e7")[0].value);
    var f7 = parseInt(document.getElementsByName("f7")[0].value);
    var g7 = parseInt(document.getElementsByName("g7")[0].value);
    var h7 = parseInt(1);
    var i7 = parseInt(document.getElementsByName("i7")[0].value);

    var a8 = parseInt(document.getElementsByName("a8")[0].value);
    var b8 = parseInt(document.getElementsByName("b8")[0].value);
    var c8 = parseInt(document.getElementsByName("c8")[0].value);
    var d8 = parseInt(document.getElementsByName("d8")[0].value);
    var e8 = parseInt(document.getElementsByName("e8")[0].value);
    var f8 = parseInt(2);
    var g8 = parseInt(document.getElementsByName("g8")[0].value);
    var h8 = parseInt(document.getElementsByName("h8")[0].value);
    var i8 = parseInt(document.getElementsByName("i8")[0].value);

    var a9 = parseInt(document.getElementsByName("a9")[0].value);
    var b9 = parseInt(document.getElementsByName("b9")[0].value);
    var c9 = parseInt(document.getElementsByName("c9")[0].value);
    var d9 = parseInt(document.getElementsByName("d9")[0].value);
    var e9 = parseInt(document.getElementsByName("e9")[0].value);
    var f9 = parseInt(document.getElementsByName("f9")[0].value);
    var g9 = parseInt(document.getElementsByName("g9")[0].value);
    var h9 = parseInt(document.getElementsByName("h9")[0].value);
    var i9 = parseInt(document.getElementsByName("i9")[0].value);

    if (
        (a1 + b1 + c1 + d1 + e1 + f1 + g1 + h1 + i1) == 45 && 
        (a2 + b2 + c2 + d2 + e2 + f2 + g2 + h2 + i2) == 45 &&
        (a3 + b3 + c3 + d3 + e3 + f3 + g3 + h3 + i3) == 45 && 
        (a4 + b4 + c4 + d4 + e4 + f4 + g4 + h4 + i4) == 45 &&
        (a5 + b5 + c5 + d5 + e5 + f5 + g5 + h5 + i5) == 45 && 
        (a6 + b6 + c6 + d6 + e6 + f6 + g6 + h6 + i6) == 45 &&
        (a7 + b7 + c7 + d7 + e7 + f7 + g7 + h7 + i7) == 45 && 
        (a8 + b8 + c8 + d8 + e8 + f8 + g8 + h8 + i8) == 45 && 
        (a9 + b9 + c9 + d9 + e9 + f9 + g9 + h9 + i9) == 45 &&
        (a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9) == 45 &&
        (b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9) == 45 &&  
        (c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9) == 45 &&
        (d1 + d2 + d3 + e1 + e2 + e3 + f1 + f2 + f3) == 45 &&
        (d4 + d5 + d6 + e4 + e5 + e6 + f4 + f5 + f6) == 45 && 
        (d7 + d8 + d9 + e7 + e8 + e9 + f7 + f8 + f9) == 45 && 
        (g1 + g2 + g3 + h1 + h2 + h3 + i1 + i2 + i3) == 45 &&
        (g4 + g5 + g6 + h4 + h5 + h6 + i4 + i5 + i6) == 45 && 
        (g7 + g8 + g9 + h7 + h8 + h9 + i7 + i8 + i9) == 45
    ) {
        alert("Parabéns, você conseguiu!");
    } else {
        alert("Tente novamente!");
    }
}
