var sexo = prompt ("Introduce tu sexo");
var edad = prompt("Introduce tu edad");
if (sexo === 'mujer' &&  edad >= 20){
 alert("Puedes entrar, eres mayor de edad.");
} 
else if (sexo === 'hombre' && edad >=18){
  alert("Puedes entrar, eres mayor de edad.");
}
else {
  alert ("No puedes entrar, eres menor de edad.");
}