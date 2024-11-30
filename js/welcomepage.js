var logoutbtn= document.querySelector('#logoutbtn')

function logout() {
        localStorage.removeItem('sessionUsername');
        window.location.href = './index.html'; 
    }

    logoutbtn.addEventListener('click',function(){
      logout()
    })