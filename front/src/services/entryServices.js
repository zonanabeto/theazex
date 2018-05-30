const baseURL = 'http://localhost:3000/entries';

export function addEntry(entry){
    console.log(entry)
    return fetch(baseURL + '/new' , {
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(entry)
    })
    .then(r=>r.json())
    .then(entry=>entry);

}

export function getEntries(){
    return fetch(baseURL + '/list')
    .then(r=>r.json())
    .then(entries=>entries);
}

export function getSingleItem(id) {
    return fetch(baseURL + '/entry/' +id)
        .then(res => {
            if (!res.ok) return Promise.reject(res.statusText);
            return res.json()
        })
        .then(item => {
            return item;
        })

}