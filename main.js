

function encriptarTexto(){
    let texto=document.getElementById("texto-desencriptado").value.toLowerCase();
    let imagen=document.getElementById("imagen-no-encontrado");
    let parrafo=document.getElementById("mensaje-busqueda");
    let btnCopiar=document.getElementById("btn-copiar");
   
    if(texto){
    imagen.style.display="none";
    parrafo.style.display="none";
    document.getElementById("texto-encriptado").style.fontSize="1.4rem";
    document.getElementById("texto-encriptado").style.height="100%";
    document.getElementById("texto-encriptado").style.display="flex";
    document.getElementById("texto-encriptado").style.flexDirection="column";
    document.getElementById("texto-encriptado").style.justifyContent="center";

    let textoEncriptado=texto.replace(/e/igm,"enter");
    textoEncriptado=textoEncriptado.replace(/o/igm,"ober");
    textoEncriptado=textoEncriptado.replace(/i/igm,"imes");
    textoEncriptado=textoEncriptado.replace(/a/igm,"ai");
    textoEncriptado=textoEncriptado.replace(/u/igm,"ufat");
    document.getElementById("texto-encriptado").innerHTML=textoEncriptado;
    btnCopiar.style.display="flex";
    }else{
        document.getElementById("texto-encriptado").innerHTML="Ingresa el texto que desees encriptar o desencriptar";
        parrafo.style.display="inherit";
        imagen.style.display="inherit";
        btnCopiar.style.display="none";
        document.getElementById("texto-encriptado").style.fontSize="1rem";
    
    }
    
}

function desencriptarTexto(){
    let texto=document.getElementById("texto-desencriptado").value.toLowerCase();
    let imagen=document.getElementById("imagen-no-encontrado");
    let parrafo=document.getElementById("mensaje-busqueda");
    let btnCopiar=document.getElementById("btn-copiar");
    if(texto!=''){
    imagen.style.display="none";
    parrafo.style.display="none";
    document.getElementById("texto-encriptado").style.fontSize="1.4rem";
    document.getElementById("texto-encriptado").style.height="100%";
    document.getElementById("texto-encriptado").style.display="flex";
    document.getElementById("texto-encriptado").style.flexDirection="column";
    document.getElementById("texto-encriptado").style.justifyContent="center";
    let textoDesencriptado=texto.replace(/enter/igm,"e");
    textoDesencriptado=textoDesencriptado.replace(/ober/igm,"o");
    textoDesencriptado=textoDesencriptado.replace(/imes/igm,"i");
    textoDesencriptado=textoDesencriptado.replace(/ai/igm,"a");
    textoDesencriptado=textoDesencriptado.replace(/ufat/igm,"u");
    document.getElementById("texto-encriptado").innerHTML=textoDesencriptado;
    btnCopiar.style.display="flex";
    }else{
        document.getElementById("texto-encriptado").innerHTML="Ingresa el texto que desees encriptar o desencriptar";
        imagen.style.display="inherit";
        parrafo.style.display="inherit";
        btnCopiar.style.display="none";
        document.getElementById("texto-encriptado").style.fontSize="1rem";

    }
    
    
}

function copiarTexto(){
    let copiado=document.getElementById("texto-encriptado").innerHTML;
    navigator.clipboard.writeText(copiado).then(()=>console.log("texto copiado en el portapapeles")).
    catch((err)=>console.log("sucedio un error", err));
    //let contenido=document.getElementById("texto-encriptado").value;
    
   // document.getElementById("texto-desencriptado").innerHTML=contenido;

}
