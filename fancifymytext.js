function bigger() {
    helloWorld();
    fontSize();
}

function helloWorld() {
    alert("Hello, world!");
}

function fontSize() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function text() {
    var text = document.getElementById("textArea");
    return text;
}

function fancifyText() {
    var fancyButton = document.getElementById("fancy");
    var boringButton = document.getElementById("boring");
    if (fancyButton.checked) {
        alert("Fancifying text");
        text().style.fontWeight = "bold";
        text().style.color = "blue";
        text().style.textDecoration = "underline";
    }
    if (boringButton.checked) {
        alert("Borifying text");
        text().style.fontWeight = "normal";
        text().style.color = "black";
        text().style.textDecoration = "none";
    }
}

function moo() {
    text().style.textTransform="uppercase";
    var str = text().value.split(".");
    text().value = str.join(".-Moo");
}