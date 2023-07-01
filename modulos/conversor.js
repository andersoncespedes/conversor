import { temperatura } from "./temperatura.js";
import { peso } from "./peso.js";
import { distancia } from "./distancia.js";

const formPeso = document.getElementById("Conversor_peso");
const formTemp = document.getElementById("Conversor_temperatura");
const formDist = document.getElementById("Conversor_distancia");

formPeso.addEventListener("submit", function(ev){
    ev.preventDefault()
    if(this.tipo.value == "K-L"){
        this.respuesta.value = peso.kilosALibras(this.valor.value);
    }
    else if(this.tipo.value == "K-S"){
        this.respuesta.value = peso.kilosAStones(this.valor.value);
    }
    else if(this.tipo.value == "S-k"){
        this.respuesta.value = peso.stonesAKilos(this.valor.value);
    }
    else{
        this.respuesta.value = peso.librasAKilos(this.valor.value);
    }
});

formDist.addEventListener("submit", function(ev){
    ev.preventDefault()
    if(this.tipo.value == "P-M"){
        this.respuesta.value = distancia.piesAMetros(this.valor.value);
    }
    else if(this.tipo.value == "M-m"){
        this.respuesta.value = distancia.metrosAMillas(this.valor.value);
    }
    else if(this.tipo.value == "m-M"){
        this.respuesta.value = distancia.millasAMetros(this.valor.value);
    }
    else{
        this.respuesta.value = distancia.metrosAPies(this.valor.value);
    }
});


formTemp.addEventListener("submit", function(ev){
    ev.preventDefault();
    if(this.tipo.value == "C-F"){
        this.respuesta.value = temperatura.celciusAFarenheith(this.valor.value);
    }
    else if(this.tipo.value == "F-K"){
        this.respuesta.value = temperatura.FarenheithAKelvin(this.valor.value);
    }
    else if(this.tipo.value == "K-F"){
        this.respuesta.value = temperatura.KelvinAFarenheith(this.valor.value);
    }
    else{
        this.respuesta.value = temperatura.FarenheithAcelcius(this.valor.value);
    }
})
console.log(temperatura.celciusAFarenheith(2314));
console.log(peso.kilosALibras(321234));
console.log(1 * 0.3048);