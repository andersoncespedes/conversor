class Distancia{
    metrosAPies(param){
        return (param * 3.28).toFixed(2);
    }
    piesAMetros(param){
        return (param * 0.3048).toFixed(2);
    }
    metrosAMillas(param){
        return (param * 0.000621371).toFixed(5);
    }
    millasAMetros(param){
        return (param * 1609.34).toFixed(2);
    }
}
export const distancia = new Distancia();