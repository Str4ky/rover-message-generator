document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('container');
    container.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

function changeExpression() {
    let img = document.getElementById('rover');
    let mood = document.getElementById('expression').value;

    img.src = 'assets/img/rover/' + mood + '.png';
}

function editMessage() {
    let input = document.getElementById('input').value;
    let message = document.getElementById('message');

    message.innerText = input;
}

function save() {
    const container = document.getElementById("container");
    const saveButton = document.getElementById("save");

    saveButton.innerHTML = '<i class="fa-solid fa-check"></i> Done';
    setTimeout(() => {
        saveButton.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save to disk';
    }, 1000);

    htmlToImage.toBlob(container)
        .then(function(blob) {
            saveAs(blob, 'rover.png');
        })
        .catch(function(error) {
            console.error('oops, something went wrong!', error);
        });
}

function copy() {
    const container = document.getElementById("container");
    const copyButton = document.getElementById("copy");

    copyButton.innerHTML = '<i class="fa-solid fa-check"></i> Done';
    setTimeout(() => {
        copyButton.innerHTML = '<i class="fa-solid fa-clipboard"></i> Copy to clipboard';
    }, 1000);

    htmlToImage.toBlob(container)
        .then((blob) => {
            setTimeout(() => {
                navigator.clipboard.write([
                    new ClipboardItem({
                        'image/png': blob
                    })
                ])
                .then(() => {
                    console.log("Image copied to clipboard successfully!");
                })
                .catch((error) => {
                    console.error("Failed to copy image to clipboard:", error);
                });
            }, 0);
        })
        .catch((error) => {
            console.error('oops, something went wrong!', error);
        });
}