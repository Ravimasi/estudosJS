function makeMadLib(){
  let valueNoun = document.querySelector("#noun").value
  let valueAdjective = document.querySelector("#adjective").value
  let valuePerson = document.querySelector("#person").value
  let story = document.querySelector("#story")
story.innerHTML = valuePerson + " gosta de uma " + valueAdjective + " " + valueNoun  
}
const butaoLib = document.getElementById("lib-button")
butaoLib.addEventListener('click', makeMadLib)