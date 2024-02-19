const wrapper = document.querySelector('.wrapper'); 
const registerLink = document.querySelector('.register-link'); 
const loginLink = document.querySelector('.login-link');


const signup=document.getElementById("signUpbtn");
const login=document.getElementById("loginbtn");

const signupForm=document.forms.signup;
const signInForm=document.forms.signIn;

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    
}); 


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');  
})


signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name=signupForm.name.value;
    const email=signupForm.email.value;
    const password=signupForm.password.value;
   alert(name);

   //code for checking email duplicate in database in if not duplicate then register
    const res1=await fetch('/start/checkduplicate', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
    });
    const data1=await res1.json();
    if(data1.duplicate){
        alert('Email already exists');
        return;
    }
    else{
        const res=await fetch('/start/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data=await res.json();
        if(data.status==='ok'){
            alert('User Registered');
        }
        else{
            alert('User not Registered');
        }

    }

    // const res=await fetch('/start/register',{
    //     method:'POST',
    //     body:JSON.stringify({name,email,password}),
    //     headers: { 'Content-Type': 'application/json' }
    // });
    // const data=await res.json();
    // if(data.status==='ok'){
    //     alert('User Registered');
    // }
    // else{
    //     alert('User not Registered');
    // }
  
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email=signInForm.email.value;
    const password=signInForm.pass.value;

    // 
   
    const res=await fetch('/start/login',{
        method:'POST',
        body:JSON.stringify({email,password}),
        headers: { 'Content-Type': 'application/json' }
    });
    const data=await res.json();
    if(data.status==='ok'){
        alert('User Logged In');
    }
    else{
        alert('User not Logged In');
    }
});
    

