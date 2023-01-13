
function encriptarTexto(){
    let texto=document.getElementById("texto-desencriptado").value;
    let imagen=document.getElementById("imagen-no-encontrado");
    let parrafo=document.getElementById("mensaje-busqueda");
    let textoAyuda=document.getElementById("texto-ayuda");
    let textoProcesado=document.getElementById("texto-encriptado");
    let btnCopiar=document.getElementById("btn-copiar");
    let parrafoAdvertencia=document.getElementById("parrafo-advertencia");
    document.getElementById("btn-copiar").value="Copiar";
    if(texto){
        if((/[^a-z\s]+/.test(texto))){// evaluacion de la coincidencia del complemento de letras minusculas y espacios
            let resultado=/[A-Z\s]+/g.test(texto);
            let resultado2=/\W+/g.test(texto);
            console.log(resultado +" y "+ resultado2);
            console.log("solo se permiten minusculas sin acentos");
            parrafoAdvertencia.classList.remove("animado");
            setTimeout(()=>parrafoAdvertencia.classList.add("animado"),100);
        }else{
            imagen.style.display="none";
            parrafo.style.display="none";
            textoAyuda.style.display="none"
            let textoEncriptado=texto.replace(/e/igm,"enter");
            textoEncriptado=textoEncriptado.replace(/o/igm,"ober");
            textoEncriptado=textoEncriptado.replace(/i/igm,"imes");
            textoEncriptado=textoEncriptado.replace(/a/igm,"ai");
            textoEncriptado=textoEncriptado.replace(/u/igm,"ufat");
            textoProcesado.innerHTML=textoEncriptado;
            textoProcesado.style.display="inherit";
            btnCopiar.style.display="inherit";
            document.getElementById("texto-desencriptado").value="";
        }

    
    }else{
        parrafo.style.display="inherit";
        if(screen.width>=780){
            console.log(screen.width)
            imagen.style.display="inherit";
        }
        
        textoAyuda.style.display="inherit";
        btnCopiar.style.display="none";
        textoProcesado.style.display="none";
    }
    
}

function desencriptarTexto(){
    let texto=document.getElementById("texto-desencriptado").value;
    let imagen=document.getElementById("imagen-no-encontrado");
    let parrafo=document.getElementById("mensaje-busqueda");
    let textoAyuda=document.getElementById("texto-ayuda");
    let textoProcesado=document.getElementById("texto-encriptado");
    let btnCopiar=document.getElementById("btn-copiar");
    let parrafoAdvertencia=document.getElementById("parrafo-advertencia");
    document.getElementById("btn-copiar").value="Copiar";
    if(texto){
        if(/[A-Z]+/g.test(texto) || !(/^[a-zA-Z\s]+$/.test(texto))){
            let resultado=/[A-Z\s]+/g.test(texto);
            let resultado2=/^[a-zA-Z\s]+$/.test(texto);
            console.log(resultado +" y "+ resultado2);
            console.log("solo se permiten minusculas sin acentos");
            parrafoAdvertencia.classList.remove("animado");
            setTimeout(()=>parrafoAdvertencia.classList.add("animado"),100);
        }
        else{
            imagen.style.display="none";
            parrafo.style.display="none";
            textoAyuda.style.display="none";
            let textoDesencriptado=texto.replace(/enter/igm,"e");
            textoDesencriptado=textoDesencriptado.replace(/ober/igm,"o");
            textoDesencriptado=textoDesencriptado.replace(/imes/igm,"i");
            textoDesencriptado=textoDesencriptado.replace(/ai/igm,"a");
            textoDesencriptado=textoDesencriptado.replace(/ufat/igm,"u");
            textoProcesado.innerHTML=textoDesencriptado;
            textoProcesado.style.display="inherit";
            btnCopiar.style.display="flex";
            document.getElementById("texto-desencriptado").value="";
        }
    
    }else{
        if(screen.width>=780){
            imagen.style.display="inherit";
        }
        parrafo.style.display="inherit";
        textoAyuda.style.display="inherit";
        btnCopiar.style.display="none";
        textoProcesado.style.display="none";
    }
    
    
}

function copiarTexto(){
    let copiado=document.getElementById("texto-encriptado").innerHTML;
    navigator.clipboard.writeText(copiado).then(()=>console.log("texto copiado en el portapapeles")).
    catch((err)=>console.log("sucedio un error", err));
    document.getElementById("btn-copiar").value="copiado";
}

function borrarArea(){
    document.getElementById("texto-desencriptado").value="";
}
