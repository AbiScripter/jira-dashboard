const dropzones = document.querySelectorAll(".dropzone");
const createIssueBtn = document.querySelector("#create-issue-btn");
const form = document.querySelector(".form");
const issueInput = document.querySelector("#input-issue");
const issueContainer = document.querySelector(".issues-container");
let issue;

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

createIssueBtn.addEventListener("click", (e) => {
  //for toggling between button and input
  createIssueBtn.classList.add("issuebutton-hide");
  form.classList.remove("form-hide");

  //automatically focus on input after button clicked
  issueInput.focus();
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

// Adding dragover before drop ensures the browser recognizes the drop location, making your drag-and-drop functionality effective.
//  Without it, the browser may not acknowledge the drop target.

dropzones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    // Adding event.preventDefault() in the dragover event is necessary to override the browser's default behavior,
    // which typically prohibits dropping
    e.preventDefault();
  });

  zone.addEventListener("drop", (e) => {
    // issue will be connected as a children for the container
    // issue will be disconnected automatically with the body element.
    // as No two nodes exist in the DOM tree with the same memory reference.
    zone.appendChild(issue);
  });
});
