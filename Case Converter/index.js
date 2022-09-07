let textArea = document.getElementById("text-area");
let upButton = document.getElementById("upper-case");
let lowerButton = document.getElementById("lower-case");
let properButton = document.getElementById("proper-case");
let sentenceButton = document.getElementById("sentence-case");
// let test = document.getElementById("test");
let saveButton = document.getElementById("save");

upButton.addEventListener("click", function () {
    let text = textArea.value;
    let newText = "";
    for (let i = 0; i < text.length; ++i) {
        newText += text[i].toUpperCase();
    }
    textArea.value = newText;
});

lowerButton.addEventListener("click", function () {
    let text = textArea.value;
    let newText = "";
    for (let i = 0; i < text.length; ++i) {
        newText += text[i].toLowerCase();
    }
    textArea.value = newText;
});

properButton.addEventListener("click", function () {
    let text = textArea.value.split(" ");
    let newText = "";
    for (let i = 0; i < text.length; ++i) {
        let curr = text[i];
        newText += curr[0].toUpperCase();
        for (let j = 1; j < text[i].length; ++j) {
            newText += curr[j].toLowerCase();
        }
        if (i !== text.length - 1) {
            newText += " ";
        }
    }
    textArea.value = newText;
});

function capital(curr) {
    let newText = "";
    newText += curr[0].toUpperCase();
    for (let i = 1; i < curr.length; ++i) {
        newText += curr[i].toLowerCase();
    }
    return newText;
}

function lower(curr) {
    let newText = "";
    for (let i = 0; i < curr.length; ++i) {
        newText += curr[i].toLowerCase();
    }
    test.value = newText;
    return newText;
}

sentenceButton.addEventListener("click", function () {
    let sentences = textArea.value.split(".");
    let newText = "";
    for (let i = 0; i < sentences.length; ++i) {
        let currSentence = sentences[i];
        let words = currSentence.split(" ");
        if (i === 0) {
            newText += capital(words[0]) + " ";
            for (let j = 1; j < words.length; ++j) {
                newText += lower(words[j]);
                if (j !== words.length - 1) {
                    newText += " ";
                }
            }
        } else {
            newText += " " + capital(words[1]) + " ";
            for (let j = 2; j < words.length; ++j) {
                newText += lower(words[j]);
                if (j !== words.length - 1) {
                    newText += " ";
                }
            }

        }
        newText += ".";
    }
    textArea.value = newText;
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

saveButton.addEventListener("click", function () {
   let text = textArea.value;
   download("text.txt", text);
});