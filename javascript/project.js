//SLECTORES
var btnUser = document.querySelector(".btn-user");
var inputUser = document.querySelector(".input-user");
var myList = document.querySelector(".my-list");
var todoSelect = document.querySelector(".select");
//EVENTLISTENER
btnUser.addEventListener("click", todoList);
myList.addEventListener("click", deleteCheck);
todoSelect.addEventListener('click',filterOption);
//FUNCTION
function todoList(event){
   event.preventDefault();

// new div
var newDiv = document.createElement("div");
newDiv.classList.add("todo-div")

//ADDING NEW LI

var newList = document.createElement("li");
newList.innerText = inputUser.value
newList.classList.add("new-list");

//APPEND LI TO DIV
newDiv.appendChild(newList);

//adding complete button 
var completeButton = document.createElement("button");
completeButton.innerHTML = '<i class="fas fa-check"></i>';
completeButton.classList.add("complete-btn");
newDiv.appendChild(completeButton);

//ADDING A TRASH BOTTON

var trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
newDiv.appendChild(trashButton);

// APPENDING ALL TI UL 

myList.appendChild(newDiv)
inputUser.value = "";
}

function deleteCheck(e){
   const item = e.target;
   if(item.classList[0] === ("trash-btn")){
      var todo = item.parentElement;
   //animation
      todo.classList.add("fall");
      todo.addEventListener('transitionend', function(){
         todo.remove();
      });
   }

   if (item.classList[0] === ('complete-btn')){
      var todo = item.parentElement;
      todo.classList.toggle('completed');
   }
}

function filterOption(e){
   var todos = myList.childNodes;
   todos.forEach(function(todo){
      switch(e.target.value){
         case "all":
            todo.style.display = "flex";
            break;
         case "completed":
            if (todo.classList.contains("completed")){
               todo.style.display = 'flex';
            }else{
               todo.style.display = "none";
            }
            break;
         case "uncompleted":
            if(!todo.classList.contains("completed")){
               todo.style.display = "flex";
            }else{
               todo.style.display = "none";
            }
            break;
      }
   })
}