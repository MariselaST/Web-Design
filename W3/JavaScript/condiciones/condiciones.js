var age = prompt ("Cuantos años tienes?");

if(age<0){
	alert("Edad negativa");
}

else if(age==21){
	alert("Feliz cumpleaños 21");
}

else if (age % Math.sqrt(age)===0){
	alert("Cuadrado perfecto");
}

else alert("Tienes " + age + " años")