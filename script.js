// Get the modal
let activTask = "";
let createModal = document.getElementById('createModal');
let editModal = document.getElementById('editModal');
let activListItem = "";

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("edit-close")[0];

let main = document.querySelector(".main--makeList");
let mainInput = document.querySelector(".main--input");
let addBtn = document.querySelector(".main--btn");

let color = "lightgreen";

let radioColor = document.querySelectorAll(".main--radio");
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    closeModal();  
  }
  span1.onclick = function () {
      closeModal();  
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == createModal) {
    closeModal();
  }
  if (event.target == editModal) {
    closeModal();
  }
}
function clearModal(modal) {
    let modals = modal.querySelectorAll(".modalInput");
    for (let i = 0; i < modals.length; i++) {
      modals[i].value = "";
  
    }
  
  }

for (let radio of radioColor){
    radio.addEventListener("input", function(e){
    let click = e.target;
    color = click.id;
});
}

let mainListId = 1;
function makeList(){
    if (mainInput.value){
    let list = document.createElement("div");
        list.classList.add("main--list");
        list.style.backgroundColor = color;
        list.setAttribute("data-drop-target", "true");
    let myH4 = document.createElement("h4");
        myH4.classList.add("main--h4");
        myH4.setAttribute("title", "Ändra titel text");
        myH4.textContent = mainInput.value;
    let editInput = document.createElement("input");
        editInput.setAttribute("type", "text");
        editInput.setAttribute("maxlength", "15");
        editInput.classList.add("input--edit");
        editInput.value = myH4.textContent;
        editInput.style.visibility ="hidden";
    let okBtn = document.createElement("button");
        okBtn.classList.add("save--btn");
        okBtn.textContent = "Spara";
        okBtn.style.visibility ="hidden";
    let delBtn = document.createElement("button");
        delBtn.classList.add("list--del");
        delBtn.setAttribute("onClick", "deleteItem(this)");
    let delIcon = document.createElement("i");
        delIcon.classList.add("material-icons");
        delIcon.setAttribute("title", "Stäng");
        delIcon.textContent = "close";
    let addIcon = document.createElement("i");
        addIcon.classList.add("material-icons");
        addIcon.textContent = "playlist_add";   
    let addListItem = document.createElement("a");
        addListItem.setAttribute("href", "#");
        addListItem.setAttribute("alt", "Lägg till kort");
        addListItem.setAttribute("title", "Lägg till kort");
        addListItem.classList.add("addList--Item");
        addListItem.setAttribute("onClick", "createKort(this)");
        list.id = "task" + mainListId;
        

        main.appendChild(list); 
        list.appendChild(editInput);
        list.appendChild(okBtn);
        list.appendChild(myH4);
        list.appendChild(delBtn);
        list.appendChild(addListItem);
        addListItem.appendChild(addIcon);
        delBtn.appendChild(delIcon);

    let editH4 = document.querySelectorAll(".main--h4");
    for (let allH4 of editH4){
        allH4.addEventListener("click", function(e){
            let clickH4 = e.target;
            let btn = e.toElement.previousSibling;
            let input = e.toElement.previousSibling.previousSibling;
            clickH4.style.visibility = "hidden";
            btn.style.visibility = "visible";
            input.style.visibility = "visible";
        });
        mainListId++;
    }
    
    
    let saveBtn = document.querySelectorAll(".save--btn");
    for (let btnS of saveBtn){
        btnS.addEventListener("click", function(e){
            let click = e.target;
            let h4 = e.toElement.nextSibling;
            let input = e.toElement.previousSibling;
        
        if (input.value === ""){
            input.classList.add("main--input__placeholder");
            input.placeholder = "Måste skriva Listnamn här.."
        }
        else{
           click.style.visibility = "hidden";
            input.style.visibility = "hidden";
            h4.style.visibility = "visible";
            h4.textContent = input.value; 
        }
        });
        mainInput.classList.remove("main--input__placeholder");
        mainInput.placeholder = "Listnamn...";
    }
}
else{
    mainInput.classList.add("main--input__placeholder");
    mainInput.placeholder = "Måste skriva Listnamn här...";
} 
mainInput.value = "";   

}

function deleteItem(current){
    current.parentNode.remove();
}

function closeModal() {
    createModal.style.display = "none";
    editModal.style.display = "none";
  }


function createKort(e) {
    activListItem = e;
    createModal.style.display = "block";
    activTask = e.parentNode.id;
    let listTitle = activListItem.parentNode.parentNode.parentNode.querySelector(".main--h4");
    let listTitleContent = document.querySelector(".createListTitle");
    listTitleContent.textContent = "I listan ➜ " + listTitle.textContent;
    clearModal(createModal);
  }

let countListCard = 1;
function saveButton(e){  
  let titleInput = document.getElementById('titleInput');
  let descriptionInput = document.getElementById('descriptionInput').value;
//   let taskList = document.querySelector("#" + activTask + "List");
  let commentUl = document.createElement("ul");
  let activListUl = document.createElement("ul");
  activListUl.setAttribute("id", countListCard + "List");
  activListUl.setAttribute("draggable", true);
  let li = document.createElement("li");
  let halfClickableElement = document.createElement("div");
  let halfClosableElement  = document.createElement("div");
  let titleSpan = document.createElement("span");
  let descriptionSpan = document.createElement("span");
  let hiddenDiv = document.createElement("div");
  let mainList = document.querySelector("#" + activTask);
if (titleInput.value === ""){
    titleInput.classList.add("main--input__placeholder");
    titleInput.placeholder = "Måste ge kortet ett namn..."
}
else{
    titleInput.classList.remove("main--input__placeholder");
    titleInput.placeholder = "Ge det här kortet ett namn ..."
  // DELETE BUTTON
  let delBtn = document.createElement("button");
  delBtn.classList.add("card--del");
  delBtn.setAttribute("onClick", "deleteList(this)");
  let delIcon = document.createElement("i");
  delIcon.classList.add("material-icons");
  delIcon.setAttribute("title", "Stäng");
  delIcon.textContent = "close";
  delBtn.appendChild(delIcon);
  
  titleSpan.textContent = titleInput.value;
  descriptionSpan.textContent = descriptionInput;
  //halfClickableElement.setAttribute("onclick", "editKort(this)");
  //titleSpan.setAttribute("onclick", "editKort(this)");


  li.id = "list" + countListCard;
  halfClickableElement.classList.add("list--card");
  titleSpan.classList.add("titleKort");
  halfClosableElement.classList.add("half-closable-element");
  descriptionSpan.classList.add("descriptionKort");
  commentUl.classList.add("commentList");
  //titleSpan.setAttribute("title", "Redigera Kort")
  //titleSpan.style.cursor = "pointer";
  hiddenDiv.style.display = "none";
let editIcon = document.createElement("i");
    editIcon.setAttribute("title", "Redigera Kort")
    editIcon.setAttribute("onclick", "editKort(this)");
    editIcon.classList.add("material-icons");
    editIcon.classList.add("editIcon-pos");
    editIcon.textContent = "edit";


  hiddenDiv.appendChild(commentUl);
  hiddenDiv.appendChild(descriptionSpan);
  halfClickableElement.appendChild(titleSpan);
  halfClickableElement.appendChild(editIcon);
  halfClickableElement.appendChild(hiddenDiv);
  li.appendChild(halfClickableElement);
  li.appendChild(halfClosableElement);
  halfClosableElement.appendChild(delBtn);
  activListUl.appendChild(li);
  mainList.appendChild(activListUl);
   closeModal();
  countListCard++;
}
  
};

function editKort(e) {
    activListItem = e.parentNode;
    console.log(activListItem);
    editModal.style.display = "block";
    activTask = activListItem.parentNode.id;
    let titleKort = activListItem.querySelector(".titleKort").textContent;
    let descriptionKort = activListItem.querySelector(".descriptionKort").textContent;
    document.querySelector("#editTitleInput").value = titleKort;
    document.querySelector("#editDescriptionInput").value = descriptionKort;
    let listTitle = activListItem.parentNode.parentNode.parentNode.querySelector(".main--h4");
    let listTitleContent = document.querySelector(".editListTitle");
    listTitleContent.textContent = "I listan ➜ " + listTitle.textContent;
  }
  function editKortModal() {
    let editTitleInput = document.querySelector("#editTitleInput");
    let editDescriptionInput = document.querySelector("#editDescriptionInput"); 
    let titelValue = activListItem.querySelector(".titleKort");
    let descriptionValue = activListItem.querySelector(".descriptionKort");
    if (editTitleInput.value === ""){
        editTitleInput.classList.add("main--input__placeholder");
        editTitleInput.placeholder = "Måste ge kortet ett namn...";
    }
    else{
        editTitleInput.classList.remove("main--input__placeholder");
        titelValue.textContent = editTitleInput.value;
        descriptionValue.textContent = editDescriptionInput.value;
        closeModal();
    }
    
  }

  function deleteList(current){
    current.parentNode.parentNode.remove();
}

function saveComment(e) {
    let myArr = [];
    let commentList = document.querySelector(".commentList");
    let li = document.createElement("li");
    let commentInput = document.getElementById('editCommentInput').value;
    li.textContent = commentInput;
    commentList.appendChild(li);
    let activUl = activListItem.querySelector(".commentList > li");
    let commentContent = document.querySelector(".commentContentUl");
    myArr.appendchild(activUl);
    for (let i = 0; i < activUl.length; i++) {
        const element = activUl[i];
        commentContent.appendchild(element);
    }
    
  }
