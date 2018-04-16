

// Creating variable for form and li to utilize later
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

//Add item fcn
function addItem (e)  {
        e.preventDefault();
// get input value
        let newBlog = document.getElementById('blog').value;
// create new li element
        let li = document.createElement('li');
//add text node with input value
        let text = document.createTextNode(newBlog + ' ');
        li.appendChild(text);
// add delete button
        let deleteButton = document.createElement('button')
// add text node with input
        let deleteBtnText = document.createTextNode('X');
        deleteButton.appendChild(deleteBtnText);
        deleteButton.classList.add('btnX');
//append button to li
        li.appendChild(deleteButton);
//append li to list
        itemList.appendChild(li);
}

// Remove Item fcn

// on click on the 'X' button delete the Post
//select button tag
btn = document.getElementsByTagName('button');
// addEventListener on button click

btn[0].addEventListener("click", removeList);

// // Remove fcn
function removeList (e) {
;
}
