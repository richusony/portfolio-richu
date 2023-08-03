let tabLinks = document.getElementsByClassName('about-btns');
let tabContents = document.getElementsByClassName('tab-contents');

let name = document.getElementById("name");
let email = document.getElementById('email');
let message = document.getElementById('message');

function ontab(tabNames){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabNames).classList.add('active-tab');
}


function formSubmit(event){
    event.preventDefault();
    if(name.value==""){
        alert("Enter your Name");
    }

    else if(email.value==""){
        alert("Enter your Email");
    }

    // Validate email
    else if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    else if(message.value==""){
        alert("Enter your Message");
    }
    

    // If all validations pass, submit the form
    else {
    localStorage.setItem('formName',name.value);
    localStorage.setItem('formEmail',email.value);
    localStorage.setItem('formMessage',message.value);
    alert('message send successfully!!');
    window.location.reload();
    }

    function validateEmail(email) {
        // Use a regular expression to check if the email is valid
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    
}

