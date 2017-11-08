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

	//crear contador de palabras
	/*function wordCount(){
		var words = document.getElementById('contador').value;
		var count = words.length();

		if ( count === 0 || count === ""){
			return ("140");
		} else ( 1 >= count >= 139 ) {
			return (count);
		}
}*/

	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);
	var contenedorElemento = document.createElement('p');

	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(textbox);
	newComments.appendChild(contenedorElemento);
	cont.appendChild(newComments);











}
