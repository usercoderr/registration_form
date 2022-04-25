
//Sign UP
const usernameEL = document.getElementById('usernameID')
const emailEL = document.getElementById('emailID')
const passwordEL = document.getElementById('passwordID')
const confirmPasswordEL = document.getElementById('confirmPasswordID');
// Log In
const username = document.getElementById('')
const emailLoginEL = document.getElementById('emailLogin');
const passwordLoginEl = document.getElementById('passwordLogin')

let upperCase = /[A-Z]/g;
let lowerCase = /[a-z]/g;
let nums = /[0-9]/g;

let data = JSON.parse((localStorage.getItem('users')))


function signUp(){
    
    if(data.find(item => item.email === emailEL.value)){
        emailEL.value = '';
        return alert('This email is already taken')
    }
    else if(data.find(item => item.username === usernameEL.value)){
        usernameEL.value = '';
        return alert('This username is already taken')
    }
   if(usernameEL.value === "" || emailEL.value === "" || passwordEL.value === "" || confirmPasswordEL.value === ""){
    
    }
    else if(usernameEL.value === username){
        return alert('erfefcd')
        
    }
    else if(usernameEL.value.length < 5){
        usernameEL.style.border ="1px solid red"
    }
    else if(!passwordEL.value.match(upperCase)){
        passwordEL.style.border ="1px solid red"
        confirmPasswordEL.style.border ="1px solid red"
       return alert('Need 1 UpperCase length');
    }
    else if(!passwordEL.value.match(lowerCase)){
        passwordEL.style.border ="1px solid red"
        return alert('Need LowerCase lengths')
        
    }
    else if(!passwordEL.value.match(nums)){
        passwordEL.style.border ="1px solid red"
        return alert('Need numbers')

    }
    else if(!passwordEL.value === confirmPasswordEL.value){
        confirmPasswordEL.style.border ="1px solid red"
       return alert('Another password in Second field')
    }
    else if(passwordEL.value.length <= 8){
        passwordEL.style.border ="1px solid red"
    }
    else if(usernameEL.value > 0 || emailEL.value > 0 || passwordEL.value.length >= 8 && confirmPasswordEL.value === passwordEL.value){
        data.push({
        username: usernameEL.value,
        email: emailEL.value,
        password: passwordEL.value
     })
    }
    else{
        
       alert('Error')
    }
        console.log(data);

        let dataJson = JSON.stringify(data)
        localStorage.setItem('users',dataJson)
        
}

function logIn(){
    if (data.some(item => item.email === emailLoginEL.value && item.password === passwordLoginEl.value)){
        window.open("/html/hello.html")
    }
    else if(data.some(item => item.password !== passwordLoginEl.value)){
        passwordLoginEl.style.border ="1px solid red"
    }
    else if(data.some(item => item.email !== emailLoginEL.value)){
        emailLoginEL.style.border ="1px solid red"
        
    }
    else if(passwordLoginEl.value.length < 8){
        passwordEL.style.border ="1px solid red"
    }
    else{
        emailLoginEL.style.border ="1px solid red"
        passwordLoginEl.style.border ="1px solid red"

    }
}
