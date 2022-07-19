
const FAR = 1.8000;
var CEL = prompt('Introduzca los grados Celcius a convertir:','');
var result = CEL*FAR;
var fare = result + 32.00;
var respu = fare.toFixed(2);


document.write("<header><h1>Los Grados Celcius fueron: " + CEL + " C° </h1><hr /><br/></header>");
document.write("<header><h1> Los grados " + CEL + " Celcius convertidos a Fahrenheit son " + respu +" F° </h1><hr /><br/></header>");
