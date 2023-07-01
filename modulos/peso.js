class Peso {
  kilosALibras(param){
    return param * 2.22;
  }
  librasAKilos(param){
    return (param / 2.22).toFixed;
  }
  kilosAStones(param){
    return param * 0.157473;
  }
  stonesAKilos(param){
    return param * 6.35029;
  }
}
export const peso = new Peso();