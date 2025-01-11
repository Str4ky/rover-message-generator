document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('container');
    container.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

function changeMood() {
    let img = document.getElementById('rover');
    let mood = document.getElementById('mood').value;

    img.src = 'assets/img/rover/' + mood + '.png';
}

function editMessage() {
    let input = document.getElementById('input').value;
    let message = document.getElementById('message');

    message.innerText = input;
}

function save() {
    let container = document.getElementById("container");
    let save_button = document.getElementById("save");

    save_button.innerHTML = '<i class="fa-solid fa-check"></i> Done';
    setTimeout(() => {
        save_button.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save to disk';
    }, 2000);

    domtoimage.toBlob(container)
        .then(function (blob) {
            saveAs(blob, 'rover.png');
    });

}

function copy() {
    let container = document.getElementById("container");
    let copy_button = document.getElementById('copy');

    copy_button.innerHTML = '<i class="fa-solid fa-check"></i> Done';
    setTimeout(() => {
        copy_button.innerHTML = '<i class="fa-solid fa-clipboard"></i> Copy to clipboard';
    }, 2000);

    domtoimage.toBlob(container)
        .then(function(blob) {
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': blob
                })
            ])
        });
}