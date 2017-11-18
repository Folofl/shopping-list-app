document.getElementById("addItem").onclick = addingItem;

function addingItem(){

  var itemName     = document.getElementById("item").value;
  var itemQuantity = document.getElementById("quantity").value;
  var groceryList  = document.getElementById("groceryList");

  var li = document.createElement("li");
  var t = document.createTextNode(itemName + " " + itemQuantity);
  li.appendChild(t);
  groceryList.appendChild(li);
}