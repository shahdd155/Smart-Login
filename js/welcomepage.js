function logout() {
        localStorage.removeItem('sessionUsername');
        window.location.href = './index.html'; 
    }
