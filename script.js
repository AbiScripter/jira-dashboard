const dropzones = document.querySelectorAll(".dropzone");
const createIssueBtn = document.querySelector("#create-issue-btn");
const form = document.querySelector(".form");
const issueInput = document.querySelector("#input-issue");
const issueContainer = document.querySelector(".issues-container");
const todoContainer = document.querySelector(".todo-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //for toggling between button and input
  createIssueBtn.classList.remove("issuebutton-hide");
  form.classList.add("form-hide");

  // creating issue
  const issue = document.createElement("p");
  issue.innerText = issueInput.value;
  issue.className = "issue";
  issue.draggable = "true";

  //inital dropzone always be todo so setting it as datacontainer
  issue.setAttribute("data-container", todoContainer.id);
  issue.addEventListener("dragstart", onDragStart);
  //appending issue
  issueContainer.appendChild(issue);

  //resetting issue input
  issueInput.value = "";
});

createIssueBtn.addEventListener("click", (e) => {
  //for toggling between button and input
  createIssueBtn.classList.add("issuebutton-hide");
  form.classList.remove("form-hide");

  //automatically focus on input after button clicked
  issueInput.focus();
});
