
//mobile menu links toggling
let navbar = document.querySelector('.links-wrapper');

function Toggle() {
    navbar.classList.toggle('active');

}

document.querySelectorAll('.link').forEach(n => n.addEventListener('click', () =>{
    navbar.classList.remove('active');
}));

//email form toggling
let btn = document.getElementById('email-btn');
let form = document.getElementById('form');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.toggle('show');
})


let full_year = document.getElementById("year");
full_year.innerHTML = new Date().getFullYear();


//menu button toggling
let toggle = document.getElementById('toggle-btn');
let bt = document.getElementById('bt');
let cross = document.getElementById('cross');
cross.style.display = 'none';
toggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (cross.style.display === 'none') {
        cross.style.display = 'block';
        bt.style.display = 'none';
    } else {
        cross.style.display = 'none';
        bt.style.display = 'block';
    }
})


