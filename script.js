let inputBox = document.getElementById("inp");
let addBtn = document.getElementById("btn");
let list = document.getElementById("list");

function addItem() {
    let inputValue = inputBox.value;
    

    let li = document.createElement("li");
    li.classList.add("list-item");

    let span = document.createElement("span");
    span.textContent = inputValue;
    li.appendChild(span);

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {

        let editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = span.textContent;
        li.replaceChild(editInput, span);

        editBtn.style.display = "none";
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("save-btn");
        saveBtn.addEventListener("click", () => {
            span.textContent = editInput.value;
            li.replaceChild(span, editInput);
            li.removeChild(saveBtn);
            editBtn.style.display = "";
        });
        li.appendChild(saveBtn);
    });
    li.appendChild(editBtn);

    
    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("del-btn");
    delBtn.addEventListener("click", () => {
        list.removeChild(li);
    });
    li.appendChild(delBtn);

    list.appendChild(li);
    inputBox.value = "";
}

addBtn.addEventListener("click", addItem);
