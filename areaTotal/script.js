function areaTotal(){
  let msg = document.querySelector("#areatotal");
  areaT = altura * base;
  msg.textContent = "A área total do retângulo é: " + areaT;
  
}
function lados(){
  altura = parseFloat(prompt("Qual a altura do retângulo?"));
    if(isNaN(altura)){
      alert("Apenas números devem ser inseridos.");
      return 0;
}
  base = parseFloat(prompt("Qual a base do retângulo?"));
  if(isNaN(base)){
    alert("Apenas números devem ser inseridos.");
    return 0;
}
}
