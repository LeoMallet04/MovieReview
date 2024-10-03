let userList: User[] = [];

function addUser(user: User): void{
    userList.push(user);
}

interface User {
    username: string;
    password: string;
    email: string;
}

function createUser(username: string, password: string, email: string): User {
    return {
        username: username,
        password: password,
        email: email
    };
}

function registerUser(): User {
    let usernameInput = (document.getElementById("username") as HTMLInputElement)?.value;
    let passwordInput = (document.getElementById("password") as HTMLInputElement)?.value;
    let emailInput = (document.getElementById("email") as HTMLInputElement)?.value;
    alert(emailInput)
    alert(usernameInput)
    alert(passwordInput)


    
    if (usernameInput && passwordInput && emailInput) {
        alert('Username: '+usernameInput+ 'Password: '+passwordInput+'Email: '+emailInput);
    } else {
        alert('Por favor, preencha os dois campos.');
    }

    const user = createUser(usernameInput,passwordInput,emailInput)
    addUser(user);
    alert("User:" +userList[0].username+ "Password: "+userList[0].password+"Email: "+userList[0].email );
    return user;
}


function loginUser(): User | null{
    let usernameInput = (document.getElementById("username") as HTMLInputElement)?.value;
    let passwordInput = (document.getElementById("password") as HTMLInputElement)?.value;

    for(const user of userList){
        if(user.username === usernameInput && user.password === passwordInput){
            alert('Login sucessful')
            return user;
        }
    }

    alert("Login failed")
    return null;
}

// Torna a função acessível no escopo global
(window as any).registerUser = registerUser;
(window as any).loginUser = loginUser;

export { registerUser, loginUser};

  alert("TESTE")