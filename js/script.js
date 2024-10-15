function logar(){
    let usuario = document.querySelector("#usuario").value;
    console.log(usuario);
    let senha = document.querySelector("#senha").value;
    console.log(senha);

    const login = {
        "usuario":usuario, 
        "password":senha
    }

    if(login.usuario == ""
    || login.password == ""){
            alert("Campos precisam ser preenchidos!");
    }else{
        console.log(JSON.stringify(login))
    }

    
}

function cadastrar(){
    let nome = document.querySelector("#nome").value;
    console.log(nome);
    let email = document.querySelector("#email").value;
    console.log(email);
    let senha = document.querySelector("#senha").value;
    console.log(senha);
    
    if(senha == document.querySelector("#csenha").value)
    {
     const cadastro = {
        "nome":nome,
        "email":email,
        "senha":senha,
        "csenha":csenha
     }
        console.log(JSON.stringify(cadastro));
    }else{

        console.log("Senhas não são iguais!")
        alert("Senhas não coecidem!");
    }
    
}




