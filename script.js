function search(){
	const input=document.getElementById('input').value;
	//const div2=document.getElementById('div2');
	const actor=document.getElementsByTagName('h5');
	let upper = input.toUpperCase();
	for(var i=0; i < actor.length; i++){
	var text = actor[i].innerHTML;
	if(text.indexOf(upper) > -1){
		actor[i].style.display = "";
	}else{
		actor[i].style.display = "none";
	}
}
};