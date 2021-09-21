const singIn = document.getElementById('btnSing-in');
const singUp = document.getElementById('btnSing-up');
const container = document.getElementById('container');

singUp.addEventListener('click',()=>{
    container.classList.add('singUp__mode');
});

singIn.addEventListener('click',()=>{
    container.classList.remove('singUp__mode');
});