let main = document.querySelector(".main--makeList");
let mainInput = document.querySelector(".main--input");
let addBtn = document.querySelector(".main--btn");

let color = "green";
let radioColor = document.querySelectorAll(".main--radio");
for (let radio of radioColor){
radio.addEventListener("input", function(e){
    let click = e.target;
    color = click.id;
});
}



function makeList(){
    let list = document.createElement("div");
    list.classList.add("main--list");
    list.style.backgroundColor = color;
    let myH4 = document.createElement("h4");
    myH4.classList.add("main--p");
    myH4.textContent = mainInput.value;
    main.appendChild(list);
    list.appendChild(myH4);

}
