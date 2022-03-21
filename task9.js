/* Deliverable
When we type on the input box show me those items from the list which match my search string
Now go ahead and take description of the item too in the input box where you are creating the item
When you are displaying the item show the description of the item below that
Now when we try to search, check both the name of the item and the description. If search string is found in any place show the item */
let itemList = document.getElementById('items');
let filter = document.getElementById('filter')

filter.addEventListener('keyup', filterItem)


function filterItem(e){
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent
        let textName = item.querySelector('li :nth-child(3)').textContent
        if(itemName.toLowerCase().indexOf(text)!=-1 || textName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none'
        }
    })
}
