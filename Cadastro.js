function registerUser1() {
  user_name = document.getElementById("user_name").value;
  user_mail = document.getElementById("user_mail").value;
  firebase.database().ref("/materia-energia/").push({
    name:user_name,
    email:user_mail
   });
  
 window.location.href="https://calatrone.github.io/ebook/eixos/materia/materiaEnergia.html"
}

function registerUser2() {
  user_name = document.getElementById("user_name").value;
  user_mail = document.getElementById("user_mail").value;
  firebase.database().ref("/terra-universo/").push({
    name:user_name,
    email:user_mail
   });
  window.location.href="https://calatrone.github.io/ebook/eixos/terra/terraUniverso.html"
}

function registerUser3() {
  user_name = document.getElementById("user_name").value;
  user_mail = document.getElementById("user_mail").value;
  firebase.database().ref("/vida-evolucao/").push({
    name:user_name,
    email:user_mail
   });
  window.location.href="https://calatrone.github.io/ebook/eixos/vida/vidaEvolucao.html"

}
