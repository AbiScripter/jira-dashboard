const dropzones = document.querySelectorAll(".dropzone");
const createIssueBtn = document.querySelector("#create-issue-btn");
const form = document.querySelector(".form");
const issueInput = document.querySelector("#input-issue");
const issueContainer = document.querySelector(".issues-container");
let issue;

createIssueBtn.addEventListener("click", (e) => {
  createIssueBtn.classList.add("issuebutton-hide");
  form.classList.remove("form-hide");
  issueInput.focus();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //for toggling between button and input
  createIssueBtn.classList.remove("issuebutton-hide");
  form.classList.add("form-hide");

  // creating issue
  issue = document.createElement("p");
  issue.innerText = issueInput.value;
  issue.className = "issue";
  issue.draggable = "true";

  //appending issue
  issueContainer.appendChild(issue);

  //resetting issue input
  issueInput.value = "";

  dragStart();
});

//function to attach event listeners in all issues when dragstart triggered
function dragStart() {
  document.querySelectorAll(".issue").forEach((el) => {
    el.addEventListener("dragstart", () => {
      console.log("started");
      //!setting issue to the current dragging element
      issue = el;
    });
  });
}

dropzones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", (e) => {
    zone.appendChild(issue);
  });
});
