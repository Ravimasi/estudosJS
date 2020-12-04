let s = "s"
function pluralize(substantivo,num1){
  if(num1 == 1 && substantivo[substantivo.length] == "s"){
    let singular = substantivo.slice(0,-1)
    console.log(num1 + " " + singular)
    
  }
  else if 
    (substantivo[substantivo.length-1] == "s"){
    console.log(num1 + " " + substantivo);
  }
  else{
    console.log(num1  + " " + substantivo + s );
  }
}
pluralize("maça",1)

// preciso consertar