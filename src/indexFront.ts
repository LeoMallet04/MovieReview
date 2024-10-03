function getUsername(): void {
    let usernameInput = (document.getElementById("username") as HTMLInputElement)?.value;
    let passwordInput = (document.getElementById("password") as HTMLInputElement)?.value;

    if (usernameInput && passwordInput) {
        alert(`Username: ${usernameInput}, Password: ${passwordInput}`);
    } else {
        alert('Por favor, preencha os dois campos.');
    }
}

// Torna a função acessível no escopo global
(window as any).getUsername = getUsername;

export { getUsername };

  alert("TESTE")