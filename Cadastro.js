function registerUser1() {
  console.log("entrando em terra e Universo")
  user_name = document.getElementById("user_name").value;
  user_mail = document.getElementById("user_mail").value;
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("user_mail", user_mail);
  firebase.database().ref("/materia/").child(user_name).update({
    mail: user_mail
    
  });
  
  window.location.href="https://calatrone.github.io/ebook/eixos/materia/materiaEnergia.html"
}

function registerUser2() {
  var userIndex = "user"+Math.floor(Math.random())
  console.log("entrando em terra e Universo")
  var user_name = document.getElementById("user_name").value;
  var user_mail = document.getElementById("user_mail").value;
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("user_mail", user_mail);
  firebase.database().ref(userIndex).update({
    eixo: "Terra e Universo",
    name: user_name,
    mail: user_mail
    
  });
  
  window.location.href="https://calatrone.github.io/ebook/eixos/terra/terraUniverso.html"
}

function registerUser3() {
  var userIndex = "user"+Math.floor(Math.random())
  console.log("entrando em Vida e Evolução")
  var user_name = document.getElementById("user_name").value;
  var user_mail = document.getElementById("user_mail").value;
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("user_mail", user_mail);
  firebase.database().ref(userIndex).update({
    eixo: "Vida e Evolução",
    name: user_name,
    mail: user_mail
    
  });
  
  window.location.href="https://calatrone.github.io/ebook/eixos/vida/vidaEvolucao.html"

}
