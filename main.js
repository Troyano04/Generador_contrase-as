let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const  cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
function generar(){
    let numeroDigitado = parseInt (cantidad.value);
   
    if (numeroDigitado < 6){ 
        alert("la cantidad de caracteres tiene ser mayor que 6");    
    }

    let password = '';
    for(let i=0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password+=caracterAleatorio;
    }
          
    contrasena.value = password;

}

console.log(typeof cantidad);












