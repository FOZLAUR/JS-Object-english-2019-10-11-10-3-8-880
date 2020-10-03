function item1(){
	var result = "";
	const user= {};
	result += "Init: <br>";
	for (var key in user){
		result += key+" : "+user[key]+"<br>";
	}
	user.name = "John";
	result += user.name+" added as name<br>";
	user.surname = "Mike";
	result += user.surname+" added as surname<br>";
	user.name = "Peter";
	result += user.name+" is new name<br>";
	result += "Attribute " + user.name + " to be deleted! <br>";
	delete user.name;
	result += "DELETED! <br>";
	result += "Remaining Atributes: <br>";
	for (var key in user){
		result += key+" : "+user[key]+"<br>";
	}

	return result;
}

function item2(){
	var fruit = {
		apple: 20,
		pear: 20,
		peach: 10
	};
	var total = 0;
	var result = ""

	for (var key in fruit){
		result += key+": "+ fruit[key]+"<br>";
		total += fruit[key];
	}
	result += "<br>Total No. of Fruits: "+total+"<br>";
	return result;
}

function execute(){
	var x = document.getElementById("item1").checked;
	var y = document.getElementById("item2").checked;
	var result = "";

	if (x){
		result = item1();
		document.getElementById("demo").innerHTML = "Item 1 Status: <br>"+result;
	} else if (y) {
		result = item2();
		document.getElementById("demo").innerHTML = "Breakdown of Fruits: <br>"+result;
	} else {
		document.getElementById("demo").innerHTML = "Nothing selected.";
	}

	
}