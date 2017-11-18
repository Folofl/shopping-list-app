
document.getElementById("addItem").onclick = addingItem;

function addingItem(){

  var groceryItem = document.getElementById("item").value;
  var groceryList = document.getElementById("groceryList");

  groceryList.append(groceryItem);
}
