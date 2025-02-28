const dados = require('./dados.json');

// Questão número 1
const number1 = ()=>{
  let indice=13;
  let soma=0;
  let k=0;
  for (k=0; k<indice; k = k+1){{
      soma = soma+k;
  }}
}

// Questão número 2
const number2 = (valor)=>{
  let fibonacci = [];
  for (i=0; i<=valor+1; i+=1){
    switch(i){
      case 0:
        fibonacci.push(0);
        break;
      case 1: 
        fibonacci.push(1);
        break;
      default:
        fibonacci.push(fibonacci[i-1]+fibonacci[[i-2]]);
    }
  }
return fibonacci.includes(valor)?`O valor ${valor} pertence a sequencia`:`O valor ${valor} não pertence a sequencia`;
}

//Questão número 3
const number3 = ()=>{
    const minorAndMajor = dados.sort((a, b)=> a.valor - b.valor).filter((value)=>value.valor!= 0);
    const allValues = minorAndMajor.map((item)=> item.valor);
    const average = allValues.reduce((acc, cur)=> acc + cur,0)/minorAndMajor.length;
    const result = {
      menorFaturamento: minorAndMajor[0].valor,
      maiorFaturamento: minorAndMajor[minorAndMajor.length-1].valor,
      media: average.toFixed(2),
    };
    return result;
}

//Questão 4

const number4 = ()=>{
  const state = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  }
  const values = Object.values(state);
  const total =   values.reduce((acc, cur)=> acc + cur,0);
  return {
    SP: (state.SP * 100/total).toFixed(2) + '%',
    RJ: (state.RJ * 100/total).toFixed(2) +'%',
    MG: (state.MG * 100/total).toFixed(2) +'%',
    ES: (state.ES * 100/total).toFixed(2) +'%',
    Outros: (state.Outros * 100/total).toFixed(2)+'%',
  }
  }

  //Questão 5

const number5 = (string)=>{
  let reverseString = '';
  for (i=string.length; string.length>=i; i--){
    reverseString = reverseString+string[i];
  }
  return reverseString;
  }
  
console.log(number5('alo'));
