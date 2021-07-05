let valorBotao = "cadastrar";
let id = 1;
let valorDivNovo = "";
let clientesFastPark = [];
let clientesFastParkLocalStorage = localStorage.getItem('clientesFastPark',[]);

lista()
const formatarValorPlacaInput = document.getElementById("placa-input").addEventListener("keydown", (event) => {
    const placaFormatada = event.target.value.replace(/([a-zA-Z]{3})(\d{4})/, "$1-$2").toUpperCase();
    event.target.value = placaFormatada;
});

function lista() {
    document.querySelectorAll(".estilo").forEach((el) => {
        el.remove();
    });
    localStorage.setItem('clientesFastPark', JSON.stringify(clientesFastPark))
    clientesFastPark.forEach((element, index) => {

        const DataEntrada = new Intl.DateTimeFormat("br").format(new Date());
        const HoraEntrada = new Date().getHours();
        const MinutosEntrada = new Date().getMinutes();

        let ValorNome = element.Nome;
        let ValorPlaca = element.Placa;
        let ValorHoraEntrada = element.HoraEntradaSistema
        const ClassNome = document.getElementsByClassName("nome");
        const HtmlNome = ClassNome[0];
        const DivNome = document.createElement("div");
        DivNome.setAttribute("class", "estilo");
        DivNome.setAttribute("id", "nome" + id);
        HtmlNome.appendChild(DivNome);
        DivNome.innerHTML = ValorNome;

        const ClassPlaca = document.getElementsByClassName("Placa");
        const HtmlPlaca = ClassPlaca[0];
        const DivPlaca = document.createElement("div");
        DivPlaca.setAttribute("class", "estilo");
        DivPlaca.setAttribute("id", "placa" + id);
        HtmlPlaca.appendChild(DivPlaca);
        DivPlaca.innerHTML = ValorPlaca;

        const ClassData = document.getElementsByClassName("Data");
        const HtmlData = ClassData[0];
        const DivData = document.createElement("div");
        DivData.setAttribute("class", "estilo");
        HtmlData.appendChild(DivData);
        DivData.innerHTML = DataEntrada;

        const ClassHora = document.getElementsByClassName("Hora");
        const HtmlHora = ClassHora[0];
        const DivHora = document.createElement("div");
        DivHora.setAttribute("class", "estilo");
        HtmlHora.appendChild(DivHora);
        DivHora.innerHTML = ValorHoraEntrada;

        const containerBotoes = document.getElementsByClassName("Container-botoes");
        const pegandoBotoes = containerBotoes[0];
        const DivBotoes = document.createElement("div");
        DivBotoes.setAttribute("class", "estilo Acoes");
        pegandoBotoes.appendChild(DivBotoes);
        const BotoesComprovante = document.createElement("button");
        BotoesComprovante.setAttribute("class", "button-acao comprovante");
        const BotoesSaida = document.createElement("button");
        BotoesSaida.setAttribute("class", "button-acao saida");
        const BotoesEditar = document.createElement("button");
        BotoesEditar.setAttribute("class", "button-acao editar");
        const valorNomeModal = document.getElementById("h3Nome");
        valorNomeModal.innerHTML = "Nome : " + ValorNome;
        const valorDataModal = document.getElementById("h3Data");
        valorDataModal.innerHTML = "Data : " + DataEntrada;
        const valorPlacaModal = document.getElementById("h3Placa");
        valorPlacaModal.innerHTML = "Placa : " + ValorPlaca;

        DivBotoes.appendChild(BotoesComprovante).addEventListener("click", (mostrarModalComprovante) => {
            const ModalComprovante = document.getElementById("containerModalComprovante");
            const valorHoraEntrada = document.getElementById("h3HoraEntrada");

            valorHoraEntrada.innerHTML = "Hora De Entrada : " + element.HoraEntradaSistema

            ModalComprovante.classList.remove("modalComp");
            ModalComprovante.classList.add("mostarModal");

            const horaModal = new Date().getHours();
            const minutosModal = new Date().getMinutes();
            const valorHoraSaida = document.getElementById("h3HoraSaida");

            valorHoraSaida.innerHTML = "Hora De Saida : " + horaModal + ":" + minutosModal

            const preco = document.getElementById("valorPagar")
            let valor;

            const horario = element.HoraEntradaSistema.split(":")
            const resultadoCalculoMinutos = minutosModal - horario[1];
            const resultadoCalculoHoras = horaModal - horario[0];
            const horaUm = 10;

            if (resultadoCalculoMinutos > 1 || resultadoCalculoMinutos < 50) {
                valor = "$7.00"
                preco.innerHTML = "Valor a pagar: " + valor
            } else if (resultadoCalculoHoras >= 1 || resultadoCalculoHoras <= 3) {
                valor = "$15.50"
                preco.innerHTML = "Valor a pagar : " + valor
            } else if (resultadoCalculoHoras > 3 || resultadoCalculoHoras <= 6) {
                valor = "$20.50"
                preco.innerHTML = "Valor a pagar : " + valor
            } else if (resultadoCalculoHoras > 6 || resultadoCalculoHoras <= 9) {
                valor = "$35.50"
                preco.innerHTML = "Valor a pagar : " + valor
            } else if (resultadoCalculoHoras > 10) {
                valor = "$70.50"
                preco.innerHTML = "Valor a pagar : " + valor
            }
        });

        document.getElementById("fecharModal").addEventListener('mouseover', mudarPointeiro => {
            console.log('eu')
        });

        const fecharModal = document.getElementById("fecharModal").addEventListener("click", (fechar) => {
            const fechandoModal = document.getElementById("containerModalComprovante");
            fechandoModal.classList.remove("mostarModal");
            fechandoModal.classList.add("modalComp");

        });

        DivBotoes.appendChild(BotoesEditar).addEventListener("click", (editar) => {
            let valorButton = document.getElementById("botao-cadastrar");
            valorButton.innerHTML = "ATUALIZAR";

            const editarInputNome = document.getElementById("nome-input");
            const editarInputPlaca = document.getElementById("placa-input");
            editarInputNome.value = DivNome.innerHTML = ValorNome;
            editarInputPlaca.value = DivPlaca.innerHTML = ValorPlaca;

            valorBotao = "editar";
            valorDivNovo = index;
        });
        DivBotoes
            .appendChild(BotoesSaida)
            .addEventListener("click", (removerdiv) => {
                DivPlaca.parentNode.removeChild(DivPlaca);
                DivData.parentNode.removeChild(DivData);
                DivHora.parentNode.removeChild(DivHora);
                DivNome.parentNode.removeChild(DivNome);
                DivBotoes.parentNode.removeChild(DivBotoes);

                clientesFastPark = clientesFastPark.filter(
                    (element, indexFilter) => indexFilter != index
                );

                lista();
            });
        const ImagemComprovante = '<img src="comprovante.png" height="30"> '
        const ImagemSair = '<img src="sair.png" height="30"> '
        const ImagemEditar = '<img src="editar-arquivo.png" height="30"> '

        BotoesComprovante.innerHTML = ImagemComprovante;
        BotoesSaida.innerHTML = ImagemSair;
        BotoesEditar.innerHTML = ImagemEditar;

        const limparNome = document.getElementById("nome-input");
        const limparPlaca = document.getElementById("placa-input");

        limparNome.value = "";
        limparPlaca.value = "";

        id++;
    });
}
const getButton = document.getElementsByTagName("form")[0].addEventListener("submit", (clicar) => {
    clicar.preventDefault();
    const horasLista = new Date().getHours();
    const minutosLista = new Date().getMinutes();

    if (valorBotao == "editar") {
        let ValorNome = document.getElementById("nome-input");
        let ValorPlaca = document.getElementById("placa-input");
        clientesFastPark = clientesFastPark.map((element, indexEditar) => {
            if (indexEditar == valorDivNovo) {
                element.Nome = ValorNome.value
                element.Placa = ValorPlaca.value
            }
            return element
        });

        valorBotao = "cadastrar";
        document.getElementById("botao-cadastrar").innerHTML = "CADASTRAR";

        document.getElementById("h3Placa").innerHTML = "Nome: " + ValorPlaca.value;
        document.getElementById("h3Nome").innerHTML = "Placa: " + ValorNome.value;

        ValorNome.value = "";
        ValorPlaca.value = "";
    } else {
        clientesFastPark.push({
            Nome: document.getElementById("nome-input").value,
            Placa: document.getElementById("placa-input").value,
            HoraEntradaSistema: horasLista + ":" + minutosLista,
        });
    }
    lista();
});