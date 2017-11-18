document.getElementById("addItem").onclick = addingItem;

function editItem() {
  // get parent, which is the list item
  var listItem = $(this).parent();
  // get access to nameDiv
  var nameDiv     = listItem.find("#nameDiv");
  var quantityDiv = listItem.find("#quantityDiv");
  // backup the value
  var itemName     = nameDiv.attr("name");
  var itemQuantity = quantityDiv.attr("name");
  // put backed up value into the new input field
  var nameInput = document.createElement("input");
  nameInput.setAttribute("id", "nameInput");
  nameInput.setAttribute("name", itemName);
  nameInput.setAttribute("value", itemName);

  var quantityInput = document.createElement("input");
  quantityInput.setAttribute("id", "quantityInput");
  quantityInput.setAttribute("name", itemQuantity);
  quantityInput.setAttribute("value", itemQuantity);

  // delete nameDiv and replace it with input field
  listItem.find("#nameDiv").replaceWith(nameInput);
  listItem.find("#quantityDiv").replaceWith(quantityInput);
  // create the save button
  var saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  saveButton.setAttribute("id", "saveButton");
  saveButton.onclick = saveItem;

  $(this).replaceWith(saveButton);
}

function saveItem() {
  // get parent
  var listItem = $(this).parent();
  // get access to nameInput
  var nameInput     = listItem.find("#nameInput");
  var quantityInput = listItem.find("#quantityInput");

  var itemName      = nameInput.val();
  var itemQuantity  = quantityInput.val();
  // transform them back into div
  var nameDiv     = document.createElement("div");
  var quantityDiv = document.createElement("div");

  nameDiv.setAttribute("id", "nameDiv");
  nameDiv.setAttribute("name", itemName);
  nameDiv.innerHTML = itemName;

  quantityDiv.setAttribute("id", "quantityDiv");
  quantityDiv.setAttribute("name", itemQuantity);
  quantityDiv.innerHTML = itemQuantity;

  listItem.find("#nameInput").replaceWith(nameDiv);
  listItem.find("#quantityInput").replaceWith(quantityDiv);
  // change name of this button to "Edit"
  $(this).text("Edit");
  // replace onclick of this button with editItem
  $(this).click(editItem);
}

function deleteItem() {
  $(this).parent().remove();
}

function addingItem() {

  // create variable to grab the grocery item input value
  // create variable to grab the unordered list from the html

  var itemName     = document.getElementById("item").value;
  var itemQuantity = document.getElementById("quantity").value;

  if (itemName == "") {
    alert("Please enter the name of the item");
    return;
  }
  if (itemQuantity == "") {
    alert("Please enter the item quantity");
    return;
  }

  var groceryList  = document.getElementById("groceryList");

  // create a list item node
  var listItem     = document.createElement("li");
  var nameDiv      = document.createElement("div");
  var quantityDiv  = document.createElement("div");
  var editButton   = document.createElement("button");
  var deleteButton = document.createElement("button");
  var checkBox     = document.createElement("input");

  // Name
  nameDiv.innerHTML = itemName;
  nameDiv.setAttribute("id", "nameDiv");
  nameDiv.setAttribute("name", itemName);

  // Quantity
  quantityDiv.innerHTML = itemQuantity;
  quantityDiv.setAttribute("id", "quantityDiv");
  quantityDiv.setAttribute("name", itemQuantity);

  // Edit button
  // editButton.innerHTML = "<i class='fa fa-pencil' aria-hidden='true'></i>";
  editButton.innerHTML = "Edit";
  editButton.setAttribute("id", "editButton");
  editButton.onclick = editItem;

  // Delete Button
  // deleteButton.innerHTML = "<i class='fa fa-trash-o' aria-hidden='true'></i>";
  deleteButton.innerHTML = "Delete";
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.onclick = deleteItem;

  // Checkbox button

  // Append the grocery list item to the unordered list
  listItem.appendChild(nameDiv);
  listItem.appendChild(quantityDiv);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  groceryList.appendChild(listItem);

  // Clear input value below for the user!
  document.getElementById("item").value     = "";
  document.getElementById("quantity").value = "";
}