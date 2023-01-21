
// game
const zoroPlay = {
    nome: "Zoro",
    forca: Math.floor(Math.random() * 95  + 25),
    agilidade: Math.floor(Math.random() * 100 + 25),
    resistencia: Math.floor(Math.random() * 85 + 25),
    profile: 'https://cdn.discordapp.com/attachments/1004527920322203721/1065414519695867934/zoro.png',
}
const personagens = [    
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
    {
        nome: "ASCE",
        forca: Math.floor(Math.random() * 85 + 15),
        agilidade: Math.floor(Math.random() * 100 + 30),
        resistencia: Math.floor(Math.random() * 75 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476113989644292/asce.png',
    },
    {
        nome: "B. Branca",
        forca: Math.floor(Math.random() * 100 + 15),
        agilidade: Math.floor(Math.random() * 50 + 25),
        resistencia: Math.floor(Math.random() * 100 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476114291638393/Barba_Branca.png',
    },
    {
        nome: "Boa",
        forca: Math.floor(Math.random() * 70 + 5),
        agilidade: Math.floor(Math.random() * 75 + 25),
        resistencia: Math.floor(Math.random() * 55 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476114581041172/Boa_.png',
    },
    {
        nome: "Borsalino",
        forca: Math.floor(Math.random() * 85 + 5),
        agilidade: Math.floor(Math.random() * 95 + 25),
        resistencia: Math.floor(Math.random() * 85 + 30),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476114895605850/Borsalinoo.png',
    },
    {
        nome: "Dom Flamino",
        forca: Math.floor(Math.random() * 100 + 5),
        agilidade: Math.floor(Math.random() * 100 + 25),
        resistencia: Math.floor(Math.random() * 75 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476115231158292/Don_Flamino.png',
    },
    {
        nome: "Frank",
        forca: Math.floor(Math.random() * 70 + 5),
        agilidade: Math.floor(Math.random() * 75 + 25),
        resistencia: Math.floor(Math.random() * 100 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476115499597875/frank.png',
    },
    {
        nome: "Luffy Gear 5",
        forca: Math.floor(Math.random() * 120 + 5),
        agilidade: Math.floor(Math.random() * 65 + 25),
        resistencia: Math.floor(Math.random() * 110 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476115776417792/Luffy_gear.png',
    },
    {
        nome: "Mi hawk",
        forca: Math.floor(Math.random() * 70 + 5),
        agilidade: Math.floor(Math.random() * 130 + 25),
        resistencia: Math.floor(Math.random() * 85 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476116070023198/mi_hawk.png',
    },
    {
        nome: "Nami",
        forca: Math.floor(Math.random() * 30 + 5),
        agilidade: Math.floor(Math.random() * 30 + 25),
        resistencia: Math.floor(Math.random() * 30 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476116317474896/Nami.png',
    },
    {
        nome: "kuzan",
        forca: Math.floor(Math.random() * 110 + 5),
        agilidade: Math.floor(Math.random() * 130 + 25),
        resistencia: Math.floor(Math.random() * 100 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476116619473017/pngegg.png',
    },
    {
        nome: "Robin",
        forca: Math.floor(Math.random() * 130 + 20),
        agilidade: Math.floor(Math.random() * 130 + 25),
        resistencia: Math.floor(Math.random() * 60 + 55),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476171829096478/Robin.png',
    },
    {
        nome: "sanji",
        forca: Math.floor(Math.random() * 180 + 20),
        agilidade: Math.floor(Math.random() * 110 + 25),
        resistencia: Math.floor(Math.random() * 55 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476172340805722/sanji.png',
    },
    {
        nome: "Shanks",
        forca: Math.floor(Math.random() * 110 + 5),
        agilidade: Math.floor(Math.random() * 130 + 25),
        resistencia: Math.floor(Math.random() * 100 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476172709900288/Shanks.png',
    },
    {
        nome: "Smoke",
        forca: Math.floor(Math.random() * 80 + 5),
        agilidade: Math.floor(Math.random() * 100 + 25),
        resistencia: Math.floor(Math.random() * 75 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476173083189459/smoke.png',
    },
    {
        nome: "Ussop",
        forca: Math.floor(Math.random() * 10 + 5),
        agilidade: Math.floor(Math.random() * 10 + 25),
        resistencia: Math.floor(Math.random() * 10 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476173410349066/ussop.png',
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
let nomeOponentRes = document.getElementById('nomeOponenteRes');
const  zoro = document.getElementById('zoro');
const apostaRandom = document.getElementById('apostaRandom');
const apostaDeafault = document.getElementById('apostaDefault');
let forcaOponente = document.getElementById('forcaOponente');
let agilidadeOponente = document.getElementById('agilidadeOponente');
let resistenciaOponente = document.getElementById('resistenciaOponente');
let forcaZoro = document.getElementById('forcaZoro');
let agilidadeZoro = document.getElementById('agilidadeZoro');
let resZoro = document.getElementById('ResZoro');
const resultado = document.getElementById('resultado');
const restart = document.getElementById('restart');

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
            compararPersonagens(zoroPlay, randomOponent);
            telaAposta.style.display = 'none';
            terceiraTela.style.display = 'flex';

            // define a força oponente
            forcaOponente.innerText = randomOponent.forca;
            agilidadeOponente.innerText = randomOponent.agilidade;
            resistenciaOponente.innerText = randomOponent.resistencia;
            nomeOponentRes.innerText = randomOponent.nome;
            profileOponent2.setAttribute ('src' , randomOponent.profile);

            // define a força zoro
            forcaZoro.innerText = zoroPlay.forca;
            agilidadeZoro.innerText = zoroPlay.agilidade;
            resZoro.innerText = zoroPlay.resistencia;
        });
        
        document.getElementById("apostaRandom").addEventListener("click", function() {
            compararPersonagens(randomOponent, zoroPlay);
            telaAposta.style.display = 'none';
            terceiraTela.style.display = 'flex';

            // define a força oponente
            forcaOponente.innerText = randomOponent.forca;
            agilidadeOponente.innerText = randomOponent.agilidade;
            resistenciaOponente.innerText = randomOponent.resistencia;
            nomeOponentRes.innerText = randomOponent.nome;
            profileOponent2.setAttribute ('src' , randomOponent.profile);

            // define a força zoro
            forcaZoro.innerText = zoroPlay.forca;
            agilidadeZoro.innerText = zoroPlay.agilidade;
            resZoro.innerText = zoroPlay.resistencia;
        });

    }, 2500);  
})

function compararPersonagens(personagemApostado, personagem2) {
    let score1 = 0;
    let score2 = 0;

    if (personagemApostado.forca > personagem2.forca) {
        score1++;
        console.log("+1 forca")
    } else if(personagemApostado.forca > personagem2.forca){
        score2++;
    }

    if (personagemApostado.resistencia > personagem2.resistencia) {
        score1++;
        console.log("+1 res")
    } else if (personagemApostado.resistencia < personagem2.resistencia){
        score2++;
    }

    if (personagemApostado.agilidade > personagem2.agilidade) {
        score1++;
        console.log("+1 agi")
    } else if (personagemApostado.agilidade < personagem2.agilidade){
        score2++;
    }

    if (score1 > score2){
        resultado.innerHTML = "VocÊ ganhou"
    } else{
        resultado.innerHTML = "VocÊ Perdeu"
    }

}

restart.addEventListener('click', function(){
    terceiraTela.style.display = 'none'
    primeiraTela.style.display = 'flex'
})





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

// trocar tema
const chapeus = document.getElementById('chapeus');
const marinha = document.getElementById('marinha');
const hero = document.querySelector('.hero')
const body = document.querySelector('body');
const button = document.getElementById('button');
const border1 = document.getElementById('borderh1');
const border2 = document.getElementById('borderh2');
const input = document.getElementById('input');
const imgHistoria = document.getElementById('img--historia');
const historia = document.getElementById('historia');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const nome1 = document.getElementById('nome1');
const nome2 = document.getElementById('nome2');
const nome3 = document.getElementById('nome3');
const nome4 = document.getElementById('nome4');
const nome5 = document.getElementById('nome5');
const wall1 = document.getElementById('wall1');
const wall2 = document.getElementById('wall2');
const wall3 = document.getElementById('wall3');
const wall4 = document.getElementById('wall4');
const wall5 = document.getElementById('wall5');
const footer = document.getElementById('footer');

chapeus.addEventListener('click', function(){
    mudaBgPalha();
    document.body.setAttribute("style", "background-color: #003B5B");
    button.style.backgroundColor = "#F8B980";
    border1.style.borderBottomColor = "#F8B980";
    border2.style.borderBottomColor = "#F8B980";
    input.style.backgroundColor = "#E6F4FB";  
    imgHistoria.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1065476113989644292/asce.png";
    historia.style.backgroundColor = "#435E64";
    img1.setAttribute("style", "background-image: url('https://cdn.discordapp.com/attachments/1065475855498891344/1066164729518755870/luffypainel.png')");
    img2.setAttribute("style", "background-image: url('https://cdn.discordapp.com/attachments/1065475855498891344/1066164728457613342/zoropainel.png')");
    img3.setAttribute("style", "background-image: url('https://cdn.discordapp.com/attachments/1065475855498891344/1066164729292259328/chopperpainel.png')");
    img4.setAttribute("style", "background-image: url('https://cdn.discordapp.com/attachments/1065475855498891344/1066164729762041866/nicopainel.png')");
    img5.setAttribute("style", "background-image: url('https://cdn.discordapp.com/attachments/1065475855498891344/1066164730080788500/sanjipainel.png')");
    nome1.innerHTML = "Luffy"
    nome2.innerText = "Zoro"
    nome3.innerText = "Chopper"
    nome4.innerText = "Robin"
    nome5.innerText = "Sanji"
    wall1.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1066165195782758580/chapeus5.png";
    wall2.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1066165196390936656/chapeus1.png";
    wall3.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1066165196952981534/chapeus2.png";
    wall4.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1066165197586313236/chapeus3.png";
    wall5.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1066165198257410110/chapeus4.png";
    primeiraTela.style.backgroundColor = "#435E64";
    segundaTela.style.backgroundColor = "#435E64";
    telaAposta.style.backgroundColor = "#435E64";
    terceiraTela.style.backgroundColor = "#435E64";
    footer.style.backgroundColor = "#435E64";
})

marinha.addEventListener('click', function(){
    mudaBgMarinha();
    console.log(imgHistoria)
    document.body.setAttribute("style", "background-color: #000000");
    button.style.backgroundColor = "#25A8F2";
    border1.style.borderBottomColor = "#25A8F2";
    border2.style.borderBottomColor = "#25A8F2";
    input.style.backgroundColor = "#E6F4FB";  
    imgHistoria.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1065476116619473017/pngegg.png";
    historia.style.backgroundColor = "#25A8F2";
    img1.setAttribute("style", "background-image: url('https://cdn.discordapp.com/attachments/1065475855498891344/1066138226374484019/borsalino.png')");
    img2.setAttribute("style", "background-image: url('https://cdn.discordapp.com/attachments/1065475855498891344/1066138226626150481/almirante.png')");
    img3.setAttribute("style", "background-image: url('https://cdn.discordapp.com/attachments/1065475855498891344/1066138226869403738/almirante1.png')");
    img4.setAttribute("style", "background-image: url('https://cdn.discordapp.com/attachments/1065475855498891344/1066138227163013130/almirante4.png')");
    img5.setAttribute("style", "background-image: url('https://cdn.discordapp.com/attachments/1065475855498891344/1066138227435651091/almirante5.png')");
    nome1.innerHTML = "Borsalino"
    nome2.innerText = "Sakazuki"
    nome3.innerText = "Kuzan"
    nome4.innerText = "Vô do Luffy"
    nome5.innerText = "Issho"
    wall1.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1066159259173273691/marinha1.png";
    wall2.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1066159259643023450/marinha2.png";
    wall3.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1066159260192473138/marinha3.png";
    wall4.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1066159260540616734/marinha4.png";
    wall5.src = "https://cdn.discordapp.com/attachments/1065475855498891344/1066159260901314641/marinha5.png";
    primeiraTela.style.backgroundColor = "#25A8F2";
    segundaTela.style.backgroundColor = "#25A8F2";
    telaAposta.style.backgroundColor = "#25A8F2";
    terceiraTela.style.backgroundColor = "#25A8F2";
    footer.style.backgroundColor = "#25A8F2";
})


function mudaBgMarinha(){
    if (window.matchMedia("(min-width: 744px)").matches) {
        hero.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1065475855498891344/1066123677889994922/hero4.png')";
        } else {
        hero.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1065475855498891344/1066123678221340743/hero4-mobile.png')";
        }
}

function mudaBgPalha(){
    if (window.matchMedia("(min-width: 744px)").matches) {
        hero.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1065475855498891344/1066163679042752623/hero3.png')";
        } else {
        hero.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1065475855498891344/1066163678711394434/hero3-mobile.png')";
        }
}


function adicionarClasse() {
  if (window.innerWidth > 1281) {
    hero.classList.add('container');
  } else {
    hero.classList.remove('container');
  }
}

window.addEventListener('load', adicionarClasse);