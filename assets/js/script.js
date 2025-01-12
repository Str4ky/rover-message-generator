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

    html2canvas(container, { useCORS: true }).then((canvas) => {
        canvas.toBlob((blob) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'rover.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => {
                saveButton.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save to computer';
            }, 1000);
        });
    }).catch((error) => {
        console.error('oops, something went wrong!', error);
        saveButton.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save to computer';
    });
}

function copy() {
    const container = document.getElementById("container");
    const copyButton = document.getElementById("copy");

    copyButton.innerHTML = '<i class="fa-solid fa-check"></i> Done';

    html2canvas(container, { useCORS: true }).then((canvas) => {
        canvas.toBlob((blob) => {
            if (document.hasFocus()) {
                navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ])
                .then(() => {
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="fa-solid fa-clipboard"></i> Copy to clipboard';
                    }, 1000);
                })
                .catch((error) => {
                    console.error('oops, something went wrong!', error);
                    copyButton.innerHTML = '<i class="fa-solid fa-clipboard"></i> Copy to clipboard';
                });
            } else {
                copyButton.innerHTML = '<i class="fa-solid fa-clipboard"></i> Copy to clipboard';
            }
        });
    }).catch((error) => {
        console.error('oops, something went wrong!', error);
        copyButton.innerHTML = '<i class="fa-solid fa-clipboard"></i> Copy to clipboard';
    });
}
