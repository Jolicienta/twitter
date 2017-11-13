function add(){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpiar el textarea
	document.getElementById('comment').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//validar que textarea tenga un msje
	if(comments.length == 0 || comments == null) {
		alert('!Vamos, cuentanos algo!');
		return false;
	}
	//crear checkbox
	var textbox = document.createElement('text');
	textbox.type = 'text';

	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);
	var contenedorElemento = document.createElement('p');

	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(textbox);
	newComments.appendChild(contenedorElemento);
	cont.appendChild(newComments);
}

var comments = document.getElementById('comment');
comments.onkeydown = function(){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;
	var numChars = comments.length;
	var counter = document.getElementById('counter-characters');
	var charLeft = 140 - numChars;
  counter.innerHTML = charLeft;

	if ( numChars >= 90 ){
		document.getElementById("counter-characters").style.color = "maroon";
	} else if (numChars >= 120){
		document.getElementById("counter-characters").style.color = "crimson"
	}
}
