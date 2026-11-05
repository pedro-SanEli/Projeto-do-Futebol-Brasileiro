
/* =================================
   BANCO DE DADOS DOS CLUBES
================================= */

const clubes = [

    {
        nome: "Palmeiras",
        nomeCompleto: "Sociedade Esportiva Palmeiras",
        estado: "São Paulo - SP",
        fundacao: "26 de agosto de 1914",
        estadio: "Allianz Parque",
        capacidade: "Aproximadamente 43 mil pessoas",
        mascote: "Porco",
        cores: "Verde e branco",
        titulos: "Libertadores, Brasileirão e Copa do Brasil",
        historia: "Fundado em 1914, o Palmeiras é um dos clubes mais tradicionais do futebol brasileiro. O clube possui uma história marcada por grandes conquistas nacionais e internacionais.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg"
    },

    {
        nome: "Flamengo",
        nomeCompleto: "Clube de Regatas do Flamengo",
        estado: "Rio de Janeiro - RJ",
        fundacao: "15 de novembro de 1895",
        estadio: "Maracanã",
        capacidade: "Mais de 78 mil pessoas",
        mascote: "Urubu",
        cores: "Vermelho e preto",
        titulos: "Libertadores, Brasileirão e Copa do Brasil",
        historia: "Fundado em 1895, o Flamengo é um dos clubes mais populares do Brasil. Sua trajetória é marcada por grandes jogadores, conquistas nacionais e internacionais.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg"
    },

    {
        nome: "Corinthians",
        nomeCompleto: "Sport Club Corinthians Paulista",
        estado: "São Paulo - SP",
        fundacao: "1 de setembro de 1910",
        estadio: "Neo Química Arena",
        capacidade: "Aproximadamente 49 mil pessoas",
        mascote: "Mosqueteiro",
        cores: "Preto e branco",
        titulos: "Mundial de Clubes, Libertadores e Brasileirão",
        historia: "Fundado em 1910, o Corinthians possui uma das maiores torcidas do país e uma história marcada por conquistas importantes.",
        escudo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Corinthians_badge.svg"
    },

    {
        nome: "São Paulo",
        nomeCompleto: "São Paulo Futebol Clube",
        estado: "São Paulo - SP",
        fundacao: "25 de janeiro de 1930",
        estadio: "MorumBIS",
        capacidade: "Aproximadamente 66 mil pessoas",
        mascote: "Santo Paulo",
        cores: "Vermelho, branco e preto",
        titulos: "Mundial de Clubes, Libertadores e Brasileirão",
        historia: "Fundado em 1930, o São Paulo é reconhecido por suas conquistas nacionais e internacionais e pela tradição na formação de grandes jogadores.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Sao_Paulo_Futebol_Clube.png"
    },

    {
        nome: "Santos",
        nomeCompleto: "Santos Futebol Clube",
        estado: "Santos - SP",
        fundacao: "14 de abril de 1912",
        estadio: "Vila Belmiro",
        capacidade: "Aproximadamente 20 mil pessoas",
        mascote: "Baleia",
        cores: "Preto e branco",
        titulos: "Libertadores, Mundial e Brasileirão",
        historia: "Fundado em 1912, o Santos ficou conhecido mundialmente por revelar grandes jogadores, especialmente Pelé, considerado um dos maiores atletas da história do futebol.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png"
    },

    {
        nome: "Vasco",
        nomeCompleto: "Club de Regatas Vasco da Gama",
        estado: "Rio de Janeiro - RJ",
        fundacao: "21 de agosto de 1898",
        estadio: "São Januário",
        capacidade: "Aproximadamente 22 mil pessoas",
        mascote: "Almirante",
        cores: "Preto e branco",
        titulos: "Libertadores, Brasileirão e Copa do Brasil",
        historia: "Fundado em 1898, o Vasco possui uma história importante no futebol brasileiro, destacando-se também por sua luta histórica contra a discriminação no esporte.",
        escudo: "https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png"
    },

    {
        nome: "Fluminense",
        nomeCompleto: "Fluminense Football Club",
        estado: "Rio de Janeiro - RJ",
        fundacao: "21 de julho de 1902",
        estadio: "Maracanã",
        capacidade: "Mais de 78 mil pessoas",
        mascote: "Guerreiro",
        cores: "Verde, branco e grená",
        titulos: "Libertadores, Brasileirão e Copa do Brasil",
        historia: "Fundado em 1902, o Fluminense é um dos clubes mais tradicionais do futebol carioca e brasileiro.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png"
    },

    {
        nome: "Botafogo",
        nomeCompleto: "Botafogo de Futebol e Regatas",
        estado: "Rio de Janeiro - RJ",
        fundacao: "12 de agosto de 1904",
        estadio: "Estádio Nilton Santos",
        capacidade: "Aproximadamente 46 mil pessoas",
        mascote: "Manequinho",
        cores: "Preto e branco",
        titulos: "Libertadores, Brasileirão e Campeonato Carioca",
        historia: "Fundado em 1904, o Botafogo é conhecido por sua tradição e por grandes jogadores que marcaram a história do futebol brasileiro.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/5/54/Botafogo_de_Futebol_e_Regatas_logo.svg"
    },

    {
        nome: "Grêmio",
        nomeCompleto: "Grêmio Foot-Ball Porto Alegrense",
        estado: "Porto Alegre - RS",
        fundacao: "15 de setembro de 1903",
        estadio: "Arena do Grêmio",
        capacidade: "Aproximadamente 55 mil pessoas",
        mascote: "Mosqueteiro",
        cores: "Azul, preto e branco",
        titulos: "Libertadores, Mundial e Copa do Brasil",
        historia: "Fundado em 1903, o Grêmio é um dos principais clubes do futebol gaúcho e brasileiro, com conquistas importantes em competições nacionais e internacionais.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Gremio_logo.svg"
    },

    {
        nome: "Internacional",
        nomeCompleto: "Sport Club Internacional",
        estado: "Porto Alegre - RS",
        fundacao: "4 de abril de 1909",
        estadio: "Beira-Rio",
        capacidade: "Aproximadamente 50 mil pessoas",
        mascote: "Saci",
        cores: "Vermelho e branco",
        titulos: "Libertadores, Mundial e Brasileirão",
        historia: "Fundado em 1909, o Internacional possui grande tradição no futebol brasileiro e uma história de importantes conquistas.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Scinternacional.svg"
    },

    {
        nome: "Cruzeiro",
        nomeCompleto: "Cruzeiro Esporte Clube",
        estado: "Belo Horizonte - MG",
        fundacao: "2 de janeiro de 1921",
        estadio: "Mineirão",
        capacidade: "Aproximadamente 62 mil pessoas",
        mascote: "Raposa",
        cores: "Azul e branco",
        titulos: "Brasileirão, Copa do Brasil e Libertadores",
        historia: "Fundado em 1921, o Cruzeiro é um dos clubes mais tradicionais de Minas Gerais e possui uma trajetória de grandes conquistas.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Cruzeiro_Esporte_Clube_logo.svg"
    },

    {
        nome: "Atlético-MG",
        nomeCompleto: "Clube Atlético Mineiro",
        estado: "Belo Horizonte - MG",
        fundacao: "25 de março de 1908",
        estadio: "Arena MRV",
        capacidade: "Aproximadamente 46 mil pessoas",
        mascote: "Galo",
        cores: "Preto e branco",
        titulos: "Libertadores, Brasileirão e Copa do Brasil",
        historia: "Fundado em 1908, o Atlético Mineiro possui uma das torcidas mais apaixonadas de Minas Gerais e uma história de conquistas importantes.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Clube_Atl%C3%A9tico_Mineiro_logo.svg"
    },

    {
        nome: "Bahia",
        nomeCompleto: "Esporte Clube Bahia",
        estado: "Salvador - BA",
        fundacao: "1 de janeiro de 1931",
        estadio: "Arena Fonte Nova",
        capacidade: "Aproximadamente 48 mil pessoas",
        mascote: "Super-Homem",
        cores: "Azul, vermelho e branco",
        titulos: "Campeonato Brasileiro e Campeonato Baiano",
        historia: "Fundado em 1931, o Bahia é um dos clubes mais tradicionais do Nordeste e possui grande importância na história do futebol brasileiro.",
        escudo: "https://upload.wikimedia.org/wikipedia/pt/2/2c/Esporte_Clube_Bahia_logo.png"
    },

    {
        nome: "Fortaleza",
        nomeCompleto: "Fortaleza Esporte Clube",
        estado: "Fortaleza - CE",
        fundacao: "18 de outubro de 1918",
        estadio: "Arena Castelão",
        capacidade: "Aproximadamente 63 mil pessoas",
        mascote: "Juba",
        cores: "Azul, vermelho e branco",
        titulos: "Campeonato Cearense e Copa do Nordeste",
        historia: "Fundado em 1918, o Fortaleza é um dos principais clubes do futebol nordestino, com participações importantes em competições nacionais e continentais.",
        escudo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Fortaleza_Esporte_Clube_logo.svg"
    }

];


/* =================================
   ELEMENTOS DO HTML
================================= */

const pesquisa = document.getElementById("pesquisa");

const resultados = document.getElementById("resultados");

const informacoes = document.getElementById("informacoes-clube");

const searchBtn = document.getElementById("searchBtn");


/* =================================
   NORMALIZAR TEXTO
   Permite pesquisar com ou sem acentos.
================================= */

function normalizar(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}


/* =================================
   PESQUISAR CLUBES
================================= */

function pesquisarClubes() {

    const texto = normalizar(pesquisa.value.trim());

    resultados.innerHTML = "";

    informacoes.innerHTML = "";

    if (texto.length === 0) {
        return;
    }

    const encontrados = clubes.filter(clube => {

        return normalizar(clube.nome).includes(texto);

    });


    if (encontrados.length === 0) {

        resultados.innerHTML = `
            <div class="mensagem-vazia">
                Nenhum clube encontrado.
                Verifique o nome digitado.
            </div>
        `;

        return;

    }


    // Mostra automaticamente se encontrar um nome exato.

    const clubeExato = encontrados.find(clube =>
        normalizar(clube.nome) === texto
    );

    if (clubeExato) {

        mostrarInformacoes(clubeExato);

        return;

    }


    // Mostra sugestões de clubes.

    encontrados.forEach(clube => {

        const botao = document.createElement("button");

        botao.classList.add("resultado-clube");

        botao.textContent = "⚽ " + clube.nome;

        botao.addEventListener("click", function () {

            pesquisa.value = clube.nome;

            resultados.innerHTML = "";

            mostrarInformacoes(clube);

        });

        resultados.appendChild(botao);

    });

}


/* =================================
   EXIBIR INFORMAÇÕES DO CLUBE
================================= */

function mostrarInformacoes(clube) {

    resultados.innerHTML = "";

    informacoes.innerHTML = "";


    // Criando a ficha do clube.

    const perfil = document.createElement("div");

    perfil.classList.add("perfil-clube");


    perfil.innerHTML = `

        <div class="perfil-topo">

            <img
                src="${clube.escudo}"
                alt="Escudo do ${clube.nome}"
                onerror="this.style.display='none'"
            >

            <div>

                <h2>${clube.nome}</h2>

                <p>${clube.nomeCompleto}</p>

                <span>⚽ Clube brasileiro</span>

            </div>

        </div>


        <div class="dados-clube">

            <div class="dado">

                <strong>📅 Fundação</strong>

                <p>${clube.fundacao}</p>

            </div>


            <div class="dado">

                <strong>📍 Localização</strong>

                <p>${clube.estado}</p>

            </div>


            <div class="dado">

                <strong>🏟️ Estádio</strong>

                <p>${clube.estadio}</p>

            </div>


            <div class="dado">

                <strong>👥 Capacidade</strong>

                <p>${clube.capacidade}</p>

            </div>


            <div class="dado">

                <strong>🐾 Mascote</strong>

                <p>${clube.mascote}</p>

            </div>


            <div class="dado">

                <strong>🎨 Cores oficiais</strong>

                <p>${clube.cores}</p>

            </div>


            <div class="dado">

                <strong>🏆 Principais títulos</strong>

                <p>${clube.titulos}</p>

            </div>

        </div>


        <div class="historia">

            <h3>📖 História do clube</h3>

            <p>${clube.historia}</p>

        </div>

    `;


    informacoes.appendChild(perfil);

}


/* =================================
   EVENTO DE PESQUISA
================================= */

pesquisa.addEventListener("input", pesquisarClubes);


/* =================================
   BOTÃO DE PESQUISA
================================= */

searchBtn.addEventListener("click", pesquisarClubes);


/* =================================
   PESQUISAR COM ENTER
================================= */

pesquisa.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        pesquisarClubes();

    }

});


/* =================================
   MENU RESPONSIVO
================================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});


/* =================================
   FECHAR MENU AO CLICAR NO LINK
================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


/* =================================
   MENSAGEM INICIAL
================================= */

console.log("Futebol Brasil iniciado com sucesso!");

console.log("Clubes disponíveis:", clubes.length);
