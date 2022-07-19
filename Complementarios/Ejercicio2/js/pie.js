
const PIE = 3.2808;
var metro = prompt('Introduzca los metros a convertir:','');
var result = PIE*metro;
var conver = result.toFixed(2);


document.write("<header><h1>Los Metros convertidos fueron: " + metro + " metros </h1><hr /><br/></header>");
document.write("<header><h1>La conversión de Metros a Pies es: " + conver + "</h1><hr /><br/></header>");
