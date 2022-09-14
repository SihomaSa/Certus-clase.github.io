//determinar que número es mayor
a=14;
b=14;
c=a-b;
console.log("A-B= ",c);

if(!(c==0)){//apertura if general
console.log("valor de c en el if general: ",c);
    if(c>0){//SI ES MAYOR A 
        console.log("a es mayor");
    }
    else{//SI ES Mayor c
        console.log("b es mayor");
    }
}//cierre if general
else{
    console.log("Ambos son iguales");
}

