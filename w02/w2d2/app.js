// let button = document.getElementById('button').addEventListener("click",buttonClick);
//
// function buttonClick (e) {
//     document.getElementById('header').textContent = "Changed";
//     console.log(e);
//   }
//
//   let itemInput = document.querySelector('input[type="text"]');
//
//

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
// form submit event
form.addEventListener('submit', addItem);

  //Add item fcn
function addItem (e){
  e.preventDefault();
// get input value
let newBlog = document.getElementById('blog').value;
// create new li element
let li = document.createElement('li');
//add text node with input value
li.appendChild(document.createTextNode(newBlog + ' '));
// add delete button
let deleteButton = document.createElement('button')
// add text node with input
deleteButton.appendChild(document.createTextNode('X'));
//append button to li
li.appendChild(deleteButton)
//append li to list
itemList.appendChild(li);
}
