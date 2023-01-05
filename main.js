
function encriptarTexto(){
    let texto=document.getElementById("texto-desencriptado").value.toLowerCase();
    let imagen=document.getElementById("imagen-no-encontrado");
    let parrafo=document.getElementById("mensaje-busqueda");
    let textoAyuda=document.getElementById("texto-ayuda");
    let textoProcesado=document.getElementById("texto-encriptado");
    let btnCopiar=document.getElementById("btn-copiar");
    if(texto){
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
    }else{
        parrafo.style.display="inherit";
        imagen.style.display="inherit";
        textoAyuda.style.display="inherit";
        btnCopiar.style.display="none";
        textoProcesado.style.display="none";
    }
    
}

function desencriptarTexto(){
    let texto=document.getElementById("texto-desencriptado").value.toLowerCase();
    let imagen=document.getElementById("imagen-no-encontrado");
    let parrafo=document.getElementById("mensaje-busqueda");
    let textoAyuda=document.getElementById("texto-ayuda");
    let textoProcesado=document.getElementById("texto-encriptado");
    let btnCopiar=document.getElementById("btn-copiar");
    if(texto!=''){
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
    }else{
        imagen.style.display="inherit";
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
}

function borrarArea(){
    document.getElementById("texto-desencriptado").value="";
}
