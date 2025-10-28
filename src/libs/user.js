
const Users = [
    {
        username: "Ilenia",
        password: "Test123"
    },
    {
        username: "Paperino",
        password: "Test313"
    },
]

// array di oggetti json
const isUserAllowed = (user) => { 
    Users.forEach((element) => {
        if (element.username === user.username) {
            if (element.password === user.password) {
                localStorage.setItem('access_token', "ALLOWED")
                localStorage.setItem('username', user.username)
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    });
}

const logOut = () => {
     localStorage.clear()
}

export { isUserAllowed, logOut }