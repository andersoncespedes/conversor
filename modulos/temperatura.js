class Temperatura{
    celciusAFarenheith(param){
        return (param * 1.8 ) + 32;
    }
    FarenheithAcelcius(param){
        return (param - 32 ) / 1.8;
    }
    FarenheithAKelvin(param){
        return (param - 32) * 5/9 + 273.15
    }
    KelvinAFarenheith(param){
        return (param - 273.15) * 9/5 + 32 
    }
}
export const temperatura = new Temperatura();
