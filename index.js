document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");








  let submitNewTask = document.getElementById("newTaskSubmit");
  submitNewTask.addEventListener('click', function() {
    let inputString = '';
    inputString = document.getElementById('newTask').value;
    let newTaskItem = document.createElement('li');
    let deleteButton = document.createElement("button");
    let newTaskText = document.createElement('label')

    deleteButton.innerHTML = "Delete"
    deleteButton.style.textAlign = "center"
    deleteButton.style.marginLeft = "5px"
    deleteButton.style.width = "35px"
    deleteButton.style.fontSize = "7px"
    deleteButton.onclick = function() {
      newTaskItem.remove()
    }

    newTaskText.appendChild(document.createTextNode(inputString));

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    newTaskItem.appendChild(checkbox);
    newTaskItem.appendChild(newTaskText);
    newTaskItem.appendChild(deleteButton);




    document.querySelector('#taskList ol').appendChild(newTaskItem)
    checkbox.addEventListener('change', function(){
      if(this.checked){
        newTaskText.classList.add("checked")

      } else {
        newTaskText.classList.remove("checked")
      }
    })


  },)



});