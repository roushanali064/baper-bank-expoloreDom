document.getElementById('submit-btn').addEventListener('click',function(){
    const emailFiled = document.getElementById('email')
    const email = emailFiled.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    if(email === 'chala@bap.com' && password === 'password'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Aii daaa kakar Bank. Tor Baper Na')
    }
})