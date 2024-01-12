const inputTag = document.querySelector(".header input")
const footerTag = document.querySelector(".footer")
const addButton = document.querySelector(".add")
const deleteButton = document.querySelector(".delete")

inputTag.addEventListener("keypress", handleInput)

addButton.addEventListener("click", function() {
    let inputText = inputTag.value.trim(); // Get the trimmed value of the input
    if (inputText) { // Check if the input is not empty
        createTodo(inputText);
        inputTag.value = ""; // Clear the input field after adding the todo
    }
});

function createTodo(inputText) {
    let footerItem = document.createElement("div")
    footerItem.classList.add('footer-item')

    let footerItemPTag = document.createElement('p')
    footerItemPTag.innerText = inputText
    footerItem.appendChild(footerItemPTag)

    let footerItemButtonTag = document.createElement('button')
    footerItemButtonTag.addEventListener("click", function(){
        this.parentElement.remove()
    })
    footerItemButtonTag.innerText = "Delete"
    footerItemButtonTag.classList.add('delete')
    footerItem.appendChild(footerItemButtonTag)

    footerTag.appendChild(footerItem)
}

function handleInput(event) {

    let inputText = null
    if (event.key == "Enter") {
        inputText = event.target.value
        createTodo(inputText)
        inputTag.value = ""
    }
   
}


