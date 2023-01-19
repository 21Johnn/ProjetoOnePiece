
// game
const personagens = [
    {
        nome: "Zoro",
        forca: Math.floor(Math.random() * 80 + 5),
        agilidade: Math.floor(Math.random() * 100 + 25),
        resistencia: Math.floor(Math.random() * 85 + 10),
        profile: 'https://cdn.discordapp.com/attachments/1004527920322203721/1065414519695867934/zoro.png',
    },
    {
        nome: "Luffy",
        forca: Math.floor(Math.random() * 95 + 10),
        agilidade: Math.floor(Math.random() * 85 + 10),
        resistencia: Math.floor(Math.random() * 100 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1063598024951083030/1065415056147361832/luffy.png',
    },
    {
        nome: "Chopper",
        forca: Math.floor(Math.random() * 70 + 5),
        agilidade: Math.floor(Math.random() * 75 + 25),
        resistencia: Math.floor(Math.random() * 85 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1063598024951083030/1065415055891497151/chopper.png',
    },
];
const sortear = document.getElementById('sortear');
const primeiraTela = document.getElementById('firstScreen');
const segundaTela = document.getElementById('secondScreen');
const telaAposta = document.getElementById('telaAposta');
const terceiraTela = document.getElementById('thirdScreen');
let oponente = document.getElementById('oponente');
let profileOponent = document.getElementById('imagemOponente');
let profileOponent2 = document.getElementById('imagemOponente2');
let nomeOponent = document.getElementById('nomeOponente');
const  zoro = document.getElementById('zoro');
const apostaRandom = document.getElementById('apostaRandom');
const apostaDeafault = document.getElementById('apostaDefault');
let forcaOponente = document.getElementById('forcaOponente');
let agilidadeOponente = document.getElementById('agilidadeOponente');
let resistenciaOponente = document.getElementById('resistenciaOponente');

document.querySelector('#sortear').addEventListener('click', function(){
    primeiraTela.style.display = 'none';
    segundaTela.style.display = 'flex';

    const randomOponentSort = Math.floor(Math.random() * personagens.length);
    const randomOponent = personagens[randomOponentSort];

    setTimeout(function(){
        segundaTela.style.display = 'none';
        telaAposta.style.display = 'flex';
        
        profileOponent.setAttribute ('src' , randomOponent.profile);
        nomeOponent.innerText = randomOponent.nome;

        // Adicionando botões de aposta
        document.getElementById("apostaDefault").addEventListener("click", function() {
            compararPersonagens(personagens[0], randomOponent);
            telaAposta.style.display = 'none';
            terceiraTela.style.display = 'flex';

            forcaOponente.innerText = randomOponent.forca;
            agilidadeOponente.innerText = randomOponent.agilidade;
            resistenciaOponente.innerText = randomOponent.resistencia;
            profileOponent2.setAttribute ('src' , randomOponent.profile);
        });
        
        document.getElementById("apostaRandom").addEventListener("click", function() {
            compararPersonagens(randomOponent, personagens[0]);
            telaAposta.style.display = 'none';
            terceiraTela.style.display = 'flex';
        });

    }, 2500);
    
})

function compararPersonagens(personagemApostado, personagem2) {
    let personagem1 = 0;
    let Personagem2 = 0;

    if (personagemApostado.forca > Personagem2.forca) {
        personagem1++;
    } else if (personagem2.forca > personagem1.forca) {
        Personagem2++;
    }

    if (personagem1.resistencia > personagem2.resistencia) {
        personagem1++;
    } else if (personagem2.resistencia > personagem1.resistencia) {
        Personagem2++;
    }

    if (personagem1.agilidade > personagem2.agilidade) {
        personagem1++;
    } else if (personagem2.agilidade > personagem1.agilidade) {
        Personagem2++;
    }
}



// cards extensivos
const paineis = document.querySelectorAll('.painel');

paineis.forEach((painel) => {
    painel.addEventListener('click', () => {
        removeActiveClasses()
        painel.classList.add('active')
    })
})

function removeActiveClasses(){
    paineis.forEach(painel => {
        painel.classList.remove('active')
    })
}