let isEditing = false;
let elementToEdit = null;
document.querySelector(".grocery-form").addEventListener("submit", function (event){
    event.preventDefault();
    if(isEditing) editItem();
    else addtolist(event);
})
document.querySelector(".clear-btn").addEventListener("click", function (event){
    clearList(event);
})
document.querySelector(".grocery-container").addEventListener("click", function(event) {
    if (event.target.classList.contains('edit-btn') || event.target.closest('.edit-btn')) {
        startEditItem(event.target);
    }
    else if (event.target.classList.contains('delete-btn') || event.target.closest('.delete-btn')) {
        deleteItem(event.target);
    }
});
function showAlert(message, type) {
    const alertBox = document.querySelector('.alert');
    alertBox.textContent = message;
    alertBox.classList.add(`alert-${type}`);
    alertBox.style.display = 'grid';
    setTimeout(() => {
        alertBox.style.display = 'none';
        alertBox.classList.remove(`alert-${type}`);
    }, 2000);
}
function addtolist()
{
    const input = document.getElementById("grocery").value;
    if(input) {
        const grocerylist = document.querySelector('.grocery-list');
        grocerylist.innerHTML += `<p class='title'>${input}</p>
            <div class='btn-container'>
            <button type='button' class='edit-btn'>
            <i class='fas fa-edit'></i>
            </button>
            <button type='button' class='delete-btn'>
            <i class='fas fa-trash'></i>
            </button>
            </div>`;
        localStorage.setItem("groceryList", grocerylist.innerHTML);
        document.getElementById("grocery").value = "";
        showAlert("Item Added To The List", "success");
    }
}
function startEditItem(btn)
{
    const itemdiv = btn.closest(".btn-container").previousElementSibling;
    document.querySelector(".submit-btn").textContent = "Редагувати";
    document.getElementById("grocery").value = itemdiv.textContent;
    elementToEdit = itemdiv;
    isEditing = true;
}
function editItem()
{
    const input = document.getElementById("grocery").value;
    if(input&&elementToEdit)
    {
        elementToEdit.textContent = input;
        document.querySelector(".submit-btn").textContent = "Додати";
        document.getElementById("grocery").value = "";
        isEditing=false;
        elementToEdit = null;
        localStorage.setItem("groceryList", document.querySelector('.grocery-list').innerHTML);
    }
}
function deleteItem(btn)
{
    const title = btn.closest(".btn-container").previousElementSibling;
    const container = btn.closest(".btn-container");
    if(isEditing&&elementToEdit===title)
    {
        isEditing = false;
        document.querySelector(".submit-btn").textContent = "Додати";
        document.getElementById("grocery").value = "";
        elementToEdit = null;
    }
    title.remove();
    container.remove();
    localStorage.setItem("groceryList", document.querySelector('.grocery-list').innerHTML);
    showAlert("Item Removed", "danger");
}
function clearList()
{
    localStorage.clear();
    document.querySelector('.grocery-list').innerHTML = "";
}
window.onload = ()=>{document.querySelector('.grocery-list').innerHTML = localStorage.getItem("groceryList")};