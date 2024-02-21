document.addEventListener('DOMContentLoaded', function() {
    let submit = document.querySelector('#submit-btn')
    let newTask = document.querySelector('#tasks');

     // Add event listener to input field to enable/disable submit button
     newTask.addEventListener('input', function() {  
       // Check if input field is empty
           if (submit.disabled) {
    //         // Enable submit button
            submit.disabled = false;
            
         } 
               
         });

    // Additional validation - disable submit on form submission if input is empty
    document.getElementById('task-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const taskValue=newTask.value.trim()
        
        if (taskValue === '') {
            
           alert('Please enter a task before submitting.');
        }
        else {
            // capitalizing first letter
            const capitalizedTask = taskValue.charAt(0).toUpperCase() + taskValue.slice(1);
            // create new list item
            const listItem= document.createElement('li')
            listItem.textContent=capitalizedTask
            //a add new item to the list
            taskList.appendChild(listItem);
            // clear input field
            newTask.value=""

            submit.disabled=true;

        }
       
    });

    return false;

   
});