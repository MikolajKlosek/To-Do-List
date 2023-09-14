{
   const tasks = [
   ];

   const addNewTask = (newTaskContent) => {
      tasks.push({
         content: newTaskContent,
      });

      render();
   };

   const removeTask = (taskIndex) => {
      tasks.splice(taskIndex, 1);
      render();
   };

   const toggleTaskDone = (taskIndex) => {
      tasks[taskIndex].done = !tasks[taskIndex].done;
      render();
   };

   const bindEvents = () => {
      const removeButtons = document.querySelectorAll(".js-remove");

      removeButtons.forEach((removeButton, index) => {
         removeButton.addEventListener("click", () => {
            removeTask(index);
         });
      });

      const toggledoneButtons = document.querySelectorAll(".js-done");

      toggledoneButtons.forEach((toggleDoneButton, index) => {
         toggleDoneButton.addEventListener("click", () => {
            toggleTaskDone(index);
         });
      });
   };

   const render = () => {
      let htmlString = "";

      for (const task of tasks) {
         htmlString += `
         <li type="none" class="list__items">
            <button class="js-done list__button">
                ${task.done ? "✔" : ""}
            </button>
            <span class="list__item${task.done ? " list__item--done" : ""}">
                ${task.content}
            </span> 
            <button class="js-remove list__button list__button--remove">
               🗑
            </button>
         </li>
         `;
      }

      document.querySelector(".js-tasks").innerHTML = htmlString;

      bindEvents();
   };

   const onFormSubmit = (event) => {
      event.preventDefault();

      const input = document.querySelector(".js-newTask");
      const newTaskContent = input.value.trim();

      if (newTaskContent === "") {
         return;
      }

      addNewTask(newTaskContent);
      input.value = "";
      input.focus();

   };

   const init = () => {
      render();

      const form = document.querySelector(".js-form");

      form.addEventListener("submit", onFormSubmit);
 
   };

   init();

};