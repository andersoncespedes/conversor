class Temperatura{
    celciusAFarenheith(param){
        return (param * 1.8 ) + 32;
    }
    FarenheithAcelcius(param){
        return (param - 32 ) / 1.8;
    }
}
export const temperatura = new Temperatura();
