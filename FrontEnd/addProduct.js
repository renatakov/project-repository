let inputs = {
    name: document.querySelector('#inputName'),
    description: document.querySelector('#inputDescription'),
    price: document.querySelector('#inputPrice'),
    img: document.querySelector('#inputImg'),
    delete: document.querySelector('#inputNameForDelete')
}

let btnCreate = document.querySelector('#btnCreate')
let btnDelete = document.querySelector('#btnDelete')

btnCreate.addEventListener('click', () => {
    axios.post('http://localhost:5000/api/create',{
        name: inputs.name.value,
        description: inputs.description.value,
        price: inputs.price.value,
        img: inputs.img.value
    })
        .then((res) => { 
            console.log(res.data)
        })
})

btnDelete.addEventListener('click', () => {
    axios.delete(`http://localhost:5000/api/delete?name=${inputs.delete.value}`)
        .then((res) => { 
            console.log(res.data)
        })
})