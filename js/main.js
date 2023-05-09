function signup(e) {
    event.preventDefault();

    var txtEmail = document.getElementById("txtEmail").value;
    var password = document.getElementById("password").value;
    var user = {

        txtEmail: txtEmail,
        password: password,
    }
    var json = JSON.stringify(user)
    localStorage.setItem(txtEmail, json);
    alert(" dang Ky thanh cong  ");
}

 

