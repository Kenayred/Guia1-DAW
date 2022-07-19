function init(){
    //prompt() entrada de datos del usuario
    var presupuesto = prompt('Ingrese el presupuesto anual','');
    var derma, trau, pedi, i;
    var div = document.getElementById('distribucion');

    //Realizando los cálculos para distribución del presupuesto
    derma = presupuesto*0.40;
    trauma = presupuesto*0.35;
    pedia = presupuesto*0.25;

    //Creando el codigo que se insertará dentro del elemento div id=distribución
    var html = "<ul>\n\t<li>\n";
    html += "\t\t<a href ='#' class='move-right'>\n";
    html += "\t\t\tEL presupuesto asignado para Ginecología es: $ " + derma + "\n";
    html += "\t\t<a/>\n";
    html += "\t</li>";

    html += "</ul>\n";

    //Insertando dentro del elemento div el codigo asignado en la varibale html div

    //Hacer referencias a los elementos h1 dentro de la pagina web
    var link = document.getElementById('a');
    //Recorrer todos los elementos a y asignar el manejador de evento
    //mediante una funcion anonima
    for(i=0; i<links.length; i++){
        links[i].onmouseover = function(){
            this.className = 'move-right-over';
        };
        links[i].onmouseout = function(){
            this.className = 'move-right';
        }
    }

}

window.onload = init;