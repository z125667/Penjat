/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
    
var Paraula = [];
var Lletres = ["_", "_", "_", "_", "_", "_", "_",];
var Vides = 7; 

var paraules = ["cordes", "fetge", "forca"];
         
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
        
     if ((lletra >= "a") && (lletra <= "m")) {
        alert("Has encertat!!");
        bones = document.getElementById("bones").innerHTML;
        bones = bones + lletra + " ";
          document.getElementById("bones").innerHTML = bones;
          window.alert("Molt be");
    }
     else {
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
       
       var seconds = 0;
       function timer(){
              seconds = seconds + 1;
              document.getElementById("counter").innerHTML = seconds;
       }
       setInterval(timer, 1000);
       
       
            
            function CanviarIdioma(IdIdioma) {
            
            AlaWeb_SQLite(IdIdioma);
            Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);
            
            /*
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
        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                SELECT Paraula, Pista                \n\
                FROM TblParaules INNER JOIN TblPistes \n\
       ON TblParaules.IdPista = TblPistes.IdPista      \n\
       Where TblParaules.IdIdioma = "' + IdIdioma + '";',    
        //    [], function(idiomes) {Print_Data(Idiomes = idiomes.pop());}
            [], function(idiomes) {SQL_TblTextosGUI(IdIdioma, idiomes.pop());}
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

