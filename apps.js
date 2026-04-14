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


const inputValue = document.getElementById("user-input");
const number = document.querySelectorAll(".numbers").forEach(function(item) {
    item.addEventListener("click", function(e) {
        if (inputValue.innerText == "NaN") {
            inputValue.innerText = "";
        }
        if (inputValue.innerText == "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    })
})
const calculate = document.querySelectorAll(".operations").forEach(function(item) {
    item.addEventListener("click", function(e) {
        var lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length - 1);

        if (!isNaN(lastValue) && e.target.innerHTML == "=") {
            inputValue.innerText = eval(inputValue.innerText);
        } else if (e.target.innerHTML === "AC") {
            inputValue.innerText = 0;
        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
            if (inputValue.innerText.length == 0) {
                inputValue.innerText = 0;
            }
        } else if (e.target.innerHTML == "×") {
            if (!isNaN(lastValue)) {
                inputValue.innerText += "*";
            }
        } else if (e.target.innerHTML == "÷") {
            if (!isNaN(lastValue)) {
                inputValue.innerText += "/";
            }
        } else if (e.target.innerHTML == "–") {
            if (!isNaN(lastValue)) {
                inputValue.innerText += "-";
            }
        } else {
            if (!isNaN(lastValue)) {
                inputValue.innerText += e.target.innerHTML;
            }
        }
    })
})
