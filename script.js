// Function to create a new note
function createNote() {
    const noteHeading = document.getElementById("note-heading").value;
    const noteContent = document.getElementById("note-content").value;

    if (noteHeading.trim() === "" || noteContent.trim() === "") {
        alert("Please provide a heading and content for the note.");
        return;
    }

    const savedNotesContainer = document.getElementById("saved-notes-container");

    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    const headingDiv = document.createElement("div");
    headingDiv.classList.add("note-heading");
    headingDiv.textContent = noteHeading;
    headingDiv.addEventListener("click", () => toggleNoteContent(noteDiv));

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("note-content");
    contentDiv.textContent = noteContent;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editNoteContent(contentDiv));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteNoteContent(noteDiv));

    noteDiv.appendChild(headingDiv);
    noteDiv.appendChild(contentDiv);
    noteDiv.appendChild(editButton);
    noteDiv.appendChild(deleteButton);

    savedNotesContainer.appendChild(noteDiv);

    // Clear input fields
    document.getElementById("note-heading").value = "";
    document.getElementById("note-content").value = "";
}

// Function to toggle note content display
function toggleNoteContent(noteDiv) {
    const contentDiv = noteDiv.querySelector(".note-content");
    contentDiv.classList.toggle("show-full-content");
}

// Function to edit note content
function editNoteContent(contentDiv) {
    const newContent = prompt("Edit Note Content:", contentDiv.textContent);

    if (newContent !== null) {
        contentDiv.textContent = newContent;
    }
}

// Function to delete a note
function deleteNoteContent(noteDiv) {
    if (confirm("Are you sure you want to delete this note?")) {
        noteDiv.remove();
    }
}

// Event listener for the "Add Note" button
document.getElementById("add-note-button").addEventListener("click", createNote);