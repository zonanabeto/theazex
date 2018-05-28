const baseURL = 'http://localhost:3000/quote';



export function addQuote(quote){
    return fetch(baseURL + '/new' , {
        method:'post',
        headers:{
            "Content-Type":"form-data"
        },
        body:JSON.stringify(quote)
    })
    .then(r=>r.json())
    .then(quote=>quote);

}

export function getQuotes(){
    return fetch(baseURL + '/list')
    .then(r=>r.json())
    .then(posts=>posts);
}