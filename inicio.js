var nombre= "<marquee> Sihomara </marquee>";
console.log(nombre+"estoy en la consola");
alert("estoy en la web" + nombre);
console.log(nombre, "estoy despues de alert");
document.querySelector("div").innerHTML=nombre;
document.queryElementById("otro").innerText=nombre;