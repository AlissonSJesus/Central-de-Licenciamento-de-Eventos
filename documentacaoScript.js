
//Componente da página de "Documentação"
elementoNav = window.document.querySelectorAll(".navigation").length;
elementoNavTwo = window.document.querySelectorAll(".navigationTwo").length;
elementoNavThree = window.document.querySelectorAll(".navigationThree").length;
elementoNavFour = window.document.querySelectorAll(".navigationFour").length;

variavel = "";

for (i = 0; i < elementoNav; i++) {
    document.querySelectorAll(".navigation")[i].addEventListener("click", function () {
        variavel = this.id;
        switch (variavel) {
            case "linkDe":
                descricaoLopu.style.display = "block";
                documentacaoLopu.style.display = "none";
                taxasLopu.style.display = "none";
                infoLopu.style.display = "none";

                linkDe.style.color = "white";
                linkDe.style.backgroundColor = "#007bffff";
                linkDoEx.style.color = "gray";
                linkDoEx.style.backgroundColor = "white";
                linkTa.style.color = "gray";
                linkTa.style.backgroundColor = "white";
                linkIn.style.color = "gray";
                linkIn.style.backgroundColor = "white";
                break;
            case "linkDoEx":
                descricaoLopu.style.display = "none";
                documentacaoLopu.style.display = "block";
                taxasLopu.style.display = "none";
                infoLopu.style.display = "none";

                linkDe.style.color = "gray";
                linkDe.style.backgroundColor = "white";
                linkDoEx.style.color = "white";
                linkDoEx.style.backgroundColor = "#007bffff";
                linkTa.style.color = "gray";
                linkTa.style.backgroundColor = "white";
                linkIn.style.color = "gray";
                linkIn.style.backgroundColor = "white";
                break;
            case "linkTa":
                descricaoLopu.style.display = "none";
                documentacaoLopu.style.display = "none";
                taxasLopu.style.display = "block";
                infoLopu.style.display = "none";

                linkDe.style.color = "gray";
                linkDe.style.backgroundColor = "white";
                linkDoEx.style.color = "gray";
                linkDoEx.style.backgroundColor = "white";
                linkTa.style.color = "white";
                linkTa.style.backgroundColor = "#007bffff";
                linkIn.style.color = "gray";
                linkIn.style.backgroundColor = "white";
                break;
            case "linkIn":
                descricaoLopu.style.display = "none";
                documentacaoLopu.style.display = "none";
                taxasLopu.style.display = "none";
                infoLopu.style.display = "block";

                linkDe.style.color = "gray";
                linkDe.style.backgroundColor = "white";
                linkDoEx.style.color = "gray";
                linkDoEx.style.backgroundColor = "white";
                linkTa.style.color = "gray";
                linkTa.style.backgroundColor = "white";
                linkIn.style.color = "white";
                linkIn.style.backgroundColor = "#007bffff";
                break;
            default:
                console.log(variavel);
                break;
        }
    });
}

for (i = 0; i < elementoNavTwo; i++) {
    document.querySelectorAll(".navigationTwo")[i].addEventListener("click", function () {
        variavelTwo = this.id;
        switch (variavelTwo) {
            case "linkDe02":
                descricao02.style.display = "block";
                documentacaoExigida02.style.display = "none";
                taxas02.style.display = "none";
                informacoes02.style.display = "none";
                palo.style.display = "none";

                linkDe02.style.color = "white";
                linkDe02.style.backgroundColor = "#007bffff";
                linkDoEx02.style.color = "gray";
                linkDoEx02.style.backgroundColor = "white";
                linkTa02.style.color = "gray";
                linkTa02.style.backgroundColor = "white";
                linkIn02.style.color = "gray";
                linkIn02.style.backgroundColor = "white";
                linkPaLo.style.color = "gray";
                linkPaLo.style.backgroundColor = "white";
                break;
            case "linkDoEx02":
                descricao02.style.display = "none";
                documentacaoExigida02.style.display = "block";
                taxas02.style.display = "none";
                informacoes02.style.display = "none";
                palo.style.display = "none";

                linkDe02.style.color = "gray";
                linkDe02.style.backgroundColor = "white";
                linkDoEx02.style.color = "white";
                linkDoEx02.style.backgroundColor = "#007bffff";
                linkTa02.style.color = "gray";
                linkTa02.style.backgroundColor = "white";
                linkIn02.style.color = "gray";
                linkIn02.style.backgroundColor = "white";
                linkPaLo.style.color = "gray";
                linkPaLo.style.backgroundColor = "white";
                break;
            case "linkTa02":
                descricao02.style.display = "none";
                documentacaoExigida02.style.display = "none";
                taxas02.style.display = "block";
                informacoes02.style.display = "none";
                palo.style.display = "none";

                linkDe02.style.color = "gray";
                linkDe02.style.backgroundColor = "white";
                linkDoEx02.style.color = "gray";
                linkDoEx02.style.backgroundColor = "white";
                linkTa02.style.color = "white";
                linkTa02.style.backgroundColor = "#007bffff";
                linkIn02.style.color = "gray";
                linkIn02.style.backgroundColor = "white";
                linkPaLo.style.color = "gray";
                linkPaLo.style.backgroundColor = "white";
                break;
            case "linkIn02":
                descricao02.style.display = "none";
                documentacaoExigida02.style.display = "none";
                taxas02.style.display = "none";
                informacoes02.style.display = "block";
                palo.style.display = "none";

                linkDe02.style.color = "gray";
                linkDe02.style.backgroundColor = "white";
                linkDoEx02.style.color = "gray";
                linkDoEx02.style.backgroundColor = "white";
                linkTa02.style.color = "gray";
                linkTa02.style.backgroundColor = "white";
                linkIn02.style.color = "white";
                linkIn02.style.backgroundColor = "#007bffff";
                linkPaLo.style.color = "gray";
                linkPaLo.style.backgroundColor = "white";
                break;
            case "linkPaLo":
                descricao02.style.display = "none";
                documentacaoExigida02.style.display = "none";
                taxas02.style.display = "none";
                informacoes02.style.display = "none";
                palo.style.display = "block";

                linkDe02.style.color = "gray";
                linkDe02.style.backgroundColor = "white";
                linkDoEx02.style.color = "gray";
                linkDoEx02.style.backgroundColor = "white";
                linkTa02.style.color = "gray";
                linkTa02.style.backgroundColor = "white";
                linkIn02.style.color = "gray";
                linkIn02.style.backgroundColor = "white";
                linkPaLo.style.color = "white";
                linkPaLo.style.backgroundColor = "#007bffff";
                break;
            default:
                console.log(variavelTwo);
                break;
        }
    });
}

for (i = 0; i < elementoNavThree; i++) {
    document.querySelectorAll(".navigationThree")[i].addEventListener("click", function () {
        variavelThree = this.id;
        switch (variavelThree) {
            case "linkDe03":
                descricao03.style.display = "block";
                documentacaoExigida03.style.display = "none";
                taxas03.style.display = "none";
                informacoes03.style.display = "none";
                palo02.style.display = "none";

                linkDe03.style.color = "white";
                linkDe03.style.backgroundColor = "#007bffff";
                linkDoEx03.style.color = "gray";
                linkDoEx03.style.backgroundColor = "white";
                linkTa03.style.color = "gray";
                linkTa03.style.backgroundColor = "white";
                linkIn03.style.color = "gray";
                linkIn03.style.backgroundColor = "white";
                linkPaLo02.style.color = "gray";
                linkPaLo02.style.backgroundColor = "white";
                break;
            case "linkDoEx03":
                descricao03.style.display = "none";
                documentacaoExigida03.style.display = "block";
                taxas03.style.display = "none";
                informacoes03.style.display = "none";
                palo02.style.display = "none";

                linkDe03.style.color = "gray";
                linkDe03.style.backgroundColor = "white";
                linkDoEx03.style.color = "white";
                linkDoEx03.style.backgroundColor = "#007bffff";
                linkTa03.style.color = "gray";
                linkTa03.style.backgroundColor = "white";
                linkIn03.style.color = "gray";
                linkIn03.style.backgroundColor = "white";
                linkPaLo02.style.color = "gray";
                linkPaLo02.style.backgroundColor = "white";
                break;
            case "linkTa03":
                descricao03.style.display = "none";
                documentacaoExigida03.style.display = "none";
                taxas03.style.display = "block";
                informacoes03.style.display = "none";
                palo02.style.display = "none";

                linkDe03.style.color = "gray";
                linkDe03.style.backgroundColor = "white";
                linkDoEx03.style.color = "gray";
                linkDoEx03.style.backgroundColor = "white";
                linkTa03.style.color = "white";
                linkTa03.style.backgroundColor = "#007bffff";
                linkIn03.style.color = "gray";
                linkIn03.style.backgroundColor = "white";
                linkPaLo02.style.color = "gray";
                linkPaLo02.style.backgroundColor = "white";
                break;
            case "linkIn03":
                descricao03.style.display = "none";
                documentacaoExigida03.style.display = "none";
                taxas03.style.display = "none";
                informacoes03.style.display = "block";
                palo02.style.display = "none";

                linkDe03.style.color = "gray";
                linkDe03.style.backgroundColor = "white";
                linkDoEx03.style.color = "gray";
                linkDoEx03.style.backgroundColor = "white";
                linkTa03.style.color = "gray";
                linkTa03.style.backgroundColor = "white";
                linkIn03.style.color = "white";
                linkIn03.style.backgroundColor = "#007bffff";
                linkPaLo02.style.color = "gray";
                linkPaLo02.style.backgroundColor = "white";
                break;
            case "linkPaLo02":
                descricao03.style.display = "none";
                documentacaoExigida03.style.display = "none";
                taxas03.style.display = "none";
                informacoes03.style.display = "none";
                palo02.style.display = "block";

                linkDe03.style.color = "gray";
                linkDe03.style.backgroundColor = "white";
                linkDoEx03.style.color = "gray";
                linkDoEx03.style.backgroundColor = "white";
                linkTa03.style.color = "gray";
                linkTa03.style.backgroundColor = "white";
                linkIn03.style.color = "gray";
                linkIn03.style.backgroundColor = "white";
                linkPaLo02.style.color = "white";
                linkPaLo02.style.backgroundColor = "#007bffff";
                break;
            default:
                console.log(variavelThree);
                break;
        }
    });
}

for (i = 0; i < elementoNavFour; i++) {
    document.querySelectorAll(".navigationFour")[i].addEventListener("click", function () {
        variavelFour = this.id;
        switch (variavelFour) {
            case "linkDe04":
                descricao04.style.display = "block";
                documentacaoExigida04.style.display = "none";
                taxas04.style.display = "none";
                informacoes04.style.display = "none";
                obs.style.display = "none";
                palo03.style.display = "none";


                linkDe04.style.color = "white";
                linkDe04.style.backgroundColor = "#007bffff";
                linkDoEx04.style.color = "gray";
                linkDoEx04.style.backgroundColor = "white";
                linkTa04.style.color = "gray";
                linkTa04.style.backgroundColor = "white";
                linkIn04.style.color = "gray";
                linkIn04.style.backgroundColor = "white";
                linkOb.style.color = "gray";
                linkOb.style.backgroundColor = "white";
                linkPaLo03.style.color = "gray";
                linkPaLo03.style.backgroundColor = "white";
                break;
            case "linkDoEx04":
                descricao04.style.display = "none";
                documentacaoExigida04.style.display = "block";
                taxas04.style.display = "none";
                informacoes04.style.display = "none";
                obs.style.display = "none";
                palo03.style.display = "none";

                linkDe04.style.color = "gray";
                linkDe04.style.backgroundColor = "white";
                linkDoEx04.style.color = "white";
                linkDoEx04.style.backgroundColor = "#007bffff";
                linkTa04.style.color = "gray";
                linkTa04.style.backgroundColor = "white";
                linkIn04.style.color = "gray";
                linkIn04.style.backgroundColor = "white";
                linkOb.style.color = "gray";
                linkOb.style.backgroundColor = "white";
                linkPaLo03.style.color = "gray";
                linkPaLo03.style.backgroundColor = "white";
                break;
            case "linkTa04":
                descricao04.style.display = "none";
                documentacaoExigida04.style.display = "none";
                taxas04.style.display = "block";
                informacoes04.style.display = "none";
                obs.style.display = "none";
                palo03.style.display = "none";

                linkDe04.style.color = "gray";
                linkDe04.style.backgroundColor = "white";
                linkDoEx04.style.color = "gray";
                linkDoEx04.style.backgroundColor = "white";
                linkTa04.style.color = "white";
                linkTa04.style.backgroundColor = "#007bffff";
                linkIn04.style.color = "gray";
                linkIn04.style.backgroundColor = "white";
                linkOb.style.color = "gray";
                linkOb.style.backgroundColor = "white";
                linkPaLo03.style.color = "gray";
                linkPaLo03.style.backgroundColor = "white";
                break;
            case "linkIn04":
                descricao04.style.display = "none";
                documentacaoExigida04.style.display = "none";
                taxas04.style.display = "none";
                informacoes04.style.display = "block";
                obs.style.display = "none";
                palo03.style.display = "none";

                linkDe04.style.color = "gray";
                linkDe04.style.backgroundColor = "white";
                linkDoEx04.style.color = "gray";
                linkDoEx04.style.backgroundColor = "white";
                linkTa04.style.color = "gray";
                linkTa04.style.backgroundColor = "white";
                linkIn04.style.color = "white";
                linkIn04.style.backgroundColor = "#007bffff";
                linkOb.style.color = "gray";
                linkOb.style.backgroundColor = "white";
                linkPaLo03.style.color = "gray";
                linkPaLo03.style.backgroundColor = "white";
                break;
            case "linkOb":
                descricao04.style.display = "none";
                documentacaoExigida04.style.display = "none";
                taxas04.style.display = "none";
                informacoes04.style.display = "none";
                obs.style.display = "block";
                palo03.style.display = "none";

                linkDe04.style.color = "gray";
                linkDe04.style.backgroundColor = "white";
                linkDoEx04.style.color = "gray";
                linkDoEx04.style.backgroundColor = "white";
                linkTa04.style.color = "gray";
                linkTa04.style.backgroundColor = "white";
                linkIn04.style.color = "gray";
                linkIn04.style.backgroundColor = "white";
                linkOb.style.color = "white";
                linkOb.style.backgroundColor = "#007bffff";
                linkPaLo03.style.color = "gray";
                linkPaLo03.style.backgroundColor = "white";
                break;
            case "linkPaLo03":
                descricao04.style.display = "none";
                documentacaoExigida04.style.display = "none";
                taxas04.style.display = "none";
                informacoes04.style.display = "none";
                obs.style.display = "none";
                palo03.style.display = "block";

                linkDe04.style.color = "gray";
                linkDe04.style.backgroundColor = "white";
                linkDoEx04.style.color = "gray";
                linkDoEx04.style.backgroundColor = "white";
                linkTa04.style.color = "gray";
                linkTa04.style.backgroundColor = "white";
                linkIn04.style.color = "gray";
                linkIn04.style.backgroundColor = "white";
                linkOb.style.color = "gray";
                linkOb.style.backgroundColor = "white";
                linkPaLo03.style.color = "white";
                linkPaLo03.style.backgroundColor = "#007bffff";
                break;
            default:
                console.log(variavelFour);
                break;
        }
    });
}
