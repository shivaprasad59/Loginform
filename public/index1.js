const form=document.getElementById('form');
const name1=document.getElementById('name1');
const gender=document.getElementById('gender');
const password=document.getElementById('password');
const phno=document.getElementById('phno');
const email=document.getElementById('email');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});


const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess =element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail =email=>{
    const re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs=()=>{
    const name2=name1.value.trim();
    const email1=email.value.trim();
    const gender1=gender.value.trim();
    const password1=password.value.trim();
    const phno1=phno.value.trim()
    if(password1===''){
        setError(password," *Password is required");
    }else if(password1.length<8){
        setError(password,"*Provide must be 8 characters");
    }
    else{
        setSuccess(password);
    }
    if(name2=== ''){
        setError(name1,'Username field is Required');
    }else{
        setSuccess(name1);
    }
    if(email1===''){
        setError(email," *Email is required");
    }else if(!isValidEmail(email)){
        setError(email,"Provide a valid email");
    }
    else{
        setSuccess(email);
    }
    if(phno1===''){
        setError(phno," *PhoneNo is required");
    }else if(phno1.length<10){
        setError(phno,"Provide a valid PhoneNo");
    }
    else{
        setSuccess(phno);
    }
    if(gender1===''){
        setError(gender," *Gender is required");
    }
    else{
        setSuccess(gender);
    }
    
}