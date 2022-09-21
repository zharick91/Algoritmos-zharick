
function opBasicas(){

    var a; 
    var b; 
    var suma;
    var resta;
    var multiplicacion;
    var division;
 
    a= parseInt(prompt("Por favor ingrese el primer valor"));
    b= parseInt(prompt("Por favor ingrese el segundo valor"));

    suma = a + b; 
    resta = a-b;
    multiplicacion= a*b;
    division= a/b;

    alert(" el resultado de la suma es:" + suma);
    alert(" el resultado de la resta es:" + resta);    
    alert(" el resultado de la multiplicacion:" + multiplicacion);    
    alert(" el resultado de la division:" + division);    
}

function nMayor() {

    var a;
    var b;
    
    a= parseInt (prompt("por favor ingresar el primer valor a comparar"));
    b= parseInt (prompt("por favor ingresar el segundo valor a comparar"));

    if (a == b){ 
    alert("los valores ingresados son iguales")    
    }else if (a>b){
        alert("El numero mayor es " + a) 
    }else{
        alert("El numero mayor es " + b)   
    }

}

function nMenor() {
 
    var a;
    var b;
    var c;

    a= parseInt (prompt("por favor ingresar el primer valor a comparar"));
    b= parseInt (prompt("por favor ingresar el segundo valor a comparar"));
    c= parseInt (prompt("por favor ingresar el tercer valor a comparar"));

  if (a == b && a == c) {
     alert ("los numeros ingresados son iguales")
    }else if (a<b && a<c) {
    alert ("el numero menor es" + a)
    }else if (b<a && b<c) {
    alert ("el numero menor es" + b)
    }else if (c<a && c<b) {
    alert ("el numero menor es" + c)
}
}

function numerospares() {
    var z;
 
    z= parseInt (prompt( "porfavor ingrese el valor de z"));

    if (z%2==0){
        alert("el valor ingresado es un numero par")
    }else {
        alert("el valor ingresado es un numero impar")
    }
}
    
function raizC(){
    var m

    m=parseInt(prompt("por favor ingrese el valor de m"));
    m= m*m;

    alert("la raiz cuadrada del numero ingresado por el usuario es:" +m);
    
}

function aTriangulo(){
    var d
    var e
    
   
    d= parseInt(prompt("por favor ingrese la base de un triangulo"));
    e= parseInt(prompt("por favor ingrese la altura de un triangulo"));

    area= d*e/2

    alert("el area del trianfulo es:" + area)
    
}

function Convercion(){

    var f
    var centimetros 

    a=parseInt(prompt("por favor ingrese los metros que seran convertidos a centimetros"));

    centimetros= f*100;

    alert("el valor de los metros ingresados por el usuario es centimetros son:");

}

function Año(){
     var edad 
    var fechaN  

     edad= parseInt(prompt("por favor ingrese su edad"));
    
    fechaN = 2022 - edad;

    alert (" el año dde nacimiento del usuario es:" + fechaN);

  }

function capital(){

    var c
    var a
    var g_a
    var g_t

    g= parseInt(prompt("por favor ingrse el valor de  su capital"));
    h= parseInt(prompt("por favor ingrse el numero de años"));

    g_a = c*(0.24*a);
    g_t = g_a+c;

    alert("la ganacia tolal es:" + g_a);
    alert("la ganacia tolal es:" + g_t);
}

function colegio (){

    var g
    var h
    var i
    var j
    var k
    var resultado;

    g= parseInt(prompt("por favor ingrese la primera nota del estudiante"));
    h= parseInt(prompt("por favor ingrese la segunda nota del estudiante"));
    i= parseInt(prompt("por favor ingrese la tercera nota del estudiante"));
    j= parseInt(prompt("por favor ingrese la cuarta nota del estudiante"));
    k= parseInt(prompt("por favor ingrese la quita nota del estudiante"));

    resultado = (g+h+i+j+k)/5;

    if(resultado >= 3){
        alert("el promedio del estudiante es " + resultado + "por el cual aprobo")
     } else {
        alert("el promedio del estudiante es " + resultado + "por el cual reprobo")
        
     }
}