const   texto=document.querySelector("#texto-desencriptado").value, 
        imagen=document.querySelector("#imagen-no-encontrado"),
        parrafo=document.querySelector("#mensaje-busqueda"),
        textoAyuda=document.querySelector("#texto-ayuda"),
        textoProcesado=document.querySelector("#texto-encriptado"),
        btnCopiar=document.querySelector("#btn-copiar"),
        parrafoAdvertencia=document.querySelector("#parrafo-advertencia");


function encriptarTexto(){
   
    document.querySelector("#btn-copiar").value="Copiar";
    if(texto){
        if((/[^a-z\s]+/.test(texto))){// evaluacion de la coincidencia del complemento de letras minusculas y espacios

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
            document.querySelector("#texto-desencriptado").value="";
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

    document.querySelector("#btn-copiar").value="Copiar";
    if(texto){
        if((/[^a-z\s]+/.test(texto))){// evaluacion de la coincidencia del complemento de letras minusculas y espacios(regresa true si encuentra almenos una coincidencia)
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
            document.querySelector("#texto-desencriptado").value="";
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
    let copiado=document.querySelector("#texto-encriptado").innerHTML;
    navigator.clipboard.writeText(copiado).then(()=>console.log("texto copiado en el portapapeles")).
    catch((err)=>console.log("sucedio un error", err));
    document.querySelector("btn-copiar").value="copiado";
}

function borrarArea(){
    document.querySelector("#texto-desencriptado").value="";
}
