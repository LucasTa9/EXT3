function somarPonto() {
  let pontos = Number(localStorage.getItem("pontos")) || 0;
  localStorage.setItem("pontos", pontos + 1);
}

console.log("quiz.js carregado!!!");

function mostrarResultado() {
  let pontos = Number(localStorage.getItem("pontos")) || 0;
  let lugar = document.getElementById("resultadoFinal");

  if (lugar) {
    lugar.textContent = pontos + " de 6";
  }
}

mostrarResultado();document.addEventListener("DOMContentLoaded", () => {
    
   
    const botoesAcao = document.querySelectorAll(".btn-acao, .btn-resposta");

    botoesAcao.forEach(botao => {
        botao.addEventListener("click", function(event) {
            
            if (this.dataset.acao === "iniciar") {
                zerarPontos();
            }

            if (this.dataset.correta === "true") {
                somarPonto();
            }

            const proximaPagina = this.dataset.proxima;
            if (proximaPagina) {
                window.location.href = proximaPagina;
            }
        });
    });

    mostrarResultado();

   
    const seletorCor = document.getElementById("filtro-daltonismo");
    
    if (seletorCor) {
        const temaSalvo = localStorage.getItem("temaQuizAcessibilidade") || "padrao";
        aplicarTema(temaSalvo);
        seletorCor.value = temaSalvo;

        seletorCor.addEventListener("change", (e) => {
            const novoTema = e.target.value;
            aplicarTema(novoTema);
            localStorage.setItem("temaQuizAcessibilidade", novoTema);
        });
    }
});

function aplicarTema(tema) {
    document.body.classList.remove("protanopia", "deuteranopia", "tritanopia", "alto-contraste");
    if (tema !== "padrao") {
        document.body.classList.add(tema);
    }
}

/* 0% IA */ function somarPonto() {
    let pontos = Number(localStorage.getItem("pontos")) || 0;
    localStorage.setItem("pontos", pontos + 1);
}

function mostrarResultado() {
    let lugar = document.getElementById("resultadoFinal");
    if (lugar) {
        let pontos = Number(localStorage.getItem("pontos")) || 0;
        lugar.textContent = pontos + " de 6"; 
    }
}

function zerarPontos() {
    localStorage.setItem("pontos", 0);
}

function zerarPontos() {
  localStorage.setItem("pontos", 0);
}
