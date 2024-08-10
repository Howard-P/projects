const text = document.querySelector(".text");
const task = document.querySelector(".task");
const addBtn = document.querySelector(".addBtn");

function newTask() {
  if (text.value.trim() === "") {
    return;
  }

  const newTask = document.createElement("li");
  newTask.innerHTML = `
  <input type="checkbox" class="checkbox">
  <label>${text.value}</label>
  <button class="trashCan">🗑</button>`;

  const trashCan = newTask.querySelector(".trashCan");
  const checkbox = newTask.querySelector(".checkbox");

  trashCan.addEventListener("click", function () {
    newTask.remove();
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      newTask.classList.add("completed");
    } else {
      newTask.classList.remove("completed");
    }
  });

  task.append(newTask);
  text.value = "";
}

addBtn.addEventListener("click", newTask);

text.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    newTask();
  }
});
