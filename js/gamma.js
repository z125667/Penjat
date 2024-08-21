// Diferents idiomes per la GUI per si la base de dades no carrega
const Idiomes_dft = [
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
var Idiomes = Idiomes_dft;
var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma === "ca");

//Simulam una Taula de ParaulesPistes, similar a la consulta a la base de dades, amb un array d'objectes
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

//Establim constant individual vides
const Vides_dft = 7;

//Establim variables
var Vides = Vides_dft;
var IdIdioma_ant = "ca";
var correcte = 0;
var Punts = 0;
var segons = 0;
var Encerts = []; //bones, Paraula
var Errades = ["_","_","_","_","_","_","_"]; //dolentes, Lletres
var idbo = "";

//Llista de paraules per al joc i les pistes associades
var paraules = ["cordes","fetge", "forca", "jutges", "jutjat", "mengen", "penjat", "quinta", "setze"];
var pistes = ["A la quinta forca", "A ca un penjat, no hi anomenis cordes", "Setze jutges d'un jutjat mengen fetge d'un penjat"];
var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];


//Escull una paraula aleatòriament (usat en versions anteriors)
var aleatori = Math.floor(Math.random() * paraules.length);
var paraula = paraules[aleatori];
var pista = pistes[paraulespistes[aleatori]];

// Alternativament, fent servir l'array d'objectes
//window.alert(Taula.length);
aleatori = Math.floor(Math.random() * Taula.length);
paraula = Taula[aleatori].Paraula;
pista = Taula[aleatori].Pista;
//window.alert("aleatori="  + aleatori + ", paraula=" + paraula + ", pista=" + pista);

//Posam subguions per encerts
for (var i = 0; i < paraula.length; i++) {
        Encerts[i] = "_";
}

//Funció principal comprovar
function Comprobar() {
     //Es comprova si no s'ha introduit algun caràcter
    if (document.getElementById("valor").value === ""){
        alert("Introdueix algun caràcter per jugar!");                    
    }
    
    //Asignam valor introduit a variable lletra i netejam
    var lletra = document.getElementById("valor").value;
    document.getElementById("valor").value = "";
    
    //Passam valor introduit a minúscula
    lletra = lletra.toLowerCase();

    //Feim canvi de lletra si té accents o dieresis
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
    
    //Comporvam si la lletra introduida ja s'ha introduit anteriorment
    if ((Encerts.indexOf(lletra) !== -1) || (Errades.indexOf(lletra) !== -1)) {
        window.alert(Idioma.Repetida);
    } else {
    var pos = paraula.indexOf(lletra);

    //Comprovam si la lletra es troba dins la paraula
    if ((pos !== -1) && (lletra !== "")){
        if (document.getElementById('off').hidden) {
                document.getElementById("miau").play();
        }
        alert(Idioma.Encertat);
        for (var i = pos; i < paraula.length; i++){
            if (paraula[i] === lletra){
            Encerts[i] = lletra;
        }
        }
        document.getElementById("Palabra").innerHTML = Encerts; 

    //Sinó, s'ha fallat amb la lletra
    }else if (((lletra >= "a") && (lletra <= "z")) ||
        (lletra === "ñ") || (lletra === "-") ||
        (lletra === "ç") || (lletra === "·")) {
            if (document.getElementById('off').hidden) {
                 document.getElementById("boom_cloud").play();
            }
            if (document.getElementById('off').hidden) {
                document.getElementById("clock_ticking").play();
            }
            alert(Idioma.Fallat);
            //Es resta la vida
            Errades[Vides_dft - Vides] = lletra;
            document.getElementById("LlErrades").innerHTML =  Errades; 
            Vides = Vides - 1;
            MostraImg();
            //Es comprova si era la última vida
            if (Vides <= 0){
                alert(Idioma.Perdut);
                document.body.style.backgroundImage = "url('img/3.png')";
                if (document.getElementById('off').hidden) {
                    document.getElementById("cat-fight").play();
                }
                window.alert(Idioma.Descansi);
                if (document.getElementById('off').hidden) {
                    document.getElementById("bell_toll_x3").play();
                }  
                Final();
            }
            //Si vides és menor que 3, es canvia el color a vermell 
            if (Vides <= 3){
                document.getElementById("vida").style.color = "red";
            }
            document.getElementById("vida").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;     
    }else{
        //Si no s'ha complit cap condició, el caràcter és incorrecte
        if (document.getElementById('off').hidden) {
                    document.getElementById("clock_ticking").play();
        } 
        alert(Idioma.Incorrecte);
    }
    }
    
     //Es comprova si ja s'han encertat totes les lletres
    if(Encerts.indexOf("_") === -1){
        alert(Idioma.Guanyat);
        AmagaImg();
        if (document.getElementById('off').hidden) {
                    document.getElementById("cheer").play();
        }
        document.body.style.backgroundImage = 'url("img/Party.png")'
        //document.getElementById("algortime").hidden = false;
        Final();
        // Calculam i mostram la puntació
        Punts = paraula.length * Vides * 10 - segons;
        if (Punts < 0) { Punts = 0; };
        document.getElementById("Puntuació").innerHTML = Idioma.Puntuacio + " " + Punts;
    }
}
    
//Canviam els diferents literals de la GUI durant l'idioma
function CanviarIdioma(IdIdioma){
    if((IdIdioma !== "ca") && (IdIdioma !== "es")) {
        document.getElementById("IdiomaExtra").value = IdIdioma;
    }
    AlaWeb_SQLite(IdIdioma);
    Idioma = Idiomes.find(Idioma => Idioma.IdIdioma === IdIdioma);
    //alert(Idioma.Titol);
    document.title = Idioma.Titol;
    document.getElementById("Versio").innerHTML = Idioma.Versio;
    document.getElementById("valor").placeholder = Idioma.Input;
    document.getElementById("boto").innerHTML = Idioma.Comprovar;
    document.getElementById("TParaula").innerHTML = Idioma.Paraula;
    document.getElementById("Sopes").innerHTML = Idioma.Sopes;
    document.getElementById("pista").innerHTML = Idioma.Pista;
    document.getElementById("Vides").innerHTML = Idioma.Vides;
    document.getElementById("Set").innerHTML = Idioma.Moix;
    document.getElementById("Errades").innerHTML = Idioma.Lletres;
    document.getElementById("Ets").innerHTML = Idioma.Ets;
    if (Punts > 0) {
        document.getElementById("Punts").innerHTML = Idioma.Puntuacio + " " + Punts;
    }

    // Escull una nova paraula aleatòriament ja que hem canviat d'idioma
    window.alert("Nova paraula aleatòria / Nueva palabra aleatoria / New random word!");
    aleatori = Math.floor(Math.random() * Taula.length);
    paraula = Taula[aleatori].Paraula;
    pista = Taula[aleatori].Pista;
    
    Encerts = [];
    //window.alert("[" + paraula + "]=[" + pista + "]");
 
    //Marcam cada lletra de la paraula per encertar amb un "_"
    for (var i = 0; i < paraula.length; i++) {
        Encerts[i] = "_";
    }
    document.getElementById("LlEncertades").innerHTML = Encerts;
    
    //Marcam cada espai per fallar amb un "_" en funció de les vides 
    for (var i = 0; i < Vides_dft - Vides; i++) {
        Errades[i] = "_";
    }
    document.getElementById("LlErrades").innerHTML = Errades;
    
    //Tornam a establir vides
    Vides = Vides_dft; 
    document.getElementById("vida").innerHTML = 
        "&nbsp;&nbsp;&nbsp;\n\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;
    MostraImg();
    
    //Canvi de bandera pista 
    if (IdIdioma_ant === "en") { 
        IdIdioma_ant = "gb"; 
    }
    document.getElementById("Bander").src = "img/" + IdIdioma_ant + ".png";
    
    //Sobreescrivim l'idioma anterior
    IdIdioma_ant = IdIdioma;
   
    //Canvi de bandera idioma
    if ((IdIdioma !== "ca") && (IdIdioma !== "es")) {
        //Per a l'idioma "en = English" la bandera es la de "gb = Great Britain"
        if (IdIdioma === "en") { 
            IdIdioma = "gb"; 
        }
    document.getElementById("gb").src = "img/" + IdIdioma + ".png";
    }
}
    
//Afegim la possibilitat d'executar accions amb la tecla intro
window.onkeypress = function(evobject) { 
    if (evobject.keyCode === 13 || evobject.keyCode === 32 ) {
        Comprovar();
    }
};

//Definim la funció del final, quan s'ha acabat el joc i s'atura el joc
function Final() {
    document.getElementById("valor").disabled = true;
    document.getElementById("boto").disabled = true;
}

//Definim la funció de l'inici, posam les coses a lloc     
function Inici() {
    document.getElementById("ahorcado_0").hidden = true;
    document.getElementById("ahorcado_1").hidden = true;
    document.getElementById("ahorcado_2").hidden = true;
    document.getElementById("ahorcado_3").hidden = true;
    document.getElementById("ahorcado_4").hidden = true;
    document.getElementById("ahorcado_5").hidden = true;
    document.getElementById("ahorcado_6").hidden = true;
    document.getElementById('inici').play();
    document.getElementById("LlEncertades").innerHTML = Encerts;
    document.getElementById("LlErrades").innerHTML = Errades;
    document.getElementById("Audios").hidden = true;
    alert("Let's go: a la quinta forca / al quinto pino / to the boondocks?");
}

//Definim la funció que canvia les imatges del penjat quan es fallen lletres
function MostraImg() {
    switch (Vides) {
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

//Definim la funció que amaga les imatges quan s'acaba el joc
function AmagaImg() {
            document.getElementById("ahorcado_6").hidden = true;
            document.getElementById("ahorcado_5").hidden = true;
            document.getElementById("ahorcado_4").hidden = true;
            document.getElementById("ahorcado_3").hidden = true;
            document.getElementById("ahorcado_2").hidden = true;
            document.getElementById("ahorcado_1").hidden = true;
            document.getElementById("ahorcado_0").hidden = true;
            document.getElementById("algoritme").hidden = false;
}

//Definim la funció que agafa les taules corresponents de la base de dades
function AlaWeb_SQLite(IdIdioma) {
    config = {
    locateFile: filename => `/dist/${filename}`
    };
    //Recuperam de lam base de dades els textosgui èr tots els idiomes
    alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
            SELECT * FROM TblTextosGUI;',
        [], function(idiomes) {SQL_TblTextosGUI(IdIdioma, idiomes.pop());}
        //[], function(idiomes) {Print_Data(Idiomes = idiomes.pop());}
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

//Definim la funció que canvia els textos de la gui segons l'idioma triat
function SQL_TblTextosGUI(IdIdioma, TblTextosGUI) {    
    Idiomes = TblTextosGUI;
    if (Idiomes.length === 0) {Idiomes = Idiomes_dft;};
        if (Idiomes.find(Idioma => Idioma.IdIdioma === IdIdioma) === undefined){
        window.alert("GUI: Idioma no trobat/ Idioma no encontrado/ Language not found!");
        Idiomes = Idiomes_dft;
    };
}

//Definim la funció que canvia les paraules i les pistes segons l'idioma triat
function SQL_TblParaulesPistes(IdIdioma, TblParaulesPistes) {         
    //window.alert("SQL_TblParaulesPistes IdIdioma = '" + IdIdioma + "'");
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

const Interval = setInterval(timer, 1000);    
function timer(){
    segons = segons + 1;
    document.getElementById("counter").innerHTML = segons;
}

//Definim la funció que mostra els valors de la base de dades, però no l'usam durant el joc
// Print data  
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