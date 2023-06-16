function Abrir(){
    document.getElementById("Main_mobile").style.transform="translateX(0)";
    document.getElementById("open").style.display="none";
    document.getElementById("x").style.display="inline";
    document.getElementById("x").style.position="relative";
}
function cerrar(){
    document.getElementById("Main_mobile").style.transform="";
    document.getElementById("x").style.display="none";
    document.getElementById("open").style.display="inline";
}
/*------------------------------------------------------------------------------------------*/ 
let x = document.getElementById("men");
let y = document.getElementById("submenu_men");
let men = 0;
x.onclick = function(){
    if (men == 0){
       y.style.height="auto";
       men++;
    }
    else{
        y.style.height="";
        men = 0;
    }
}
/*------------------------------------------------------------------------------------------*/

let g = document.getElementById("women");
let z = document.getElementById("submenu_women");
let women = 0;
g.onclick = function(){
    if (women== 0){
       z.style.height="auto";
       women++;
    }
    else{
        z.style.height="";
        women = 0;
    }
}

/*------------------------------------------------------------------------------------------*/


window.addEventListener("scroll", function() {
    var menu = document.getElementById("Main_mobile");
    var scrollY = window.scrollY;
  
    if (scrollY > 0) {
      menu.style.top = "0"; 
      menu.style.marginTop="0"
    } else {
      menu.style.top = "30px";
      menu.style.marginTop= "0.7%";
    }
});
  




// mostrar la fecha actual-------------------------------------------------------------------------------------------------------------------------------
function Fecha() {
    let fecha = new Date();
    let nombresdias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado",];
    let nombresmes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",];
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let año = fecha.getFullYear();
    let ndia = nombresdias[fecha.getDay()];
    let ndes = nombresmes[mes];
    let f_actual = ndia + ", " + dia + " de " + ndes + " de " + año;
    let f_fecha = document.getElementById("fecha_año");

    if (f_fecha) {
        f_fecha.textContent = f_actual;
    }
}
  
// mostrar la hora actual-----------------------------------------------------------------------------------------------
function mostrarHora() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let tipo="AM";
    
    if(hora>12){
        tipo="PM";
    }
    
    if(hora==0){
        hora=12;
    }
    if
    (minutos<=9){
        minutos="0"+minutos;
    }
    if(segundos<=9){
        segundos="0"+segundos;
    }
    let divhora = document.getElementById("reloj");
    
    divhora.textContent =hora+":"+minutos+":"+segundos+" "+tipo;
    setTimeout("mostrarHora()", 1000) 
}
  

if (document.getElementById("fecha_año")) {
    Fecha();
}
  
if (document.getElementById("reloj")) {
    mostrarHora();
}
  
  






  

  

  