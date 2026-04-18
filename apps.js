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


var toDoTasks = JSON.parse(localStorage.getItem("toDoTasks"));
var currentTask = 0;

if (toDoTasks == null) {
    toDoTasks = [
        {
            title: "Check out @esemv07 on GitHub",
            date: new Date().toLocaleDateString(),
            completed: "false"
        },
    ]
    localStorage.setItem("toDoTasks", JSON.stringify(toDoTasks));
}

function addToTasksList(index) {
    var tasksList = document.querySelector("#todolist");
    var task = toDoTasks[index];
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between;">
            <div style="display: block;">
                <input type="checkbox" id="task${index}" class="todocheckbox" name="task${index}" style="cursor: pointer;">
                <label id="text${index}" class="todolabel" contentEditable="True" style="cursor: text;">${task.title}</label>
                <p>${task.date}</p>
            </div>
            <img src="bin.png" width="32px" height="32px" style="border-radius: 32px; border: 1px solid red; padding: 4px; margin-right: 10px; cursor: pointer;" onclick="deleteTask(${index})">
        </div>
        <hr>
    `;
    tasksList.appendChild(newDiv);
    checkBox = document.querySelector(`#task${index}`);
    checkBox.addEventListener("change", (event) => {
        if (event.target.checked) {
            task.completed = "true"
        } else {
            task.completed = "false"
        }
        currentTask = index;
    });
    taskText = document.querySelector(`#text${index}`)
    taskText.addEventListener("blur", function() {
        saveTask(index)
    });
}

function saveTask(index) {
    var newTitle = document.querySelector(`#text${index}`).innerText
    toDoTasks[index].title = newTitle
    localStorage.setItem("toDoTasks", JSON.stringify(toDoTasks));
}

function newTask() {
    toDoTasks.push(
        {
            title: "New Task",
            date: new Date().toLocaleDateString(),
            completed: "false"
        }
    )
    currentTask = toDoTasks.length - 1;
    addToTasksList(currentTask);
    localStorage.setItem("toDoTasks", JSON.stringify(toDoTasks));
}

for (let i = 0; i < toDoTasks.length; i++) {
    addToTasksList(i)
}

function deleteTask(index) {
    if (toDoTasks.length > 1) {
        toDoTasks.splice(index, 1)
        var tasksList = document.querySelector("#todolist");
        tasksList.replaceChildren()
        for (let i = 0; i < toDoTasks.length; i++) {
            addToTasksList(i)
        }
        localStorage.setItem("toDoTasks", JSON.stringify(toDoTasks));
    }
}


const folders = [
    {
        name: "home",
        content: `
        <div style="text-align: center; padding: 16px; cursor: pointer;" onclick="enterFolder('pictures')">
            <img src="folder.png" style="width: 64px; height: 64px; border-radius: 16px;">
            <p style="margin: 0px; color: black;">pictures</p>
        </div>
        <div style="text-align: center; padding: 16px; cursor: pointer;" onclick="enterFolder('documents')">
            <img src="folder.png" style="width: 64px; height: 64px; border-radius: 16px;">
            <p style="margin: 0px; color: black;">documents</p>
        </div>
        <div style="text-align: center; padding: 16px; cursor: pointer;" onclick="enterFolder('apps')">
            <img src="folder.png" style="width: 64px; height: 64px; border-radius: 16px;">
            <p style="margin: 0px; color: black;">apps</p>
        </div>
        `
    },
    {
        name: "pictures",
        content: `
        <div style="text-align: center; padding: 16px; cursor: pointer;" onclick="openImage('pfp.jpg')">
            <img src="pfp.jpg" style="width: 64px; height: 64px;">
            <p style="margin: 0px; color: black;">pfp.jpg</p>
        </div>
        <div style="text-align: center; padding: 16px; cursor: pointer;" onclick="openImage('hc-logo.png')">
            <img src="hc-logo.png" style="width: 64px; height: 64px; border-radius: 16px;">
            <p style="margin: 0px; color: black;">hc-logo.png</p>
        </div>
        `
    },
    {
        name: "apps",
        content: `
        <div style="text-align: center; padding: 16px; width: fit-content" onclick="notesScreenOpen2()">
            <img src="notes.ico" style="width: 64px; height: 64px; border-radius: 16px;">
            <p style="margin: 0px; color: black; ">Notes</p>
        </div>
        <div style="text-align: center; padding: 16px; width: fit-content" onclick="webScreenOpen2()">
            <img src="internet.png" style="width: 64px; height: 64px; border-radius: 16px;">
            <p style="margin: 0px; color: black; ">Internet</p>
        </div>
        <div style="text-align: center; padding: 16px; width: fit-content" onclick="calcScreenOpen2()">
            <img src="calc.png" style="width: 64px; height: 64px; border-radius: 16px;">
            <p style="margin: 0px; color: black; ">Calculator</p>
        </div>
        <div style="text-align: center; padding: 16px; width: fit-content" onclick="toDoScreenOpen2()">
            <img src="todo.png" style="width: 64px; height: 64px; border-radius: 16px;">
            <p style="margin: 0px; color: black; ">ToDo</p>
        </div>
        `
    },
    {
        name: "documents",
        content: `
        <div style="text-align: center; padding: 16px; width: fit-content" onclick="openDocument('secret.txt')">
            <img src="document.png" style="width: 64px; height: 64px; border-radius: 16px;">
            <p style="margin: 0px; color: black; ">secret.txt</p>
        </div>
        `
    }
]

function displayFolderContent(folderName) {
    var index = folders.findIndex(folder => folder.name === folderName);
    var filesContent = document.querySelector("#filescontent");
    filesContent.innerHTML = folders[index].content;
}

var currentFolder = "home";

var listOfFiles = [];
var forwardFolder = [];

displayFolderContent("home");

function enterFolder(folder) {
    listOfFiles.push(currentFolder);
    displayFolderContent(folder);
    forwardFolder = [];
    currentFolder = folder;
    var fileRedo = document.querySelector("#fileforward");
    fileRedo.style.backgroundColor = "#a6a6a6";
    fileRedo.style.cursor = "not-allowed";
    var fileUndo = document.querySelector("#fileback");
    fileUndo.style.backgroundColor = "white";
    fileUndo.style.cursor = "pointer";
    writeFilePath()
}

function undoFolder() {
    if (currentFolder != "home") {
        forwardFolder.push(currentFolder);
        displayFolderContent(listOfFiles[listOfFiles.length - 1]);
        currentFolder = listOfFiles.pop();
        if (currentFolder == "home") {
            var fileUndo = document.querySelector("#fileback");
            fileUndo.style.backgroundColor = "#a6a6a6";
            fileUndo.style.cursor = "not-allowed";
        }
        var fileRedo = document.querySelector("#fileforward");
        fileRedo.style.backgroundColor = "white";
        fileRedo.style.cursor = "pointer";
        writeFilePath()
    }
}

function redoFolder() {
    if (forwardFolder.length > 0) {
        displayFolderContent(forwardFolder[forwardFolder.length - 1]);
        listOfFiles.push(currentFolder);
        currentFolder = forwardFolder.pop();
        if (forwardFolder.length == 0) {
            var fileRedo = document.querySelector("#fileforward");
            fileRedo.style.backgroundColor = "#a6a6a6";
            fileRedo.style.cursor = "not-allowed";
        }
        var fileUndo = document.querySelector("#fileback");
        fileUndo.style.backgroundColor = "white";
        fileUndo.style.cursor = "pointer";
        writeFilePath()
    }
}

function writeFilePath() {
    var filePathText = ""
    for (let i = 0; i < listOfFiles.length; i++) {
        filePathText += `${listOfFiles[i]}/`
    }
    filePathText += `${currentFolder}/`
    var filePath = document.querySelector("#filepath")
    filePath.innerText = filePathText
}