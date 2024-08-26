const Idiomas_dft = [
    {
        "IdIdioma": "ca",
        "Titol": "Versió amb Base de Dades Joc del Penjat",
        "Versio": "Versió γ Joc del Penjat",
        "Input": "Escriu una lletra minúscula",
        "Pregunta": "Anam a la quinta forca?",
        "Comprovar": "Comprovar",
        "Paraula": "Paraula:",
        "Sopes": "Demanes sopes?",
        "Pista": "Pista",
        "Vides": "Vides:",
        "Moix": "Un moix en té set?",
        "Lletres": "Lletres:",
        "Ets": "Ets de lletres?",
        "URLpistes": "URLpistes:",
        "Dita": "Dita",
        "Dita1": "A la quinta forca, ",
        "Dita2": "A ca un penjat, no hi anomenis cordes, ",
        "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
        "Credits": "Crèdits:",
        "YouTube": "Joc Penjat on Scratch",
        "Wikis": "Penjat",
        "Idioma": "en Català",
        "Diccionari": "Diccionari",
        "Teclat": "Mostra o Amaga",
        "Incorrecte": "Caràcter incorrecte!",
        "Repetida": "Lletra repetida!",
        "Encertat": "Has encertat!",
        "Guanyat": "i has guanyat!",
        "Fallat": "Has fallat!",
        "Perdut": "i has perdut!",
        "Descansi": "En pau descansi – RIP!",
        "Puntuacio": "Puntuació:"
    },
    {
        "IdIdioma": "es",
        "Titol": "Versión con Base de Datos Juego del Ahorcado",
        "Versio": "Versión γ Juego del Ahorcado",
        "Input": "Escribe una letra minúscula",
        "Pregunta": "Vamos al quinto pino?",
        "Comprovar": "Comprobar",
        "Paraula": "Palabra:",
        "Sopes": "Te rindes?",
        "Pista": "Pista",
        "Vides": "Vidas:",
        "Moix": "Un gato tiene siete?",
        "Lletres": "Letras:",
        "Ets": "Eres de letras?",
        "URLpistes": "URLpistas:",
        "Dita": "Dicho",
        "Dita1": "Al quinto pino, ",
        "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
        "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
        "Credits": "Crèditos:",
        "YouTube": "Juego Ahorcado on Scratch",
        "Wikis": "Ahorcado",
        "Idioma": "en Español",
        "Diccionari": "Diccionario",
        "Teclat": "Muestra o Esconde",
        "Incorrecte": "Carácter incorrecto!",
        "Repetida": "Letra repetida!",
        "Encertat": "Has acertado!",
        "Guanyat": "y has ganado!",
        "Fallat": "Has fallado!",
        "Perdut": "y has perdido!",
        "Descansi": "En paz descanse - RIP!",
        "Puntuacio": "Puntuación:"
    },
    {
        "IdIdioma": "en",
        "Titol": "Hangman Game Database Version",
        "Versio": "Hangman Game γ Versión",
        "Input": "Write a lowercase letter",
        "Pregunta": "Are we going to the boondocks?",
        "Comprovar": "Check it",
        "Paraula": "Word:",
        "Sopes": "You give up?",
        "Pista": "Clue",
        "Vides": "Lives:",
        "Moix": "A cat has seven?",
        "Lletres": "Letters:",
        "Ets": "Are you in liberal arts?",
        "URLpistes": "URLclues:",
        "Dita": "Saying",
        "Dita1": "To the boondocks,",
        "Dita2": "In a hanged man's home, don't talk about ropes,",
        "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
        "Credits": "Credits:",
        "YouTube": "Hangman Game on Scratch",
        "Wikis": "Hangman",
        "Idioma": "in English",
        "Diccionari": "Dictionary",
        "Teclat": "Show or Hide",
        "Incorrecte": "Wrong character!",
        "Repetida": "Repeated letter!",
        "Encertat": "You're right!",
        "Guanyat": "and you have won!",
        "Fallat": "You have failed!",
        "Perdut": "and you have lost!",
        "Descansi": "Rest in peace - RIP!",
        "Puntuacio": "Score:"
    }
];
var Idiomas = Idiomas_dft;
    var Idioma = Idiomas.find(Idioma => Idioma.IdIdioma === "ca");

const Taula_dft = [
    // Deixam per defecte les paraules i pistes en Català
    {"Paraula": "cordes", "Pista": "A ca un penjat, no hi anomenis cordes"},
    {"Paraula": "fetge", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
    {"Paraula": "forca", "Pista": "A la quinta forca"},
    {"Paraula": "jutges", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
    {"Paraula": "jutjat", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
    {"Paraula": "mengen", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
    {"Paraula": "penjat", "Pista": "A ca un penjat, no hi anomenis cordes"},
    {"Paraula": "quinta", "Pista": "A la quinta forca"},
    {"Paraula": "setze", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"}
    ];
var Taula = Taula_dft; 

const Vidas_dft = 7;

var Vidas = Vidas_dft;
var IdIdioma_ant = "ca";
    var segundos = 0;
var Bones = [];
var dolentes = ["_","_","_","_","_","_","_"];

//por si acaso la tabla no carga
var paraules = ["cordes","fetge", "forca", "jutges", "jutjat", "mengen", "penjat", "quinta", "setze"];
var pistes = ["A la quinta forca", "A ca un penjat, no hi anomenis cordes", "Setze jutges d'un jutjat mengen fetge d'un penjat"];
var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];


var aleatori = Math.floor(Math.random() * paraules.length);
var paraula = paraules[aleatori];
var pista = pistes[paraulespistes[aleatori]];


aleatori = Math.floor(Math.random() * Taula.length);
paraula = Taula[aleatori].Paraula;
pista = Taula[aleatori].Pista;

for (var i = 0; i < paraula.length; i++) {
            Bones[i] = "_";
}

//aqui comprueba
function Comprobar() {
var lletra = document.getElementById("valor").value;
    document.getElementById("valor").value = "";
    
    lletra = lletra.toLowerCase();

    switch (lletra) {
        case "á":
        case "à":
            lletra = "a";
            break;
        case "é":
        case "è":
            lletra = "e";
            break;
        case "í":
        case "ï":
            lletra = "i";
             break;
        case "ó":
        case "ò":
            lletra = "o";
            break;
        case "ú":
        case "ü":
            lletra = "u";
            break;
    }
    
    if ((Bones.indexOf(lletra) !== -1) || (dolentes.indexOf(lletra) !== -1)) {
window.alert(Idioma.Repetida);
    } else {
    var pos = paraula.indexOf(lletra);
    
    if ((pos !== -1) && (lletra !== "")){
        document.getElementById("miau").play();
                 alert(Idioma.Encertat);
                    for (var i = pos; i < paraula.length; i++){
            if (paraula[i] === lletra){
      Bones[i] = lletra;
        }
        }
        document.getElementById("Palabra").innerHTML = Bones; 

    }else if (((lletra >= "a") && (lletra <= "z")) ||
        (lletra === "ñ") || (lletra === "-") ||
     (lletra === "ç") || (lletra === "·")) {
            document.getElementById("boom_cloud").play();
      document.getElementById("clock_ticking").play();
       alert(Idioma.Fallat);
            dolentes[Vidas_dft - Vidas] = lletra;
      document.getElementById("Errores").innerHTML =  dolentes; 
            Vidas = Vidas - 1;
            MostraImg();
            if (Vidas <= 0){
                alert(Idioma.Perdut);
                         document.body.style.backgroundImage = "url('img/3.png')";
           document.getElementById("cat-fight").play();
          window.alert(Idioma.Descansi);
                        document.getElementById("valor").disabled = true;
                document.getElementById("boton").disabled = true;
            }
            document.getElementById("vida").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vidas;     
    }else{
       document.getElementById("clock_ticking").play(); 
            alert(Idioma.Incorrecte);
    }
    }
    
    if(Bones.indexOf("_") === -1){
        alert(Idioma.Guanyat);
            document.getElementById("cheer").play();
          document.body.style.backgroundImage = 'url("img/Party.png")'
          document.getElementById("valor").disabled = true;
           document.getElementById("boton").disabled = true;
    }
}
    
function CambiarIdioma(IdIdioma){
    if((IdIdioma !== "ca") && (IdIdioma !== "es")) {
          document.getElementById("IdiomaExtra").value = IdIdioma;
    }
    AlaWeb_SQLite(IdIdioma);
        Idioma = Idiomas.find(Idioma => Idioma.IdIdioma === IdIdioma);
        alert(Idioma.Titol);
   document.title = Idioma.Titol;
    document.getElementById("version").innerHTML = Idioma.Versio;
    document.getElementById("valor").placeholder = Idioma.Input;
      document.getElementById("boton").innerHTML = Idioma.Comprovar;
     document.getElementById("palabra").innerHTML = Idioma.Paraula;
  document.getElementById("pista").innerHTML = Idioma.Pista;
      document.getElementById("vidas").innerHTML = Idioma.Vides;
    document.getElementById("errores").innerHTML = Idioma.Lletres;
    
    window.alert("Nova paraula aleatòria / Nueva palabra aleatoria / New random word!");
    aleatori = Math.floor(Math.random() * Taula.length);
paraula = Taula[aleatori].Paraula;
    pista = Taula[aleatori].Pista;
    
            Bones = [];
 
    for (var i = 0; i < paraula.length; i++) {
        Bones[i] = "_";
    }
    document.getElementById("Palabra").innerHTML = Bones;
    
    for (var i = 0; i < Vidas_dft - Vidas; i++) {
        dolentes[i] = "_";
    }
document.getElementById("Errores").innerHTML = dolentes;
    
Vidas = Vidas_dft; 
    document.getElementById("vida").innerHTML = 
        "&nbsp;&nbsp;&nbsp;\n\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vidas;
MostraImg();
IdIdioma_ant = IdIdioma;
}
    
//tiempo
        const Interval = setInterval(timer, 1000);    
function timer(){
         segundos = segundos + 1;
    document.getElementById("tiempo").innerHTML = segundos;
}

//empezar
function Inicio() {
    document.getElementById("ahorcado_0").hidden = true;
     document.getElementById("ahorcado_1").hidden = true;
      document.getElementById("ahorcado_2").hidden = true;
document.getElementById("ahorcado_3").hidden = true;
document.getElementById("ahorcado_4").hidden = true;
    document.getElementById("ahorcado_5").hidden = true;
     document.getElementById("ahorcado_6").hidden = true;
document.getElementById('inici').play();
    document.getElementById("Palabra").innerHTML = Bones;
    document.getElementById("Errores").innerHTML = dolentes;
        document.getElementById("Audios").hidden = true;
    alert("Let's go: a la quinta forca / al quinto pino / to the boondocks?");
}

function MostraImg() {
    switch (Vidas) {
        case 6:
            document.getElementById("ahorcado_6").hidden = false;
      break;
         case 5:
            document.getElementById("ahorcado_5").hidden = false;
            document.getElementById("ahorcado_6").hidden = true;
            break;
      case 4:
            document.getElementById("ahorcado_4").hidden = false;
       document.getElementById("ahorcado_5").hidden = true;
            break;
     case 3:
            document.getElementById("ahorcado_3").hidden = false;
       document.getElementById("ahorcado_4").hidden = true;
            break;
         case 2:
           document.getElementById("ahorcado_2").hidden = false;
            document.getElementById("ahorcado_3").hidden = true;
               break;
             case 1:
            document.getElementById("ahorcado_1").hidden = false;
         document.getElementById("ahorcado_2").hidden = true;
            break;
         case 0:
         document.getElementById("ahorcado_0").hidden = false;
            document.getElementById("ahorcado_1").hidden = true;
            break;
    }
}

function AlaWeb_SQLite(IdIdioma) {
config = {
    locateFile: filename => `/dist/${filename}`
    };
alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
 SELECT * FROM TblTextosGUI;',
        [], function(idiomas) {SQL_TblTextosGUI(IdIdioma, idiomas.pop());}
        //[], function(idiomas) {Print_Data(Idiomas = idiomas.pop());}
    );
    alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
            SELECT Paraula, Pista \n\
            FROM TblParaules INNER JOIN TblPistes \n\
              ON TblParaules.IdPista = TblPistes.IdPista \n\
            WHERE TblParaules.IdIdioma = "' + IdIdioma + '";',
        //[], function(taula) {Print_Data(Taula = taula.pop());}
        [], function(taula) {SQL_TblParaulesPistes(IdIdioma, taula.pop());}
    );
}

function SQL_TblTextosGUI(IdIdioma, TblTextosGUI) {    
    Idiomas = TblTextosGUI;
    if (Idiomas.length === 0) {Idiomas = Idiomas_dft;};
  if (Idiomas.find(Idioma => Idioma.IdIdioma === IdIdioma) === undefined){
     window.alert("GUI: Idioma no trobat/ Idioma no encontrado/ Language not found!");
   Idiomas = Idiomas_dft;
    };
}
    function SQL_TblParaulesPistes(IdIdioma, TblParaulesPistes) {         
     Taula = TblParaulesPistes;
          if (Taula.length === 0) {
                   window.alert("Idioma sense paraules/ Idioma sin palabras/ Language without words!");
    Taula = Taula_dft;
        IdIdioma = "ca";
        IdIdioma_ant = IdIdioma;
    } else {
         //window.alert("Idioma sense paraules / Idioma sin palabras / Language words = '" + IdIdioma + "'");
    }
    //window.alert(Taula[0].Pista);
}

// no tocar
function Print_Data(res) {        
        for (var i in res)
    {
    // console.log("row " + i);
    // document.getElementById("res").innerHTML += "<br>";
        for (var j in res[i])
          {
        // console.log(" " + res[i][j]);
        // document.getElementById("res").innerHTML += res[i][j] + ", ";
        window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
        }
    }
}       