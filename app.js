const password = document.querySelector('input[type=password]');
const confirmPassword = document.querySelector('input#cpassword');
const html = document.querySelector('.align p#innerHtml');

console.log(html);


function matchPassword(){
    
    if(confirmPassword.value === password.value){

        confirmPassword.style.border = '1px solid green';
        password.style.border = '1px solid green';
        html.innerHTML = '* Passwords match !';
        html.style.color = 'green';
        

    }else {
        
        confirmPassword.style.border = '1px solid red';
        password.style.border = '1px solid red';
        html.innerHTML = '* Passwords do not match !';
        html.style.color = 'red';

    }

}




password.addEventListener('keyup', matchPassword);
confirmPassword.addEventListener('keyup', matchPassword);

//quand tu match tu met dans l'innerhtml le text password match en vert