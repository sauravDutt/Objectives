
var modal = document.getElementById('startModal');
var modalBtn = document.getElementById('downloadBtn')
var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = 'block'
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', clickOutside);

function clickOutside(e) {

    if(e.target == modal) {
        modal.style.display = 'none';
        modalBrouse.style.display = 'none';
        modalAdd.style.display = 'none';
    }
    
}