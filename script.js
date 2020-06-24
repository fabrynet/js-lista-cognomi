// Chiedete all'utente un cognome e aggiungetelo alla lista, poi ordinate, utilizzate una funzionalità di js per l'ordinamento.
// Dopo aver ordinato, l'esercizio chiede l'indice del nuovo elemento inserito, per farlo utilizzate il metodo della ricerca dell'ultima esercitazione.

var btn = document.getElementById('insertSurname');
var surname = document.getElementById('surname');
var users = ["Bianco","Rossi","Magellano","Tarantino","Cervellera"];
var result = document.getElementById('result');
var list = document.getElementById('list');

btn.addEventListener('click', function() {

  result.className = "hidden";
  list.innerHTML = "";
  list.className = "hidden";

  if (surname.value) {
    var presente = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i] == surname.value) {
        alert("Attenzione il tuo cognome è già presente!");
        presente = true;
      }
    }
    if (!presente) {
      users.push(surname.value);
      console.log(users);
      users.sort();
      console.log(users);
      var index;
      for (var i = 0; i < users.length; i++) {
        list.innerHTML += "<li>" + users[i] + "</li>";
        if (users[i] == surname.value) {
          index = i;
        }
      }
      result.className = "show";
      result.innerHTML = "Il tuo cognome è stato inserito nella " + (index + 1) + " posizione";
      list.className = "show";
    }
  } else {
    alert("Attenzione inserisci il tuo cognome");
  }



});
