const username = document.querySelector('#username');
const password = document.querySelector('#password');
const login = document.querySelector('#login');
const errore = document.querySelector('#errore');

let  user = "naruto";
let pass = "saske";

login.addEventListener('click', () => {
   if(password.value === pass && username.value === user){
      console.log("welcome!");
      window.location.href = 'https://www.instagram.com/accounts/login/';

   } else{
      errore.textContent = `Sorry, your password was incorrect.
                         Please double-check your password`;
      console.log('pls inter valid id password!');
   }
});
