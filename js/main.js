var myList = [];

function addToList() {
  var input = document.getElementById("input");
  var value = input.value;

  myList.push(value);

  input.value = "";

  displayList();
}

function displayList() {
  var listContainer = document.getElementById("list");

  listContainer.innerHTML = "";

  for (var i = 0; i < myList.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = myList[i];
    listContainer.appendChild(listItem);
  }
}
