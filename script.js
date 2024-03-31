function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const fileContent = e.target.result;
            displayContent(fileContent, file.name);
        }

        reader.readAsText(file);
    }
}

function displayText() {
    const textInput = document.getElementById('textInput');
    const textContent = textInput.value;
    displayContent(textContent, 'User Input');
}

function displayContent(content, fileName) {
    const fileContentDiv = document.getElementById('fileContent');
    const newContentDiv = document.createElement('div');
    newContentDiv.innerHTML = `<strong>${fileName}</strong>:<br>${content}`;
    fileContentDiv.appendChild(newContentDiv);
}
