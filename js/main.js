let grocery = document.getElementById("grocery");
grocery.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  let data = this.elements.writeList.value;
  let list = document.querySelector("ol");
  let item = document.createElement("li");
  let text = document.createElement("p");

  text.textContent = data;
  this.elements.writeList.value = "";
  item.appendChild(text);
  list.appendChild(item);

  let rmvBtn = document.createElement("span");
  rmvBtn.innerHTML = '<i class="fa-solid fa-minus remove"></i>';
  item.appendChild(rmvBtn);

  let doneBtn = document.createElement("span");
  doneBtn.innerHTML = '<i class="fa-solid fa-check check"></i>';
  item.appendChild(doneBtn);

  rmvBtn.addEventListener("click", deleteItem);
  doneBtn.addEventListener("click", doneItem);

  item.addEventListener("click", doneItem);
}

function deleteItem(e) {
  this.parentElement.remove();
}

function doneItem(e) {
  let listItem = e.target.parentElement;
  listItem.classList.toggle("checked");
}

function markAsDone(e) {
  let listItem = e.target.parentElement.parentElement;
  listItem.classList.add("checked");
}
