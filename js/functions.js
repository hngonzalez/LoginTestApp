const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const usr = document.querySelector('#inUser').value;
    const psw = document.querySelector('#inPass').value;
    //alert(usr+psw);
});