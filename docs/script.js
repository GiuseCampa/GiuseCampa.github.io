window.value=1;  
function popup(indice) {
// Get the modal
var modal = document.getElementById("myModal");
// When the user clicks the button, open the modal 
modal.style.display = "block";

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

if(indice == 0){
  window.value = document.getElementById("numbi").max = data["postisale"];
  document.getElementById("sala").innerHTML = vetsala[0];
  document.getElementById("postlib").innerHTML = "Biglietti rimasti: " + data["postisale"] +"/100";
}else if(indice == 1){
  window.value = document.getElementById("numbi").max = data["postisalee"];
  document.getElementById("sala").innerHTML = vetsala[1];
  document.getElementById("postlib").innerHTML = "Biglietti rimasti: " + data["postisalee"] +"/150";
}else{
  window.value = document.getElementById("numbi").max = data["postisaleee"];
  document.getElementById("sala").innerHTML = vetsala[2];
  document.getElementById("postlib").innerHTML = "Biglietti rimasti: " + data["postisaleee"] +"/200";
  }
console.log(window.value);
}



var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

const vetsala = ["Sala 1","Sala 2", "Sala 3"];

var postisale = 100; // Posti per ogni sala1
var totale = 100;

var postisalee = 150; // Posti per ogni sala2
var totalee = 150;

var postisaleee = 200; // Posti per ogni sala3
var totaleee = 200;

var conto = 0;

if(!("data" in localStorage)){
    localStorage["data"] = JSON.stringify({"postisale": postisale, "postisalee": postisalee, "postisaleee": postisaleee, "conto": conto});
}
data = JSON.parse(localStorage["data"]);
postisale = data["postisale"];
postisalee = data["postisalee"];
postisaleee = data["postisaleee"];
conto = data["conto"];
document.getElementById("saldo").innerHTML = conto+"€";

	if(postisale == 0){
		document.getElementById("tasto0").disabled = true;
	}

	if(postisalee == 0){
		document.getElementById("tasto1").disabled = true;
	}
	 
	if(postisaleee == 0){
		document.getElementById("tasto2").disabled = true;
	}
function runCode() {

  console.log(document.getElementById("sala").innerHTML);
  var indice = parseInt(document.getElementById("sala").innerHTML.slice(-1)-1)
  var numbiglie = document.getElementById('numbi').value;
  var radios = document.getElementsByName("bigl");
  var selected = Array.from(radios).find(radio => radio.checked);
  
var soldi;
var selected = document.querySelector('input[type=radio][name=bigl]:checked');
if((selected.value) == "Intero"){
soldi = numbiglie * 5;
}else{
soldi = numbiglie * 3.5;
} 
console.log(window.value);
var modal = document.getElementById("myModal");
  if(numbiglie <= window.value){
    modal.style.display = "none";
	document.getElementById("verde").removeAttribute("hidden");
	xdialog.alert("Il biglietto selezionato è: "+  selected.value + "\nNumero biglietti: " + numbiglie +"\nPrezzo totale: "+ soldi+"€");
	conto = conto + soldi;
	if(indice == 0){
		var postiliberi = data["postisale"] - numbiglie; //posti rimasti liberi
		localStorage["data"] = JSON.stringify({"postisale": data["postisale"] - numbiglie, "postisalee":data["postisalee"], "postisaleee":data["postisaleee"], "conto": conto});
		data = JSON.parse(localStorage["data"]);
		console.log(postiliberi);
		document.getElementById("postlib").innerHTML = "Biglietti rimasti: " + postiliberi+"/100";
		var xx = document.getElementById("numbi").max = window.value;
		if(postiliberi == 0){
			document.getElementById("tasto0").disabled = true;
		}
	}else if(indice == 1){
		var postiliberi = data["postisalee"] - numbiglie; //posti rimasti liberi
		localStorage["data"] = JSON.stringify({"postisale": data["postisale"], "postisalee":data["postisalee"] - numbiglie, "postisaleee":data["postisaleee"], "conto": conto});
		data = JSON.parse(localStorage["data"]);
		console.log(postiliberi);
		document.getElementById("postlib").innerHTML = "Biglietti rimasti: " + postiliberi+"/150";
		var xx = document.getElementById("numbi").max = window.value;
		if(postiliberi == 0){
			document.getElementById("tasto1").disabled = true;
		}
	}else{
		var postiliberi = data["postisaleee"] - numbiglie; //posti rimasti liberi
		localStorage["data"] = JSON.stringify({"postisale": data["postisale"], "postisalee":data["postisalee"], "postisaleee":data["postisaleee"] - numbiglie, "conto": conto});
		data = JSON.parse(localStorage["data"]);
		console.log(postiliberi);
		document.getElementById("postlib").innerHTML = "Biglietti rimasti: " + postiliberi+"/200";
		var xx = document.getElementById("numbi").max = window.value;
		if(postiliberi == 0){
			document.getElementById("tasto2").disabled = true;
		}
	}
	document.getElementById("saldo").innerHTML = conto+"€";
  }else{
    modal.style.display = "none";
	document.getElementById("rosso").removeAttribute("hidden");
 }
}

