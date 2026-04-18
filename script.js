var mapTransform = "scale(2) translate(150px, -50px)";
var leftText = "To File Forest";
var rightText = "To Calculation Cove";
var currentLocation = "Text Territory";
var currentApp = document.querySelector(".notes")
const locations = [
    "Text Territory",
    "Productivity Peaks",
    "Calculation Cove",
    "Web Waterhole",
    "File Forest",
]

const backgroundMap = document.querySelector('.content');

var welcomeScreen = document.querySelector("#welcome")

var trainScreen = document.querySelector("#traincontainer")

var mapLabels = document.querySelector('#map-labels')
var leftButton = document.querySelector('#left-direction')
var rightButton = document.querySelector('#right-direction')
var directions = document.querySelector('#directions')
var leftContent = document.querySelector("#left-text")
var rightContent = document.querySelector("#right-text")
var locationContent = document.querySelector(".location-label")


var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")
var content = document.querySelector('.content')

var notesScreen = document.querySelector("#notes")
var notesScreenClose = document.querySelector("#notesclose")
var notesScreenOpen = document.querySelector("#notesopen")

var calcScreen = document.querySelector("#calculator")
var calcScreenClose = document.querySelector("#calculatorclose")
var calcScreenOpen = document.querySelector("#calculatoropen")

var webScreen = document.querySelector("#web")
var webScreenClose = document.querySelector("#webclose")
var webScreenOpen = document.querySelector("#webopen")

var toDoScreen = document.querySelector("#todo")
var toDoScreenClose = document.querySelector("#todoclose")
var toDoScreenOpen = document.querySelector("#todoopen")

var filesScreen = document.querySelector("#files")
var filesScreenClose = document.querySelector("#filesclose")
var filesScreenOpen = document.querySelector("#filesopen")

var picturesScreen = document.querySelector("#picture")
var picturesScreenClose = document.querySelector("#pictureclose")
var picturesScreenImage = document.querySelector("#picturesbox")
var pictureScreenTitle = document.querySelector("#picturename")

var documentScreen = document.querySelector("#document")
var documentScreenClose = document.querySelector("#documentclose")
var documentScreenContent = document.querySelector("#documentbox")
var documentScreenTitle = document.querySelector("#documentname")

var topBar = document.querySelector("#top")


function openImage(imagePath) {
    openWindow(picturesScreen);
    picturesScreen.style.transform = "translate(-60%, -60%)";
    picturesScreenImage.innerHTML = `
    <img src="${imagePath}" style="height: 446px;">
    `
    pictureScreenTitle.innerText = `${imagePath}`
}

picturesScreenClose.addEventListener("click", function() {
    closeWindow(picturesScreen);
})


documentScreenClose.addEventListener("click", function() {
    closeWindow(documentScreen);
})


filesScreenClose.addEventListener("click", function()  {
    closeWindow(filesScreen);
    deselectIcon(filesScreenOpen);
});
filesScreenOpen.addEventListener("click", function() {
    openWindow(filesScreen);
    selectIcon(filesScreenOpen);
});


toDoScreenClose.addEventListener("click", function()  {
    closeWindow(toDoScreen);
    deselectIcon(toDoScreenOpen);
});
toDoScreenOpen.addEventListener("click", function() {
    openWindow(toDoScreen);
    selectIcon(toDoScreenOpen);
});


webScreenClose.addEventListener("click", function()  {
    closeWindow(webScreen);
    deselectIcon(webScreenOpen);
});
webScreenOpen.addEventListener("click", function() {
    openWindow(webScreen);
    selectIcon(webScreenOpen);
});


calcScreenClose.addEventListener("click", function()  {
    closeWindow(calcScreen);
    deselectIcon(calcScreenOpen);
});
calcScreenOpen.addEventListener("click", function() {
    openWindow(calcScreen);
    selectIcon(calcScreenOpen);
});


notesScreenClose.addEventListener("click", function()  {
    closeWindow(notesScreen);
    deselectIcon(notesScreenOpen);
});
notesScreenOpen.addEventListener("click", function() {
    openWindow(notesScreen);
    selectIcon(notesScreenOpen);
});


welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
    closeWindow(mapLabels);
    mapOpen();
});

welcomeScreenOpen.addEventListener("click", function() {
    mapClosed();
    setTimeout(() => {
        openWindow(welcomeScreen);
        openWindow(mapLabels);
    }, 2500);
});


function mapOpen() {
    backgroundMap.style.setProperty('--map-transform', mapTransform);
    setTimeout(() => {
        openWindow(currentApp);
        openWindow(trainScreen);
    }, 2500)
    leftButton.addEventListener("click", leftClicks)
    rightButton.addEventListener("click", rightClicks)
}

function leftClicks() {
    if (leftText == "To File Forest" && currentLocation != "File Forest") {
        mapTransform = "scale(2) translate(100px, 100px)"
        backgroundMap.style.setProperty('--map-transform', mapTransform);
        closeWindow(directions)
        closeWindow(currentApp)
        setTimeout(() => {
            directions.style.display = "flex";
            openWindow(currentApp)
        }, 2500)
        currentLocation = "File Forest";
        leftText = "End of the Line";
        rightText = "To Text Territory";
        leftButton.classList.add("disabled");
        currentApp = document.querySelector(".files");
    }
    if (leftText == "To Text Territory" && currentLocation != "Text Territory") {
        mapTransform = "scale(2) translate(150px, -50px)"
        backgroundMap.style.setProperty('--map-transform', mapTransform);
        closeWindow(directions)
        closeWindow(currentApp)
        setTimeout(() => {
            directions.style.display = "flex";
            openWindow(currentApp)
        }, 2500)
        currentLocation = "Text Territory";
        leftText = "To File Forest";
        rightText = "To Calculation Cove";
        currentApp = document.querySelector(".notes");
    }
    if (leftText == "To Calculation Cove" && currentLocation != "Calculation Cove") {
        mapTransform = "scale(2) translate(-300px, -100px)"
        backgroundMap.style.setProperty('--map-transform', mapTransform);
        closeWindow(directions)
        closeWindow(currentApp)
        setTimeout(() => {
            directions.style.display = "flex";
            openWindow(currentApp);
        }, 2500)
        currentLocation = "Calculation Cove";
        leftText = "To Text Territory";
        rightText = "To Web Waterhole";
        rightContent.style.fontSize = "16px"
        currentApp = document.querySelector(".calc");
    }
    if (leftText == "To Web Waterhole" && currentLocation != "Web Waterhole") {
        mapTransform = "scale(2) translate(-600px, -100px)"
        backgroundMap.style.setProperty('--map-transform', mapTransform);
        closeWindow(directions)
        closeWindow(currentApp)
        setTimeout(() => {
            directions.style.display = "flex";
            openWindow(currentApp)
        }, 2500)
        currentLocation = "Web Waterhole";
        leftText = "To Calculation Cove";
        rightText = "To Productivity Peaks";
        rightContent.style.fontSize = "12px"
        rightButton.classList.remove("disabled");
        currentApp = document.querySelector(".internet");
    }
    leftContent.textContent = leftText;
    rightContent.textContent = rightText;
    locationContent.textContent = currentLocation;
}

function rightClicks() {
    if (rightText == "To Productivity Peaks" && currentLocation != "Productivity Peaks") {
        mapTransform = "scale(2) translate(-550px, -250px)"
        backgroundMap.style.setProperty('--map-transform', mapTransform);
        closeWindow(directions)
        closeWindow(currentApp)
        setTimeout(() => {
            directions.style.display = "flex";
            openWindow(currentApp)
        }, 2500)
        currentLocation = "Productivity Peaks";
        leftText = "To Web Waterhole";
        rightText = "End of the Line";
        rightContent.style.fontSize = "16px"
        rightButton.classList.add("disabled");
        currentApp = document.querySelector(".todo");
    }
    if (rightText == "To Web Waterhole" && currentLocation != "Web Waterhole") {
        mapTransform = "scale(2) translate(-600px, -100px)"
        backgroundMap.style.setProperty('--map-transform', mapTransform);
        closeWindow(directions)
        closeWindow(currentApp)
        setTimeout(() => {
            directions.style.display = "flex";
            openWindow(currentApp)
        }, 2500)
        currentLocation = "Web Waterhole";
        leftText = "To Calculation Cove";
        rightText = "To Productivity Peaks";
        rightContent.style.fontSize = "12px";
        currentApp = document.querySelector(".internet");
    }
    if (rightText == "To Calculation Cove" && currentLocation != "Calculation Cove") {
        mapTransform = "scale(2) translate(-300px, -100px)"
        backgroundMap.style.setProperty('--map-transform', mapTransform);
        closeWindow(directions)
        closeWindow(currentApp)
        setTimeout(() => {
            directions.style.display = "flex";
            openWindow(currentApp);
        }, 2500)
        currentLocation = "Calculation Cove";
        leftText = "To Text Territory";
        rightText = "To Web Waterhole";
        currentApp = document.querySelector(".calc");
    }
    if (rightText == "To Text Territory" && currentLocation != "Text Territory") {
        mapTransform = "scale(2) translate(150px, -50px)"
        backgroundMap.style.setProperty('--map-transform', mapTransform);
        closeWindow(directions)
        closeWindow(currentApp)
        setTimeout(() => {
            directions.style.display = "flex";
            openWindow(currentApp)
        }, 2500)
        currentLocation = "Text Territory";
        leftText = "To File Forest";
        rightText = "To Calculation Cove";
        leftButton.classList.remove("disabled");
        currentApp = document.querySelector(".notes");
    }
    leftContent.textContent = leftText;
    rightContent.textContent = rightText;
    locationContent.textContent = currentLocation;
}

function mapClosed() {
    closeWindow(trainScreen);
    closeWindow(currentApp);
    backgroundMap.style.setProperty('--map-transform', 'scale(1)');
    leftButton.removeEventListener("click", leftClicks)
    rightButton.removeEventListener("click", rightClicks)
}


function closeWindow(element) {
    element.style.display = "none"
    trainScreen.style.zIndex = 2
}

function openWindow(element) {
    element.style.display = "block"
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
    trainScreen.style.zIndex = 2;
}

initializeWindow("welcome")
initializeWindow("notes")
initializeWindow("calculator")
initializeWindow("web")
initializeWindow("todo")
initializeWindow("files")
initializeWindow("picture")
initializeWindow("document")


function dragElement(element) {
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();

        initialX = e.clientX;
        initialY = e.clientY;

        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    }

    function dragElement(e) {
        e = e || window.event;
        e.preventDefault;

        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;

        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

var selectedIcon = undefined;
var biggestIndex = 1;

function selectIcon(element) {
    element.classList.add("selected");
    selectedIcon = element;
}

function deselectIcon(element) {
    element.classList.remove("selected");
    selectedIcon = undefined;
}

function handleIconTap(element) {
    if (element.classList.contains("selected")) {
        deselectIcon(element)
        openWindow(window)
    } else {
        selectIcon(element)
    }
}

function addWindowTapHandling(element) {
    element.addEventListener("mousedown", () =>
        handleWindowTap(element)
    )
}

function handleWindowTap(element) {
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
}

function initializeWindow(elementName) {
    var screen = document.querySelector("#" + elementName);
    addWindowTapHandling(screen);
    dragElement(screen);
}




function toDoScreenOpen2() {
    openWindow(toDoScreen);
    toDoScreen.style.transform = "translate(-60%, -60%)";
    selectIcon(toDoScreenOpen);
}


function webScreenOpen2() {
    openWindow(webScreen);
    webScreen.style.transform = "translate(-60%, -60%)";
    selectIcon(webScreenOpen);
}


function calcScreenOpen2() {
    openWindow(calcScreen);
    calcScreen.style.transform = "translate(-60%, -60%)";
    selectIcon(calcScreenOpen);
}


function notesScreenOpen2() {
    openWindow(notesScreen);
    notesScreen.style.transform = "translate(-60%, -60%)";
    selectIcon(notesScreenOpen);
}


documents = [
    {
        name: "secret.txt",
        content: `
        <p>I'm so glad you found me...<br>Thanks for being here!<br>Thanks for checking out my project!<br><br>~ esemv :)</p>
        `
    },
]

function openDocument(documentPath) {
    openWindow(documentScreen);
    documentScreen.style.transform = "translate(-60%, -60%)";
    var index = documents.findIndex(doc => doc.name === documentPath);
    documentScreenContent.innerHTML = `
    <div style="text-align: center; width: 468px; height: 368px; background-color: black; color: white; font-family: Courier; border-radius: 8px; padding: 16px;">
        ${documents[index].content}
    </div>
    `
    documentScreenTitle.innerText = `${documentPath}`
}