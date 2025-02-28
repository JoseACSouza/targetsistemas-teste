// Questão número 1
const number1 = ()=>{
  let indice=13;
  let soma=0;
  let k=0;
  for (k=0; k<indice; k = k+1){{
      soma = soma+k;
  }}
console.log(soma);
}
// Questão número 2
const number2 = (valor)=>{
  let fibonacci = [];
  for (i=0; i<valor; i+=1){
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
console.log(fibonacci.includes(valor)?`O valor ${valor} pertence a sequencia`:`O valor ${valor} não pertence a sequencia`);
}