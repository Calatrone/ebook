function registerUser1() {
  console.log("entrando em materia e energia")
  user_name = document.getElementById("user_name").value;
  user_mail = document.getElementById("user_mail").value;
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("user_mail", user_mail);
  database().ref("/users/").set({
    eixo: "Matéria e Energia",
    name: user_name,
    mail: user_mail
    
  });
  
  window.location.href="https://calatrone.github.io/ebook/eixos/terra/terraUniverso.html"
}

function registerUser2() {

  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  firebase.database().ref("/").child(user_name).update({
    eixo: "Terra e Universo"
  });
  user_mail = document.getElementById("user_mail").value;
  localStorage.setItem("user_mail", user_mail);
  firebase.database().ref("/").child(user_mail).update({
    mail: "e-mail cadastrado no eixo Terra e Universo"
  });
  window.location="./eixos/terra/terraUniverso.html"
}

function registerUser3() {

  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  firebase.database().ref("/").child(user_name).update({
    eixo: "Vida e Evolução"
  });
  user_mail = document.getElementById("user_mail").value;
  localStorage.setItem("user_mail", user_mail);
  firebase.database().ref("/").child(user_mail).update({
    mail: "e-mail cadastrado no eixo Vida e Evolução"
  });
  window.location="./eixos/vida/vidaEvolucao.html"
}
