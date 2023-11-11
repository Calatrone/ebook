// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQCgRHw5tRtSelD3LbIef1VUSEuJ3Rwc",
  authDomain: "ebook-3bc31.firebaseapp.com",
  databaseURL: "https://ebook-3bc31-default-rtdb.firebaseio.com",
  projectId: "ebook-3bc31",
  storageBucket: "ebook-3bc31.appspot.com",
  messagingSenderId: "988013202215",
  appId: "1:988013202215:web:8e4f4cc05849594cadf702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function registerUser1() {

  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  firebase.database().ref("/").child(user_name).update({
    eixo: "Matéria e Energia"
  });
  user_mail = document.getElementById("user_mail").value;
  localStorage.setItem("user_mail", user_mail);
  firebase.database().ref("/").child(user_mail).update({
    mail: "e-mail cadastrado no eixo Matéria e Energia"
  });
  window.location="./eixos/materia/materiaEnergia.html"
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
