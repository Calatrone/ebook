function registerUser() {
  user_name = document.getElementById("user_name").value;
  user_mail = document.getElementById("user_mail").value;
  firebase.database().ref("/cadastros/").push({
    name:user_name,
    email:user_mail
   });
  att='<button class="materia"><a href="https://calatrone.github.io/ebook/eixos/materia/materiaEnergia.html"> Matéria e Energia</a></button><button class="terra"><a href="https://calatrone.github.io/ebook/eixos/terra/terraUniverso.html"> Terra e Universo</a></button><button class="vida" > <a href="https://calatrone.github.io/ebook/eixos/vida/vidaEvolucao.html">Vida e Evolução</a></button>'
   document.getElementById("ano-escolar-botoes").innerHTML=att
}

