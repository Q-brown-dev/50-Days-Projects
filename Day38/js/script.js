let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );
}

function renderNotes() {

    const notesContainer = document.getElementById("notes");

    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {

        const div = document.createElement("div");

        div.classList.add("note");

        div.innerHTML = `
<p>${note}</p>
<button
class="delete"
onclick="deleteNote(${index})">
Delete
</button>
`;

        notesContainer.appendChild(div);

    });

}

function addNote() {

    const noteText =
        document.getElementById("noteText");

    if (noteText.value.trim() === "") {
        alert("Please enter a note.");
        return;
    }

    notes.push(noteText.value);

    saveNotes();
    renderNotes();

    noteText.value = "";

}

function deleteNote(index) {

    notes.splice(index, 1);

    saveNotes();
    renderNotes();

}

renderNotes();
