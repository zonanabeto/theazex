const baseURL = 'http://localhost:3000/entries';

export function addEntry(entry){
    return fetch(baseURL + '/new' , {
        method:'post',
        headers:{
            "Content-Type":"form-data"
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