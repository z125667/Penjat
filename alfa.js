/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Paraula = [];
var Lletres = ["_", "_", "_", "_", "_", "_", "_", ]
var vides = 7

var paraules = ["cordes", "fetge", "forca", "juges",
    "jutgat", "mengen", "penjat", "quinta", "setze"]    
         
var pistes = ["A la quinta forca", "A ca un penjat, no hi anomenis cordes",
    "Setze jutges d'un jutjat mengen fetge a un penjat"]         
         
 var paraulespistes = [1, 2, 0, 2, 2, 2, 1, 0, 2];     

//Escull una paraula aleatoriament.

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
        alert("CHEER"); 
        document.getElementById("miau").play();
    }
     else {
         alert("Has fallat!");
         alert("VID3S");
         vides = vides - 1;
         document.getElementById("vides").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + vides;
           document.getElementById("mystery").play();
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
           window.alert("Has perdut!")
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
