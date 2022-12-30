function checker() { 
	let name = document.getElementById("name").value; 
	let age = Number(document.getElementById("age").value); 
	let who = document.getElementById("selection").value; 

	if (name == null || name.length < 3) { 
			alert("Введите больше 3 символов"); 
	} 

	else if 
	(age < 14 || age > 30) { 
			alert("Вы слишком молоды или же слишком стары"); 
	} 

	else if (who != "student") { 
			alert("Вы должны быть студентом"); 
	} 
	else { 
			alert("Переход") 
			window.location = "hz.html"
	} 
}