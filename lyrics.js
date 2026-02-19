function zoomLyrics(element) {
    const modal = document.getElementById("lyricsModal");
    const modalBody = document.getElementById("modalBody");
    
    // Взимаме заглавието
    const title = element.querySelector('h3').innerText;
    
    // Взимаме текста, запазвайки <strong> таговете
    let htmlContent = element.querySelector('p').innerHTML;

    // Махаме излишните интервали ред по ред
    let cleanHTML = htmlContent
        .split('\n')
        .map(line => line.trim())
        .join('\n');

    if (modal && modalBody) {
        modalBody.innerHTML = `<h3>${title}</h3><div class="modal-text-style">${cleanHTML}</div>`;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeModal() {
    const modal = document.getElementById("lyricsModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

window.onclick = function(event) {
    const modal = document.getElementById("lyricsModal");
    if (event.target === modal) { closeModal(); }
}

// Затваряне при натискане на Escape клавиш
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
