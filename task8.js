let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
    
    //get input value
    let value = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(value));

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    let editBtn = document.createElement('button');
    editBtn.className = 'edit button';
    editBtn.appendChild(document.createTextNode('Edit'))

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
}

//On clicking the delete button we should be able to remove the newly created li tag
//Now add an edit button next to the delete icon.[Dont have to build the functionality]

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            itemList.removeChild(itemList.lastElementChild);
        }
    }
}

