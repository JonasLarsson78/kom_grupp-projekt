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
let count = 0;

function makeList(){
    let list = document.createElement("div");
    list.classList.add("main--list");
    list.style.backgroundColor = color;
    let myH4 = document.createElement("h4");
    myH4.classList.add("main--h4");
    myH4.textContent = mainInput.value;
    let editInput = document.createElement("input");
    editInput.setAttribute("type", "text");
    editInput.classList.add("input--edit");
    editInput.value = myH4.textContent;
    editInput.style.visibility ="hidden";
    let okBtn = document.createElement("button");
    okBtn.classList.add("save--btn");
    okBtn.textContent = "Save";
    okBtn.style.visibility ="hidden";
    let delBtn = document.createElement("button");
    delBtn.classList.add("list--del");
    delBtn.setAttribute("onClick", "deleteItem(this)");
    let delIcon = document.createElement("i");
    delIcon.classList.add("material-icons");
    delIcon.textContent = "highlight_off";
    let addListItem = document.createElement("a");
    addListItem.setAttribute("href", "#");
    addListItem.textContent = "+ Lägg till lista";
    addListItem.classList.add("addList--Item");
    
    main.appendChild(list); 
    list.appendChild(editInput);
    list.appendChild(okBtn);
    list.appendChild(myH4);
    list.appendChild(delBtn);
    list.appendChild(addListItem);
    delBtn.appendChild(delIcon);
    count++;
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

function deleteItem(current){
    current.parentNode.remove();
}
