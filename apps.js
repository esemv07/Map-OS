var notesContent = JSON.parse(localStorage.getItem("notesContent"));

if (notesContent == null) {
    notesContent = [
        {
            title: "Top Secret Notes",
            date: new Date().toLocaleDateString(),
            content: `
            <p class="notesedit" contenteditable="True" style="overflow-y: scroll;">
                <span contenteditable="True" style="overflow-y: scroll; appearance: none;">Welcome to <strong>Text Territory</strong></span>
            </p>
            `
        },
    ]
    localStorage.setItem("notesContent", JSON.stringify(notesContent));
}

var currentNote = 0;

function setNotesContent(index) {
    var content = document.querySelector("#notesContent")
    var title = document.querySelector("#notesTitle")
    content.innerHTML = notesContent[index].content
    title.innerHTML = notesContent[index].title
}

setNotesContent(0)

function addToSideBar(index) {
    var sidebar = document.querySelector("#sidebar");
    var note = notesContent[index];
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <p style="margin: 0px;">
        ${note.title}
        </p>
        <p style="font-size: 12px; margin: 0px;">
        ${note.date}
        </p>
        <hr>
    `;
    newDiv.addEventListener("click", function() {
        setNotesContent(index);
        currentNote = index;
    });
    sidebar.appendChild(newDiv);
}

function saveNote() {
    var newContent = document.querySelector("#notesContent").innerHTML
    var newTitle = document.querySelector("#notesTitle").innerHTML
    notesContent[currentNote].content = newContent
    notesContent[currentNote].title = newTitle
    var sidebar = document.querySelector("#sidebar");
    sidebar.replaceChildren()
    for (let i = 0; i < notesContent.length; i++) {
        addToSideBar(i)
    }
    localStorage.setItem("notesContent", JSON.stringify(notesContent));
}

function cancelNote() {
    document.querySelector("#notesContent").innerHTML = notesContent[currentNote].content
    document.querySelector("#notesTitle").innerHTML = notesContent[currentNote].title
}

function newNote() {
    notesContent.push(
        {
            title: "New Note",
            date: new Date().toLocaleDateString(),
            content: `
            <p class="notesedit" contenteditable="True" style="overflow-y: scroll;">
                <span contenteditable="True" style="overflow-y: scroll; appearance: none;">Add some notes</span>
            </p>
            `
        }
    )
    currentNote = notesContent.length - 1;
    addToSideBar(currentNote);
    setNotesContent(currentNote);
    localStorage.setItem("notesContent", JSON.stringify(notesContent));
}

function deleteNote() {
    if (notesContent.length > 1) {
        notesContent.splice(currentNote, 1)
        var sidebar = document.querySelector("#sidebar");
        sidebar.replaceChildren()
        for (let i = 0; i < notesContent.length; i++) {
            addToSideBar(i)
        }
        setNotesContent(0);
        localStorage.setItem("notesContent", JSON.stringify(notesContent));
    }
}

for (let i = 0; i < notesContent.length; i++) {
    addToSideBar(i)
}