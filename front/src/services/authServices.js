const baseURL = 'http://localhost:3000';

// Auth
export function signUp(user) {
    return fetch(baseURL+'/auth/signup',{
        method:'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(r=>r.json())
        .then(user=>user);
}

export function login(user) {
    return fetch(baseURL+'/auth/login',{
        method:'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
        credentials:"include"
    })
        .then(r=>r.json())
        .then(user=>user);
}

export function logout() {
    return fetch(baseURL+'/auth/logout')
        .then(r=>r.json())
        .then(res=>{
            console.log(res);
            return res
        });
}