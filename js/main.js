const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.parentElement.classList.add('checked');
        } else {
            this.parentElement.classList.remove('checked');
        }
    });
});

// function addItem(e) {
//     e.preventDefault();
//     let data = this.elements.writeList.value;
//     let list = document.querySelector('ol');
//     let item = document.createElement('li');
//     let text = document.createElement('p');

//     text.textContent = data;
//     this.elements.writeList.value = '';
//     item.appendChild(text);
//     list.appendChild(item);

//     let rmvBtn = document.createElement('span');
//     rmvBtn.innerHTML = '<i class="fa-solid fa-minus remove"></i>';
//     item.appendChild(rmvBtn);

//     let doneBtn = document.createElement('span');
//     doneBtn.innerHTML = '<i class="fa-solid fa-check check"></i>';
//     item.appendChild(doneBtn);

//     rmvBtn.addEventListener('click', deleteItem);
//     doneBtn.addEventListener('click', doneItem);

//     item.addEventListener('click', doneItem);
// }

// function deleteItem(e) {
//     this.parentElement.remove();
// }

// function doneItem(e) {
//     let listItem = e.target.parentElement;
//     listItem.classList.toggle('checked');
// }

// function markAsDone(e) {
//     let listItem = e.target.parentElement.parentElement;
//     listItem.classList.add('checked');
// }

// modal
const adicionar = document.getElementById('adicionar');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('modal');

adicionar.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
