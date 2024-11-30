var userNameInput = document.getElementById("userName");
var signupEmailInput = document.getElementById("signupEmail");
var signupPassInput = document.getElementById("signupPassword");
var signupBtn = document.getElementById("signupBtn");
var loginEmailInput = document.getElementById("loginEmail");
var loginPassInput = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");
var logoutbtn= document.querySelector('#logoutbtn')
var usersArray = [];


if (localStorage.getItem('userInfo') !== null) {
    usersArray = JSON.parse(localStorage.getItem('userInfo'));
}



function signupEmpty() {
    return !(userNameInput.value == "" || signupEmailInput.value == "" || signupPassInput.value == "");
}

function isEmailExist() {
    for (var i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email.toLowerCase() == signupEmailInput.value.toLowerCase()) {
            return false;
        }
    }
    return true;
}



function signup() {
    var userInfo = {
        name: userNameInput.value,
        email: signupEmailInput.value,
        password: signupPassInput.value
    };


    if (!signupEmpty()) {
        document.getElementById('message').innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }

    if (isEmailExist() === false) {
        document.getElementById('message').innerHTML = '<span class="text-danger m-3">Email already exists</span>';
    } else {
        usersArray.push(userInfo);
        localStorage.setItem('userInfo', JSON.stringify(usersArray));
        document.getElementById('message').innerHTML = '<span class="text-success m-3">Signup successful!</span>';
    }

    clearForm();
}

function clearForm() {
    userNameInput.value = null;
    signupEmailInput.value = null;
    signupPassInput.value = null;
   
}