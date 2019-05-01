function main() {
	document.getElementById("currenttime").innerHTML = Date();
	if (navigator.onLine) {
	setTimeout("main()", 500);
	} else {
		alert("You are offline");
		main();
	}
}

console.log("Successfully started main.js @ " + Date());
main();