/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    // Diferents idiomes per la GUI
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
    ]
    var Idiomes = Idiomes_dft;
    
    // Simulam una Taula de ParaulesPistes, similar a la consulta a la base de dades, amb un array d'objectes
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
    
var Paraula = [];
var Lletres = ["_", "_", "_", "_", "_", "_", "_"];
var vides = 7; 

// var paraules = ["cordes", "fetge", "forca"];
         
         var aleatori = Math.floor(Math.random() * Taula.length);
         var paraula = Taula(aleatori).Paraula;
         var pista = Taula(aleatori).Pista;
  
       
       var seconds = 0;
       function timer(){
              seconds = seconds + 1;
              document.getElementById("counter").innerHTML = seconds;
       }
       setInterval(timer, 1000);
       

    function Comprovar(){
       lletra = document.getElementById("valor").value;
       document.getElementById("valor").value = "";
       // Convertim les majuscules a minuscules
       lletra = lletra.toLowerCase();
                 
        switch(lletra) {

      case"à":
      case"á":
          lletra = "a";
          break;
      case"ì":
      case"í":
          lletra = "i";
          break;
      case"è":
      case"é":
          lletra = "e";
          break;
      case"ù":
      case"ú":
          lletra = "u";
          break;
      case"ò":
      case"ó":
          lletra = "o";
          break;
    }
    
    alert(paraula);   
    // if ((lletra >= "a") && (lletra <= "m")) {
    var pos = paraula.indexOf(lletra);
    if ((pos != -1) && (lletra !="")) {
        alert("Has encertat!!");
        var bones = document.getElementById("bones").innerHTML;
        bones = bones + lletra + " ";
          document.getElementById("bones").innerHTML = bones;
          // window.alert("Molt be");
          document.getElementById("miau").play();
    
    } else if (((lletra >= "a") && (lletra <= "z")) ||
                (lletra == "ñ") || (lletra == "_")  ||
                (lletra == "ç") || (lletra == "."))  {  
       
         document.getElementById("boom_cloud").play(); 
        
         alert("Has fallat!");
         vides = vides - 1;
         document.getElementById("vides").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + vides;
        MostraImg();
        dolentes = document.getElementById("dolentes").innerHTML;
        if (dolentes == ""){
            dolentes = document.getElementById("valor").value;
        }
        else{
            dolentes = dolentes + document.getElementById("valor").value;
        }
        
        document.getElementById("dolentes").innerHTML = dolentes;
                
        }

        //comprovar les vides per guanyar o perdre
        if(vides <=0) {
           window.alert("Has perdut!");
           AturaTot();
        } else {
            if (lletres.lenht >=14){
                window.alert("Has guanyat!");
                AturaTot();
            }
        }


    }
    
        function AturaTot() {
          document.getElementById("valor").disabled = true;
           document.getElementById("boto").disabled = true;
        }   

        function amagaTot(){
            
         document.getElementById("ahorcado_0").hidden = true;
         document.getElementById("ahorcado_1").hidden = true;
         document.getElementById("ahorcado_2").hidden = true;
         document.getElementById("ahorcado_3").hidden = true;
         document.getElementById("ahorcado_4").hidden = true;
         document.getElementById("ahorcado_5").hidden = true;
         document.getElementById("ahorcado_6").hidden = true;
        }

   
        function MostraImg() {
           switch(vides)
           {  
               
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
     default:
     break;
     
        }
       }

       
            
            function CanviarIdioma(IdIdioma) {
            
        AlaWeb_SQLite(IdIdioma);
        Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);
            
            /*
        // Canviam els diferents literals de la GUI segons l'idioma        
            document.title = Idioma.Titol;
            document.getElementById("Versio").innerHTML = Idioma.Versio;
            document.getElementById("lletra").innerHTML = Idioma.input;
            document.getElementById("comprovar").innerHTML = Idioma.comprovar;
            document.getElementById("Paraula").innerHTML = Idioma.Paraula;
            document.getElementById("sopes").innerHTML = Idioma.sopes;
            document.getElementById("pista").innerHTML = Idioma.pista;
            document.getElementById("vides").innerHTML = Idioma.vides;
            document.getElementById("moix").innerHTML = Idioma.moix;
            document.getElementById("Lletres").innerHTML = Idioma.Lletres;
             */


        // Escull una nova paraula aleatòriament
        window.alert("Nova paraula aleatòria / Nueva palabra aleatoria / New random word!");
        aleatori = Math.floor(Math.random() * Taula.length);
        paraula = Taula[aleatori].Paraula;
        pista = Taula[aleatori].Pista;
       
        Paraula = [];
        // Marcam cada lletra amb un "_"
        for (var i = 0; i < paraula.length; i++) {
            Paraula[i] = "_";
        }
        document.getElementById("paraula").innerHTML = Paraula;

        for (var i = 0; i < Vides_dft - Vides; i++) {
            Lletres[i] = "_";
        }
        document.getElementById("lletres").innerHTML = Lletres;

        Vides = Vides_dft;    
        document.getElementById("vides").innerHTML =
                "&nbsp;&nbsp;&nbsp;\n\
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;

        AmagaForca();
       
        // Bandera de la paraula/pista
        if (IdIdioma_ant == "en") { IdIdioma_ant = "gb"; }                                
        document.getElementById("bandera").src = "img/" + IdIdioma_ant + ".png";                      
        IdIdioma_ant = IdIdioma;
       
        // Bandera del textos de la GUI
        if ((IdIdioma != "ca") && (IdIdioma != "es")) {
            // Per a l'idioma "en = English" la bandera es la de "gb = Great Britain"  
            if (IdIdioma == "en") { IdIdioma = "gb"; }                                
            document.getElementById("gb").src = "img/" + IdIdioma + ".png";        
        }
    }
                  

    // Funció per carregar la base de dades penjat.db
    function AlaWeb_SQLite(IdIdioma) {
        window.alert("AlaWeb_SQLite IdIdioma = '" + IdIdioma + "'");
        config = {
            locateFile: filename => `/dist/${filename}`
        };

        // Recuperam de la base de dades els TextosGUI per tots els Idiomes
        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                SELECT * FROM TblTextosGUI;',
            [], function(idiomes) {Print_Data(Idiomes = idiomes.pop());}
        //    [], function(idiomes) {SQL_TblTextosGUI(IdIdioma, idiomes.pop());}
        );
     
        /*
        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat;\n\
            SELECT Paraula, Pista \n\
                FROM TblParaules INNER JOIN TblPistes \n\
                ON TblParaules.IdPista = TblPistes.IdPista    \n\
                Where TblParaules.IdIdioma = "' + IdIdioma + '";',    
            [], function(taula) {Print_Data(Taula = taula.pop());}
        //    [], function(taula) {SQL_TblTextosGUI(IdIdioma, taula.pop());}
        );
        */
  } 
  
    function SQL_TblParaulesPistes(IdIdioma, TblParaulesPistes) {
        // window.alert("SQL_TblParaulesPistes IdIdioma = '" + IdIdioma +"'");
        Taula = TblParaulesPistes;
        if (Taula.lenght == 0) {
        window.alert ("Idioma sense paraules / Idioma sin palabras / Language without words!");    
        Taula = Taula_dft;
        IdIdioma = "ca";
        IdIdioma_ant = IdIdioma;
    } else {
        // window.alert("Paraules en idioma / Palabras en idioma / Language words
    }             
    }
              
           function SQL_TblTextosGUI(IdIdioma, TblTextosGUI) {
               Idiomes = TblTextosGUI;
               if (Idiomes.lenght == 0) {Idiomes =Idiomes_dft; };
               if (Idiomes.find(Idioma => Idioma.IdIdioma)== underfined) {
                window.alert("GUI: Idioma no trobat / Idioma no encontrado / Language not found!");
                Idiomes = Idiomes_dft;
               };    
            }
                            
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

