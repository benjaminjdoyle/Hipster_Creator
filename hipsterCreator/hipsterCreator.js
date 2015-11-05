// Create an array where hipster objects live
var theMission = [];

// This function handles the creation of hipsters template

function hipster(name,accessories,motto,habitat,attitude,image){
	this.name = name;
	this.accessories = accessories;
	this.motto = motto;
	this.habitat = habitat;
	this.attitude = attitude;
	this.image = image;
}

function createHipster(){
	var hName = document.getElementById("name").value;
	var hAccessories = document.getElementById("accessories").value;
	var hMotto = document.getElementById("motto").value;
	var hHabitat = document.getElementById("habitat").value;
	var hAttitude = document.getElementById("attitude").value;
	var hImage = document.getElementById("image").value;

	var nHipster = new hipster(hName, hAccessories, hMotto, hHabitat, hAttitude, hImage);
	theMission.push(nHipster);
	console.table(theMission);
	displayHipsters();
};

function displayHipsters(){
	var holder = "";

	for (var i = theMission.length - 1; i >= 0; i--) {
		holder += "<tr>";
		holder += "<td>" + theMission[i].name+ "</td>"; 
		holder += "<td>" + theMission[i].accessories + "</td>"; 
		holder += "<td>" + theMission[i].motto + "</td>"; 
		holder += "<td>" + theMission[i].habitat + "</td>"; 
		holder += "<td>" + theMission[i].attitude + "</td>"; 
		holder += "<td><img class='img-responsive img-thumbnail' height='250' width='250' src='" + theMission[i].image + "'></td>";
		holder += "<td><button class='btn btn-danger' onclick='excludeHipster("+ i +")'>Delete</button><button class='btn btn-warning'>Edit</button></td>"; 
		holder += "</tr>";
		// console.log("hi");
	};
	document.getElementById('result').innerHTML = holder;
	// Were making our table visible by setting the display to table, or else it would be stuck on the value of none, and wed never see our info.
	document.getElementById("hipsterTable").style.display = "table";
}

function excludeHipster(index){

	theMission.splice(index, 1);
	displayHipsters();
}
// hipster.prototype.speak = function(msg){
//   console.log(msg);
// }


// Guinny.speak("OMG!");


// hipster.prototype.isObnoxious = false;
// Guinny.isObnoxious = true;


// hipster.prototype.info = function(){
//   return this.name + " is a "+ this.type;
// }


