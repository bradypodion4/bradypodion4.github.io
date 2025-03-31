function openModal() {
    const modal = document.getElementById('hamburgerModal');
    modal.style.display = 'block';
    modal.classList.add('active');
    document.body.classList.add("no-scroll");
}
function closeModal() {
    const modal = document.getElementById('hamburgerModal');
    modal.style.display = 'none';
    modal.classList.remove('active');
    document.body.classList.remove("no-scroll");
}

window.onclick = function(event) {
    const modal = document.getElementById('hamburgerModal');
    if (event.target === modal) {
        closeModal();
    }
}
