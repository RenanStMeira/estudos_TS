interface Usuario {
    nome: string,
    email: string,
    address?: string
}

function gettUser(): Usuario {
    return {
        nome: 'Renan',
        email: 'renan@gmail.com'
    }
}

function setUser( usuario: Usuario) {
    //....
}