// get the data
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
	if (inputBox.value === "") {
		alert("You must write something!"); // if input box is empty, display the alert
	} else {
		let li = document.createElement("li"); // get the data
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li); // display the value in list container, from getting input box.

		let span = document.createElement("span"); // add delete function to delete text
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = ""; // clear the input box after adding text
	saveData();
}

listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);

// store the to-do list data on browser

function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
