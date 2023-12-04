// since every container is dropzone, drop event should be attached for all the three containers
//

const draggingInfo = {
  // sourceContainer defines from where the card is dragged.
  sourceContainerId: null,
  // draggingElement => the html element which is dragged.
  draggingElement: null,
};

//setting the current id and draggingElement when dragStart triggered
function onDragStart(event) {
  draggingInfo.sourceContainerId = event.target.getAttribute("data-container");
  draggingInfo.draggingElement = event.target;
}

// Adding dragover before drop ensures the browser recognizes the drop location, making your drag-and-drop functionality effective.
//  Without it, the browser may not acknowledge the drop target.
dropzones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    let droppingContainer = e.currentTarget;
    if (droppingContainer.id === draggingInfo.sourceContainerId) {
      // the dropping container is equal to the source container from where the card is picked
      return;
    }

    // Adding event.preventDefault() in the dragover event is necessary to override the browser's default behavior,
    // which typically prohibits dropping
    e.preventDefault();
  });

  zone.addEventListener("drop", (event) => {
    const issue = draggingInfo.draggingElement;
    const currentDropZone = event.currentTarget;

    //after dropping setting the dataContainer as  the currentDrop
    issue.setAttribute("data-container", currentDropZone.id);
    // issue will be connected as a children for the container
    // issue will be disconnected automatically with the body element.
    // as No two nodes exist in the DOM tree with the same memory reference.
    currentDropZone.appendChild(issue);
  });
});
