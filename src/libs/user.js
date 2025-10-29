// --LOGIN/LOGOUT---NO SERVER INTEGRATION--------------------------------------------------

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
const logOutDB = () => {
     localStorage.clear()
}
// ---------------------------------------------------------------------



// --LOGIN/LOGOUT---SERVER INTEGRATION--------------------------------------------------

const BASE_URL = "http://localhost:4000";
const END_POINT_LOGIN = "/users/login";
const END_POINT_LOGOUT = "/users/logout";

const isUserAllowedPOST = (user) => fetch(BASE_URL + END_POINT_LOGIN,
    {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user),
    }).then((response) => {   
            return {
                statusCode: response.status,
                body:  response.json(),
            }
    });

    
const logOut = (userAccessToken) => fetch(BASE_URL + END_POINT_LOGOUT,
    {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            token: userAccessToken
        }),
    }).then((response) => response.status);


export { isUserAllowed, logOutDB,
        isUserAllowedPOST, logOut,  }