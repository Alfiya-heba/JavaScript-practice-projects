const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');

function addTask(){
    //Checking if the input box is empty//
    if(inputBox.value===''){
        alert("Please Enter Something!!!")
    }
    else{
        //creating the element li//
        let li=document.createElement("li");
        // setting the task to input value
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);// add the task to list container
        let span=document.createElement("span");// creating span to delete element
        span.innerHTML="\u00d7"; //code for x symbol//
        li.appendChild(span);//apending the delete button to the task
    }
    inputBox.value="";// clearing the input text from the box
    saveData();// saving the updated task to local storage
}

listContainer.addEventListener('click',function(e){
    // If a task (<li>) is clicked, toggle the "checked" class for strikethrough effect
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
     // If the delete button (<span>) is clicked, remove the task
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();// Remove the task (<li>) from the list
        saveData();
    }
},false);


// Function to save the list data to localStorage
function saveData(){
    // Save the current list's HTML content to a key "data" in localStorage
    localStorage.setItem("data",listContainer.innerHTML);
}

function displayTasks(){
    listContainer.innerHTML=localStorage.getItem("data");
}
displayTasks();