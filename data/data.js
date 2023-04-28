//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "http://localhost:8085";



let findABout = () => {
    return fetch(host + '/about-us')
           .then(x => x.json()); 
   };

   

let saveEmployee = (employee) => {
    return fetch(host + "/employee", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: employee.name,
            id: employee.id
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}
let saveTask = (Task) => {
    return fetch(host + "/projects", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: employer.name,
            id: employer.id
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}
let saveEmployer = (employer) => {
    return fetch(host + "/employer", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: employer.name,
            id: employer.id
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
   
    findABout:findABout
};

export default data;