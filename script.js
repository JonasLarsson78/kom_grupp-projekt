let main = document.querySelector(".main--makeList");
let mainInput = document.querySelector(".main--input");
let addBtn = document.querySelector(".main--btn");

let color = "lightgreen";

let radioColor = document.querySelectorAll(".main--radio");
for (let radio of radioColor){
    radio.addEventListener("input", function(e){
    let click = e.target;
    color = click.id;
});
}
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
        addListItem.setAttribute("onClick", "makeCard(this)");
        addListItem.classList.add("addList--Item");
        
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
    }
    
    
    let saveBtn = document.querySelectorAll(".save--btn");
    for (let btnS of saveBtn){
        btnS.addEventListener("click", function(e){
            let click = e.target;
            let h4 = e.toElement.nextSibling;
            let input = e.toElement.previousSibling;

            click.style.visibility = "hidden";
            input.style.visibility = "hidden";
            h4.style.visibility = "visible";
            h4.textContent = input.value;
        });
    }
}
else{
    mainInput.classList.add("main--input__placeholder");
    mainInput.placeholder = "Måste skriva Listnamn här...";
}    
}

function deleteItem(current){
    current.parentNode.remove();
}
let countListCard = 1;
function makeCard(current){
    let x = document.createElement("div");
    x.classList.add("list--card");
    x.id = "list" + countListCard;
    x.setAttribute("draggable", "true");
    let delBtn = document.createElement("button");
        delBtn.classList.add("card--del");
        delBtn.setAttribute("onClick", "deleteItem(this)");
    let delIcon = document.createElement("i");
        delIcon.classList.add("material-icons");
        delIcon.setAttribute("title", "Stäng");
        delIcon.textContent = "close";

current.parentNode.appendChild(x);
x.appendChild(delBtn);
delBtn.appendChild(delIcon);
countListCard++;
}
