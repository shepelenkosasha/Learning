function myFirstApp(name, age) {
	// body...
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ["HTML","CSS","JS","Git"];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>");
		}
	}

	showSkills();

	function cheskAge() {
		if (age > 18) {
			alert("Hello!");
		} else {
			alert("А ну пшел отсюда!");
		}
	}

	cheskAge();
	
	function calcPow(num) {
		console.log(num ** 2);
	}

	calcPow(4);
}

myFirstApp("Sasha", 17);