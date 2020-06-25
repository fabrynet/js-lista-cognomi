// Chiedete all'utente un cognome e aggiungetelo alla lista, poi ordinate, utilizzate una funzionalità di js per l'ordinamento.
// Dopo aver ordinato, l'esercizio chiede l'indice del nuovo elemento inserito, per farlo utilizzate il metodo della ricerca dell'ultima esercitazione.

var btn = document.getElementById('insertSurname');
var surname = document.getElementById('surname');
var users = ["Bianco","Rossi","Magellano","Tarantino","Cervellera","Marinosci","Paiano"];
var result = document.getElementById('result');
var list = document.getElementById('list');
var error = document.getElementById('error');

btn.addEventListener('click', function() {

  error.className = "hidden";
  result.className = "hidden";
  list.innerHTML = "";
  list.className = "hidden";

  if (surname.value && isNaN(surname.value)) {
    var presente = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i] == surname.value) {
        error.innerHTML = "Attenzione il tuo cognome è già presente!";
        error.className = "show";
        // alert("Attenzione il tuo cognome è già presente!");
        presente = true;
      }
    }
    if (!presente) {
      users.push(surname.value);
      console.log(users);

      // algoritmo Bubble Sort per ordine crescente
      for (var i = 0 ; i < users.length -1 ; i++) {
        for (var j = 0; j < users.length - i - 1; j++) {
          //se l'elemento è maggiore del successivo faccio lo swap degli elementi
          if (users[j] > users[j+1]) {
            var tmp = users[j+1];
            users[j+1] = users[j];
            users[j] = tmp;
          }
        }
      }
      // users.sort();
      console.log(users);
      var index;
      for (var i = 0; i < users.length; i++) {
        list.innerHTML += "<li>" + users[i] + "</li>";
        if (users[i] == surname.value) {
          index = i;
        }
      }
      result.innerHTML = "Il tuo cognome è stato inserito nella " + (index + 1) + " posizione";
      result.className = "show";
      list.className = "show";
    }
  } else {
    error.innerHTML = "Attenzione inserisci i dati correttamente";
    error.className = "show";
    // alert("Attenzione inserisci il tuo cognome");
  }



});
