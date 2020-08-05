/* Modal Start */

var modal = document.getElementById('simpleModal');
var modalBrouse = document.getElementById('brouseModal');
var modalAdd = document.getElementById('addModal');
var modalBtn = document.getElementById('modalBtn');
var modalBtnBrouse = document.getElementById('brouse');
var modalBtnAdd = document.getElementById('add');
var closeBtn = document.getElementById('closeBtn');
var closeBtnBrouse = document.getElementById('closeBtnBrouse');
var closeBtnAdd = document.getElementById('closeBtnAdd');

modalBtn.addEventListener('click', openModal);
modalBtnBrouse.addEventListener('click', openBrouse);
modalBtnAdd.addEventListener('click', openAdd);

function openModal(){
    modal.style.display = 'block';
}
function openBrouse() {
    modalBrouse.style.display = 'block';
}
function openAdd() {
    modalAdd.style.display = 'block';
}
closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}

closeBtnBrouse.addEventListener('click', closeModalBrouse);

function closeModalBrouse() {
    modalBrouse.style.display = 'none';
}

closeBtnAdd.addEventListener('click', closeModalAdd);

function closeModalAdd() {
    modalAdd.style.display = 'none';
}

window.addEventListener('click', clickOutside);

function clickOutside(e) {

    if(e.target == modal || e.target == modalBrouse || e.target == modalAdd) {
        modal.style.display = 'none';
        modalBrouse.style.display = 'none';
        modalAdd.style.display = 'none';
    }
    
}

/* Modal End */

/*Entering Objectives*/

// const objectiveInput = document.querySelector('#objecriveEntry');
// const deadline = document.querySelector('#deadline');
// const msg = document.querySelector('.message');
// const objectives = document.querySelector('#objectivesDashBoard');
// const post = document.querySelector('#post');

// post.addEventListener('click', onsubmit);


// function onsubmit(e){
//     e.preventDefault();
//     if(objectiveInput.value === '' || deadline.value === ``) {
//         msg.classList.add('error')
//         msg.innerHTML = 'Please Enter All Fields !!'

//         setTimeout(() => {
//             msg.remove()
//         }, 2000 );
//     }
//     else
//     {
//         const li = document.createElement('li');
//         const del = document.createElement('i');
//         del.style.cursor = 'pointer';
//         del.className = 'far fa-trash-alt delete';
//         del.style.float = 'right';
//         li.style.fontSize = '23px'
//         li.appendChild(document.createTextNode(`${objectiveInput.value}  | ${deadline.value}`));
//         li.appendChild(del);
//         msg.classList.add('success');
//         msg.innerHTML = 'Posted Successfully !!'

//         setTimeout(() => {
//             msg.remove()
//         }, 2000);
//         objectives.appendChild(li);

//         objectiveInput.value = '';
//         deadline.value = '';
//     }
// }

    var form = document.getElementById('addForm');
    var objectives = document.querySelector('#objectivesDashBoard');
    var filter = document.querySelector('#filter');
    var msg = document.querySelector('.message');
    var post = document.querySelector('#post');

    form.addEventListener('submit', addItem);
    objectives.addEventListener('click', removeItem);
    filter.addEventListener('keyup', filterItems);
    function addItem(e) {
        e.preventDefault();
        var objectiveTitle = document.getElementById('objecriveEntry').value;
        var deadline = document.getElementById('deadline').value;

        var li = document.createElement('li');
        li.appendChild(document.createTextNode(`${objectiveTitle} | ${deadline}`));
        var del = document.createElement('i');
        del.style.cursor = 'pointer';
        del.className = 'far fa-trash-alt delete';
        del.style.float = 'right';
        li.style.fontSize = '23px';
        li.appendChild(del);
        msg.classList.add('success');
        msg.innerHTML = 'Posted Successfully !!';
        setTimeout(() => {
            msg.remove()
        }, 2000);
        objectives.appendChild(li);
        form.reset();

    }

    function removeItem(e){
        if (e.target.classList.contains('delete')) {
            if (confirm('\nObjective Completed ! \n\nOn Clicking OK, You will be removing this Objective from your Objectives DashBoard. If you agree then press OK !!')) {
                    var li = e.target.parentElement;
                    objectives.removeChild(li);           
            }
        }
    }

    function filterItems(e){
        var text = e.target.value.toLowerCase();
        var objective = objectives.getElementsByTagName('li');

        Array.from(objective).forEach(function(obj){
            var objectiveName = obj.firstChild.textContent;
            if (objectiveName.toLowerCase().indexOf(text) != -1) {
                obj.style.display = 'block';
            } else {
                obj.style.display = 'none';
            }
        });
    }