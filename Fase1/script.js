
            function jogo() {
                var a = parseInt(document.getElementsByName("a")[0].value);
                var b = parseInt(document.getElementsByName("b")[0].value);
                var c = parseInt(document.getElementsByName("c")[0].value);
                var d = parseInt(document.getElementsByName("d")[0].value);
                var e = parseInt(document.getElementsByName("e")[0].value);
                var f = parseInt(document.getElementsByName("f")[0].value);
                var g = parseInt(document.getElementsByName("g")[0].value);
                var h = parseInt(document.getElementsByName("h")[0].value);
                var i = parseInt(document.getElementsByName("i")[0].value);

                if ((a + b + c) == 15 && (d + e + f) == 15 && (g + h + i) == 15 && (a + d + g) == 15 && (b + e + h) == 15 && (c + f + i) == 15 && (a + e + i) == 15 && (c + e + g) == 15 && a != b) {
                    var jogo = "<p class='verd'>Você Conseguiu!</p><br> <a href='jogojs2.html' target='_self'><button>Próxima Fase</button></a>";
                    document.querySelector('#resu').innerHTML = jogo;
                } else {
                    document.querySelector('#resu').innerHTML = "<p class='verm'>Tente novamente!<p>";
                }
            }
        