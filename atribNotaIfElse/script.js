function qualNota(nota){
  if(nota > 19.5){
    console.log("Excelente, você foi muito bem! Nota A")
  }
  else if(nota >= 17.5 && nota <=19.4){
    console.log("Parabéns! Nota B")
  }
  else if(nota >=13.5 && nota <= 17.4){
    console.log("Foi bem, Nota C.")
  }
  else{
    console.log("Nota D ou menos. Tente novamente")
  }
}
qualNota(13.4);