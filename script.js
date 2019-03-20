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
let mainListId = 1;
let countListCard = 1;


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

for (let radio of radioColor) {
    radio.addEventListener("input", function (e) {
        let click = e.target;
        color = click.id;
    });
}
let delebutton = document.querySelector(".clear");
    delebutton.addEventListener("click", function () {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
})
/* Adds a list to the color you choose */
function makeList() {
    if (mainInput.value) {
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
            editInput.style.visibility = "hidden";
        let okBtn = document.createElement("button");
            okBtn.classList.add("save--btn");
            okBtn.textContent = "Spara";
            okBtn.style.visibility = "hidden";
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
        for (let allH4 of editH4) {
            allH4.addEventListener("click", function (e) {
                let clickH4 = e.target;
                let btn = e.toElement.previousSibling;
                let input = e.toElement.previousSibling.previousSibling;
                clickH4.style.visibility = "hidden";
                btn.style.visibility = "visible";
                input.style.visibility = "visible";
            });
            mainListId++;
            // dragList ();
            drag();     // kör function för att spara de divar som är droppable.


        }

        let saveBtn = document.querySelectorAll(".save--btn");
        for (let btnS of saveBtn) {
            btnS.addEventListener("click", function (e) {
                let click = e.target;
                let h4 = e.toElement.nextSibling;
                let input = e.toElement.previousSibling;

                if (input.value === "") {
                    input.classList.add("main--input__placeholder");
                    input.placeholder = "Måste skriva Listnamn här.."
                }
                else {
                    click.style.visibility = "hidden";
                    input.style.visibility = "hidden";
                    h4.style.visibility = "visible";
                    h4.textContent = input.value;
                }
            });
            mainInput.classList.remove("main--input__placeholder");
            mainInput.placeholder = "Listnamn...";
        }
        drag(); // kör function för att spara de divar som är droppable.
    }
    else {
        mainInput.classList.add("main--input__placeholder");
        mainInput.placeholder = "Måste skriva Listnamn här...";
    }
    mainInput.value = "";


}

function deleteItem(current) {
    current.parentNode.remove();
}

function closeModal() {
    createModal.style.display = "none";
    editModal.style.display = "none";
}

////////////////////////////////
////// CREATEA KORT ***START//////
////////////////////////////////
function createKort(e) {
    activListItem = e;
    createModal.style.display = "block";
    activTask = e.parentNode.id;
    let listTitle = activListItem.parentNode.parentNode.parentNode.querySelector(".main--h4");
    let listTitleContent = document.querySelector(".createListTitle");
        listTitleContent.textContent = "I listan ➜ " + listTitle.textContent;
        clearModal(createModal);
}
////////////////////////////////
////// CREATE KORT ***END//////
////////////////////////////////


////////////////////////////////////
////// SAVE KORT BUTTON  ***START//////
////////////////////////////////////
function saveButton(e) {
    let titleInput = document.getElementById('titleInput');
    let descriptionInput = document.getElementById('descriptionInput').value;
    let commentUl = document.createElement("ul");
    let activListUl = document.createElement("ul");
        activListUl.setAttribute("id", countListCard + "List");
        activListUl.setAttribute("draggable", true);
    let li = document.createElement("li");
    let halfClickableElement = document.createElement("div");
    let halfClosableElement = document.createElement("div");
    let titleSpan = document.createElement("span");
    let descriptionSpan = document.createElement("span");
    let hiddenDiv = document.createElement("div");
    let mainList = document.querySelector("#" + activTask);
    if (titleInput.value === "") {
        titleInput.classList.add("main--input__placeholder");
        titleInput.placeholder = "Måste ge kortet ett namn..."
    }
    else {
        titleInput.classList.remove("main--input__placeholder");
        titleInput.placeholder = "Ge det här kortet ett namn ..."
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
            li.id = "list" + countListCard;
            halfClickableElement.classList.add("list--card");
            titleSpan.classList.add("titleKort");
            halfClosableElement.classList.add("half-closable-element");
            descriptionSpan.classList.add("descriptionKort");
            commentUl.classList.add("commentList");
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
            //   dragList()
            drag()  // kör function för att spara de ul-taggar som är draggable.

    }
};
////////////////////////////////////
////// SAVE KORT BUTTON ***END//////
////////////////////////////////////


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

    let commentList = activListItem.querySelector(".commentList");
    if (commentList !== null) {
        let itm = commentList;
        let cln = itm.cloneNode(true);
        let commentListDiv = document.querySelector(".commentListDiv");
            commentListDiv.innerHTML = "";
            commentListDiv.appendChild(cln);
    }
}

function editKortModal() {
    let editTitleInput = document.querySelector("#editTitleInput");
    let editDescriptionInput = document.querySelector("#editDescriptionInput");
    let titelValue = activListItem.querySelector(".titleKort");
    let descriptionValue = activListItem.querySelector(".descriptionKort");
    if (editTitleInput.value === "") {
        editTitleInput.classList.add("main--input__placeholder");
        editTitleInput.placeholder = "Måste ge kortet ett namn...";
    }
    else {
        editTitleInput.classList.remove("main--input__placeholder");
        titelValue.textContent = editTitleInput.value;
        descriptionValue.textContent = editDescriptionInput.value;
        closeModal();
    }

}


// SPARA KOMMENTAR FUNCTION ***START
let countCommentListId = 1;
function saveComment(e) {


    //GET COMMENT DATE ***START
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentTime = new Date()
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    let commentDate = currentTime.getDate() + " " + months[currentTime.getMonth()] + " " + currentTime.getFullYear() + " " + currentTime.getHours() + ":" + currentMinutes + ":" + currentSeconds;
    //GET COMMENT DATE ***END


    let commentDescription = document.createElement("div");
        commentDescription.classList.add("commentDescriptionSpan");
    let commentList = activListItem.querySelector(".commentList");
    let commentDateSpan = document.createElement("span");
        commentDateSpan.classList.add("commentDateSpan");
    let commentUserSpan = document.createElement("span");
        commentUserSpan.classList.add("commentUserSpan");
        commentUserSpan.textContent = "Jonas&Ibrahim&Jonas ";
    let li = document.createElement("li");
        li.setAttribute("id", countCommentListId + "idComment");
    let commentInput = document.getElementById('editCommentInput').value;
    let commentInputSpan = document.createElement("span");
        commentInputSpan.classList.add("commentInputSpan");
        commentInputSpan.textContent = commentInput;
        commentDateSpan.textContent = commentDate;
    let commentButtons = document.createElement("div");
    let commentDelete = document.createElement("button");
        commentDelete.classList.add("comment--del");
        commentDelete.setAttribute("onClick", "deleteComment(this)");
        commentDelete.textContent = "Radera";
    let editCommentInput = document.createElement("textarea");
        editCommentInput.setAttribute("type", "text");
        editCommentInput.setAttribute("maxlength", "15");
        editCommentInput.classList.add("input--comment-edit");
        editCommentInput.value = commentInputSpan.textContent;
        editCommentInput.style.visibility = "hidden";
    let editComment = document.createElement("button");
        editComment.classList.add("edit--comment");
        editComment.textContent = "Redigera";
    let editCommentBtn = document.createElement("button");
        editCommentBtn.classList.add("save--edit--btn");
        editCommentBtn.textContent = "Spara";
        editCommentBtn.style.visibility = "hidden";
    let commentIconList = document.createElement("i");
        commentIconList.classList.add("far");
        commentIconList.classList.add("fa-comments");
        commentIconList.classList.add("listCommentIcon");
        // APPENDCHILD
        commentButtons.appendChild(editComment);
        commentButtons.appendChild(commentDelete);
        li.appendChild(commentButtons);
        li.appendChild(editCommentInput);
        li.appendChild(editCommentBtn);
        commentDescription.appendChild(commentUserSpan);
        commentDescription.appendChild(commentDateSpan);
        li.appendChild(commentInputSpan);
        li.appendChild(commentDescription);
        commentList.appendChild(li);

    //CLONE COMMENT LIST
    let itm = commentList;
    let cln = itm.cloneNode(true);
    let commentListDiv = document.querySelector(".commentListDiv");
        commentListDiv.innerHTML = "";
        commentListDiv.appendChild(cln);
        document.getElementById('editCommentInput').value = "";
        countCommentListId++;

    // RADIGERA KOMMENTAR FUNCTION ***START
    let inputEdit = document.querySelectorAll(".edit--comment");
    for (let editInputs of inputEdit) {
        editInputs.addEventListener("click", function (e) {
            let clickH4 = e.target.parentNode;
            let textarea = e.target.parentNode.nextSibling;
            let btn = e.target.parentNode.nextSibling.nextSibling;
            let input = e.target.parentNode.nextSibling.nextSibling.nextSibling;
                clickH4.style.visibility = "hidden";
                input.style.visibility = "hidden";
                textarea.style.visibility = "visible";
                btn.style.visibility = "visible";
        });
    }
    let saveEditBtn = document.querySelectorAll(".save--edit--btn");
    for (let btnS of saveEditBtn) {
        btnS.addEventListener("click", function (e) {
            let clickH4 = e.target;
            let textarea = e.target.previousSibling;
            let btn = e.target.previousSibling.previousSibling;
            let input = e.target.nextSibling;
                clickH4.style.visibility = "hidden";
                input.style.visibility = "visible";
                textarea.style.visibility = "hidden";
                btn.style.visibility = "visible";
                input.textContent = textarea.value;
        });
    }
    // RADIGERA KOMMENTAR FUNCTION  ***END
}
// SPARA KOMMENTAR FUNCTION ***END
// DELETE BUTTONS ***START

function deleteList(current) {
    current.parentNode.parentNode.remove();
}

function deleteComment(e, current) {
    e.parentNode.parentNode.remove();
    let id = e.parentNode.parentNode.id;
        document.getElementById(id).remove();
}
// DELETE BUTTONS ***END




// Drag and Drop //
function drag() {

    let draggable = document.querySelectorAll('[draggable]')
    let targets = document.querySelectorAll('[data-drop-target]');

    for (var i = 0; i < draggable.length; i++) {
        draggable[i].addEventListener("dragstart", dragStart);
        draggable[i].addEventListener("dragend", dragEnd);
    }
    for (var i = 0; i < targets.length; i++) {
        targets[i].addEventListener("dragover", dragOver);
        targets[i].addEventListener("dragenter", dragEnter);
        targets[i].addEventListener("dragleave", dragLeave);
        targets[i].addEventListener("drop", dragDrop);
    }

    function dragStart(e) {
        e.dataTransfer.setData("text", this.id);
        setTimeout(() => (this.style.display = "none"), 0);
        this.style.backgroundColor = "white";
    }

    function dragEnd() {
        this.style.display = ""
        this.style.transform = "";
    }

    function dragOver(e) {
        e.preventDefault();
        this.style.paddingBottom = "137px"
        this.style.opacity = ("0.7");
        this.classList.add("drag-drop-transform");

    }
    function dragEnter(e) {
        e.preventDefault();

    }
    function dragLeave() {
        this.style.opacity = ("");
        this.style.paddingBottom = "";
        this.classList.remove("drag-drop-transform");
    }

    function dragDrop(e) {
        e.preventDefault();
        this.classList.remove("drag-drop-transform");
        this.style.opacity = ("");
        this.style.paddingBottom = "";
        let myItem = e.dataTransfer.getData("text");
        let draggedEl = document.getElementById(myItem);
            this.appendChild(draggedEl);
    }
}
