var age = prompt ("Cuantos años tienes?");

if(age<0){
	alert("Error: Edad negativa");
}

else if(age==21){
	alert("Feliz cumpleaños 21");
}

else if (!(age%2===0)){
	alert("Tu edad es impar")
}

else if (age % Math.sqrt(age)===0){
	alert("Cuadrado perfecto");
}

else alert("Tienes " + age + " años")
