var userIndex;

function codeUser(){
  var index;
  index+=1
  userIndex = "user"+index
}

function registerUser1() {
  console.log("entrando em terra e Universo")
  codeUser()
  user_name = document.getElementById("user_name").value;
  user_mail = document.getElementById("user_mail").value;
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("user_mail", user_mail);
  firebase.database().ref(userIndex).set({
    eixo: "Matéria e Energia",
    name: user_name,
    mail: user_mail
    
  });
  
  window.location.href="https://calatrone.github.io/ebook/eixos/materia/materiaEnergia.html"
}

function registerUser2() {
  codeUser()
  console.log("entrando em terra e Universo")
  user_name = document.getElementById("user_name").value;
  user_mail = document.getElementById("user_mail").value;
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("user_mail", user_mail);
  firebase.database().ref(userIndex).set({
    eixo: "Terra e Universo",
    name: user_name,
    mail: user_mail
    
  });
  
  window.location.href="https://calatrone.github.io/ebook/eixos/terra/terraUniverso.html"
}

function registerUser3() {
  codeUser()
  console.log("entrando em Vida e Evolução")
  user_name = document.getElementById("user_name").value;
  user_mail = document.getElementById("user_mail").value;
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("user_mail", user_mail);
  firebase.database().ref(userIndex).set({
    eixo: "Vida e Evolução",
    name: user_name,
    mail: user_mail
    
  });
  
  window.location.href="https://calatrone.github.io/ebook/eixos/vida/vidaEvolucao.html"

}
